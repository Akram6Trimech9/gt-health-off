import { Component, OnInit } from '@angular/core';
import { AccPageService } from '../../data-access/acc-page.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  constructor(private  _accService : AccPageService){

  }
   articles : any
   ngOnInit(): void { 
    this._accService.getPosts().subscribe(res => { 
       this.articles = res;
       this.articles.forEach((element: any) => {
          element.image.path = element.image.path.replace('http://localhost:3000/api','http://gthealth.local.com/api');
       });
       console.log(this.articles); 
    })
 }
 
}

 