import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPlaceholderComponent } from './img-placeholder.component';

describe('ImgPlaceholderComponent', () => {
  let component: ImgPlaceholderComponent;
  let fixture: ComponentFixture<ImgPlaceholderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgPlaceholderComponent]
    });
    fixture = TestBed.createComponent(ImgPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
