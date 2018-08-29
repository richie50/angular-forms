import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-event-contact-forms',
  templateUrl: './event-contact-forms.component.html',
  styleUrls: ['./event-contact-forms.component.css']
})
export class EventContactFormsComponent implements OnInit {
  contactForm:FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.fb.group(
       {
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          phoneNum: ['', Validators.pattern('[0-9]{10}')],
          email: ['', [Validators.required, Validators.email]],
          inquiry: ['', Validators.required],
          date: ['', Validators.required]
        }
    );
    console.log(this.contactForm);
  }
  onSubmit(f){
    console.log(f);
  }

  get firstName():any{
    return this.contactForm.get('firstName');
  }
}
