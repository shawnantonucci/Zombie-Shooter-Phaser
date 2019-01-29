/** @type {import("../typings/phaser")} */

import { LoadScene } from "./scenes/LoadScene";
import { MenuScene } from "./scenes/MenuScene";
import { PlayScene } from "./scenes/PlayScene";
import { ComingSoon } from "./scenes/ComingSoon";

let config = {
  type: Phaser.Auto,
  width: 800,
  height: 600,
  scene: [LoadScene, MenuScene, PlayScene, ComingSoon],
  render: {
    pixelArt: true
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  },
  parent	: 'phaser-app',

};

let game = new Phaser.Game(config);
