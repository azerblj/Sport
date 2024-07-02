import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teames-table',
  templateUrl: './teames-table.component.html',
  styleUrls: ['./teames-table.component.css']
})
export class TeamesTableComponent implements OnInit {
  T:any=[]

  constructor(private router:Router,private tService:TeamService) { }
  gotoediteam(id:number)
  {

    this.router.navigate([`editTeam/${id}`]);
  }

  ngOnInit(): void {
    this.tService.getAllTeames().subscribe(
      (data)=>{this.T=data.team}
    );
  }
  goToInfo(id:number)
  {

    this.router.navigate([`teamInfo/${id}`])
  }

deleteTeam(id:number)
{
  this.tService.deleteTeam(id).subscribe(
    (resp)=>{console.log('here delete team resp',resp.isDeleted);
      if(resp.isDeleted)
        {
          this.tService.getAllTeames().subscribe(
            (data)=>{this.T=data.team;

            }
          )
        }
    }
  )
}
}
