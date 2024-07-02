import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teamtab:any=[];

  constructor(private tservice:TeamService) { }

  ngOnInit(): void {
    this.tservice.getAllTeames().subscribe( (data)=>{console.log("here data from BE",data.team);
      this.teamtab=data.team;
  }
    )
}
}
