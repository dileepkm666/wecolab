import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component'
import {CreatenewcompanyComponent} from './components/createnewcompany/createnewcompany.component';
import {HomepageComponent} from './components/homepage/homepage.component';


const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'signIn',component:LoginComponent},
  {path:'newteam',component:CreatenewcompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
