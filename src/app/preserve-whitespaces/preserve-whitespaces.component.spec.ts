import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreserveWhitespacesComponent } from './preserve-whitespaces.component';

describe('PreserveWhitespacesComponent', () => {
  let component: PreserveWhitespacesComponent;
  let fixture: ComponentFixture<PreserveWhitespacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreserveWhitespacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreserveWhitespacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
