import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RxjsLibrariesModule} from "./rxjs-libraries/rxjs-libraries.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RxjsLibrariesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
