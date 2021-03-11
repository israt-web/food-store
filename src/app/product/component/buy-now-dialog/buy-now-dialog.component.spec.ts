import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyNowDialogComponent } from './buy-now-dialog.component';

describe('BuyNowDialogComponent', () => {
  let component: BuyNowDialogComponent;
  let fixture: ComponentFixture<BuyNowDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyNowDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyNowDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
