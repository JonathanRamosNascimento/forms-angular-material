import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  clientForm = this.fb.group({
    firstName: [''],
    lastName:[''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: ['']
    }),
    phone: [''],
    children: this.fb.group({
      name: [''],
      age: ['']
    })
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  submit() {
    console.log(this.clientForm.value);
  }
}
