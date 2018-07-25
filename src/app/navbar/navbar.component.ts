import {
  Component,
  ChangeDetectorRef,
  Input,
  ViewChild
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../auth/auth.service';
import { AbstractSecuredComponent, AbstractComponent } from '../abstract/component/component.interface';
import { NavbarService } from './navbar.service';
import { ComponentModel } from '../../../desktop-app/model/component/component.model';
import { User } from '../../../desktop-app/model/user/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent extends AbstractSecuredComponent<NavbarService> {

  /**
   * A media query object to look if app is loaded on a mobile device.
   */
  public mobileQuery: MediaQueryList;

  /**
   * 
   */
  protected components: ComponentModel[]

  /**
   * 
   */
  protected subComponents: Map<number, ComponentModel[]> = new Map();

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
    navbarService: NavbarService,
    media: MediaMatcher
  ) {
    super(navbarService);
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  public ngOnInit(): void {
    this.userSubcription = this.serviceInstance.userInstanceNotifier$.subscribe((user: User) => {
      if (user) {
        this.user = user;
        this.serviceInstance.loadMenu().subscribe((components: ComponentModel[]) => {
          this.components = components;
          for (let component of this.components) {
            this._explore(component);
          }
        });
      } else {
        this.user = null;
      }
    });
  }

  private _explore(root: ComponentModel): void {
    if (root.children) {
      for (let component of root.children) {
        if (!this.subComponents.has(root.id)) {
          this.subComponents.set(root.id, []);
        }
        this.subComponents.get(root.id).push(component);
        this._explore(component);
      }
    }
  }

  /**
   * Method executed when the component is destroyed.
   */
  ngOnDestroy() {
    super.ngOnDestroy();
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}


@Component({
  selector: 'app-menu-item',
  template: `
  <mat-menu #childMenu="matMenu" [overlapTrigger]="false">
    <span *ngFor="let child of items">
      <span *ngIf="!child.leaf.booleanValue">
        <button mat-menu-item color="primary" [matMenuTriggerFor]="menu.childMenu">
          <span>{{child.label | translate}}</span>
        </button>
        <app-menu-item #menu [items]="child.children"></app-menu-item>
      </span>
      <span *ngIf="child.leaf.booleanValue">
        <button mat-menu-item [routerLink]="child.route">
          <span>{{child.label | translate}}</span>
        </button>
      </span>
    </span>
  </mat-menu>
  `,
  styles: []
})
export class MenuItemComponent {

  @Input() items: ComponentModel[];

  @ViewChild('childMenu') public childMenu;

  constructor(private translateService: TranslateService) {
  }

}