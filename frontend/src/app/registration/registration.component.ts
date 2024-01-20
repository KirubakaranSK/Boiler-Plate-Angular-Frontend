import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/apiservice.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm!:FormGroup

  constructor(public fb:FormBuilder,public apiservice:ApiService){}

  ngOnInit(): void {
    this.registrationForm=this.fb.group({
      username:[null,Validators.required],
      email:[null,Validators.required],
      password:[null,Validators.required]
    })
  }

  onRegistrationSubmit(){
    console.log(this.registrationForm.value);

  let data=this.registrationForm.value

  let response = this.apiservice.Post('login-register/register',data).subscribe({
    next: (res: any) => {
      console.log(res)
  },
  error: (err: HttpErrorResponse) => {
  }
  })

  this.registrationForm.reset()

  }
}
