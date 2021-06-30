let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play, MultPlay ]
  }

let game = new Phaser.Game(config);

//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT, keyA, keyD, keyQ;

//comment//
/*
Name: Yongbo Wang
Project title: Rocket Patrol
How long it takes: about 10h

Grade break:
Finishing the Tutorial: an automatic 20 points.
I finished the tutorial.

Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (20)
I created a new UFO object which appears at the top of the screen. Player will get 80 points by successfully hitting it.

Display the time remaining (in seconds) on the screen (10)
The time is displayed at the center of UI bar above.
Chenyang Xu helped me with this part. I have learnt how to use game timer from him.

Implement parallax scrolling (10):
I added another two layers of stars which move at different paces. Thus, the background will look more spatial.

Create new artwork for all of the in-game assets (rocket, spaceships, explosion) (20)
I changed the art sheets of rocket, spaceships, and explosion animation.
I drew all pictures myself.

Implement a simultaneous two-player mode (30)
Enter the simultaneous two-player mode by pressing "Q" at menu page. Use "left arrow", "right arrow", to move player 1 with "F" to fire. Use "A", "D", to move player 2 with "Q" to fire. The scores of player 1 and player 2 are tracked separately so that two players can compete to get a higher score.
Thus, I get 20 + 20 + 10 + 10 + 20 + 30 =110, which is enough for 100 points.*/

