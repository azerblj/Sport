import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matchestab:any=[]


  constructor(private mService:MatchService) { }

  ngOnInit(): void {
    this.mService.getAllMatches().subscribe(
      (data)=>{console.log("here data from BE",data.matches);
        this.matchestab=data.matches;

      }
    );
  }

}
