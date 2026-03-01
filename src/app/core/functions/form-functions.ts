import { AbstractControl, ValidationErrors } from '@angular/forms';

export function minArrayLength(min: number) {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value.length < min) {
      return { minArrayLength: { required: min, actual: control.value.length } };
    }
    return null;
  };
}
