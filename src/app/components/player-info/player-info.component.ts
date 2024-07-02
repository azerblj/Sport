import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  id:any;
  playertab:any;

  constructor(private activatedRoute:ActivatedRoute,private pService:PlayerService) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.pService.getPlayerById(this.id).subscribe(
      (data)=>{console.log("here player info from BE ",data.player);
        this.playertab=data.player;
      }

    )
  }

}
