import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged , flatMap } from "rxjs/operators"
import { setupRxDevtools } from 'rx-devtools/rx-devtools';
import { FormService } from '../form-service.service';

@Component({
  selector: 'app-search-forms',
  templateUrl: './search-forms.component.html',
  styleUrls: ['./search-forms.component.css']
})
export class SearchFormsComponent implements OnInit {
  searchField: FormControl;
  searches:string[] =[];
  
  constructor(
   private formService:FormService
  ) { }

  ngOnInit() {
    this.setupRxDevtoolss();
    this.searchField = new FormControl();
    this.searchField.valueChanges.pipe(debounceTime(400), distinctUntilChanged() , flatMap((term:any)=> this.formService.searchForm(term)).bind(this)
    ).subscribe((result:any)=>{
      console.log(result);
      if(result.length != 0 && this.searches.indexOf(result[result.length - 1].name) == -1){ // doesnt exist in list yet and found add it
        this.searches.push(result[result.length -1].name);
      }
    });
  }
 setupRxDevtoolss =()=>{
   console.log("Init dev rxjs tools . . . .");
   setupRxDevtools();
 }   
}
