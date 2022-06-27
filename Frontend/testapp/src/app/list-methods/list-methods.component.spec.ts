import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMethodsComponent } from './list-methods.component';

describe('ListMethodsComponent', () => {
  let component: ListMethodsComponent;
  let fixture: ComponentFixture<ListMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMethodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
