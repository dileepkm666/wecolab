import { Component, OnInit } from '@angular/core';
import {CompanyregisterationService} from '../../services/companyregisteration.service';
import {Company} from './company';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';



@Component({
  selector: 'app-createnewcompany',
  templateUrl: './createnewcompany.component.html',
  styleUrls: ['./createnewcompany.component.css']
})
export class CreatenewcompanyComponent implements OnInit {

  constructor(private register:CompanyregisterationService,private fb:FormBuilder) { }
  dropDownOpen=false;
  companyForm:FormGroup;
  //company;
  ngOnInit() {
    this.companyForm=this.fb.group({
      companyId:['',[Validators.required,Validators.min(100000000000),Validators.max(999999999999)]],
      companyName:['',[Validators.required]],
      emailId:['',[Validators.required,Validators.pattern("^[a-zA-Z_]+[0-9._\\.a-zA-Z]+@[a-z0-9.-]+[\\.]+([a-z]{2,4})$")]],
      phone:['',[Validators.required]],
      password:['',[Validators.required]],
      confirmPassword:['',[Validators.required]],
      termAndCondition:['',[Validators.required]]
    })
  
  }
  get companyId(){return this.companyForm.get('companyId');}
  get companyName(){return this.companyForm.get('companyName');}
  get emailId(){return this.companyForm.get('emailId');}
  get phone(){return this.companyForm.get('phone');}
  get password(){return this.companyForm.get('password');}
  get confirmPassword(){return this.companyForm.get('confirmPassword');}
  get termAndCondition(){return this.companyForm.get('termAndCondition');}
  //company=new Company("1","demo","dileepkm6@gmail.com","111111111","111");
  // registerCompany()
  // {
  //   if(this.register.)
  // }
  dropDown()
  {
    this.dropDownOpen=!this.dropDownOpen;
  }
  company=new Company("1","demo","dileepkm6@gmail.com","111111111","111");
 onRegister()
 {
    this.company=new Company(this.companyId.value,this.companyName.value,this.emailId.value,this.phone.value,this.password.value);
    //this.company=new Company("1","demo","dileepkm6@gmail.com","111111111","111");
    console.log(this.company);
    this.register.registerCompany(this.company).subscribe(
      response => console.log(response.body)
    );
 }
}
