import { TestBed } from '@angular/core/testing';

import { YellowGuardGuard } from './yellow-guard.guard';

describe('YellowGuardGuard', () => {
  let guard: YellowGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(YellowGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
