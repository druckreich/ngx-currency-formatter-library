import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCurrencyFormatterComponent } from './ngx-currency-formatter.component';

describe('NgxCurrencyFormatterComponent', () => {
  let component: NgxCurrencyFormatterComponent;
  let fixture: ComponentFixture<NgxCurrencyFormatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCurrencyFormatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCurrencyFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
