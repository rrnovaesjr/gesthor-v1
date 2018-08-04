import { Component } from '@angular/core';
import { AbstractSecuredComponent } from '../../../abstract/component/component.interface';
import { ComponentModelService } from './component-model.service';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { Router } from '@angular/router';
import { NavbarService } from '../../../navbar/navbar.service';
import { ComponentModel } from '../../../../../desktop-app/model/component/component.model';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

/**
 * A component for controlling components.
 * 
 * @author rodrigo-novaes
 */
@Component({
  selector: 'app-component-model',
  templateUrl: './component-model.component.html',
  styleUrls: ['./component-model.component.css']
})
export class ComponentModelComponent extends AbstractSecuredComponent<ComponentModelService> {

  /**
   * The list of comonents.
   */
  private components: ComponentModel[];

  /**
   * The navbar subscrpition.
   */
  private navbarSubscription: Subscription;

  /**
   * Creates a new component instance.
   */
  constructor(
    componentModelService: ComponentModelService,
    ngSpinnerService: SpinnerVisibilityService,
    router: Router,
    private navbarService: NavbarService,
    private translateService: TranslateService
  ) { 
    super(componentModelService, ngSpinnerService, router);
  }

  /**
   * Callback executed when user instance is received.
   */
  protected onUserReceived(): void {
    this.navbarSubscription = this.navbarService.loadMenu().subscribe((components: ComponentModel[]) => {
      this.components = components;
    });
  }

  /**
   * Hook executed when the component is destroyed.
   * 
   * Must unsubscribe to the navbar subscription.
   */
  public ngOnDestroy(): void {
    super.ngOnDestroy();
    this.navbarSubscription.unsubscribe();
  }

}
