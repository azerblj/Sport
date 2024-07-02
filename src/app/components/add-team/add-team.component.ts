import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  teamForm!:any;
  team:any={};


  constructor(private tservice:TeamService,private router:Router) { }

  ngOnInit(): void {
  }
  addTeam()
  {
    console.log("here team obj",this.team);
    this.tservice.addTeam(this.team).subscribe(
      (data)=>{console.log("here add team res",data.isAdded);
        this.router.navigate(['admin']);
      }
    );
  }

}
