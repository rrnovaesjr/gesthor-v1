import { 
  Component, 
  ChangeDetectorRef 
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { TranslateService } from '@ngx-translate/core';
import { WebappConstants } from '../shared';
import { AuthService } from '../auth/auth.service';
import { Spinkit } from 'ng-http-loader';
import { BaseComponent } from '../abstract/component/component.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent extends BaseComponent {

  /**
   * A reference to the spinkit loader.
   */
  public spinkit = Spinkit;

  /**
   * A mobile query.
   */
  public mobileQuery: MediaQueryList;

  /**
   * The app's version.
   */
  public version: string = WebappConstants.APP_VERSION;

  /**
   * Injects the necessary services into this component.
   * 
   * @param translateService Service of translations. 
   * @param changeDetectorRef Changes detector.
   * @param media Media matcher.
   */
  constructor(
    private translateService: TranslateService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private authService: AuthService
  ) { 
    super(changeDetectorRef, media);
  }

}
