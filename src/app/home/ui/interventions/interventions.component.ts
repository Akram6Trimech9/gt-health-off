import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AccPageService } from '../../data-access/acc-page.service';
import { Interventions } from '../../utils/models/intervention';

@Component({
  selector: 'app-interventions',
  templateUrl: './interventions.component.html',
  styleUrls: ['./interventions.component.css'],
 })
export class InterventionsComponent implements OnInit{
constructor(private  homeService : AccPageService){
  
}
  ngOnInit(): void {
    this.getInterventions()
   }

 interventions : Interventions[]=[]
getInterventions(){
  this.homeService.getInterventions().subscribe({
    next:(res)=>{
      this.interventions=res        
    },
    error:(err)=>{
console.log(err);

    }
  })
}

splitDescription(description: string): string[] {
  const maxLength = 30;  
  const paragraphs = [];
  let currentIndex = 0;

  while (currentIndex < description.length) {
      const paragraph = description.substr(currentIndex, maxLength);
      paragraphs.push(paragraph);
      currentIndex += maxLength;
  }

  return paragraphs;
}

}
