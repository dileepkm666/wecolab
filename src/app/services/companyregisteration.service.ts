import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../components/createnewcompany/company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyregisterationService {

  constructor(private _http:HttpClient) { }
  registerCompany(company:Company) :Observable<any>
  {
    console.log(company);
    return this._http.post<any>("http://localhost:8888/api/v1/company/registerCompany",company);
  }
  getAllMember()
  {
    return this._http.get<any>("http://localhost:8888/api/v1/company/members");
  }
  addMember(emailId:string)
  {
    this._http.post<any>("http://localhost:8888/api/v1/company/addMember",{emailId});
  }
  deleteMember(emailId:string)
  {
    this._http.delete<any>("http://localhost:8888/api/v1/company/deleteMember?emailId="+emailId);
  }
  getMember(emailId:string)
  {
    return this._http.get<any>("http://localhost:8888/api/v1/getMember?emailId="+emailId);
  }
}
