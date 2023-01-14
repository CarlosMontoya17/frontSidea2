import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor() { }

  Join(name: any): void {
    // this.socket.emit("user", name);
  }
}
