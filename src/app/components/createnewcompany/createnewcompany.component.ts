import { Component, OnInit } from '@angular/core';
import {CompanyregisterationService} from '../../services/companyregisteration.service';
import {Company} from './company';


@Component({
  selector: 'app-createnewcompany',
  templateUrl: './createnewcompany.component.html',
  styleUrls: ['./createnewcompany.component.css']
})
export class CreatenewcompanyComponent implements OnInit {

  constructor(private register:CompanyregisterationService) { }
  dropDownOpen=false;
  ngOnInit() {
  }
  company=new Company("1","demo","dileepkm6@gmail.com","111111111","111");
  // registerCompany()
  // {
  //   if(this.register.)
  // }
  dropDown()
  {
    this.dropDownOpen=!this.dropDownOpen;
  }
 onRegister()
 {
   console.log(this.company);
    this.register.registerCompany(this.company).subscribe(
      response => console.log(response)
    );
 }
}
