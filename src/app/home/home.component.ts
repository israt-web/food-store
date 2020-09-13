import { Component, OnInit, ViewChild ,Input} from '@angular/core';
import { ProductService } from '../product/service/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  product: any= [];

  @Input('products') products: any;

  constructor(private prodService: ProductService) { }




  ngOnInit() {
    this.prodService.getProduct().subscribe((data) => {
      console.log(data);
      this.product =  data;
    });

  }


 
}



