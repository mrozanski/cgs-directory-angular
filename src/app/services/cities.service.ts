import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface City {
  city_name: string;
}
export interface Cities {
  cities: City[];
}

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: HttpClient) {
  }

  getAllCities() {
    return this.http.get<Cities>(`${environment.dataUrl}cities.json`);
  }

}