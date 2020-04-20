import { Component, OnInit, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-voting-card',
  templateUrl: './voting-card.component.html',
  styleUrls: ['./voting-card.component.css']
})
export class VotingCardComponent implements OnInit {

  @Input() votingID : string;
  @Input() description : string;

  constructor() { }

  ngOnInit(): void {
  }

}
