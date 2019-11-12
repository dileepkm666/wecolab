import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CreatenewcompanyComponent } from './components/createnewcompany/createnewcompany.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AdminhomepageComponent } from './components/adminhomepage/adminhomepage.component';
import { UserhomepageComponent } from './components/userhomepage/userhomepage.component';
import {FormsModule} from '@angular/forms';
import {CompanyregisterationService} from './services/companyregisteration.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreatenewcompanyComponent,
    HomepageComponent,
    LogoutComponent,
    AdminhomepageComponent,
    UserhomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CompanyregisterationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
