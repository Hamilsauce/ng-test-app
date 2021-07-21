import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppChildComponent } from './app-child/app-child.component';
import { CharacterServiceService } from './services/character-service.service';
import { ObservableTestComponent } from './observable-test/observable-test.component';
import * as Highcharts from 'highcharts';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
	charService: CharacterServiceService;
	seedData: any;
	title: any;
	charType: string;
	constructor(charService: CharacterServiceService) {
		this.charService = charService;
	this.charType = typeof this.seedData;
		this.seedData;
	}
	ngOnInit() {
		this.seedData = this.charService.getSeedData();
		console.log('imit');
		// console.log(this.charService.getSeedData());
	this.title = this.seedData;

	}
	things: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
	clickCount: number = 6;
	obs: Observable < string > ;


	Highcharts: typeof Highcharts = Highcharts;
	chartOptions: Highcharts.Options = {
		series: [
			{
				// data: [1, 2, 3],
				// data: die.map(side => +side.timesRolled),
				type: 'column',
      },
    ],
	};

	// 	type: 'column',
	// data: {
	// 	labels: die.map(side => side.value),
	// 	datasets: [{
	// 		label: 'Totals',
	// 		//TODO replace w dynamic data
	// 		data: die.map(side => +side.timesRolled),
	// 		backgroundColor: ['#473876 ', '#AC4F46', '#358246', '#AC9A46', '#287670', '#A5754A'],
	// 		borderColor: ['#ffffffe0 ', '#ffffffe0', '#ffffffe0', '#ffffffe0', '#ffffffe0', '#ffffffe0'],
	// 		borderWidth: 1
	// 	}]
	// },
	// options: {
	// 	legend: {
	// 		display: false,
	// 		position: 'bottom',
	// 		labels: {
	// 			boxWidth: 0,
	// 			boxHeight: 0,
	// 			color: '#ffffff00'
	// 		}
	// 	},
	// 	scales: {
	// 		xAxes: [{
	// 			display: true,
	// 			scaleLabel: {
	// 				display: true,
	// 				labelString: 'Die Side Value',
	// 				fontColor: '#ffffff',
	// 				fontSize: 12
	// 			},
	// 			ticks: {
	// 				fontColor: '#ffffff',
	// 				fontSize: 12
	// 			},gridLines: {
	// 				color: '#ffffff00'
	// 			},
	// 		}],
	// 		yAxes: [{
	// 			gridLines: {
	// 				color: '#B9C7B090'
	// 			},
	// 				ticks: {
	// 				fontColor: '#ffffff',
	// 					stepSize: 1,
	// 					beginAtZero: true,

	// 				fontSize: 14
	// 			}
	// 		}]
	// 	},
	// }
	// });

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