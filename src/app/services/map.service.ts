import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {combineLatest} from 'rxjs/observable/combineLatest';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable()
export class MapService {

  constructor(private http: Http) { }

  private getCoordinatesGoogle(address: string) {
    const url = `${environment.baseUrl}${environment.endpoint.google}?search=${address}`;
    return this.http.get(url).pipe(map((res: any) => {
      return res.json();
    }));
  }

  private getCoordinatesOpenStreet(address: string) {
    const url = `${environment.baseUrl}${environment.endpoint.openStreet}?search=${address}`;
    return this.http.get(url).pipe(map((res: any) => {
      return res.json();
    }));
  }

  getCoordinates(address: string) {
    const openStreet$ = this.getCoordinatesOpenStreet(address);
    const google$     = this.getCoordinatesGoogle(address);
    return combineLatest(openStreet$, google$);
  }

}
