import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {
  countdown!: Subscription;
  Counter = new BehaviorSubject<Number>(0);
  Counting = this.Counter.asObservable();
  tick = 1000;

  constructor() { }

  startTimer(count: number): void {
    this.Counter.next(count);
    this.countdown = timer(0, this.tick).subscribe(() => {
      let _current = --count;
      this.Counter.next(_current);
      if(_current == 0) this.countdown.unsubscribe();
    });
  }

  getTimer(): Observable<any> {
    return this.Counting;
  }

}
