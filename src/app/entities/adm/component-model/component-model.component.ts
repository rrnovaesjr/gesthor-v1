import { Component } from '@angular/core';
import { AbstractSecuredComponent } from '../../../abstract/component/component.interface';
import { ComponentModelService } from './component-model.service';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { Router, Resolve, ActivatedRoute } from '@angular/router';
import { NavbarService } from '../../../navbar/navbar.service';
import { ComponentModel } from '../../../../../desktop-app/model/component/component.model';
import { Subscription, Observable, of } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material';
import { Constants } from '../../../../../desktop-app/service/util/constants';

/**
 * A component for controlling components.
 * 
 * @author rodrigo-novaes
 */
@Component({
  selector: 'app-component-model',
  templateUrl: './component-model.component.html',
  styleUrls: ['./component-model.component.scss']
})
export class ComponentModelComponent extends AbstractSecuredComponent<ComponentModelService> {

  /**
   * A data source object.
   */
  public dataSource: MatTreeFlatDataSource<ComponentModel, ComponentModel>;

  /**
   * The list of comonents.
   */
  private components: ComponentModel[];

  /**
   * The current selected component.
   */
  public selectedComponent: ComponentModel;

  /**
   * The routes subscrpition.
   */
  private routesSubscription: Subscription;

  /**
   * Transform a tree node into a flat node. In this case, the same object
   * can be a flat node.
   */
  public matTreeFlattener: MatTreeFlattener<ComponentModel, ComponentModel>;

  /**
   * A flat tree controller.
   */
  public flatTreeControl: FlatTreeControl<ComponentModel>;

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
    this.matTreeFlattener = new MatTreeFlattener(this._transformer, this._getLevel, this._isExpandable, this._getChildren);
    this.flatTreeControl = new FlatTreeControl<ComponentModel>(this._getLevel, this._isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.flatTreeControl, this.matTreeFlattener);
  }

  /**
   * Callback executed when user instance is received.
   */
  protected onUserReceived(): void {
    this.routesSubscription = this.activatedRoute.data.subscribe((data: { components: ComponentModel[] }) => {
      this.components = data.components;
      for(let root of this.components) {
        root = this._setAllLevels(root, 0);
      }
      this.dataSource.data = this.components;
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

  /**
   * Transforms a component model into a flat node.
   */
  private readonly _transformer: (node: ComponentModel, level: number) => ComponentModel = (node, level) => 
    new ComponentModel(node.id, node.label, node.leaf, node.active, node.order, node.route, node.parentId, node.children, level);


  /**
   * Returns the level of a given node.
   */
  private _getLevel: (node: ComponentModel) => number = (node) => node.level;

  /**
   * Checks wether a node is expandable or not.
   */
  private _isExpandable: (node: ComponentModel) => boolean = (node) => !node.leaf.booleanValue;

  /**
   * Returns a node's children.
   */
  private _getChildren: (node: ComponentModel) => Observable<ComponentModel[]> = (node) => of(node.children);

  /**
   * Initializes all components levels.
   * 
   * @param node A node.
   * @param parentLevel The parent's level. For a `root` it is always 1.
   */
  private _setAllLevels(node: ComponentModel, parentLevel: number): ComponentModel {
    if (node) {
      node.level = node.level + 1;
      if(node.children && node.children.length > 0) {
        for (let child of node.children) {
          child = this._setAllLevels(child, parentLevel + 1);
        }  
      }
    }
    return node;
  }

  /**
   * A public method to return wether a node has children or not.
   */
  public hasChildren: (_: number, _nodeData: ComponentModel) => boolean = (_, _nodeData) => !_nodeData.leaf.booleanValue;

  /**
   * Toggles the selection to this current node. If it's already selected,
   * then set `selectedComponent` as `null`.
   * 
   * @param node The selected node.
   */
  public toggleItemSelection(node: ComponentModel): void {
    if(this.selectedComponent) {
      this.selectedComponent = (this.selectedComponent.id === node.id) ? null : node;
    }
    else {
      this.selectedComponent = node;
    }
  }

}
