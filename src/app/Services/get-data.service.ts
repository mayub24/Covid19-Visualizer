import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { data } from '../Models/ronaData';

@Injectable({
  providedIn: 'root'
})

// The get, put, post, delete and other requests are all performed in the service.
// This is useful because we can then import the service file into the component.ts and perform different operations

export class GetDataService {

  ronaApi: string = 'https://covid19.mathdro.id/api/countries/canada';
  detailedRonaApi: string = 'https://covid19.mathdro.id/api/countries/canada/confirmed';


  constructor(private http: HttpClient) {

  }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.ronaApi}`);
  }

  getDetailedData(): Observable<any> {
    return this.http.get<any>(`${this.detailedRonaApi}`);
  }



}
