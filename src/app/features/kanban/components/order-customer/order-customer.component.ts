import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ControlsOf } from '../../../../shared/types/forms.types';
import { CustomerDto } from '../../interfaces/customer-dto.interface';

@Component({
  selector: 'app-order-customer',
  imports: [ReactiveFormsModule],
  templateUrl: './order-customer.component.html',
  styleUrl: './order-customer.component.scss',
  standalone: true,
})
export class OrderCustomerComponent {
  customerGroup = input.required<FormGroup<ControlsOf<CustomerDto>>>();
}
