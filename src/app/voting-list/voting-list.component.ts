import { Component, OnInit } from '@angular/core';
import {VotingApiService} from '../voting-api.service';

@Component({
  selector: 'app-voting-list',
  templateUrl: './voting-list.component.html',
  styleUrls: ['./voting-list.component.css']
})
export class VotingListComponent implements OnInit {

  descriptions;
  votingIDs;
  timeStamps;
  constructor(private _voting: VotingApiService) { }

  ngOnInit(): void {
    this._voting.latestMeetings().subscribe(res => {
      let votingSessions = res["VotingSessions"];
      let descriptions = votingSessions.map(votingSessions => votingSessions.Text).filter(n=>n);
      let votingIDs = votingSessions.map(votingSessions => votingSessions.SessionID).filter(n=>n);
      let timeStamps = votingSessions.map(votingSessions => votingSessions.Timestamp).filter(n=>n);

      this.descriptions = descriptions;
      this.votingIDs = votingIDs;
      this.timeStamps = timeStamps;

      console.log(this.descriptions)
    
    })
  }

}
