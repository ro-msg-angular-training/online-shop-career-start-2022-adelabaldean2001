import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsDetailComponent } from './list-products-detail.component';

describe('ListProductsDetailComponent', () => {
  let component: ListProductsDetailComponent;
  let fixture: ComponentFixture<ListProductsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProductsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
