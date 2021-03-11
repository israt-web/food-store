import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-buy-now-dialog',
  templateUrl: './buy-now-dialog.component.html',
  styleUrls: ['./buy-now-dialog.component.scss']
})
export class BuyNowDialogComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
