import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppChildComponent } from './app-child/app-child.component';
import { ObservableTestComponent } from './observable-test/observable-test.component';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-test-app';
  things: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  clickCount: number = 6;
  obs: Observable<string>;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [
      {
        data: [1, 2, 3],
        type: 'column',
      },
    ],
  };

  updateClickCount(amt: number) {
    console.log('test');
    console.log(amt);

    this.clickCount += amt;
    // ++this.clickCount
  }

  addNewThing() {
    const newThing = this.things[this.things.length - 1] + 1;
    console.log(newThing);
    this.things.push(newThing);
  }

  deleteLastThing() {
    this.things.pop();
  }
}
