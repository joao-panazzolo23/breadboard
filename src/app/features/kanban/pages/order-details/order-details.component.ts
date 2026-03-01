import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {minArrayLength} from '../../../../core/functions/form-functions';
import {OrderItemsDetailsComponent} from '../../components/order-items-details/order-items-details.component';

@Component({
  selector: 'app-order-details',
  imports: [ReactiveFormsModule, OrderItemsDetailsComponent],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss',
  standalone: true,
})
export class OrderDetailsComponent {
  private fb = inject(FormBuilder);

  orderForm: FormGroup = this.buildOrderForm();


  private buildOrderForm(): FormGroup {
    return this.fb.group({
      customerName: ['', [Validators.required]],
      observations: [''],
      deliveryDate: ['', [Validators.required]],
      hasDeliveryService: [false, Validators.required], //entrega a domicilio
      items: this.fb.nonNullable.array([], minArrayLength(1)),
    })
  }

  private buildOrderItemForm(): FormGroup {
    return this.fb.nonNullable.group({
      id: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      price: [0, Validators.required],
    });
  }

  private buildAddressForm(): FormGroup {
    return this.fb.nonNullable.group({
      street: ['', [Validators.required, Validators.min(2)]],
      number: ['', [Validators.required, Validators.min(2)]],
      neighbourhood: ['', Validators.required],
    });
  }


}
