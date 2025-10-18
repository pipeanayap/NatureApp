import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Trail {
    constructor(private httpClient : HttpClient){}

    getAllTrails() : Observable<Trail[]>{
      const result = this.httpClient.get<Trail[]>(`${environment.API_URL}/Trail`);
      return result;
    }
}
