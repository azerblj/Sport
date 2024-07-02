import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  playerstab:any=[
  ]

  constructor(private pservice:PlayerService) { }

  ngOnInit(): void {
    this.pservice.getAllPlayeres().subscribe(
      (data)=>{console.log("here data from BE",data.player);
        this.playerstab=data.player;

      }
    );
  }

}
