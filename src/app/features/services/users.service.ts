import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const _api = "https://actasalinstante.com:3030";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getFull(): Observable<any>{
    return this.http.get(`${_api}/api/user/full/`);
  }

  getOne(id: any): Observable<any> {
    return this.http.get(`${_api}/api/user/getOne/${id}`);
  }


  LogOut(): Observable<any> {
    return this.http.put(`${_api}/api/user/close/`, {});
  }

}
