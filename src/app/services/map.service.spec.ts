/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { MapService } from './map.service';
import {of} from 'rxjs/observable/of';

describe('MapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapService]
    });
  });

  it('should ...', inject([MapService], (service: MapService) => {
    expect(service).toBeTruthy();
  }));

});
