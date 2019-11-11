import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamregistrationService {

  constructor(private http:HttpClient) { }
  registerTeam(teamName,emailId,phone,aadharNumber,password,confirm_password)
  {
    return this.http.post<any>('http:localhost:8888/registerTeam',{'teamName':teamName,'emailId':emailId,'phone':phone,'aadharNumber':aadharNumber,'password':password,'confirm-password':confirm_password});
  }
}
