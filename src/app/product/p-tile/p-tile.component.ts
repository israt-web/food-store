import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-p-tile',
  templateUrl: './p-tile.component.html',
  styleUrls: ['./p-tile.component.scss']
})
export class PTileComponent implements OnInit {
  product: any = [];
  @Input() mrp: number;
  @Input() id: string;
  @Input() image: string;
 @Input() description: string;
 @Input() name: string;
 @Input() seller: string;
 @Input() sellerLocation: string;
 @Input() subCategories: string;
  listOfLevel2Cards: any[] = [];
  constructor(private prodService: ProductService) { }

  ngOnInit(): void {
    this.prodService.getProduct().subscribe((data) => {
      console.log(data);
      this.product =  data;
    });
    this.image = 'https://inputs.kalgudi.com' + (this.image);
  }

}
