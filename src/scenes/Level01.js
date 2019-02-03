import { CST } from "../CST";

export class Level01 extends Phaser.Scene {
  constructor() {
    super({ key: CST.SCENES.LEVEL01 });
  }

  preload() {
    this.load.atlas('player', 'assets/atlas/player.png', 'assets/atlas/player.json')
    //enemy sprite from atlas
    this.load.atlas('zombie', 'assets/atlas/zombies01.png', 'assets/atlas/zombies01.json')
  }

  create() {
    // Create world bounds
    this.physics.world.setBounds(0, 0, 800, 600);

    // Create player sprite
    this.player = this.physics.add.sprite(100, 450, "player", 'HC_Humans1A_56.png').setScale(2);
    this.zombie = this.physics.add.sprite(400, 200, "zombie", 'HC_Zombies2D_05.png').setScale(2);

    this.horde = this.physics.add.group({ immovable: true });
    this.horde.add(this.zombie);

    window.player = this.player;
    // window.zombie = this.zombie;

    //set smaller hitbox
    this.player.setSize(20, 34).setOffset(-3, -3);
    this.player.setCollideWorldBounds(true);
    
    this.zombie.setSize(20, 34).setOffset(-3, -3);
    this.zombie.setCollideWorldBounds(true);
    this.zombie.body.velocity.x = 10;
    this.zombie.body.velocity.y = 10;

    this.keyboard = this.input.keyboard.addKeys("W, A, S, D");

    this.physics.world.addCollider(
      this.player,
      this.horde,
      (player, zombie) => {
        player.hp--;
        if (player.hp <= 0) {
          player.destroy();
        }
        zombie.destroy();


        let x = 0;
        let y = 0;

        switch (Phaser.Math.Between(0, 1)) {
          case 0:
            x = Phaser.Math.Between(0, this.game.renderer.width);
            break;
          case 1:
            y = Phaser.Math.Between(0, this.game.renderer.height);
        }
          for (let i = 0; i < 2; i++) {
            //spawn 2
            this.horde.add(
              this.physics.add
                .sprite(x + 100, y + 100, "zombie", 'HC_Zombies2D_05.png')
                .setScale(2)
                .setImmovable(true)
                .setSize(20, 34).setOffset(-3, -3)
                .setCollideWorldBounds(true)
            );
          }
        }
    );

    // this.physics.world.addCollider(
    //   this.fireAttacks,
    //   this.assassins,
    //   (fireAttacks, hooded) => {
    //     fireAttacks.destroy();
    //     hooded.destroy();

    //     let x = 0;
    //     let y = 0;
    //     switch (Phaser.Math.Between(0, 1)) {
    //       case 0:
    //         x = Phaser.Math.Between(0, this.game.renderer.width);
    //         break;
    //       case 1:
    //         y = Phaser.Math.Between(0, this.game.renderer.height);
    //     }
    //     for (let i = 0; i < 2; i++) {
    //       //spawn 2
    //       this.assassins.add(
    //         this.physics.add
    //           .sprite(x, y, "hooded", 26)
    //           .setScale(2)
    //           .setImmovable(true)
    //       );
    //     }
    //   }
    // );

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

    //zombie character animations
    this.anims.create({
      key: "zombiedown",
      frameRate: 5,
      frames: this.anims.generateFrameNames("zombie", {
        prefix: 'HC_Zombies2D__',
        suffix: '.png',
        start: 4,
        end: 6,
        zeroPad: 2
      }),
    });
    this.anims.create({
      key: "zombieup",
      frameRate: 5,
      frames: this.anims.generateFrameNames("zombie", {
        prefix: 'HC_Zombies2D_',
        suffix: '.png',
        start: 16,
        end: 18,
        zeroPad: 2
      }),
    });
    this.anims.create({
      key: "zombieleft",
      frameRate: 5,
      frames: this.anims.generateFrameNames("zombie", {
        prefix: 'HC_Zombies2D_',
        suffix: '.png',
        start: 28,
        end: 30,
        zeroPad: 2
      }),
    });
    this.anims.create({
      key: "zombieright",
      frameRate: 5,
      frames: this.anims.generateFrameNames("zombie", {
        prefix: 'HC_Zombies2D_',
        suffix: '.png',
        start: 52,
        end: 58,
        zeroPad: 2
      }),
    });


  }

  update(time, delta) {
    //delta 16.666 @ 60fps

    for (let i = 0; i < this.horde.getChildren().length; i++) {
      this.physics.accelerateToObject(
        this.horde.getChildren()[i],
        this.player
      );
    }


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

      //player
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

    if (this.zombie.active === true) {
      //zombie
      if (this.zombie.body.velocity.x > 0) {
        //moving right
        this.zombie.play("zombieright", true);
      } else if (this.zombie.body.velocity.x < 0) {
        //moving left
        this.zombie.play("zombieleft", true);
      } else if (this.zombie.body.velocity.y < 0) {
        //moving up
        this.zombie.play("zombieup", true);
      } else if (this.zombie.body.velocity.y > 0) {
        //moving down
        this.zombie.play("zombiedown", true);
      }
    }

  }
}
