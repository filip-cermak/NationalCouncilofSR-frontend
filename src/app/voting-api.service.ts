import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VotingApiService {

  constructor(private _http: HttpClient) { }
  /** TODO */
  votingSummary(Voting_Session) {
    return this._http.get("https://nationalcouncilofsr-api.appspot.com/voting/".concat(Voting_Session));
}
}
