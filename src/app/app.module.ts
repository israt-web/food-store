// External Dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Internal Dependencies
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

import {
       FlexLayoutModule,
       LayoutAlignStyleBuilder,
       FlexOffsetStyleBuilder,
       FlexFillStyleBuilder
      } from '@angular/flex-layout';

import {
          StyleUtils,
          StylesheetMap,
          MediaMarshaller,
          ɵMatchMedia,
          BreakPointRegistry,
          PrintHook,
          LayoutStyleBuilder,
          FlexStyleBuilder,
          ShowHideStyleBuilder,
          FlexOrderStyleBuilder,
          LayoutGapStyleBuilder
} from '@angular/flex-layout';
import { SliderModule } from 'angular-image-slider';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AuthGuardService } from './auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import {MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {A11yModule} from '@angular/cdk/a11y';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

// Authentication module
import { AuthenticationRoutingModule } from './authentication/authentication-routing.module';
import { AuthenticationModule } from './authentication/authentication.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    CheckOutComponent,
    NavbarComponent,
    HomeComponent,
    MyOrdersComponent,
    OrderSuccessComponent,
    ProductsComponent,
    ShoppingCartComponent,
    ProductFormComponent
  ],
  entryComponents: [
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // AuthenticationRoutingModule,
    FlexLayoutModule,
    SliderModule,
    FormsModule,
    NgbModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    A11yModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    AuthenticationModule

  ],
  exports: [
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatIconModule,
    SliderModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],

  providers: [
    AuthGuardService,
    StyleUtils,
    StylesheetMap,
    MediaMarshaller,
    ɵMatchMedia,
    BreakPointRegistry,
    PrintHook,
    LayoutStyleBuilder,
    FlexStyleBuilder,
    ShowHideStyleBuilder,
    FlexOrderStyleBuilder,
    LayoutGapStyleBuilder,
    LayoutAlignStyleBuilder,
    FlexOffsetStyleBuilder,
    FlexFillStyleBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
