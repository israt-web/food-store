import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';
import { PTileComponent } from './p-tile/p-tile.component';
import { ProductService } from './service/product.service';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [ProductComponent, PTileComponent],
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
    ProductService
  ]
})
export class ProductModule { }
