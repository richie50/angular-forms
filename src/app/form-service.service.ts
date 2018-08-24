import { Injectable } from '@angular/core';
import { FormModel } from './form-model';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map  } from "rxjs/operators/map";
import { tap } from "rxjs/operators/tap";
import { flatMap } from "rxjs/operators";
@Injectable()
export class FormService {
  private postData:Array<any>= [];
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private formUrl = 'api/forms';  // URL to web api , forms is the name of the JSON DB object
  private userUrl = 'api/users' 

  constructor(private http: HttpClient) { }

  public postForm(data:FormModel):void{
    console.log("Sending this data to some endpoint . . . . " , data);
    this.postData.push(data);
  } 

  public getFormData():Observable<FormModel[]> {
    return this.http.get(this.formUrl).pipe(tap( data => console.log(data)),
    map(res=> (res as FormModel[])
    ));
  }

  public createUser(user:object):Observable<object>{
    return this.http.post(this.userUrl , user).pipe(tap(data=> console.log(data)),map(res=> res as object)
    );
  } 
  public getUsers():Observable<object[]>{
    return this.http.get(this.userUrl).pipe(map(res=> res as object[]));
  }
  public searchForm(term:string):Observable<FormModel[]>{
    return this.http.get(`${this.formUrl}/?name=${term}`).pipe(map(res=> res as FormModel[]));
  }
}
