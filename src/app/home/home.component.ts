import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ProductService } from '../product/service/product.service';
import { Products } from '../project-common/Models/products';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public product: any[];

  constructor(
    private prodService: ProductService
  ) {

  }

  ngOnInit() {
    this.getAllProductList();
  }

  /**
   * Get all products
   */

  public getAllProductList() {
    // debugger
    this.prodService.getProduct().subscribe(response => {
      this.product = response.data;
      console.log(this.product)
    });
  }

}



