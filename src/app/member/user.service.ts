import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';
import { Auth0UserProfile } from 'auth0-js';
import 'rxjs/Rx';
import { AbstractSecureCrudService } from '../abstract/service/service.interface';

@Injectable()
export class UserService extends AbstractSecureCrudService<Auth0UserProfile, string> {

    private readonly userApi: string = `https://${environment.auth.domain}/api/v2/users`;

    /**
     * Constructor that injects other servces.
     */
    public constructor(httpClient: HttpClient, authService: AuthService) {
        super(authService, httpClient);
    }

    public create(user: Auth0UserProfile): Observable<Auth0UserProfile> {
        return null;
    }

    public read(user_id: string): Observable<Auth0UserProfile> {
        return this.httpClient.get(`${this.userApi}/${user_id}`, {
            headers: this.createHttpHeaders(),
            params: { search_engine: 'v3' },
            observe: 'body'
        }).map((res: Auth0UserProfile) =>
            res
        );
    }

    public update(user: Auth0UserProfile): Observable<Auth0UserProfile> {
        return null;
    }

    public delete(key: string): Observable<void> {
        return null;
    }

}