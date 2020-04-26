import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VotingChartDetailComponent} from './voting-chart-detail/voting-chart-detail.component'
import { HomepageComponent } from './homepage/homepage.component';


@NgModule({
  imports: [RouterModule.forRoot  ([
    { path: '', component: HomepageComponent },
    { path: 'chart/:chartID', component: VotingChartDetailComponent },
  ])
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
