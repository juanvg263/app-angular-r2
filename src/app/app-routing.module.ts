import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import path from 'path';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
{
  path : '',
  redirectTo : 'login',
  pathMatch : 'full'
},
{
  path : 'login',
  component :  LoginComponent
},
{
  path : 'register',
  component : RegisterComponent
},
{
  path : 'home',
  component : HomeComponent,
  canActivate : [authGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }