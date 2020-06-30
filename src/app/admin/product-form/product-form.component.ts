import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  // checkoutForm : FormGroup = new FormGroup({
  //   name: new FormControl(),
  //   email: new FormControl()
  // });
  // // checkoutForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }


}


