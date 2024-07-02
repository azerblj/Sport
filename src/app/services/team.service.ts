import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamUrl:string='http://localhost:3000/api/teams';

  constructor(private http:HttpClient) { }
  addTeam(team:any)
  {
     return this.http.post<{isAdded:boolean}>(this.teamUrl,team);
  }

  editTeam(teamObj:any)
  {
    return this.http.put<{isEdited:boolean}>(this.teamUrl,teamObj);
  }

  deleteTeam(teamId:any)
  {
    return this.http.delete<{isDeleted:boolean}>(`${this.teamUrl}/${teamId}`);
  }

  getTeamById(teamId:any)
  {
    return this.http.get<{team:any}>(`${this.teamUrl}/${teamId}`);
  }

  getAllTeames()
  {
    return this.http.get<{team:any}>(this.teamUrl);
  }

}
