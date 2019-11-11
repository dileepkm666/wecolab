import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CreatenewteamComponent } from './components/createnewteam/createnewteam.component';
import {SigninService} from './services/signin.service';
import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreatenewteamComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SigninService],
  bootstrap: [AppComponent]
})
export class AppModule { }
