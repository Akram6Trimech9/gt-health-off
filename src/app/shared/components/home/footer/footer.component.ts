import { Component } from '@angular/core';
import { AccPageService } from 'src/app/home/data-access/acc-page.service';
import { AgencyInfo } from 'src/app/home/utils/models/agency-info';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  isResponsiveNavOpen = false;

  responsive() {
 
    this.isResponsiveNavOpen = !this.isResponsiveNavOpen;
    
  }
  constructor(private accService : AccPageService){}
  info !: AgencyInfo
  ngOnInit(): void {
       this.accService.getInfo().subscribe({
         next:(res)=>{
          if(res && res.length> 0){
            this.info= res[0]
          }
          console.log(this.info);
          
         }
       })
  }
}
