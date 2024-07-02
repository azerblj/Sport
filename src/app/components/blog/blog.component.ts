import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogtab=[
    {description:"messi est Got",title:"article1",date:"01/06/2024",img:"assets/images/img_3.jpg"},
    {description:"neymar to barca",title:"article2",date:"02/06/2024",img:"assets/images/img_1.jpg"},
    {description:"est chompion",title:"article3",date:"03/06/2024",img:"assets/images/img_2.jpg"},


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
