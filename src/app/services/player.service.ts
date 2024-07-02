import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
    // playerUrl => BE server Adresse;
    playerUrl:string='http://localhost:3000/api/players';

  constructor(private http:HttpClient) { }
  addPlayer(player:any)
  {
     return this.http.post<{isAdded:boolean}>(this.playerUrl,player);
  }

  editPlayer(playerObj:any)
  {
    return this.http.put<{isEdited:boolean}>(this.playerUrl,playerObj);
  }

  deletePlayer(playerId:any)
  {
    return this.http.delete<{isDeleted:boolean}>(`${this.playerUrl}/${playerId}`);
  }

  getPlayerById(playerId:any)
  {
    return this.http.get<{player:any}>(this.playerUrl + '/' + playerId);
  }

  getAllPlayeres()
  {
    return this.http.get<{player:any}>(this.playerUrl);
  }


}
