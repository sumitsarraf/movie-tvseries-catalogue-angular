/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlayboxService } from './playbox.service';

describe('Service: Playbox', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayboxService]
    });
  });

  it('should ...', inject([PlayboxService], (service: PlayboxService) => {
    expect(service).toBeTruthy();
  }));
});
