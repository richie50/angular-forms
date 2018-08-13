import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormOneComponent } from './form-one/form-one.component';
import { AppRoutingModule } from './routing/app-routing.module';

//forms module ,
//formGroup is a selector for directive named FormGroupDirective that is a part of ReactiveFormsModule, 
//hence the need to import it. It is used to bind an existing FormGroup to a DOM element.
import { FormsModule , ReactiveFormsModule}   from '@angular/forms';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
//services
import { FormService } from './form-service.service';
import { SearchFormsComponent } from './search-forms/search-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    FormOneComponent,
    ReactiveFormsComponent,
    SearchFormsComponent
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  ReactiveFormsModule //fixes the cant bind
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
