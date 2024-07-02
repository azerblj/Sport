import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  playerForm!:FormGroup;
  player:any={};


  constructor(private pservice:PlayerService,private router:Router) { }
  addPlayer()
  {
    console.log("here player obj",this.player);
    this.pservice.addPlayer(this.player).subscribe(
      (resp)=>{console.log("here resp from BE",resp.isAdded);
        this.router.navigate(['admin']);
      }
    );
  }


  ngOnInit(): void {
  }

}
