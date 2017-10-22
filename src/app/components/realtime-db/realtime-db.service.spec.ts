import { TestBed, inject } from '@angular/core/testing';

import { RealtimeDbService } from './realtime-db.service';

describe('RealtimeDbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RealtimeDbService]
    });
  });

  it('should be created', inject([RealtimeDbService], (service: RealtimeDbService) => {
    expect(service).toBeTruthy();
  }));
});
