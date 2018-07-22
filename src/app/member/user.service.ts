import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs';
import { AbstractSecureCrudService } from '../abstract/service/service.interface';
import { Auth0UserProfile } from 'auth0-js';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UserService extends AbstractSecureCrudService<Auth0UserProfile, string> {

    /**
     * A constant reference to the API URL.
     */
    private readonly userApi: string = `${environment.apiUrl}/api/users`;

    /**
     * Creates a new User Service.
     * 
     * @param httpClient Injects an instance of the HTTP Client.
     * @param authService Injects an instance of the Auth Service.
     */
    public constructor(httpClient: HttpClient, authService: AuthService) {
        super(httpClient, authService);
    }

    public create(user: Auth0UserProfile): Observable<Auth0UserProfile> {
        return null;
    }

    /**
     * Reads an user by its identifier.
     * 
     * @param user_id An user's identifier.
     */
    public read(user_id: string): Observable<Auth0UserProfile> {
        return this.httpClient.get<Auth0UserProfile>(`${this.userApi}/${user_id}`, {
            headers: this.createHttpHeaders()
        }).pipe(catchError(this.handleError));
    }

    public update(user: Auth0UserProfile): Observable<Auth0UserProfile> {
        return null;
    }

    public delete(key: string): Observable<void> {
        return null;
    }

}