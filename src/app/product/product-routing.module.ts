

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { PTileComponent } from './p-tile/p-tile.component';


const prodRoutes: Routes = [
  {
    path: 'product' ,
    component: ProductComponent,
    children: [
      {
        path: 'product-list',
        component: PTileComponent
      }
    ]
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( prodRoutes),
  ],
  exports: [
    RouterModule
  ],
})
export class ProductRoutingModule { }
