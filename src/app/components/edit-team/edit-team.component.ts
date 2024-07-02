import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {

  constructor(private tService:TeamService,private activatedRoute:ActivatedRoute,private router:Router) { }
  teamForm!:any;
  team:any={};
  id:any;


  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.tService.getTeamById(this.id).subscribe(
      (data)=>{this.team=data.team;}
    );
  }
  edit()
  {
    this.tService.editTeam(this.team).subscribe(
      (resp)=>{console.log("here into editteam resp ",resp.isEdited);
        this.router.navigate(['admin']);

      }
    );
  }

}



