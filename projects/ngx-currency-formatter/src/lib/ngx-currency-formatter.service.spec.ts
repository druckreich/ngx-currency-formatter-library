import { TestBed } from '@angular/core/testing';

import { NgxCurrencyFormatterService } from './ngx-currency-formatter.service';

describe('NgxCurrencyFormatterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxCurrencyFormatterService = TestBed.get(NgxCurrencyFormatterService);
    expect(service).toBeTruthy();
  });
});
