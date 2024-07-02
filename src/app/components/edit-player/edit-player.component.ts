import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  player:any=[];
  id:any;

  constructor(private pService:PlayerService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.pService.getPlayerById(this.id).subscribe(
      (data)=>{this.player=data.player;}
    );
  }
  edit()
  {
    this.pService.editPlayer(this.player).subscribe(
      (resp)=>{console.log("here into edit player resp",resp.isEdited);
        this.router.navigate(['admin']);
      }
    )
  }

}
