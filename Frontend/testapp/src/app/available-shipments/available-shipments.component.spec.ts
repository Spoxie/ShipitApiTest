import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableShipmentsComponent } from './available-shipments.component';

describe('AvailableShipmentsComponent', () => {
  let component: AvailableShipmentsComponent;
  let fixture: ComponentFixture<AvailableShipmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableShipmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
