
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthGuard } from '../service/auth.guard';


const checkoutRoutes: Routes = [
    {
        path: '' , component: CheckoutComponent, canActivate: [AuthGuard]   }
];
@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(checkoutRoutes)
    ],
    exports: [
      RouterModule
    ],
    declarations: []
  })
  export class CheckoutRoutingModule { }
