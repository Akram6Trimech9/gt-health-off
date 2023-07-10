import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccPageService } from '../../data-access/acc-page.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
  emailForm!: FormGroup;
  subscribed: boolean = false
  constructor(private fb: FormBuilder , private accService : AccPageService) { }

  ngOnInit(): void {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.emailForm.invalid) {
      return;
    }
    console.log(this.emailForm.value);
    
      this.accService.postSubscriber(this.emailForm.value).subscribe({
        next:(res)=>{
          
          this.emailForm.reset();
          this.subscribed = true;
        }
      }
      )

  }
}
