import {Component, input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-order-address',
  imports: [],
  templateUrl: './order-address.component.html',
  styleUrl: './order-address.component.scss',
  standalone: true,
})
export class OrderAddressComponent {
  addressGroup = input.required<FormGroup>();
}
