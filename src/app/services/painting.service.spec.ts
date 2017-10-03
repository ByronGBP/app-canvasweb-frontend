import { TestBed, inject } from '@angular/core/testing';

import { PaintingService } from './painting.service';

describe('PaintingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaintingService]
    });
  });

  it('should be created', inject([PaintingService], (service: PaintingService) => {
    expect(service).toBeTruthy();
  }));
});
