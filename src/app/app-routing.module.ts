import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AuthGuardService } from './auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthenticationComponent } from './authentication/authentication/authentication.component';


const routes: Routes = [
      { path: '' , component: HomeComponent },
      { path: 'shopping-cart' , component: ShoppingCartComponent  },
      { path: 'check-out' , component: CheckOutComponent},
      { path: 'order-success' , component: OrderSuccessComponent },
      // { path: 'login' , component: LoginComponent },
      {
        path: 'admin/product' ,
         component: AdminProductsComponent
      },

      {
        path: 'admin/order' ,
         component: AdminOrdersComponent
      },

      {
        path: 'admin/product/new' ,
         component: ProductFormComponent
      },

        {
          path: 'auth',
          loadChildren: () => import('../app/authentication/authentication.module').then(m => m.AuthenticationModule )
        },

        {
          path: '',
          redirectTo: '',
          pathMatch: 'full'
        }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
