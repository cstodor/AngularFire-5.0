import { TestBed, inject } from '@angular/core/testing';

import { AngularUniversalService } from './angular-universal.service';

describe('AngularUniversalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularUniversalService]
    });
  });

  it('should be created', inject([AngularUniversalService], (service: AngularUniversalService) => {
    expect(service).toBeTruthy();
  }));
});
