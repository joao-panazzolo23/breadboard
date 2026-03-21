import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { OrderItemsDetailsComponent } from '../../components/order-items-details/order-items-details.component';
import { OrderCustomerComponent } from '../../components/order-customer/order-customer.component';
import { OrderAddressComponent } from '../../components/order-address/order-address.component';
import { OrderService } from '../../services/order.service';
import { ActivatedRoute } from '@angular/router';
import { ControlsOf } from '../../../../shared/types/forms.types';
import { CustomerDto } from '../../interfaces/customer-dto.interface';
import { OrderProduct } from '../../interfaces/product-interface';
import { AddressDto } from '../../interfaces/address-dto.interface';

@Component({
  selector: 'app-order-details',
  imports: [
    ReactiveFormsModule,
    OrderItemsDetailsComponent,
    OrderCustomerComponent,
    OrderAddressComponent,
  ],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss',
  standalone: true,
})
export class OrderDetailsComponent implements OnInit {
  private id: string | undefined = undefined;
  private orderService = inject(OrderService);
  private fb = inject(FormBuilder);
  protected customerForm = this.buildCustomerForm();
  protected addressForm = this.buildAddressForm();
  protected itemsForm = this.fb.nonNullable.array([this.buildOrderItemForm()]);
  protected orderForm = this.buildOrderForm();
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
    });
  }

  private buildOrderForm(): FormGroup {
    return this.fb.group({
      customer: this.customerForm,
      address: this.addressForm,
      items: this.itemsForm,
    });
  }

  private buildOrderItemForm(): FormGroup<ControlsOf<OrderProduct>> {
    return this.fb.nonNullable.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      code: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      price: [0, Validators.required],
    });
  }

  private buildAddressForm(): FormGroup<ControlsOf<AddressDto>> {
    return this.fb.nonNullable.group({
      street: ['', [Validators.required, Validators.min(2)]],
      number: [
        '',
        [
          Validators.required,
          Validators.min(2),
          Validators.pattern(/^[0-9]+$/),
        ],
      ],
      neighbourhood: ['', Validators.required],
      reference: [''],
    });
  }

  private buildCustomerForm(): FormGroup<ControlsOf<CustomerDto>> {
    return this.fb.nonNullable.group({
      id: [''],
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.email],
    });
  }

  protected saveOrder() {
    if (this.orderForm.invalid) {
      this.orderForm.markAsTouched();
      return;
    }
    if (this.orderForm) {
      //salvar ou atualizar
    }
  }
}
