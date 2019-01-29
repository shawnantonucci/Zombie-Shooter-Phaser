import { CST } from "../CST";

export class ComingSoon extends Phaser.Scene {
  constructor() {
    super({ key: CST.SCENES.COMINGSOON });
  }

  create() {
    this.add
      .image(0, 0, CST.IMAGE.COMING)
      .setOrigin(0)
      .setDepth(0);

    this.add
      .text(200, 150, "Coming Soon")
      .setFontFamily("Arial")
      .setFontSize(64)
      .setColor("red")
      .setOrigin(0);
  }
}
