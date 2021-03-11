import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/product/service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cartItems: any;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  public getCartItems() {
    // debugger
    // this.cartService.getItems().subscribe(cartItems => {
    // // this.cartItems =  cartItems;
    // console.log(cartItems)
    // });
  }
}
