import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
      { 
        path: '' , component: HomeComponent 
      },
      {
        path: 'product' ,
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'account' ,
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
      },

    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
