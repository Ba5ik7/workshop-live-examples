import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WorkshopLiveExamplesModule } from 'projects/workshop-live-examples/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WorkshopLiveExamplesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
