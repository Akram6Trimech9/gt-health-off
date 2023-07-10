import { Component, OnInit } from '@angular/core';
import { AccPageService } from 'src/app/home/data-access/acc-page.service';
import { AgencyInfo } from 'src/app/home/utils/models/agency-info';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
