import { Component } from '@angular/core';
import { AbstractSecuredComponent } from '../../../abstract/component/component.interface';
import { ComponentModelService } from './component-model.service';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { Router } from '@angular/router';
import { NavbarService } from '../../../navbar/navbar.service';
import { ComponentModel } from '../../../../../desktop-app/model/component/component.model';

@Component({
  selector: 'app-component-model',
  templateUrl: './component-model.component.html',
  styleUrls: ['./component-model.component.css']
})
export class ComponentModelComponent extends AbstractSecuredComponent<ComponentModelService> {

  private components: ComponentModel[];

  constructor(
    componentModelService: ComponentModelService,
    ngSpinnerService: SpinnerVisibilityService,
    router: Router,
    private navbarService: NavbarService
  ) { 
    super(componentModelService, ngSpinnerService, router);
  }

  protected onUserReceived(): void {
    this.navbarService.loadMenu().subscribe((components: ComponentModel[]) => {

    });
  }

}
