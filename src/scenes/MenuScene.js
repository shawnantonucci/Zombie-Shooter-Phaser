import { CST } from "../CST";
import { Sprite } from "../Sprite";

export class MenuScene extends Phaser.Scene {
  constructor() {
    super({
      key: CST.SCENES.MENU
    });
  }
  init() {}

  create() {
    this.add
      .image(
        this.game.renderer.width / 2,
        this.game.renderer.height * 0.3,
        CST.IMAGE.LOGO
      )
      .setDepth(1);

    this.add
      .image(0, 0, CST.IMAGE.TITLE)
      .setOrigin(0)
      .setDepth(0);

    let playButton = this.add
      .image(
        this.game.renderer.width / 2,
        this.game.renderer.height / 2,
        CST.IMAGE.PLAY
      )
      .setDepth(1);

    let optionsButton = this.add
      .image(
        this.game.renderer.width / 2,
        this.game.renderer.height / 2 + 80,
        CST.IMAGE.OPTIONS
      )
      .setDepth(1);

    //create sprites (if using pixel art, remove sharpen)

    let hoverSprite = this.add.sprite(100, 100, CST.SPRITE.MENUICON);
    hoverSprite.setScale(1.5);
    hoverSprite.setOrigin(1);
    hoverSprite.setVisible(false);

    //create audio, disable pauseonblur

    this.sound.pauseOnBlur = false;
    this.sound.play(CST.AUDIO.TITLE, {
      loop: true,
      volume: 0.2,
      seek: 2,
    });

    //create animation

    // this.anims.create({
    //   key: "walk",
    //   frameRate: 4,
    //   repeat: -1,
    //   frames: this.anims.generateFrameNumbers(CST.SPRITE.CAT, {
    //     frames: [0, 1, 2, 3]
    //   })
    // });

    //make image buttons interactive

    /*    
            PointerEvents:
                pointerover - hovering
                pointerout  - not hovering
                pointerup   - click and release
                pointerdown - just click
      */

    playButton.setInteractive();

    playButton.on("pointerover", () => {
      hoverSprite.setVisible(true);
      //hoverSprite.play("walk");
      hoverSprite.x = playButton.x - playButton.width + 50;
      hoverSprite.y = playButton.y;
    });

    playButton.on("pointerout", () => {
      hoverSprite.setVisible(false);
    });

    playButton.on("pointerup", () => {
      this.scene.start(CST.SCENES.COMINGSOON);
    });

    optionsButton.setInteractive();

    optionsButton.on("pointerover", () => {
      hoverSprite.setVisible(true);
      //hoverSprite.play("walk");
      hoverSprite.x = optionsButton.x - optionsButton.width + 50;
      hoverSprite.y = optionsButton.y;
    });

    optionsButton.on("pointerout", () => {
      hoverSprite.setVisible(false);
    });

    optionsButton.on("pointerup", () => {
      //this.scene.start();
    });
  }
}
