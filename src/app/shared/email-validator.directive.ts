import { Directive } from '@angular/core';
import { CompanyregisterationService } from '../services/companyregisteration.service';
import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[emailValidator]',
  providers:[{provide:NG_ASYNC_VALIDATORS,useExisting:EmailValidatorDirective,multi:true}]
})
export class EmailValidatorDirective implements AsyncValidator{
  validate(control: AbstractControl): Promise<ValidationErrors> | import("rxjs").Observable<ValidationErrors> {
    return this.companyService.getMember(control.value).pipe(
      map(member=>
        {
          return member ? {'emailValidator':true}:null;
        })
    )
  }

  constructor(private companyService:CompanyregisterationService) { }
  

}
