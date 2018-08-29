import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';

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
import { ValidationService } from './services/validation.services';
//components
import { SearchFormsComponent } from './search-forms/search-forms.component';
import { ModalFormComponent } from './modal-form/modal-form.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { ControlMessagesComponent } from './control-messages/control-messages.component';
import { PatchValueComponent } from './patch-value/patch-value.component';
import { FormDataMock } from "./services/mock-data.service";
import { EventContactFormsComponent } from './event-contact-forms/event-contact-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    FormOneComponent,
    ReactiveFormsComponent,
    SearchFormsComponent,
    ModalFormComponent,
    FormGroupComponent,
    ControlMessagesComponent,
    PatchValueComponent,
    EventContactFormsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,//fixes the cant bind
    HttpClientInMemoryWebApiModule.forRoot(FormDataMock)
  ],
  providers: [
    FormService,
    ValidationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
