import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { ObservableInput } from 'rxjs/Observable';

/**
 * Determinates simple abstract methods for all services.
 * 
 * @author rodrigo-novaes
 */
@Injectable()
export abstract class AbstractSimpleService {

    /**
     * A protected reference to the API url.
     */
    protected readonly api: string = environment.apiUrl;
    
}

/**
 * Determinates the default methods for an abstract service.
 * 
 * @param E An Entity type. Must be a serializable class.
 * @param PK A primary key type. Must be a serializable class.
 * @author rodrigo-novaes
 */
@Injectable()
export abstract class AbstractCrudService<E, PK> extends AbstractSimpleService {

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
        super();
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

    /**
     * Handles different kinds of erros from the application.
     * 
     * @param err Error to be handled.
     */
    protected handleError(err: any, caughtError: Observable<E>): ObservableInput<E> {
        console.log(err);
        return null;
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
export abstract class AbstractSecureCrudService<E, PK> extends AbstractCrudService<E, PK> {

    /**
     * Injects the HTTPClient service.
     * 
     * @param httpClient HTTP Client.
     */
    public constructor(protected authService: AuthService, httpClient: HttpClient) {
        super(httpClient);
    }

    /**
     * A default constrctor for HTTP headers.
     */
    protected createHttpHeaders(): HttpHeaders {
        return new HttpHeaders({ 
            'content-type': 'application/json',
            'Authorization': `Bearer ${this.authService.getManagementAPIToken}` 
        });
    }

}