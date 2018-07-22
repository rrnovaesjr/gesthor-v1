import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { ObservableInput } from 'rxjs/Observable';

/**
 * Defines an interface for CRUD Services.
 * 
 * @author rodrigo-novaes
 */
export interface CrudService<E, PK> {

    /**
     * Creates a new entity.
     * 
     * @param entity Entity to be created.
     */
    create(entity: E): Observable<E>;

    /**
     * Reads an entity.
     * 
     * @param id Entity's primary key.
     */
    read(id: PK): Observable<E>;

    /**
     * Updates an entity.
     * 
     * @param entity Entity to be updated.
     */
    update(entity: E): Observable<E>;

    /**
     * Deletes an entity.
     * 
     * @param id Entity's primary key.
     */
    delete(id: PK): Observable<void>;
}

/**
 * Determinates simple abstract methods for all services.
 * 
 * @author rodrigo-novaes
 */
@Injectable()
export abstract class AbstractService {

    /**
     * A protected reference to the API url.
     */
    protected readonly api: string = environment.apiUrl;

    /**
     * Creates a new abstract service.
     * 
     * @param httpClient Injects an instance of the HTTP Client.
     */
    public constructor(protected httpClient: HttpClient) {

    }

    /**
     * Handles different kinds of erros from the application.
     * 
     * @param err Error to be handled.
     */
    protected handleError<E>(err: any, caughtError: Observable<E>): ObservableInput<E> {
        console.log(err);
        return null;
    }
    
}

/**
 * Determinates simple abstract methods for secured services.
 * 
 * @author rodrigo-novaes
 */
@Injectable()
export abstract class AbstractSecuredService extends AbstractService {

    /**
     * Creates a new abstract secured service.
     * 
     * @param httpClient Injects an instance of the HTTP Client.
     * @param authService Injects the authorization service.
     */
    public constructor(protected httpClient: HttpClient, protected authService: AuthService) {
        super(httpClient);
    }

    /**
     * A default constrctor for HTTP headers.
     * 
     * Inserts the access token, of determinated type, in the authorization header.
     */
    protected createHttpHeaders(): HttpHeaders {
        return new HttpHeaders().set('authorization', `${this.authService.tokenType} ${this.authService.getAccessToken}`);
    }
}

/**
 * Determinates the default methods for an abstract service.
 * 
 * @param E An Entity type. Must be a serializable class.
 * @param PK A primary key type. Must be a serializable class.
 * @author rodrigo-novaes
 */
@Injectable()
export abstract class AbstractCrudService<E, PK> extends AbstractService implements CrudService<E, PK> {

    /**
     * An API URL.
     */
    protected readonly api: string = environment.apiUrl;

    /**
     * Injects the default services.
     * 
     * @param httpClient An HTTP client instance.
     */
    public constructor(protected httpClient: HttpClient) {
        super(httpClient);
    }

    /**
     * Creates a new entity.
     * 
     * @param entity Entity to be created.
     */
    public abstract create(entity: E): Observable<E>;

    /**
     * Reads an entity.
     * 
     * @param id Entity's primary key.
     */
    public abstract read(id: PK): Observable<E>;

    /**
     * Updates an entity.
     * 
     * @param entity Entity to be updated.
     */
    public abstract update(entity: E): Observable<E>;

    /**
     * Deletes an entity.
     * 
     * @param id Entity's primary key.
     */
    public abstract delete(id: PK): Observable<void>;

    /**
     * A default constrctor for HTTP headers.
     */
    protected createHttpHeaders(): HttpHeaders {
        return new HttpHeaders();
    }

    /**
     * Returns a default set of Http Params.
     * 
     * @param paramMap A param map to set.
     */
    protected createHttpParams(paramMap: Map<string, string>): HttpParams {
        let httpParams: HttpParams = new HttpParams();
        if (paramMap) {
            for (let i: number = 0; i < paramMap.size; i++) {
                httpParams = httpParams.set(paramMap[i][0], paramMap[i][1]);
            }
        }
        return httpParams;
    }

}

/**
 * Determinates the default methods for an abstract secured service.
 * 
 * This class defines the common headers for an HTTP request.
 * 
 * @param E An entity type. Must be a serializable class.
 * @param PK A primary key type. Must be a serializable class.
 * @author rodrigo-novaes
 */
@Injectable()
export abstract class AbstractSecureCrudService<E, PK> extends AbstractSecuredService implements CrudService<E, PK> {

    /**
     * Injects the HTTPClient service.
     * 
     * @param httpClient HTTP Client.
     */
    public constructor(httpClient: HttpClient, authService: AuthService, ) {
        super(httpClient, authService);
    }

    /**
     * Creates a new entity.
     * 
     * @param entity Entity to be created.
     */
    public abstract create(entity: E): Observable<E>;

    /**
     * Reads an entity.
     * 
     * @param id Entity's primary key.
     */
    public abstract read(id: PK): Observable<E>;

    /**
     * Updates an entity.
     * 
     * @param entity Entity to be updated.
     */
    public abstract update(entity: E): Observable<E>;

    /**
     * Deletes an entity.
     * 
     * @param id Entity's primary key.
     */
    public abstract delete(id: PK): Observable<void>;

}