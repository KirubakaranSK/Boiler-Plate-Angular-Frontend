import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path:"Login",
    component:LoginComponent,
  },
  {
    path:"Registration",
    component:RegistrationComponent,
  },
  {
    path:"",
    redirectTo:"/Login",
    pathMatch: 'full',  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
