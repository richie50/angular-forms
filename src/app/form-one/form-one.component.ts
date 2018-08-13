import { Component, OnInit } from '@angular/core';
import { FormModel } from '../form-model';
import { FormService } from '../form-service.service';


@Component({
  selector: 'app-form-one',
  templateUrl: './form-one.component.html',
  styleUrls: ['./form-one.component.css']
})
export class FormOneComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model = new FormModel(18, 'Dr IQ', this.powers[0] ? this.powers[1] : this.powers[0] , 'Chuck Overstreet'); // already defined , binds to the template via ngModel
  submitted = false;

  constructor(private formService: FormService) { }

  ngOnInit() {
  }

  public onSubmit(){
    this.submitted = true;
    this.formService.postForm(this.model); // the model should be reflected just like as it is on the template
  }

  public newHero(){
    this.model = new FormModel(54 ,'Dr Richmond ',this.powers[0] , "Taste by Tyga");
  }

  public revealForm(){
    this.submitted = false;
  }
}


//https://angular.io/guide/forms