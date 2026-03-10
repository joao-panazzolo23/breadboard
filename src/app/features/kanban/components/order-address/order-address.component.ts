import { Component, input } from '@angular/core';
import { FormGroup, ɵInternalFormsSharedModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-order-address',
    imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
    templateUrl: './order-address.component.html',
    styleUrl: './order-address.component.scss',
    standalone: true,
})
export class OrderAddressComponent {
    addressGroup = input.required<FormGroup>();

    protected isFieldInvalid(fieldName: string): boolean {
        const control = this.addressGroup().get(fieldName)
        if (control == null) return false;
        return control.invalid && control.touched
    }
}
