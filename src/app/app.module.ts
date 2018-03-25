import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainModule } from './main';
import { NavbarModule} from './navbar';
import { EntitiesModule } from './entities';
import { AppComponent } from './app.component';
import { AuthModule } from './auth';

@NgModule({
  imports: [
    AuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    MainModule,
    NavbarModule,
    EntitiesModule,
    RouterModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
