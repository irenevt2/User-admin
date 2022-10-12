import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";

  formlogin : FormGroup = new FormGroup({
    username : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor( private formBuilder:FormBuilder ) { }

  ngOnInit(): void {
  }
  validar(){
    console.log(this.formlogin)
    if(this.formlogin.valid){
      console.log(this.formlogin.value)

    }
  }

}
