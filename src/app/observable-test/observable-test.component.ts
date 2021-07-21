import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { take, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-observable-test',
  templateUrl: './observable-test.component.html',
  styleUrls: ['./observable-test.component.css'],
})
export class ObservableTestComponent implements OnInit {
  data: Observable<string>;
  fruits: string[] = [];
  anyErrors: boolean;
  finished: boolean;
  ints: Number[];
  obsInterval: Observable<any>;
  constructor() {}
  ngOnInit() {
    // this.start()
  }

  intervalFn() {
    let numb = 0;
    this.obsInterval = interval(1000).pipe(
      take(5)

      // this.ints.push(numb + 1)
    );
  }

  start() {
    console.log('start');

    this.data = new Observable((observer) => {
      setTimeout(() => {
        observer.next('Apple');
      }, 1000);

      setTimeout(() => {
        observer.next('mango');
      }, 2000);
      setTimeout(() => {
        observer.next('Orannge');
      }, 3000);
      setTimeout(() => {
        observer.complete();
      }, 4000);
    });
    let subscription = this.data.subscribe(
      (fruit) => this.fruits.push(fruit),
      (error) => (this.anyErrors = false),
      () => (this.finished = true)
    );
  }
}
