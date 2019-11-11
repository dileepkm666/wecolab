import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http:HttpClient) { }
  signIn(emailId:string,password:string) :Observable<any>
  {
    return this.http.post('http://localhost:8888/sign',{"emailId":emailId,"password":password});
  }
}
