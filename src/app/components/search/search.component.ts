import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  T:any=[]
  searchForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,private mService:MatchService) { }


  ngOnInit(): void {

    this.searchForm = this.formBuilder.group({

      scoreOne: ['',[Validators.required]],
      scoreTwo: ['',[Validators.required]]
    });
  }
  search()
  {
    this.mService.searchMatchesByScore(this.searchForm.value).subscribe(
      (data)=>{console.log('here search from BE',data.match);
        this.T=data.match;
      }
    );
  }

}
