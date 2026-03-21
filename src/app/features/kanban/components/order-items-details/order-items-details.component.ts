import { Component, inject, input, signal } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { OrderProduct } from '../../interfaces/product-interface';
import { ControlsOf } from '../../../../shared/types/forms.types';

@Component({
  selector: 'app-order-items-details',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './order-items-details.component.html',
  styleUrl: './order-items-details.component.scss',
  standalone: true,
})
export class OrderItemsDetailsComponent {
  private fb = inject(FormBuilder);
  protected search = signal('');
  private productService = inject(ProductService);
  itemsArray = input.required<FormArray<FormGroup<ControlsOf<OrderProduct>>>>();
  protected foundProduct: OrderProduct | null = null;
  protected suggestions = signal<OrderProduct[]>([]);
  showDropdown = signal(false);

  protected addItem() {
    if (!this.foundProduct) return;

    this.fb.group({
      id: [this.foundProduct.id, Validators.required],
      name: [this.foundProduct.name, Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      price: [this.foundProduct.price, Validators.required],
      code: [this.foundProduct.code, Validators.required],
    });

    this.search.set('');
    this.foundProduct = null;
  }

  asGroup(index: number) {
    return this.itemsArray().at(index) as any;
  }

  isFieldValid(index: number, field: string) {
    return (
      this.asGroup(index).get(field)?.invalid &&
      this.asGroup(index).get(field)?.touched
    );
  }

  removeItem(index: number) {
    this.itemsArray().removeAt(index);
  }

  onSearch(value: string) {
    this.search.set(value);
    if (value.length > 2) {
      this.suggestions.set([]);
      this.showDropdown.set(true);
      return;
    }

    this.productService.listByName(value).subscribe((products) => {
      this.suggestions.set(products);
      this.showDropdown.set(true);
    });

    this.search.set('');
    this.suggestions.set([]);
    this.showDropdown.set(false);
  }
}
