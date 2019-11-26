import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  username:string
  password:string
  //create a reactive form model
  profileForm = this.fb.group({
    //define form controls
    firstName : ['',Validators.required],
    lastName : ['',Validators.required]
  })
  constructor(private fb:FormBuilder) { }

  onsubmit(){
    alert("Submitted firstname is "+this.profileForm.controls.firstName.value)
  }

  onformsubmit(){
    alert(this.username + " and " + this.password)
  }
  ngOnInit() {
  }

}
