import {Directive, Inject, forwardRef} from '@angular/core';
import {NG_VALIDATORS, FormControl, Validator} from '@angular/forms';
import {NgxCurrency, NgxCurrencyConfig} from './ngx-currency';

function validateNumberFactory(config: NgxCurrencyConfig) {
  return (control: FormControl) => {
    const value: any = control.value;
    if (NgxCurrency.isValid(value) === true && NgxCurrency.isNumeric(value) === false) {
      return {
        ngCurrencyValidator: {
          notANumber: config.message
        }
      };
    }
    return null;
  };
}

@Directive({
  selector: '[ngxNumberValidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NgxNumberValidatorDirective),
      multi: true
    }
  ]
})
export class NgxNumberValidatorDirective implements Validator {

  validator: Function;

  constructor(@Inject('ngxCurrencyConfig') config: NgxCurrencyConfig) {
    this.validator = validateNumberFactory(config);
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

}
