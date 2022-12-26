import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const _api = 'https://actasalinstante.com:3030';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    return this.http.get(`${_api}/api/user/getFull/`);
  }

  LogIn(username: string, password: string): Observable<any> {
    return this.http.post(`${_api}/api/user/signin/`, { username, password });
  }

  getInfo(): Observable<any> {
    return this.http.get(`${_api}/api/user/myData/`);
  }

}
