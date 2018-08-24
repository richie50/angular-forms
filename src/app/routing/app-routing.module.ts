//https://www.sitepoint.com/component-routing-angular-router/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { FormOneComponent } from '../form-one/form-one.component';
import { ReactiveFormsComponent } from '../reactive-forms/reactive-forms.component';
import { SearchFormsComponent } from "../search-forms/search-forms.component";
import { FormGroupComponent } from '../form-group/form-group.component';
import { PatchValueComponent } from '../patch-value/patch-value.component';
//ONly one instance of the router otherwise you will run into issues later
const routes: Routes = [
    {
        path:'',
        redirectTo:'formsOne',
        pathMatch: 'full'
    },
    {
        path:'formOne',
        component: FormOneComponent
    },
    {
        path:'reactiveForm',
        component: ReactiveFormsComponent
    },
     {
        path:'searchForm',
        component: SearchFormsComponent
    },
     {
        path:'formGroup',
        component: FormGroupComponent
    },
    {
        path:'patchValue',
        component:PatchValueComponent,
        children:[
            { path: '', redirectTo: 'new', pathMatch: 'full' },
            //{ path: 'new', component: EventFormComponent },
            //{ path: 'all', component: EventListComponent },
            //{ path: ':id', component: EventFormComponent }
        ]
    }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule{ // exported as module to the parent app Module , refer to AppModule.ts

}