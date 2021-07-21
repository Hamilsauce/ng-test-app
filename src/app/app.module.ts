import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppChildComponent } from './app-child/app-child.component';
import { CharacterServiceService } from './services/character-service.service';
import { ObservableTestComponent } from './observable-test/observable-test.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent, AppChildComponent, ObservableTestComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    HighchartsChartModule,
    
  ],
  providers: [CharacterServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
