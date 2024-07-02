import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
  T:any=[]

  constructor(private router:Router,private pservice:PlayerService) { }
  gotoplayer(id:number)
  {
    this.router.navigate([`playerInfo/${id}`]);
  }
  editPlayer(id:number)
  {
   this.router.navigate([`editPlayer/${id}`]);
  }

  ngOnInit(): void {
    this.pservice.getAllPlayeres().subscribe(
      (data)=>{this.T=data.player;}
    );
  }
  delet(id:number)
{
  this.pservice.deletePlayer(id).subscribe(
    (resp)=>{console.log('here delete player resp',resp.isDeleted);
      if(resp.isDeleted)
        {
          this.pservice.getAllPlayeres().subscribe(
            (data)=>{this.T=data.player;

            }
          )
        }
    }
  )
}

}
