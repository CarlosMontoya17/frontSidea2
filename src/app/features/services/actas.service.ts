import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const _api = 'https://actasalinstante.com:3030';
@Injectable({
  providedIn: 'root'
})
export class ActasService {

  constructor(private http: HttpClient) { }

  getDates(): Observable<any> {
    return this.http.get(`${_api}/api/requests/dates`);
  }

  getPeticiones(date: string): Observable<any> {
    return this.http.get(`${_api}/api/get/myRequests/${date}`);
  }

  downloadActa(id: string): Observable<any> {
    return this.http.get(`${_api}/api/services/actas/download/${id}`);
  }

  newRequest(type: any, search: any, data: any, estado: any, preferences: any): Observable<any> {
    return this.http.post(`${_api}/api/services/actas/new/`, { type, search, data, estado, preferences });
  }

}
