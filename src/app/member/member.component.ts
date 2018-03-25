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

@Component({
  selector: 'app-member',
  template: `
  <button mat-icon-button (click)="toggle()"><mat-icon>account_circle</mat-icon></button>
  <br>
  <div id="login-card-container" class="login-card-container">
    <mat-card class="login-card" *ngIf="showCard" [@enterCard]>
      <mat-card-header>
        <div mat-card-avatar *ngIf="authService.isAuthenticated">
          <img [src]="user?.picture">
        </div>
        <mat-card-title>
          Bem-vindo
        </mat-card-title>
        <mat-card-subtitle *ngIf="authService.isAuthenticated">
          {{user?.name}}
        </mat-card-subtitle>
      </mat-card-header>
      <mat-card-actions>
        <button mat-button *ngIf="authService.isAuthenticated" (click)="authService.logout()">Log out</button>
        <button mat-button *ngIf="!authService.isAuthenticated" (click)="authService.login()">Log in</button>
      </mat-card-actions>
    </mat-card>  
  </div>
  `,
  styles: [
    `:host { 
      font-size: 11pt 
    }`,
    `.login-card-container { 
      position: absolute;
      margin: 0; 
      padding: 0; 
    }`,
    `.login-card { 
      position: relative; 
      z-index: 2;
      top: 20px; 
      right: 150px;
      width: 150px;
      height: 135px;
      overflow: hidden; 
    }`,
    `.login-card mat-card-subtitle {
      font-size: 9pt; 
    }`,
    `.login-card img {
      height: 100%;
      width: 100%;
      border-radius: 50%;
      padding: 0;
      margin: 1.25em 0 0 0;
    }`
  ],
  animations: [
    trigger('enterCard', [
      transition('void => *', [style({height: 0}), animate('256ms ease-in-out', style({height: 135}))]),
      transition('* => void', [style({height: 135}), animate('256ms ease-in-out', style({height: 0}))])
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
  constructor(public authService: AuthService) {
    this.authService.userProfile$.subscribe((res: Auth0UserProfile) => {
      this.user = res;
      
    });
  }

  /** 
   * Initializes the data into the component and adds an event listener for mouse clicking.
   * 
   * Every mouse click in the window must switch the card to invisible state.
  */
  public ngOnInit(): void {

  }

  /** 
   * Removes the event listener.
  */
  public ngOnDestroy(): void {

  }

  /** 
   * Switches between `true` or `false` on login card visualization.
  */
  public toggle(): void {
    this.showCard = !this.showCard;
  }

}
