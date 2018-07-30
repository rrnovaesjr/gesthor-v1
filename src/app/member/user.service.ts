import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AbstractSecureCrudService } from '../abstract/service/service.interface';
import { Auth0UserProfile } from 'auth0-js';
import { catchError } from 'rxjs/operators';
import { User } from '../../../desktop-app/model/user/user.model';
import { ProgressAdvisorService } from '../progress-advisor';
import { SpinnerVisibilityService } from 'ng-http-loader';

/**
 * A service that implements the CRUDs for Users.
 * 
 * @author rodrigo-novaes
 */
@Injectable()
export class UserService extends AbstractSecureCrudService<User, string> {


    /**
     * Creates a new User Service.
     * 
     * @param httpClient Injects an instance of the HTTP Client.
     * @param authService Injects an instance of the Auth Service.
     */
    public constructor(httpClient: HttpClient, 
        ngSpinnerService: SpinnerVisibilityService, 
        authService: AuthService
    ) {
        super(httpClient, ngSpinnerService, authService);
    }

    public create(user: Auth0UserProfile): Observable<User> {
        return null;
    }

    /**
     * Reads an user by its identifier.
     * 
     * @param user_id An user's identifier.
     */
    public read(user_id: string): Observable<User> {
        return this.httpClient.get<User>(`${this.userApi}/${user_id}`, {
            headers: this.createHttpHeaders()
        }).pipe(catchError(this.handleError));
    }

    public update(user: Auth0UserProfile): Observable<User> {
        return null;
    }

    public delete(key: string): Observable<void> {
        return null;
    }

}