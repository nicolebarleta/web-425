/**
 * Title: sign-in.guard.ts
 * Author: Professor Krasso
 * Date: 18 January 2021
 * Marie Nicole Barleta
 * Description: sign-in guard spec ts file
 */


import { TestBed } from '@angular/core/testing';

import { SignInGuard } from './sign-in.guard';

describe('SignInGuard', () => {
  let guard: SignInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SignInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
