import { Component, OnInit , Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { ValidationService } from '../services/validation.services';

@Component({
  selector: 'control-messages',
  templateUrl: './control-messages.component.html',
  styleUrls: ['./control-messages.component.css']
})
export class ControlMessagesComponent implements OnInit {
  //errorMessage:string
  @Input() control: FormControl; // input to the current component
  
  constructor() { }

  ngOnInit() {
  }

  public get errorMessage():string{
    for (let propName in this.control.errors){
      if(this.control.errors.hasOwnProperty(propName) && this.control.touched){
         return ValidationService.getValidatorErrorMessage(propName, this.control.errors[propName]);
      }
    }
    return "";
  }
}
