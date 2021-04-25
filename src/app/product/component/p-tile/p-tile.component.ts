import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from '../../service/cart.service';
import { ProductService } from '../../service/product.service';
import { BuyNowDialogComponent } from '../buy-now-dialog/buy-now-dialog.component';

@Component({
  selector: 'app-p-tile',
  templateUrl: './p-tile.component.html',
  styleUrls: ['./p-tile.component.scss']
})
export class PTileComponent implements OnInit {
  @Input() product: any;

  constructor(
    private prodService: ProductService,
    private dialog: MatDialog,
    private cartService: CartService,
    private snackbar: MatSnackBar) { }

  ngOnInit(): void {

  }


  public openDialog() {
    this.dialog.open(BuyNowDialogComponent, {
      width: '600px',
      data: this.product
    });
  }

  get productPath() {
    return this.prodService.getProductFullViewRoutingPath(this.product);
  }

  getOfferPercent(product) {
    const mrp = product.mrp;
    const price = product.pricePerSKU;

    return 100 - ((100 * price) / mrp);

  }

  public addToCart() {
    this.cartService.addToCart(this.product);
    const name = this.product.productName_level2;
    this.snackbar.open(`${name} added to cart`, '', {
      duration: 5000
    });
  }

}
