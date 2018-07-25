import { 
  Component, 
  ChangeDetectorRef 
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { TranslateService } from '@ngx-translate/core';
import { WebappConstants } from '../shared';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  /**
   * A mobile query.
   */
  public mobileQuery: MediaQueryList;

  /**
   * The app's version.
   */
  public version: string = WebappConstants.APP_VERSION;

  /**
   * A mobile query listener.
   */
  private _mobileQueryListener: () => void;

  /**
   * Injects the necessary services into this component.
   * 
   * @param translateService Service of translations. 
   * @param changeDetectorRef Changes detector.
   * @param media Media matcher.
   */
  constructor(
    private translateService: TranslateService,
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private authService: AuthService
  ) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
