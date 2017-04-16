import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommaSeparatedNumberComponent } from './comma-separated-number.component';

describe('CommaSeparatedNumberComponent', () => {
  let component: CommaSeparatedNumberComponent;
  let fixture: ComponentFixture<CommaSeparatedNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommaSeparatedNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommaSeparatedNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
