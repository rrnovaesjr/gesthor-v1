import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./not-found.component";
import { NgModule } from "@angular/core";
import { environment } from "../../environments/environment.prod";

/**
 * Defines the Main Module's routes.
 */
const mainRoutes: Routes = [
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            mainRoutes,
            { enableTracing: !environment.production }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class MainRoutingModule { }