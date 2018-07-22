import { OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, Component, RenderComponentType } from "@angular/core";
import { MatDialogRef, MatDialog } from "@angular/material";

export abstract class AbstractComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

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

}

/**
 * Defines a generic type of a component to be instantiated inside a dialog.
 * 
 * @author rodrigo-novaes
 * @param ComponentClass A component instance to be shown in the dialog.
 */
export abstract class AbstractDialogComponent<ComponentClass extends AbstractComponent> extends AbstractComponent {

    /**
     * The dialog reference.
     */
    protected dialogRef: MatDialogRef<ComponentClass>;

    /**
     * Constructor that instantiates a new dialog component. Receives the MatDialog
     * Service.
     * 
     * @param matDialog A Material Dialog service.
     */
    public constructor(private matDialog: MatDialog) {
        super();
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
    protected abstract openDialog(): void;

    /**
     * Hook to be implemented for closing the dialog.
     */
    protected abstract closeDialog(): void;

}