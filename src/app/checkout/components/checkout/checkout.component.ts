import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/product/service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cartItems: any;
  constructor() { }

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('productsInCart'));
    this.cartItems = cartItems;
    console.log(cartItems);
  }
}
