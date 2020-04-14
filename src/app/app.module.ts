import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VotingChartComponent } from './voting-chart/voting-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { VotingApiService } from './voting-api.service';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    VotingChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [VotingApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
