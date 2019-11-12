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
  
}
