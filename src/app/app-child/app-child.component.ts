import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.css'],
})
export class AppChildComponent implements OnInit {
  // @Output() clickEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() clickEvent = new EventEmitter<number>();
  @Input() clickCount: number;
  clickTotal: number = 0;

  handleClick() {
    const newTotal: number = ++this.clickTotal;
    console.log('newTotal');
    console.log(newTotal);

    this.clickEvent.emit(newTotal);
  }

  constructor() {}

  ngOnInit(): void {
    console.log('sup');
  }
}
