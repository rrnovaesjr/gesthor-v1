import { 
  Component, 
  OnInit, 
  OnDestroy, 
  ChangeDetectorRef 
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  /**
   * A media query object to look if app is loaded on a mobile device.
   */
  public mobileQuery: MediaQueryList;

  /**
   * A listener to media query events.
   */
  private _mobileQueryListener: () => void;

  /**
   * A constructor that injects many services.
   * 
   * @param authService Authorization service. 
   * @param translateService Translating service.
   * @param changeDetectorRef Change detector references.
   * @param media A media matcher.
   */
  constructor(
    private authService: AuthService, 
    private translateService: TranslateService, 
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher
  ) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  /**
   * Method executed in the initialization of the component.
   */
  public ngOnInit(): void {
    
  }

  /**
   * Method executed when the component is destroyed.
   */
  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
