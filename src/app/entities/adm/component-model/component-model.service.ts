import { Injectable } from '@angular/core';
import { AbstractSecureCrudService } from '../../../abstract/service/service.interface';
import { ComponentModel } from '../../../../../desktop-app/model/component/component.model';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { AuthService } from '../../../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComponentModelService extends AbstractSecureCrudService<ComponentModel, number> {

  /**
   * A constant reference to the components API.
   */
  private readonly apiUrl: string = `${this.api}/api/components`

  constructor(
    httpClient: HttpClient,
    ngSpinnerService: SpinnerVisibilityService,
    authService: AuthService
  ) { 
    super(httpClient, ngSpinnerService, authService);
  }

  public create(entity: ComponentModel): Observable<ComponentModel> {
    return this.httpClient.post<ComponentModel>(this.apiUrl, entity, { headers: super.createHttpHeaders() })
      .pipe(catchError(super.handleError));
  }

  public read(id: number): Observable<ComponentModel> {
    return this.httpClient.get<ComponentModel>(`${this.apiUrl}/${id}`, { headers: super.createHttpHeaders() })
      .pipe(catchError(super.handleError));
  }

  public update(entity: ComponentModel): Observable<ComponentModel> {
    return this.httpClient.put<ComponentModel>(this.apiUrl, entity, { headers: super.createHttpHeaders() })
      .pipe(catchError(super.handleError));
  }

  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiUrl}/${id}`, { headers: super.createHttpHeaders() })
      .pipe(catchError(super.handleError));
  }

}
