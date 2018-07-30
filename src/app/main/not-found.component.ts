import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  template: `<h2>{{ 'global.pageNotFound' | translate }}</h2>`
})
export class PageNotFoundComponent {

    public constructor(
        private translateService: TranslateService
    ) {

    }

}