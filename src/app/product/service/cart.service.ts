import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CartService {
  items = new Subject();

  addToCart(product) {
    this.items.next(product);
  }

  getItems() {
    return this.items.asObservable();
  }

  // clearCart() {
  //   this.items = [];
  //   return this.items;
  // }
}
