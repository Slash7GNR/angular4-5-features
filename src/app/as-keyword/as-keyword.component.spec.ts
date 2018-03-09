import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsKeywordComponent } from './as-keyword.component';

describe('AsKeywordComponent', () => {
  let component: AsKeywordComponent;
  let fixture: ComponentFixture<AsKeywordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsKeywordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsKeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
