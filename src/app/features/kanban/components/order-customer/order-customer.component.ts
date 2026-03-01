import {Component, input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-order-customer',
  imports: [],
  templateUrl: './order-customer.component.html',
  styleUrl: './order-customer.component.scss',
  standalone: true
})
export class OrderCustomerComponent {
  customerGroup = input.required<FormGroup>();
}
