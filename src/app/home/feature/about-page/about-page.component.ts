import { Component, OnInit } from '@angular/core';
import { AproposService } from '../../data-access/apropos.service';
import { AnswerQuestion } from '../../utils/models/faq';
import { history } from '../../utils/models/history';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit{
  constructor(private aproposService : AproposService){

  }
  history:any
  faqs :  any[] =[]
  doctors : any[] =[]
  ngOnInit(): void {   
    this.aproposService.getHistory().subscribe({
        next:(res:any)=>{
          console.log(res[0]);
          
           this.history = res[0]
           console.log(this.history);
           
        },error:(err)=>{ 
           console.log(err);   
        }
    })
    this.aproposService.getQuestionResponse().subscribe({
      next:(res:any)=>{
        this.faqs = res
        console.log(this.faqs);

     },error:(err)=>{ 
        console.log(err);   
     }
    })
    this.aproposService.getDoctors().subscribe({
      next:(res:any)=>{
        this.doctors = res
        console.log(this.doctors);

     },error:(err)=>{ 
        console.log(err);   
     }
    })
  }

  activeFaq: string | null = null;

  toggleFaq(id: string) {
      if (this.activeFaq === id) {
          this.activeFaq = null; // hides the content if the same FAQ is clicked again
      } else {
          this.activeFaq = id;
      }
  }
  
  getFaqById(id: string) {
      return this.faqs.find(faq => faq.id === id);
  }
  
}
