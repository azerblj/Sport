import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
  id:any;
  matchTab:any;

  constructor(private activatedRoute : ActivatedRoute,private mService:MatchService) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.mService.getMatchById(this.id).subscribe(
      (data)=>{console.log("here match info from BE ",data.match);
        this.matchTab=data.match;
      }

    )

  };

}
