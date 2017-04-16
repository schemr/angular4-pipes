import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Base64DecodeComponent } from './base64-decode.component';

describe('Base64DecodeComponent', () => {
  let component: Base64DecodeComponent;
  let fixture: ComponentFixture<Base64DecodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Base64DecodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Base64DecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
