import { Component, OnInit } from '@angular/core';
import { ServicePageService } from '../../data-access/service-page.service';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css']
})
export class ServicesPageComponent  implements OnInit{
  constructor(private  _service : ServicePageService){
 
  }
  topqualities : any
  ngOnInit(): void {
         this._service.getTopQualitites().subscribe(res => { 
           this.topqualities = res[0]
           console.log(this.topqualities);
           
         })
  }
}
