import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CharacterServiceService {
	seedData: any;
	constructor() {
		this.seedData = JSON.parse(`
  		[
  {
    "name": "Donkey Kong",
    "imgsrc": "https://img.rankedboost.com/wp-content/uploads/2018/06/thumb-dk-1.png",
    "die": [
      {
        "timesRolled": 0,
        "value": "+5c"
      },
      {
        "timesRolled": 0,
        "value": "0"
      },
      {
        "timesRolled": 0,
        "value": "0"
      },
      {
        "timesRolled": 0,
        "value": "0"
      },
      {
        "timesRolled": 0,
        "value": "10"
      },
      {
        "timesRolled": 0,
        "value": "10"
      }
    ],
    "rank": "S",
    "id": 1
  },
  {
    "name": "Bowser",
    "imgsrc": "https://img.rankedboost.com/wp-content/uploads/2018/06/thumb-bowser.png",
    "die": [
      {
        "timesRolled": 0,
        "value": "-3c"
      },
      {
        "timesRolled": 0,
        "value": "-3c"
      },
      {
        "timesRolled": 0,
        "value": "1"
      },
      {
        "timesRolled": 0,
        "value": "8"
      },
      {
        "timesRolled": 0,
        "value": "9"
      },
      {
        "timesRolled": 0,
        "value": "10"
      }
    ],
    "rank": "S",
    "id": 2
  },
  {
    "name": "Boo",
    "imgsrc": "https://img.rankedboost.com/wp-content/uploads/2018/06/thumb-boo.png",
    "die": [
      {
        "timesRolled": 0,
        "value": "-2c"
      },
      {
        "timesRolled": 0,
        "value": "-2c"
      },
      {
        "timesRolled": 0,
        "value": "5"
      },
      {
        "timesRolled": 0,
        "value": "5"
      },
      {
        "timesRolled": 0,
        "value": "7"
      },
      {
        "timesRolled": 0,
        "value": "7"
      }
    ],
    "rank": "S",
    "id": 3
  },
  {
    "name": "Wario",
    "imgsrc": "https://img.rankedboost.com/wp-content/uploads/2018/06/thumb-wario.png",
    "die": [
      {
        "timesRolled": 0,
        "value": "6"
      },
      {
        "timesRolled": 0,
        "value": "6"
      },
      {
        "timesRolled": 0,
        "value": "6"
      },
      {
        "timesRolled": 0,
        "value": "6"
      },
      {
        "timesRolled": 0,
        "value": "-2c"
      },
      {
        "timesRolled": 0,
        "value": "-2c"
      }
    ],
    "rank": "S",
    "id": 4
  },
  {
    "name": "Peach",
    "imgsrc": "https://img.rankedboost.com/wp-content/uploads/2018/06/thumb-peach.png",
    "die": [
      {
        "timesRolled": 0,
        "value": "0"
      },
      {
        "timesRolled": 0,
        "value": "2"
      },
      {
        "timesRolled": 0,
        "value": "4"
      },
      {
        "timesRolled": 0,
        "value": "4"
      },
      {
        "timesRolled": 0,
        "value": "4"
      },
      {
        "timesRolled": 0,
        "value": "6"
      }
    ],
    "rank": "A",
    "id": 5
  },
  {
    "name": "Daisy",
    "imgsrc": "https://img.rankedboost.com/wp-content/uploads/2018/06/thumb-daisy-1.png",
    "die": [
      {
        "timesRolled": 0,
        "value": "3"
      },
      {
        "timesRolled": 0,
        "value": "3"
      },
      {
        "timesRolled": 0,
        "value": "3"
      },
      {
        "timesRolled": 0,
        "value": "3"
      },
      {
        "timesRolled": 0,
        "value": "4"
      },
      {
        "timesRolled": 0,
        "value": "4"
      }
    ],
    "rank": "A",
    "id": 6
  },
  {
    "name": "Dry Bones",
    "imgsrc": "https://img.rankedboost.com/wp-content/uploads/2018/06/thumb-drybones.png",
    "die": [
      {
        "timesRolled": 0,
        "value": "1"
      },
      {
        "timesRolled": 0,
        "value": "1"
      },
      {
        "timesRolled": 0,
        "value": "1"
      },
      {
        "timesRolled": 0,
        "value": "6"
      },
      {
        "timesRolled": 0,
        "value": "6"
      },
      {
        "timesRolled": 0,
        "value": "6"
      }
    ],
    "rank": "A",
    "id": 7
  },
  {
    "name": "Pom Pom",
    "imgsrc": "https://img.rankedboost.com/wp-content/uploads/2018/06/thumb-pompom.png",
    "die": [
      {
        "timesRolled": 0,
        "value": "0"
      },
      {
        "timesRolled": 0,
        "value": "3"
      },
      {
        "timesRolled": 0,
        "value": "3"
      },
      {
        "timesRolled": 0,
        "value": "3"
      },
      {
        "timesRolled": 0,
        "value": "3"
      },
      {
        "timesRolled": 0,
        "value": "8"
      }
    ],
    "rank": "A",
    "id": 8
  },
  {
    "name": "Mario",
    "imgsrc": "https://img.rankedboost.com/wp-content/uploads/2018/06/thumb-mario.png",
    "die": [
      {
        "timesRolled": 0,
        "value": "1"
      },
      {
        "timesRolled": 0,
        "value": "3"
      },
      {
        "timesRolled": 0,
        "value": "3"
      },
      {
        "timesRolled": 0,
        "value": "3"
      },
      {
        "timesRolled": 0,
        "value": "5"
      },
      {
        "timesRolled": 0,
        "value": "6"
      }
    ],
    "rank": "B",
    "id": 9
  },
  {
    "name": "Luigi",
    "imgsrc": "https://img.rankedboost.com/wp-content/uploads/2018/06/thumb-luigi.png",
    "die": [
      {
        "timesRolled": 0,
        "value": "1"
      },
      {
        "timesRolled": 0,
        "value": "1"
      },
      {
        "timesRolled": 0,
        "value": "1"
      },
      {
        "timesRolled": 0,
        "value": "5"
      },
      {
        "timesRolled": 0,
        "value": "6"
      },
      {
        "timesRolled": 0,
        "value": "7"
      }
    ],
    "rank": "B",
    "id": 10
  },
  {
    "name": "Waluigi",
    "imgsrc": "https://img.rankedboost.com/wp-content/uploads/2018/06/thumb-waluigi.png",
    "die": [
      {
        "timesRolled": 0,
        "value": "-3c"
      },
      {
        "timesRolled": 0,
        "value": "1"
      },
      {
        "timesRolled": 0,
        "value": "3"
      },
      {
        "timesRolled": 0,
        "value": "5"
      },
      {
        "timesRolled": 0,
        "value": "5"
      },
      {
        "timesRolled": 0,
        "value": "7"
      }
    ],
    "rank": "B",
    "id": 11
  },
  {
    "name": "Goomba",
    "imgsrc": "https://img.rankedboost.com/wp-content/uploads/2018/06/thumb-goomba.png",
    "die": [
      {
        "timesRolled": 0,
        "value": "+2c"
      },
      {
        "timesRolled": 0,
        "value": "+2c"
      },
      {
        "timesRolled": 0,
        "value": "3"
      },
      {
        "timesRolled": 0,
        "value": "4"
      },
      {
        "timesRolled": 0,
        "value": "5"
      },
      {
        "timesRolled": 0,
        "value": "6"
      }
    ],
    "rank": "B",
    "id": 12
  },
  {
    "name": "Bowser Jr.",
    "imgsrc": "https://img.rankedboost.com/wp-content/uploads/2018/06/thumb-bowserjr.png",
    "die": [
      {
        "timesRolled": 0,
        "value": "1"
      },
      {
        "timesRolled": 0,
        "value": "1"
      },
      {
        "timesRolled": 0,
        "value": "1"
      },
      {
        "timesRolled": 0,
        "value": "4"
      },
      {
        "timesRolled": 0,
        "value": "4"
      },
      {
        "timesRolled": 0,
        "value": "9"
      }
    ],
    "rank": "B",
    "id": 13
  },
  {
    "name": "Rosalina",
    "imgsrc": "https://img.rankedboost.com/wp-content/uploads/2018/06/thumb-rosalina.png",
    "die": [
      {
        "timesRolled": 0,
        "value": "+2c"
      },
      {
        "timesRolled": 0,
        "value": "+2c"
      },
      {
        "timesRolled": 0,
        "value": "2"
      },
      {
        "timesRolled": 0,
        "value": "3"
      },
      {
        "timesRolled": 0,
        "value": "4"
      },
      {
        "timesRolled": 0,
        "value": "8"
      }
    ],
    "rank": "C",
    "id": 14
  },
  {
    "name": "Diddy Kong",
    "imgsrc": "https://img.rankedboost.com/wp-content/uploads/2018/06/thumb-diddy.png",
    "die": [
      {
        "timesRolled": 0,
        "value": "0"
      },
      {
        "timesRolled": 0,
        "value": "0"
      },
      {
        "timesRolled": 0,
        "value": "0"
      },
      {
        "timesRolled": 0,
        "value": "7"
      },
      {
        "timesRolled": 0,
        "value": "7"
      },
      {
        "timesRolled": 0,
        "value": "7"
      }
    ],
    "rank": "C",
    "id": 15
  },
  {
    "name": "MontyMole",
    "imgsrc": "https://img.rankedboost.com/wp-content/uploads/2018/06/thumb-monty.png",
    "die": [
      {
        "timesRolled": 0,
        "value": "+1c"
      },
      {
        "timesRolled": 0,
        "value": "2"
      },
      {
        "timesRolled": 0,
        "value": "3"
      },
      {
        "timesRolled": 0,
        "value": "4"
      },
      {
        "timesRolled": 0,
        "value": "5"
      },
      {
        "timesRolled": 0,
        "value": "6"
      }
    ],
    "rank": "D",
    "id": 16
  },
  {
    "name": "Shy Guy",
    "imgsrc": "https://img.rankedboost.com/wp-content/uploads/2018/06/thumb-shyguy.png",
    "die": [
      {
        "timesRolled": 0,
        "value": "0"
      },
      {
        "timesRolled": 0,
        "value": "4"
      },
      {
        "timesRolled": 0,
        "value": "4"
      },
      {
        "timesRolled": 0,
        "value": "4"
      },
      {
        "timesRolled": 0,
        "value": "4"
      },
      {
        "timesRolled": 0,
        "value": "4"
      }
    ],
    "rank": "D",
    "id": 17
  },
  {
    "name": "Yoshi",
    "imgsrc": "https://img.rankedboost.com/wp-content/uploads/2018/06/thumb-yoshi.png",
    "die": [
      {
        "timesRolled": 0,
        "value": "0"
      },
      {
        "timesRolled": 0,
        "value": "1"
      },
      {
        "timesRolled": 0,
        "value": "3"
      },
      {
        "timesRolled": 0,
        "value": "3"
      },
      {
        "timesRolled": 0,
        "value": "5"
      },
      {
        "timesRolled": 0,
        "value": "7"
      }
    ],
    "rank": "F",
    "id": 18
  },
  {
    "name": "Hammer Bro",
    "imgsrc": "https://img.rankedboost.com/wp-content/uploads/2018/06/thumb-hammer.png",
    "die": [
      {
        "timesRolled": 0,
        "value": "+3c"
      },
      {
        "timesRolled": 0,
        "value": "1"
      },
      {
        "timesRolled": 0,
        "value": "1"
      },
      {
        "timesRolled": 0,
        "value": "5"
      },
      {
        "timesRolled": 0,
        "value": "5"
      },
      {
        "timesRolled": 0,
        "value": "5"
      }
    ],
    "rank": "F",
    "id": 19
  },
  {
    "name": "Koopa",
    "imgsrc": "https://img.rankedboost.com/wp-content/uploads/2018/06/thumb-koopa.png",
    "die": [
      {
        "timesRolled": 0,
        "value": "1"
      },
      {
        "timesRolled": 0,
        "value": "1"
      },
      {
        "timesRolled": 0,
        "value": "2"
      },
      {
        "timesRolled": 0,
        "value": "3"
      },
      {
        "timesRolled": 0,
        "value": "3"
      },
      {
        "timesRolled": 0,
        "value": "10"
      }
    ],
    "rank": "F",
    "id": 20
  }
]`);
	}

	getSeedData() {
		// console.log(this.seedData);
		return this.seedData
	}
}