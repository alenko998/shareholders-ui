import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelieveComponent } from './believe.component';

describe('BelieveComponent', () => {
  let component: BelieveComponent;
  let fixture: ComponentFixture<BelieveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BelieveComponent]
    });
    fixture = TestBed.createComponent(BelieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
