import { Component, OnInit, HostBinding, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Auth0UserProfile } from 'auth0-js';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from './user.service';
import { AbstractSecuredComponent } from '../abstract/component/component.interface';
import { User } from '../../../desktop-app/model/user/user.model';
import { Router } from '@angular/router';
import { ProgressAdvisorService } from '../progress-advisor';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { MatIconRegistry } from '@angular/material';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
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
export class MemberComponent extends AbstractSecuredComponent<UserService> {

  /**
   * Controls view of login card.
   */
  public showCard: boolean = false;

  /**
   * Injects necessary services.
   * 
   * @param authService Authorization service.
   */
  constructor(
    public authService: AuthService, 
    private translateService: TranslateService, 
    userService: UserService,
    ngSpinnerService: SpinnerVisibilityService,
    router: Router,
    private matIconRegistry: MatIconRegistry,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    super(userService, ngSpinnerService, router, changeDetectorRef, media);
    this.matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }

  /**
   * Callback executed when an user instance is received.
   * 
   * @param user An user's instance.
   */
  protected onUserReceived(user: User): void {

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
