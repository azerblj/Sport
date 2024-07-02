import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  matchForm!:FormGroup;
  match:any={};


  constructor(private mService : MatchService,private router:Router)
  {

  }
  ngOnInit(): void {
  }
  addMatch()
  {
    console.log("here match obj",this.match);
    this.mService.addMatch(this.match).subscribe(
      (resp)=>{console.log('here res from BE server',resp.isAdded);
        this.router.navigate(['admin']);
      }

    );
  }



}
