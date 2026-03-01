import {Component, inject} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-order-items-details',
  imports: [ReactiveFormsModule],
  templateUrl: './order-items-details.component.html',
  styleUrl: './order-items-details.component.scss',
  standalone: true
})
export class OrderItemsDetailsComponent {
  private search: string | null = null;
  private productService = inject(ProductService)
  protected products$ = this.productService.listAll(1, 5, this.search);

  protected calculateTotal() {

  }


  // protected onProductSelect($index: Number) {
  //   const control = this.items.at(index);
  //   const selectedId = control.get('productId')?.value;
  //   const product = this.products().find(p => p.id === selectedId);
  //
  //   if (product) {
  //     control.patchValue({ price: product.price
  //
  //     }); // auto-fills price
  //   }
  //}
}
