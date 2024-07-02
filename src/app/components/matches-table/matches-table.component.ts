import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
  T:any=[ ]
  constructor(private router : Router,private mService:MatchService) { }
  resultmatch(a:number,b:number,team:string)
  {
    if  (a > b)
      {
        return (team + " win");
      }
      else if( a < b )
        {
          return (team + " lose");
        }
        else
        {
          return " NULL";
        }

  }
  scoreColor(a:number,b:number)
  {
    if  (a > b)
      {
        return 'green';
      }
      else if( a < b )
        {
          return 'red';
        }
        else
        {
          return 'blue';
        }

  }


  ngOnInit(): void {
    this.mService.getAllMatches().subscribe(
      (data)=>{
        this.T=data.matches;

      }
    );
  }
  gotoinfo(id:number)
  {

    this.router.navigate([`matchInfo/${id}`]);
  }
  gotoeditmatch(id:number)
  {

    this.router.navigate([`editMatch/${id}`]);
  }

  deleteMatch(id:any)
  {
    this.mService.deleteMatch(id).subscribe(
      (responce)=>{
        console.log('here delete response',responce.isDeleted);
        if(responce.isDeleted)
          {
            this.mService.getAllMatches().subscribe(
              (data)=>{this.T=data.matches;

              }
            )
          }
      }
    );
  }



}
