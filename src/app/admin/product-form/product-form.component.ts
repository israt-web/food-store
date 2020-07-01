import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

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

  categories: Categories[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  categoryFormControl = new FormControl('', [
    Validators.required,

  ]);
  imageUrlFormControl = new FormControl('', [
    Validators.required
  ]);
  titleFormControl = new FormControl('', [
    Validators.required
  ]);

  priceFormControl = new FormControl('', [
    Validators.required
  ]);
  constructor() { }

  ngOnInit() {
  }


}


