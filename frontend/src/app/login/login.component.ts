import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/apiservice.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup

  constructor(public fb:FormBuilder,public apiservice :ApiService,private messageService: MessageService){}

  ngOnInit(): void {

    this.formsLogin()
    
  }

  formsLogin(){

    this.loginForm=this.fb.group({
      email:[null,Validators.required],
      password:[null,Validators.required]
    })
  }

  onLoginSubmit() {
    if (this.loginForm.invalid) {
      return this.loginForm.markAllAsTouched();
    }
  
    let formdata = this.loginForm.value;
    this.apiservice.Post("login-register/loginUser", formdata).subscribe({
      next: (res: any) => {
        console.log(res);
  
        if (res.status == true) {
          this.messageService.add({ severity: 'success', detail: res.message });
        } else {
          this.messageService.add({ severity: 'error', detail: res.message });
        }
      },
      error: (err: HttpErrorResponse) => {
        // Handle errors here if needed
      }
    });
  }
}
