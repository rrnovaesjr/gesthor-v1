import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Gesthor';

  public constructor(private translateService: TranslateService) {
    this.translateService.addLangs(['pt-br']);
    this.translateService.setDefaultLang('pt-br');
    this.translateService.use('pt-br');
  }

}
