import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-patch-value',
  templateUrl: './patch-value.component.html',
  styleUrls: ['./patch-value.component.css']
})
export class PatchValueComponent implements OnInit {
  form:FormGroup;

  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['',Validators.required],
      event: this.fb.group({
        title: ['',Validators.required],
        location: ['',Validators.required],
      })
    });
  }

}
