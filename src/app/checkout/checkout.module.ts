import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { CartItemComponent } from './components/cart-item/cart-item.component';



@NgModule({
  declarations: [CheckoutComponent, CartItemComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
