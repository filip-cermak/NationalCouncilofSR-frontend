import { Component, OnInit } from '@angular/core';
import {VotingApiService} from '../voting-api.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-voting-chart',
  templateUrl: './voting-chart.component.html',
  styleUrls: ['./voting-chart.component.css'],
  template: `<div>: {{name}}</div>`,
  styles: [`
  :host {
    display: block;
    padding: 1px;
    border: 1px solid black;
    border-radius: 7px;
  }
  `]
})


export  class VotingChartComponent implements OnInit {
    chart = []; // This will hold our chart info
    votes = [];
  
    constructor(private _voting: VotingApiService) {}
  
    ngOnInit() {
      /**
      this._voting.latestMeetings().subscribe(res => {
        let votingSessions = res.VotingSessions;
        let descriptions = votingSessions.map(votingSessions => votingSessions.Text).filter(n=>n);
        let votingIDs = votingSessions.map(votingSessions => votingSessions.Session_ID).filter(n=>n);
        let timeStamps = votingSessions.map(votingSessions => votingSessions.Timestamp).filter(n=>n);
       
      })  */
      this._voting.votingSummary("43734").subscribe(res => {
        let votes = res.Votes;

        console.log("ok");
        
        /**this needs to be changed in the next electoral term */
        let OLANO = parse_votes(votes.slice(0,52));		
        let SMERSD = parse_votes(votes.slice(53, 90));
        let WAF = parse_votes(votes.slice(91,107));
        let LSNS = parse_votes(votes.slice(108, 124));
        let SAS = parse_votes(votes.slice(125, 137));
        let FP = parse_votes(votes.slice(138,149));
  
        this.chart = new Chart('canvas', {
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
      } else if (vote == '?' || vote == 'N'){
      out[2]++;
      } else if (vote == '0') {
      out[3]++;
      }
    }
    return out;
  }