import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkifyComponent } from './linkify.component';

describe('LinkifyComponent', () => {
  let component: LinkifyComponent;
  let fixture: ComponentFixture<LinkifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
