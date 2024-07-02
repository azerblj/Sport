import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {

  id:any;
  teamtab:any;
  constructor(private activatedRoute : ActivatedRoute,private tservice:TeamService) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.tservice.getTeamById(this.id).subscribe(
      (data)=>{console.log("here team info from BE ",data.team);
        this.teamtab=data.team;
      }
    )

  };
  }

