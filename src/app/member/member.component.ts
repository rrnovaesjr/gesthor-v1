import { Component, OnInit, HostBinding } from '@angular/core';
import { AuthService } from '../auth';
import { Auth0UserProfile } from 'auth0-js';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-member',
  template: `
  <div (clickOutside)="onClickOutside($event)">
    <button mat-icon-button (click)="toggle()"><mat-icon>account_circle</mat-icon></button>
    <br>
    <div class="login-card-container">
      <mat-card class="login-card" *ngIf="showCard" [@enterCard]>
        <div *ngIf="!authService.isAuthenticated">
          <mat-card-header>
            <img mat-card-avatar src="assets/img/no-user.png" />
            <mat-card-title>{{ 'member.bemVindo' | translate }}</mat-card-title>
          </mat-card-header>
          <br>
          <mat-card-content class="login-content">
            <p>{{ 'member.loginHeader' | translate }}</p>
            <p>{{ 'member.loginBody' | translate }}</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button (click)="authService.login()">{{ 'global.login' | translate }}</button>
          </mat-card-actions>
        </div>
        <div *ngIf="authService.isAuthenticated">
          <mat-card-header>
            <img mat-card-avatar [src]="user?.picture" />
            <mat-card-title>{{user?.name}}</mat-card-title>
            <mat-card-subtitle><small>{{user?.email}}</small></mat-card-subtitle>
          </mat-card-header>
          <br>
          <mat-card-content>

          </mat-card-content>
          <mat-card-actions>
            <button mat-button (click)="authService.logout()">{{ 'global.logout' | translate }}</button>
          </mat-card-actions>
        </div>
      </mat-card>
    </div>
  </div>
  `,
  styles: [
    `:host p {
      white-space: pre-line;
      text-align: justify;
    }`,
    `.login-card-container {
      position: relative;
      right: 200px;
    }`, 
    `.login-card {
      position: fixed;
      z-index: 2;     
      width: 200px;
      line-break: normal;
    }`,
    `.login-card img {
      height: 50px;
      width: 50px;
      padding: 0;
      margin: 0;
    }`
  ],
  animations: [
    trigger('enterCard', [
      transition('void => *', [
        style({transform: 'scale(0.8)', opacity: 0.35}), 
        animate('256ms 2ms ease-in-out', style({transform: 'scale(1)', opacity: 1}))
      ]),
      transition('* => void', [ 
        animate('256ms 2ms ease-in-out', style({transform: 'scale(0.8)', opacity: 0.35}))
      ])
    ])
  ]
})
export class MemberComponent implements OnInit {

  /**
   * Maintain users information.
   */
  public user: Auth0UserProfile;

  /**
   * Controls view of login card.
   */
  public showCard: boolean = false;

  /**
   * Injects necessary services.
   * 
   * @param authService Authorization service.
   */
  constructor(public authService: AuthService, private translateService: TranslateService) {
    this.authService.userProfile$.subscribe((res: Auth0UserProfile) => {
      this.user = res;
      
    });
  }

  /** 
   * Initializes the data into the component.
  */
  public ngOnInit(): void {

  }

  /** 
   * Called on component's destroy.
  */
  public ngOnDestroy(): void {

  }

  /** 
   * Switches between `true` or `false` on login card visualization.
  */
  public toggle(): void {
    this.showCard = !this.showCard;
  }

  /**
   * Cancels the view of mat-card when clicking outside of it.
   * 
   * @param event The event object.
   */
  public onClickOutside(event: Event): void {
    this.showCard = false;
  }

}
