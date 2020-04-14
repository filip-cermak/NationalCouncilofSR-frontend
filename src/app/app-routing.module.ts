import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VotingChartComponent } from './voting-chart/voting-chart.component'


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
