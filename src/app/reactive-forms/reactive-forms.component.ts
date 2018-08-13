import { Component, OnInit } from '@angular/core';
import { FormModel } from "../form-model";
import {FormGroup , FormControl , Validators , ValidatorFn , AbstractControl} from '@angular/forms'
import { FormService } from '../form-service.service';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model = new FormModel(18, 'Dr Reactive', this.powers[0] ? this.powers[2] : this.powers[0] , 'mehhhhhhh'); // already defined , binds to the template via ngModel
  submitted = false;
  reactiveForms: FormGroup;

  constructor(private formService: FormService) { }

  ngOnInit() {
    this.reactiveForms = new FormGroup({
      'name': new FormControl(this.model.name ,[
        Validators.required,
        Validators.minLength(4),
      ]),
      'alterEgo': new FormControl(this.model.alterEgo),
      'power': new FormControl(this.model.power , Validators.required)
    });
    
  }

 public revealForm(){
    this.submitted = false;
  }

  public onSubmit():void{
    this.formService.postForm(this.model); // the model is two-way? not is not because the directive ngModel is not attached to it
  }

  public customValidator(name: RegExp):ValidatorFn{
    //return an object with the key of type string and value of type any or null
    return (control: AbstractControl): {[key:string]:any} | null =>{ // validator fn
      const forbidden = name.test(control.value);
      return forbidden ? {'forbiddenName': {value: control.value }} :null;
    }
  }
}
