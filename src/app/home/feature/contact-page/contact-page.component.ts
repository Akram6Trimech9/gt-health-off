import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccPageService } from '../../data-access/acc-page.service';
import { AproposService } from '../../data-access/apropos.service';
import { AgencyInfo } from '../../utils/models/agency-info';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  contactForm !: FormGroup;

  constructor(private service: AproposService , private accService : AccPageService) { }
   info !: AgencyInfo
  
  ngOnInit() {
    this.contactForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'e_mail': new FormControl(null, [Validators.required, Validators.email]),
      'subject': new FormControl(null, Validators.required),
      'message': new FormControl(null, Validators.required)
    });
    this.accService.getInfo().subscribe({
      next:(res)=>{
       if(res && res.length> 0){
         this.info= res[0]
       }
       console.log(this.info);
       
      }
    })
  }
  isSubmitted = false;
  onSubmit() {
    if (this.contactForm.valid) {
      this.service.postContact(this.contactForm.value).subscribe((res : any) => {
        console.log(this.contactForm.value);
        this.isSubmitted = true;
        })
    }
  }
}
