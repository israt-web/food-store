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
  public addToCart(item: any) {
    this.items$.pipe(
      take(1),
      map((product => {

        const existingProduct = product.find(({ productName_level2 }) => item.productName_level2 === productName_level2);
        if (existingProduct) {
          existingProduct.productQuantity += 1;
          return;
        } else {
          product.push({
            ...item,
            productQuantity: 1

          });
        }

        localStorage.setItem('productsInCart', JSON.stringify(product));
      }
      ))
    ).subscribe();

  }

}
