import { AbstractControl, ValidationErrors } from '@angular/forms';

export function minArrayLength(min: number) {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value.length < min) {
      return { minArrayLength: { required: min, actual: control.value.length } };
    }
    return null;
  };
}

export function phoneValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) return null;

  const cleaned = control.value.replace(/[\s\-\(\)]/g, '');

  const valid = /^(\+55)?[1-9]{2}9?[0-9]{8}$/.test(cleaned);

  return valid ? null : { invalidPhone: true };
}
