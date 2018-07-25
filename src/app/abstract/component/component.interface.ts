import { OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, Component, RenderComponentType, ComponentRef } from "@angular/core";
import { MatDialogRef, MatDialog } from "@angular/material";
import { AbstractService, AbstractSecuredService } from "../service/service.interface";
import { Auth0UserProfile } from "auth0-js";
import { Subscription } from "rxjs";
import { User } from "../../../../desktop-app/model/user/user.model";

/**
 * An abstract definition of a component.
 * 
 * @author rodrigo-novaes
 */
@Component({})
export abstract class AbstractComponent<ServiceInstance extends AbstractService> implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    /**
     * Creates a new default component.
     * 
     * @param defaultService Injects a default service.
     */
    public constructor(private defaultService: AbstractService) {

    }

    /**
     * Respond when Angular (re)sets data-bound input properties.
     * 
     * @param changes object of current and previous property values.
     */
    public ngOnChanges(changes: SimpleChanges): void {

    }

    /**
     * Initialize the directive/component after Angular first displays 
     * the data-bound properties and sets the directive/component's input properties.
     */
    public ngOnInit(): void {

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
    public ngOnDestroy(): void {

    }

    /**
     * Returns the default service instance, as declared by the extending components.
     */
    public get serviceInstance(): ServiceInstance {
        return <ServiceInstance> this.defaultService;
    }

}

/**
 * Defines a generic type of a component to be instantiated inside a dialog.
 * 
 * @author rodrigo-novaes
 * @param ComponentClass A component instance to be shown in the dialog.
 */
@Component({})
export abstract class AbstractDialogComponent<ServiceInstance extends AbstractService> extends AbstractComponent<ServiceInstance> {

    /**
     * The dialog reference.
     */
    protected dialogRef: MatDialogRef<AbstractComponent<ServiceInstance>>;

    /**
     * Constructor that instantiates a new dialog component. Receives the MatDialog
     * Service.
     * 
     * @param matDialog A Material Dialog service.
     */
    public constructor(private matDialog: MatDialog, defaultService: AbstractService) {
        super(defaultService);
    }

    /**
     * Overrides ngOnInit lifecycle hook. Starts a new dialog.
     */
    public ngOnInit(): void {
        setTimeout(() => {
            this.openDialog();
        });
    }

    /**
     * Overrides ngOnDestroy lifecycle hook. Closes the dialog.
     */
    public ngOnDestroy(): void {
        setTimeout(() => {
            this.closeDialog();
        });
    }

    /**
     * Hook to be implemented for opening the dialog.
     */
    protected abstract openDialog();

    /**
     * Hook to be implemented for closing the dialog.
     */
    protected abstract closeDialog();

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
     */
    public constructor(defaultSecuredService: AbstractSecuredService) {
        super(defaultSecuredService);
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
            if(user) {
                this.user = user;
            } else {
                this.user = null;
            }
        });
    }

    public ngOnDestroy(): void {
        super.ngOnDestroy();
        this.userSubcription.unsubscribe();
    }

}