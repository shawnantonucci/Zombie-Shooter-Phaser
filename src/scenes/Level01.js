import { CST } from "../CST";
import { CharacterSprite } from "../CharacterSprite";
import { Sprite } from "../Sprite";

export class Level01 extends Phaser.Scene {
  constructor() {
    super({ key: CST.SCENES.LEVEL01 });
  }

  preload() {
    this.load.atlas('player', 'assets/atlas/player.png', 'assets/atlas/player.json')
  }

  create() {
    // Create world bounds
    this.physics.world.setBounds(0, 0, 800, 600);

    // Create player sprite
    this.player = this.physics.add.sprite(100, 450, "player", 'HC_Humans1A_56.png').setScale(2);

    window.player = this.player;

    //set smaller hitbox
    this.player.setSize(20, 34).setOffset(-3, -3);
    this.player.setCollideWorldBounds(true);
    this.keyboard = this.input.keyboard.addKeys("W, A, S, D");

    //player character animations
    this.anims.create({
      key: "down",
      frameRate: 5,
      frames: this.anims.generateFrameNames("player", {
        prefix: 'HC_Humans1A_',
        suffix: '.png',
        start: 55,
        end: 57,
        zeroPad: 2
      }),
    });
    this.anims.create({
      key: "up",
      frameRate: 5,
      frames: this.anims.generateFrameNames("player", {
        prefix: 'HC_Humans1A_',
        suffix: '.png',
        start: 91,
        end: 93,
        zeroPad: 2
      }),
    });
    this.anims.create({
      key: "left",
      frameRate: 5,
      frames: this.anims.generateFrameNames("player", {
        prefix: 'HC_Humans1A_',
        suffix: '.png',
        start: 67,
        end: 69,
        zeroPad: 2
      }),
    });
    this.anims.create({
      key: "right",
      frameRate: 5,
      frames: this.anims.generateFrameNames("player", {
        prefix: 'HC_Humans1A_',
        suffix: '.png',
        start: 79,
        end: 81,
        zeroPad: 2
      }),
    });



  }

  update(time, delta) {
    //delta 16.666 @ 60fps

    if (this.player.active === true) {
      if (this.keyboard.D.isDown === true) {
        this.player.setVelocityX(256);
      }

      if (this.keyboard.W.isDown === true) {
        this.player.setVelocityY(-256);
      }

      if (this.keyboard.S.isDown === true) {
        this.player.setVelocityY(256);
      }

      if (this.keyboard.A.isDown === true) {
        this.player.setVelocityX(-256);
      }
      if (this.keyboard.A.isUp && this.keyboard.D.isUp) {
        //not moving on X axis
        this.player.setVelocityX(0);
      }
      if (this.keyboard.W.isUp && this.keyboard.S.isUp) {
        //not pressing y movement
        this.player.setVelocityY(0);
      }

      if (this.player.body.velocity.x > 0) {
        //moving right
        this.player.play("right", true);
      } else if (this.player.body.velocity.x < 0) {
        //moving left
        this.player.play("left", true);
      } else if (this.player.body.velocity.y < 0) {
        //moving up
        this.player.play("up", true);
      } else if (this.player.body.velocity.y > 0) {
        //moving down
        this.player.play("down", true);
      }
    }
  }
}
