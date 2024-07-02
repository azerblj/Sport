import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  // matchurl => BE server Adresse;
  matchUrl:string='http://localhost:3000/api/matches';

  constructor( private http:HttpClient ) {  }

  addMatch(match:any)
  {
     return this.http.post<{isAdded:any}>(this.matchUrl,match);
  }

  editMatch(match:any)
  {
    return this.http.put<{isEdited:any}>(this.matchUrl,match);
  }

  deleteMatch(matchId:any)
  {
    return this.http.delete<{isDeleted : Boolean}>(`${this.matchUrl}/${matchId}`);
  }

  getMatchById(matchId:any)
  {
    return this.http.get<{match:any}>(`${this.matchUrl}/${matchId}`);
  }

  getAllMatches()
  {
    return this.http.get<{ matches:any }>(this.matchUrl);
  }

  searchMatchesByScore(obj:any)
  {
    return this.http.post<{ match:any }>(this.matchUrl + "/search" ,obj);
  }


}
