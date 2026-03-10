import {Component, input} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-order-customer',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './order-customer.component.html',
  styleUrl: './order-customer.component.scss',
  standalone: true
})
export class OrderCustomerComponent {
  customerGroup = input.required<FormGroup>();

  protected isFieldInvalid(field: string): boolean {
    const control = this.customerGroup().get(field);
    if (control == null) return false;
    return (control.touched && control.invalid);
  }
}
