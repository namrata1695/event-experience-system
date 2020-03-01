import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent} from './server/server.component';
import {SignupComponent} from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
