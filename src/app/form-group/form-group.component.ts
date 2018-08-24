//https://codecraft.tv/courses/angular/forms/model-driven/
//https://coryrylan.com/blog/angular-form-builder-and-validation-management

//form-groups with form builder

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ValidationService } from '../services/validation.services';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {
  userForm: FormGroup;

  public langs:string[] = [
    'English',
    'French',
    'German',
    'Twi'
  ] 
  constructor(private formBuilder: FormBuilder) { 
    //the first parameter in the array args specifies what value to init the input with , all forms part of the form control
    // the controls bind early on and the validators trigger does not matter where they are defined
    this.userForm =  this.formBuilder.group({
      'fname': ['' , [Validators.required , Validators.minLength(8)]],
      'lname': ['' , [Validators.required , Validators.minLength(8)]],  
      'email': ['' , [Validators.required , ValidationService.emailValidator]],
      'password':['' , [Validators.required , ValidationService.passwordValidator]]
    });
  }

  ngOnInit() {
  }

}
