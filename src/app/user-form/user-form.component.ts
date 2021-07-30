import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  
  constructor(private formBuilder:FormBuilder) { }
  
  profileForm = this.formBuilder.group({
    name: ['', Validators.required],
    brand: ['', Validators.required],
    quantity: ['', Validators.required],
    status: ['', Validators.required],
    description: ['', Validators.required]
  })
  
  saveForm(){
    console.log('Form data is ', this.profileForm.value);
    this.storeData(this.profileForm.value);
  }

  storeData(val?: JSON){
    let data = [];
    data.push(val);
    console.log(data)
  }

  ngOnInit(): void { 
  }

}
