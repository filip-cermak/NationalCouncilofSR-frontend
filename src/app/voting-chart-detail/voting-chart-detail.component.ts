import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-voting-chart-detail',
  templateUrl: './voting-chart-detail.component.html',
  styleUrls: ['./voting-chart-detail.component.css']
})
export class VotingChartDetailComponent implements OnInit {
  
  chartID
  img
  url
  flag = false

  constructor(public route: ActivatedRoute) { }


  onClickMe() {
    this.flag = true;
    this.url = document.getElementsByTagName("canvas").item(0).toDataURL("image/jpg");
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.chartID =  params.get('chartID');
    });
}
}
