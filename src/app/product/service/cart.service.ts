import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable()
export class CartService {
  private itemsSubject = new BehaviorSubject<any[]>([]);
  items$ = this.itemsSubject.asObservable();

  constructor() {
    let cartItems = JSON.parse(localStorage.getItem('productsInCart'));
    if (!cartItems) {
      cartItems = []
    }
    this.itemsSubject.next(cartItems);
  }
  public addToCart(item) {
    // debugger
    this.items$.pipe(
      take(1),
      map((product => {
        product.push((item));
        localStorage.setItem('productsInCart', JSON.stringify(product));
      }
      ))
    ).subscribe();

  }

}
