import { Component, OnInit, HostBinding } from '@angular/core';
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
import { AbstractComponent } from '../abstract/component/component.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
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
export class MemberComponent extends AbstractComponent {

  /**
   * A subscription reference to the user changes.
   */
  private userProfileSubscription: Subscription;

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
  constructor(
    public authService: AuthService, 
    private translateService: TranslateService, 
    private userService: UserService
  ) {
    super();
  }

  /** 
   * Initializes the data into the component.
  */
  public ngOnInit(): void {
    this.userProfileSubscription = this.authService.userProfile$.subscribe((user: Auth0UserProfile) => {
      if(user) {
        this.userService.read(user.sub).subscribe((response: Auth0UserProfile) => {
          this.user = response;
        });
      }
    });
  }

  /** 
   * Called on component's destroy.
  */
  public ngOnDestroy(): void {
    if(this.userProfileSubscription) {
      this.userProfileSubscription.unsubscribe();
    }
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
