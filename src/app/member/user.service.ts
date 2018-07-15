import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { AbstractSecureCrudService } from '../abstract/service/service.interface';
import { Auth0UserProfile } from 'auth0-js';

@Injectable()
export class UserService extends AbstractSecureCrudService<Auth0UserProfile, string> {

    /**
     * A constant reference to the API URL.
     */
    private readonly userApi: string = `${environment.apiUrl}/api/users`;

    /**
     * Constructor that injects other servces.
     */
    public constructor(httpClient: HttpClient, authService: AuthService) {
        super(authService, httpClient);
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
        return this.httpClient.get(`${this.userApi}/${user_id}`, {
            headers: {
                'content-type': `application/json`,
                'Authentication': `Bearer ${this.authService.getManagementAPIToken}`
            }
        }).map((res: Auth0UserProfile) => {
            console.log(res);
            return res;
        });
    }

    public update(user: Auth0UserProfile): Observable<Auth0UserProfile> {
        return null;
    }

    public delete(key: string): Observable<void> {
        return null;
    }

}