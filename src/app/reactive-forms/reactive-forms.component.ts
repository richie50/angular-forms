import { Component, OnInit } from '@angular/core';
import { FormModel } from "../form-model";
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, NgForm } from '@angular/forms'
import { FormService } from '../form-service.service';


@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model = new FormModel(18, 'Dr Reactive', this.powers[0] ? this.powers[2] : this.powers[0] , 'mehhhhhhh'); // already defined , binds to the template via ngModel
  //model:FormModel;
  submitted = false;
  reactiveForms: FormGroup;

  constructor(private formService: FormService) {
    
   }

  ngOnInit() {
    this.formService.getFormData().subscribe(h=> {
      //this.model = new FormModel(h[0].id , h[0].name , this.powers[0] , 'mehhhhhh');
      console.log(h);
    });
    this.formService.getUsers().subscribe(res=>{
      console.log(res);
    });
    this.reactiveForms = new FormGroup({
      'name': new FormControl('' ,[
        Validators.required,
        Validators.minLength(4),
      ]),
      'alterEgo': new FormControl(''),
      'power': new FormControl('' , Validators.required)
    });

  }

 public revealForm(){
    this.submitted = false;
  }

  public onSubmit(form: NgForm){
    console.log(form)
    //this.formService.postForm(this.model.); // the model is two-way? not is not because the directive ngModel is not attached to it
   let postObj:object = {user: form.value.name};
   this.formService.createUser(postObj).subscribe(res=> console.log("Post data " , res)); 
   this.submitted = true;
}

  public customValidator(name: RegExp):ValidatorFn{
    //return an object with the key of type string and value of type any or null
    return (control: AbstractControl): {[key:string]:any} | null =>{ // validator fn
      const forbidden = name.test(control.value);
      return forbidden ? {'forbiddenName': {value: control.value }} :null;
    }
  }
}
