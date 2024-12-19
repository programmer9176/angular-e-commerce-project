import { TestBed } from '@angular/core/testing';

import { SellerGuardsGuard } from './seller-guards.guard';

describe('SellerGuardsGuard', () => {
  let guard: SellerGuardsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SellerGuardsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
