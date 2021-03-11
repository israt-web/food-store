

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { PTileComponent } from './component/p-tile/p-tile.component';
import { ProductComponent } from './component/product/product.component';
import { ProductFullViewComponent } from './component/product-full-view/product-full-view.component';



const prodRoutes: Routes = [
  {
    path: '' ,
    component: ProductComponent,
    children: [
      {
        path: 'product-list',
        component: PTileComponent
      },
      {
        path: ':categoryId/:productName/:productId',
        component: ProductFullViewComponent
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
