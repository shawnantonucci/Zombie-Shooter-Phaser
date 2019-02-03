/** @type {import("../typings/phaser")} */

import { LoadScene } from "./scenes/LoadScene";
import { MenuScene } from "./scenes/MenuScene";
import { PlayScene } from "./scenes/PlayScene";
import { ComingSoon } from "./scenes/ComingSoon";
import { Level01 } from "./scenes/Level01";
import { GameOver } from "./scenes/GameOver";

let config = {
  type: Phaser.Auto,
  width: 800,
  height: 600,
  scene: [LoadScene, MenuScene, PlayScene, ComingSoon, Level01, GameOver],
  extend: {
    player: null,
    healthpoints: null,
    reticle: null,
    moveKeys: null,
    playerBullets: null,
    enemyBullets: null,
    time: 0,
},
  render: {
    pixelArt: true
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true
    }
  },
  parent	: 'phaser-game',

};

let game = new Phaser.Game(config);
