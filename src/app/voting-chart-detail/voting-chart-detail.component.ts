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

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.chartID = params.get('chartID');
    });
  }

  ngAfterViewInit() : void {
    var canvas = document.getElementsByTagName("canvas").item(0);
    console.log(canvas)
    canvas.toBlob(function(blob) {
      saveAs(blob, "pretty image.png");
    });
  }
}
