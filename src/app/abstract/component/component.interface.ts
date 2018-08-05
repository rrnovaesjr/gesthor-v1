import { OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, Component, RenderComponentType, ComponentRef, ChangeDetectorRef } from "@angular/core";
import { MatDialogRef, MatDialog } from "@angular/material";
import { AbstractService, AbstractSecuredService } from "../service/service.interface";
import { Subscription } from "rxjs";
import { User } from "../../../../desktop-app/model/user/user.model";
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from "@angular/router";
import { SpinnerVisibilityService } from 'ng-http-loader';
import { MediaMatcher } from "@angular/cdk/layout";

/**
 * A base component with mobile query interfaces.
 * 
 * @author rodrigo-novaes
 */
@Component({})
export abstract class BaseComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    /**
     * A mobile query.
     */
    public mobileQuery: MediaQueryList;

    /**
     * A mobile query listener.
     */
    private _mobileQueryListener: () => void;

    public constructor(
        protected changeDetectorRef: ChangeDetectorRef,
        protected media: MediaMatcher,
    ) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    /**
     * Initialize the directive/component after Angular first displays 
     * the data-bound properties and sets the directive/component's input properties.
     */
    ngOnInit() {

    }

        /**
     * Respond when Angular (re)sets data-bound input properties.
     * 
     * @param changes object of current and previous property values.
     */
    public ngOnChanges(changes: SimpleChanges): void {

    }

    /**
     * Detect and act upon changes that Angular can't or won't detect on its own.
     * Called during every change detection run.
     */
    public ngDoCheck(): void {

    }

    /**
     * Respond after Angular projects external content into the component's 
     * view / the view that a directive is in.
     */
    public ngAfterContentInit(): void {

    }

    /**
     * Respond after Angular checks the content projected into the directive or 
     * component.
     */
    public ngAfterContentChecked(): void {

    }

    /**
     * Respond after Angular initializes the component's views and child views / 
     * the view that a directive is in.
     */
    public ngAfterViewInit(): void {

    }

    /**
     * Respond after Angular checks the component's views and child views / the 
     * view that a directive is in.
     */
    public ngAfterViewChecked(): void {

    }

    /**
     * Cleanup just before Angular destroys the directive/component. Unsubscribe 
     * Observables and detach event handlers to avoid memory leaks.
     */
    ngOnDestroy() {
      this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}

/**
 * An abstract definition of a component.
 * 
 * @author rodrigo-novaes
 */
@Component({})
export abstract class AbstractComponent<ServiceInstance extends AbstractService> extends BaseComponent  {

    /**
     * Creates a new default component.
     * 
     * @param defaultService Injects a default service.
     * @param ngSpinnerService Injects the spinner visibility service.
     * @param router Injects the Router singleton instance.
     */
    public constructor(
        private defaultService: AbstractService,
        protected ngSpinnerService: SpinnerVisibilityService,
        protected router: Router,
        changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher,
    ) {
        super(changeDetectorRef, media);
    }

    /**
     * Returns the default service instance, as declared by the extending components.
     */
    public get serviceInstance(): ServiceInstance {
        return <ServiceInstance>this.defaultService;
    }

}

/**
 * An interface for dialog base components.
 * 
 * @author rodrigo-novaes
 */
interface DialogComponent<ServiceType extends AbstractService> {

    openDialog();

    closeDialog();
}

/**
 * A secured implementation of an abstract component.
 * 
 * @author rodrigo-novaes
 */
@Component({})
export abstract class AbstractSecuredComponent<ServiceInstance extends AbstractSecuredService> extends AbstractComponent<ServiceInstance> {

    /**
     * The current user instance.
     */
    protected user: User;

    /**
     * The current user subscription.
     */
    protected userSubcription: Subscription;

    /**
     * Creates a new secured service.
     * 
     * @param defaultSecuredService Injects a secured service instance. 
     * @param ngSpinnerService Injects the spinner visibility service.
     * @param router Injects the Router singleton instance.
     */
    public constructor(
        defaultSecuredService: AbstractSecuredService,
        ngSpinnerService: SpinnerVisibilityService,
        router: Router,
        changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher
    ) {
        super(defaultSecuredService, ngSpinnerService, router, changeDetectorRef, media);
    }

    /**
     * The default initialization of a secured component.
     * 
     * This method must subscribe to the user notification service, meaning that every
     * abstract secured component has its own user instance.
     */
    public ngOnInit(): void {
        super.ngOnInit();
        this.userSubcription = this.serviceInstance.userInstanceNotifier$.subscribe((user: User) => {
            if ((this.user && !user) || (!this.user && user)) {
                if (user) {
                    this.user = user;
                    this.onUserReceived(this.user);
                } else {
                    this.user = null;
                }
            }
        });
    }

    /**
     * A method executed when an User is assigned to the component.
     * 
     * This procedure can trigger different events on extended components.
     * 
     * @param user An user's instance.
     */
    protected abstract onUserReceived(user?: User): void;

    /**
     * Hook executed when the component is destroyed. Unsubscribes to User change events.
     */
    public ngOnDestroy(): void {
        super.ngOnDestroy();
        this.userSubcription.unsubscribe();
    }

}
