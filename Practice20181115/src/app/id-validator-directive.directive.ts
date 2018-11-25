import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appIdValidatorDirective][ngModel]',
  providers: [
    {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => IdValidatorDirectiveDirective),
    multi: true
    }
  ]
})
export class IdValidatorDirectiveDirective implements Validator {

  constructor() { }

  validate(c: AbstractControl): { [key: string]: any } {
    const regex = /^[A-Z]{1}[1-2]{1}[0-9]{8}$/;
    if (c.value === '') {
      return null;
    }
    return regex.test(c.value) ? null : {appIdValidatorDirective: { valid : false } } ;
  }
}

