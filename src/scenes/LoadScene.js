import { CST } from "../CST";

export class LoadScene extends Phaser.Scene {
  constructor() {
    super({
      key: CST.SCENES.LOAD
    });
  }
  init() {}

  loadImages(){
    this.load.setPath("./assets/image");

    for(let prop in CST.IMAGE) {
      //@ts-ignore
      this.load.image(CST.IMAGE[prop], CST.IMAGE[prop]);
    }
  }

  loadAudio(){
    this.load.setPath("./assets/audio");

    for(let prop in CST.AUDIO) {
      //@ts-ignore
      this.load.audio(CST.AUDIO[prop], CST.AUDIO[prop]);
    }
  }

  loadSprites(frameConfig){
    this.load.setPath("./assets/sprite");

    for(let prop in CST.SPRITE) {
      //@ts-ignore
      this.load.spritesheet(CST.SPRITE[prop], CST.SPRITE[prop], frameConfig);
    }
  }

  preload() {

    // this.load.spritesheet("player", "./assets/sprite/player.png", {frameHeight: 41, frameWidth: 16});
    this.load.spritesheet("anna", "./assets/sprite/anna.png", {frameHeight: 64, frameWidth: 64});
    //load atlas
    this.load.atlas("characters", "./assets/atlas/characters.png", "./assets/atlas/characters.json");
    this.load.atlas("daze", "./assets/atlas/daze.png", "./assets/atlas/daze.json");

    this.loadAudio();
    this.loadSprites({
      frameHeight: 32,
      frameWidth: 32
    });
    this.loadImages();

    // loading bar

    let loadingBar = this.add.graphics({
      fillStyle: {
        color: 0xffffff //white
      }
    });

    /*
      Loader Events:
        complete - when done loading everything
        progress - loader number progress in decimal
    */

    //simulate large load
    for (let i = 0; i < 100; i++) {
            this.load.spritesheet("cat" + i, "./assets/sprite/cat.png", {
                frameHeight: 32,
                frameWidth: 32
            });
    };

    this.load.on("progress", (percent) => {
      loadingBar.fillRect(
        0,
        this.game.renderer.height / 2,
        this.game.renderer.width * percent,
        50
      );
      
    });

    this.load.on("complete", () => {
        //this.scene.start(CST.SCENES.MENU, "Hello from load scene");
    })

    this.load.on("load", (file) => {
      console.log(file.src);
    })
  }
  

  create() {
    this.scene.start(CST.SCENES.MENU);
  }

}
