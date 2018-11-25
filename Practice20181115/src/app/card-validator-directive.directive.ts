import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
@Directive({
  selector: '[appCardValidatorDirective][ngModel]',
  providers: [
    {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => CardValidatorDirectiveDirective),
    multi: true
    }
  ]
})
export class CardValidatorDirectiveDirective implements Validator {

  constructor() { }

  validate(c: AbstractControl): { [key: string]: any } {
    if (c.value === '1' || c.value === '0') {
      return null;
    } else {
       return {CardValidatorDirectiveDirective: { valid : false } } ;
    }
  }
}
