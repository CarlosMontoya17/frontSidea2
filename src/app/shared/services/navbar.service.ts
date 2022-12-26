import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const api = 'https://actasalinstante.com:3030';
@Injectable({
  providedIn: 'root'
})

export class NavbarService {

  constructor(private http:HttpClient) { }

  getImage(): Observable<Blob> {
    return this.http.get(api + '/api/user/avatar/', {
      responseType: 'blob'
    });
  }

  upImage(image:any):Observable<any>{
    return this.http.post(api + '/api/user/avatar/up/'+image, {
      responseType: 'blob'
    });
  }
}
