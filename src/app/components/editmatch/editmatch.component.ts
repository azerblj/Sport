import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-editmatch',
  templateUrl: './editmatch.component.html',
  styleUrls: ['./editmatch.component.css']
})
export class EditmatchComponent implements OnInit {

  constructor(private mService:MatchService,private activatedRoute : ActivatedRoute,private router:Router) { }
  matchForm!:FormGroup;
  match:any={};
  id:any;

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.mService.getMatchById(this.id).subscribe(
      (data)=>{
       this.match = data.match;}
    );
  }
  edit()
  {
  console.log("here match obj",this.match);

  this.mService.editMatch(this.match).subscribe(
    (resp)=>{console.log('here edit resp from BE ',resp.isEdited);
    this.router.navigate(['admin']);
    }
  );
  }

}
