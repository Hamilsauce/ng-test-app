import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppChildComponent } from './app-child/app-child.component';
import { ObservableTestComponent } from './observable-test/observable-test.component';

@NgModule({
  declarations: [
    AppComponent,
    AppChildComponent,
    ObservableTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
