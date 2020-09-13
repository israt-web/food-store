import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PTileComponent } from './p-tile.component';

describe('PTileComponent', () => {
  let component: PTileComponent;
  let fixture: ComponentFixture<PTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
