import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductRoutingModule } from './product-routing.module';
import { ProductService } from './service/product.service';
import { MaterialModule } from '../material/material.module';
import { PTileComponent } from './component/p-tile/p-tile.component';
import { ProductComponent } from './component/product/product.component';
import { BuyNowDialogComponent } from './component/buy-now-dialog/buy-now-dialog.component';
import { ProductFullViewComponent } from './component/product-full-view/product-full-view.component';
import { CartService } from './service/cart.service';



@NgModule({
  declarations: [ProductComponent, PTileComponent, BuyNowDialogComponent, ProductFullViewComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    ProductRoutingModule
  ],
  exports: [
    PTileComponent
  ],
  providers: [
    ProductService,
    CartService
  ],
  entryComponents: [
    BuyNowDialogComponent
  ]
})
export class ProductModule { }
