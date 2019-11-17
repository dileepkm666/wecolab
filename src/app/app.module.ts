import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CreatenewcompanyComponent } from './components/createnewcompany/createnewcompany.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AdminhomepageComponent } from './components/adminhomepage/adminhomepage.component';
import { UserhomepageComponent } from './components/userhomepage/userhomepage.component';
import {CompanyregisterationService} from './services/companyregisteration.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BasicAuthHttpInterceptorService} from './services/basic-auth-http-interceptor.service';
import { PasswordValidatorDirective } from './shared/password-validator.directive';
import { EmailValidatorDirective } from './shared/email-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreatenewcompanyComponent,
    HomepageComponent,
    LogoutComponent,
    AdminhomepageComponent,
    UserhomepageComponent,
    PasswordValidatorDirective,
    EmailValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {  
      provide:HTTP_INTERCEPTORS, useClass:BasicAuthHttpInterceptorService, multi:true 
    },
    CompanyregisterationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
