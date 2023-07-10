import { Component, OnInit } from '@angular/core';
import { AccPageService } from '../../data-access/acc-page.service';
import { Horraire } from '../../utils/models';
import { AgencyInfo } from '../../utils/models/agency-info';
import { Blog } from '../../utils/models/blog';
import { Comment } from '../../utils/models/comment';
import { Interventions } from '../../utils/models/intervention';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(private homeService : AccPageService){}
   sliders : any 
  ngOnInit(): void {
    this.getsliders()
    this.getHorraire()
    this.getInfo()
     this.getComments()
    this.getThreeNews()
  }
  getsliders(){
    this.homeService.getSliders().subscribe({
       next:(res)=>{ 
        if (res && res.length > 0) {
          this.sliders = res[0];          
        }       },
       error:(err)=>{ 
        console.log(err);
       }
    })
  }
  horraire !: Horraire
  getHorraire(){ 
    this.homeService.getHorraire().subscribe({
      next:(res)=>{         
           if(res  ){
                   this.horraire=res[0]         
           }
      },error:(err)=>{ 
        console.log(err);
        
      }
    })
  }
 info !: AgencyInfo
  getInfo(){
    this.homeService.getInfo().subscribe({
      next:(res)=>{ 
         if(res){
            this.info= res[0]      
         }
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  comment :  Comment[] =[]
  getComments(){
    this.homeService.getComments().subscribe({
       next:(res)=>{ 
        if(res && res.length> 0 ){ 
         this.comment=res         
        }
       }
    })
  }
  blogs: Blog[] = [];

  getThreeNews() {
    this.homeService.getPosts().subscribe({
      next: (res) => {
        if (res && res.length > 0) {
             this.blogs = res.slice(0, 3);
        }
         
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
  
