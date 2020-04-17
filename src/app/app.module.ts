import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VotingChartComponent } from './voting-chart/voting-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { VotingApiService } from './voting-api.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VotingListComponent } from './voting-list/voting-list.component';
import { VotingCardComponent } from './voting-card/voting-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    VotingChartComponent,
    VotingListComponent,
    VotingCardComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [VotingApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
