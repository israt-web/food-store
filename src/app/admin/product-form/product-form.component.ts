import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

interface Categories {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  selectedValue: string;




  productForm: FormGroup;
  title: FormControl;
  price: FormControl;
  category: FormControl;
  imageURL: FormControl;

  categories: Categories[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  constructor(public formBuilder: FormBuilder) {

    this.productForm = this.formBuilder.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', [Validators.required, Validators.minLength(10)]],
      // imageURL: ['', [Validators.required, Validators.minLength(10)]]

    });


   }

  ngOnInit() {

  }


}


