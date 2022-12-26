import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const _api = 'https://actasalinstante.com:3030';
@Injectable({
  providedIn: 'root'
})
export class RobotsService {

  constructor(private http: HttpClient) { }

  
  GetRobots_SID(): Observable<any> {
    return this.http.get(_api+"/api/robotsUsage/get/all/");
  }

  UpNewInstruction(instruction:any, name:any){
    return this.http.post(`${_api}/api/robotsUsage/controller/instruction/new/`, {name, instruction});
  }

  UpNewInstruction_SIDS( name:any){
   
    return this.http.put(`${_api}/api/robotsUsage/remove/token/`, {name});
  }
}
