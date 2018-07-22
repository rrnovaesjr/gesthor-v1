import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

/**
 * Application component.
 * 
 * @author rodrigo-novaes
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * The app title.
   */
  title = 'Gesthor';

  /**
   * Constructs the new application.
   * 
   * @param translateService A translate service.
   */
  public constructor(private translateService: TranslateService) {
    this.translateService.addLangs(['pt-br']);
    this.translateService.setDefaultLang('pt-br');
    this.translateService.use('pt-br');
  }

}
