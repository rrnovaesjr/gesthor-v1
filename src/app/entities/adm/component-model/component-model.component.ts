import { Component } from '@angular/core';
import { AbstractSecuredComponent } from '../../../abstract/component/component.interface';
import { ComponentModelService } from './component-model.service';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { Router, Resolve, ActivatedRoute } from '@angular/router';
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
   * The routes subscrpition.
   */
  private routesSubscription: Subscription;

  /**
   * Creates a new instance of a component.
   * 
   * @param componentModelService Injects the component service.
   * @param ngSpinnerService Injects the spinner visibility service.
   * @param router Injects the router.
   * @param resolve Injects a param resolver.
   * @param navbarService Injects the navbar service.
   * @param translateService Injects the i18n service.
   */
  constructor(
    componentModelService: ComponentModelService,
    ngSpinnerService: SpinnerVisibilityService,
    router: Router,
    private navbarService: NavbarService,
    private translateService: TranslateService,
    private activatedRoute: ActivatedRoute
  ) { 
    super(componentModelService, ngSpinnerService, router);
  }

  /**
   * Callback executed when user instance is received.
   */
  protected onUserReceived(): void {
    this.routesSubscription = this.activatedRoute.params.subscribe((data: { components: ComponentModel[] }) => {
      this.components = data.components;
    });
  }

  /**
   * Hook executed when the component is destroyed.
   * 
   * Must unsubscribe to the navbar subscription.
   */
  public ngOnDestroy(): void {
    super.ngOnDestroy();
    this.routesSubscription.unsubscribe();
  }

}
