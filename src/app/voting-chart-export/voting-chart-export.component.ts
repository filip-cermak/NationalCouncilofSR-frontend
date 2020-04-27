import { Component, OnInit, ViewChild, AfterViewInit, Input, ElementRef } from '@angular/core';
import {VotingApiService} from '../voting-api.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-voting-chart-export',
  templateUrl: './voting-chart-export.component.html',
  styleUrls: ['./voting-chart-export.component.css'],
})
export  class VotingChartExportComponent implements OnInit {
    chart = []; // This will hold our chart info
    votes = [];
    url;

    @Input()
    votingID: string;

    @ViewChild('myCanvas') myCanvas: ElementRef;
    public context: CanvasRenderingContext2D;

    constructor(private _voting: VotingApiService) {}
    ngOnInit(){}

    ngAfterViewInit() {
      this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');

      this._voting.votingSummary(this.votingID).subscribe(res => {
        let votes = res["Votes"];
        
        /**this needs to be changed in the next electoral term */
        let OLANO = parse_votes(votes.slice(0,53));	
        let SMERSD = parse_votes(votes.slice(53, 91));
        let WAF = parse_votes(votes.slice(91,108));
        let LSNS = parse_votes(votes.slice(108, 125));
        let SAS = parse_votes(votes.slice(125, 138));
        let FP = parse_votes(votes.slice(138));
        
        this.chart = new Chart(this.context, {
          type: 'bar',
          data : {
          labels : ['For', 'Against', 'Abstention', 'Not Present'],
          datasets : [
            {data: OLANO, label: 'OLANO', backgroundColor: '#108b42'},
            {data: SMERSD, label: 'SMER-SD', backgroundColor: '#dd0022'},
            {data: WAF, label: 'We Are Family', backgroundColor: '#5373cf'},
            {data: LSNS, label: 'LSNS', backgroundColor: '#313131'},
            {data: SAS, label: 'SAS', backgroundColor: '#93d850'},
            {data: FP, label: 'For People', backgroundColor: '#ffb23b'}
          ]},
          options: {
          title: {
            display: true
          },
          tooltips: {
            mode: 'index',
            intersect: false
          },
          responsive: true,
          animations: {
            onComplete : function(){
              console.log(this.url);
              console.log("hello world")
            }
          },
          scales: {
            xAxes: [{
              stacked: true,
            }],
            yAxes: [{
              stacked: true
            }]
          }}
          });
      })
    }
  }
  
  function parse_votes(votes){
    /*
    count the occurances of votes ('Z','P','?','N') in the input list and output summary
    */
    let out: number[] = [0, 0, 0, 0];

    for(let vote of votes){
      if (vote == 'Z'){
      out[0]++;
      } else if (vote == 'P'){
      out[1]++;
      } else if (vote == '?' || vote == 'N' || vote == '-'){
      out[2]++;
      } else if (vote == '0') {
      out[3]++;
      }
    }
    return out;
  }