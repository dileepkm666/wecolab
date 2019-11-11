import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component'
import {CreatenewteamComponent} from './components/createnewteam/createnewteam.component';
import {HomepageComponent} from './components/homepage/homepage.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'signIn',component:LoginComponent},
  {path:'newteam',component:CreatenewteamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
