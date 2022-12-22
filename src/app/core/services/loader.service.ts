import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private LOADER = new Subject<boolean>();
  STATE$ = this.LOADER.asObservable();

  constructor() {}

  visble(status: boolean) {
    this.LOADER.next(status);
  }
}
