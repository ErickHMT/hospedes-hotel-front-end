import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[formControlName][appPhoneMask]',
})
export class PhoneMaskDirective {

  constructor(public ngControl: NgControl) { }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event) {
    this.onInputChange(event, false);
  }

  @HostListener('keydown.backspace', ['$event'])
  keydownBackspace(event) {
    this.onInputChange(event.target.value, true);
  }

  onInputChange(event, backspace) {
    if (event == null) {
        return;
    }

    let newVal = event.replace(/\D/g, '');
    if (backspace && newVal.length <= 8) {
      newVal = newVal.substring(0, newVal.length - 1);
      this.ngControl.valueAccessor.writeValue(newVal);
      return;
    }
    if (newVal.length === 0) {
      newVal = '';
    } else if (newVal.length <= 3) {
      newVal = newVal.replace(/^(\d{0,2})/, '($1)');
    } else if (newVal.length <= 7) {
      newVal = newVal.replace(/^(\d{0,2})(\d{0,5})/, '($1) $2');
    } else {
      newVal = newVal.substring(0, 11);
      newVal = newVal.replace(/^(\d{0,2})(\d{0,5})(\d{0,4})/, '($1) $2-$3');
    }
    this.ngControl.valueAccessor.writeValue(newVal);
  }
}
