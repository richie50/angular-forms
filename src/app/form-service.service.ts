import { Injectable } from '@angular/core';
import { FormModel } from './form-model';

@Injectable()
export class FormService {
  private postData:Array<FormModel>= [];

  constructor() { }

  public postForm(data:FormModel):void{
    console.log("Sending this data to some endpoint . . . . " , data);
    this.postData.push(data);
  } 

  public getFormData():Array<FormModel>{
    return this.postData;
  } 
}
