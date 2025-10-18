import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Place } from '../models/place.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
 
  constructor(private httpClient: HttpClient) {}

  getAllPlaces() : Observable<Place[]> {
    const result = this.httpClient.get<Place[]>(`${environment.API_URL}/Place`);
    return result;
  }

  getPlaceById(id: number): Observable<Place> {
    return this.httpClient.get<Place>(`${environment.API_URL}/Place/${id}`);
  }

}
