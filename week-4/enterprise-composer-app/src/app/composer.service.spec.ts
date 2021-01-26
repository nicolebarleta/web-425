/**
; Title:  composer.service.spec.ts
; Author: Professor Krasso
; Date: 25 January 2021
; Modified By: Marie Nicole Barleta
; Description: Composer service spec component
;===========================================
*/

import { TestBed } from '@angular/core/testing';

import { ComposerService } from './composer.service';

describe('ComposerService', () => {
  let service: ComposerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
