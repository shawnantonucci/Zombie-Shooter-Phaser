import { CST } from "../CST";

export class GameOver extends Phaser.Scene {
  constructor() {
    super({ key: CST.SCENES.GAMEOVER });
  }

  create() {
    this.add
      .text(225, 150, "Game Over")
      .setFontFamily("Arial")
      .setFontSize(64)
      .setColor("red")
      .setOrigin(0);

    const menu = this.add
      .text(330, 250, "Main Menu")
      .setFontFamily("Arial")
      .setFontSize(24)
      .setColor("red")
      .setOrigin(0);
    const playAgain = this.add
      .text(330, 280, "Play Again")
      .setFontFamily("Arial")
      .setFontSize(24)
      .setColor("Blue")
      .setOrigin(0);

    menu.setInteractive();
    playAgain.setInteractive();

    menu.on("pointerup", () => {
      this.scene.start(CST.SCENES.MENU);
    });
    playAgain.on("pointerup", () => {
      this.scene.start(CST.SCENES.LEVEL01);
    });
  }
}
