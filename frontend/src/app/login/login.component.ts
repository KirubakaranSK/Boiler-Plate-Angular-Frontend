import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup

  constructor(public fb:FormBuilder){}

  ngOnInit(): void {

    this.formsLogin()
    
  }

  formsLogin(){

    this.loginForm=this.fb.group({
      username:[null,Validators.required],
      password:[null,Validators.required]
    })
  }

  onLoginSubmit(){
    console.log(this.loginForm)
  }
}
