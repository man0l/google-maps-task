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

  it('should call and return google maps coordinates', inject([MapService], (service: MapService) => {
    const data = of({
      address: '1 Hacker Way, Menlo Park, CA 94025, USA',
      latitude: '37.485073',
      longitude: '-122.1482824'
    });
     const spyOSM    = spyOn(service, 'getCoordinatesOpenStreet').and.returnValue(data);
     const spyGoogle = spyOn(service, 'getCoordinatesGoogle').and.returnValue(data);

     expect(service.getCoordinates('any')).toBe([data, data]);
  }));
});
