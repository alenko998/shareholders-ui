import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexibleComponent } from './flexible.component';

describe('FlexibleComponent', () => {
  let component: FlexibleComponent;
  let fixture: ComponentFixture<FlexibleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlexibleComponent]
    });
    fixture = TestBed.createComponent(FlexibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
