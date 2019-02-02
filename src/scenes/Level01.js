import { CST } from "../CST";
import { Sprite } from "../Sprite";

export class Level01 extends Phaser.Scene {
  constructor() {
    super({ key: CST.SCENES.LEVEL01 });
  }

  preload() {
    this.load.spritesheet('player', 'assets/sprite/player.png', { frameWidth: 16, frameHeight: 28 });
    // this.load.image('target', 'assets/spite/ball.png');
    // this.load.image('background', 'assets/image/underwater1.png');


    //player character animations
    // this.anims.create({
    //   key: "left",
    //   frameRate: 10,
    //   frames: this.anims.generateFrameNumbers("player", {
    //     start: 9,
    //     end: 17
    //   })
    // });
    // this.anims.create({
    //   key: "down",
    //   frameRate: 10,
    //   frames: this.anims.generateFrameNumbers("player", {
    //     start: 18,
    //     end: 26
    //   })
    // });
    // this.anims.create({
    //   key: "up",
    //   frameRate: 10,
    //   frames: this.anims.generateFrameNumbers("player", {
    //     start: 0,
    //     end: 8
    //   })
    // });
    // this.anims.create({
    //   key: "right",
    //   frameRate: 10,
    //   frames: this.anims.generateFrameNumbers("player", {
    //     start: 27,
    //     end: 35
    //   })
    // });

  }

  create() {
    // Create world bounds
    this.physics.world.setBounds(0, 0, 800, 600);

    // Add background, player, and reticle sprites
      // var background = this.add.image(800, 600, 'background');
    this.player = this.physics.add.sprite(400, 300, 'player').setScale(1);
      // reticle = this.physics.add.sprite(800, 700, 'target');

    // Set image/sprite properties
      // background.setOrigin(0.5, 0.5).setDisplaySize(800, 600);
    this.player.setOrigin(0.5, 0.5).setDisplaySize(100, 120).setCollideWorldBounds(true).setDrag(500, 500);
      // reticle.setOrigin(0.5, 0.5).setDisplaySize(25, 25).setCollideWorldBounds(true);


      window.player = this.player;

          //set smaller hitbox
    this.player.setSize(20, 34).setOffset(-3, -3);
    this.player.setCollideWorldBounds(true);
    this.keyboard = this.input.keyboard.addKeys("W, A, S, D");


    // Set camera zoom
    // this.cameras.main.zoom = 0.5;
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

      // if (this.player.body.velocity.x > 0) {
      //   //moving right
      //   this.player.play("right", true);
      // } else if (this.player.body.velocity.x < 0) {
      //   //moving left
      //   this.player.anims.playReverse("left", true);
      // } else if (this.player.body.velocity.y < 0) {
      //   //moving up
      //   this.player.play("up", true);
      // } else if (this.player.body.velocity.y > 0) {
      //   //moving down
      //   this.player.play("down", true);
      // }
    }
  }
}
