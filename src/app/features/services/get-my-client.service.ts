import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const _api =  "https://actasalinstante.com:3030";

@Injectable({
  providedIn: 'root'
})
export class GetMyClientService {

  constructor(private http: HttpClient) { }

  getMyClient():Observable<any>{
   return this.http.get(`${_api}/api/user/getMyClients/`)
  }
}
