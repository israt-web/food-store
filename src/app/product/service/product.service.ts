import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Products } from 'src/app/project-common/Models/products';

@Injectable()
export class ProductService {

  constructor( private http: HttpClient) { }

  getProduct(): Observable<any> {
    const url = '/assets/data/product.json';

    return this.http.get<any>(url);

    // return this.http.get<any>(url).pipe(
    //   map(response => 
    //     {
    //     for (let i = 0; i < response.length ; i++) {
    //       console.log(response[i].listOfLevel2Cards)
    //       return response[i].listOfLevel2Cards;
    //     }
    //     })
    //     );
    // return this.http.get<any>(url).pipe(
    //  map((response: any []) => {
    //    response = response.map(i =>{
    //      // i.array.map(p => {
    //        //     p.listOfLevel2Cards;
    //        // });
    //        console.log( i.listOfLevel2Cards);
    //        return  i.listOfLevel2Cards;
    //       }

    //       )
    //       return  response.reduce((curr, acc) => {
    //         return acc.concat(curr);
    //       }, [])
    //       debugger
    //  })
    // )
}


public getProductFullViewRoutingPath(product) {
  // debugger
  return [
      '/product',
      this.getEncodedProductName(product.category || 'c'),
      this.getEncodedProductName(product.productName_level3),
      product.productId_level2 + '_' + product.productId_level3
  ];
}


public getEncodedProductName(input: string): string {
  try {
      input = input.replace(/[\(\)\&-\/\\\%\s]/g, '-').replace(/ /g, '-')    // Replaces special characters + spaces with -
          .replace(/[-]{1,}/g, '-');            // Replaces more than one - with single -

      return input.substr(0, (input.lastIndexOf('-') === input.length - 1 ? input.length - 1 : input.length))
          .toLowerCase();                         // Convert the uri to lowercase
  } catch (e) {
      return `-`;
  }
  // return text.replace(/[&\/\\#,+()$~%.'":*?<>{} ]/g, '-').toLowerCase();
}

}
