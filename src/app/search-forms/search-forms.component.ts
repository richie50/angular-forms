import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from "rxjs/operators"
import { setupRxDevtools } from 'rx-devtools/rx-devtools';

@Component({
  selector: 'app-search-forms',
  templateUrl: './search-forms.component.html',
  styleUrls: ['./search-forms.component.css']
})
export class SearchFormsComponent implements OnInit {
  searchField: FormControl;
  searches:string[] =["a"];
  
  constructor(
   
  ) { }

  ngOnInit() {
    this.setupRxDevtoolss();
    this.searchField = new FormControl();
    this.searchField.valueChanges.pipe(debounceTime(400), distinctUntilChanged()).subscribe((term:any)=>{
        if(this.searches.indexOf(term) < 0){
          this.searches.push(term); // implemented distinting until changed stream 
        } 
    });
  }
 setupRxDevtoolss =()=>{
   console.log("Init dev rxjs tools . . . .");
   setupRxDevtools();
 }   
}
