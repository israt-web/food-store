import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/product/service/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem;
  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

}
