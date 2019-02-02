// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"src/CST.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CST = void 0;
var CST = {
  SCENES: {
    LOAD: "LOAD",
    MENU: "MENU",
    PLAY: "PLAY",
    LEVEL01: "LEVEL01",
    COMINGSOON: "COMINGSOON"
  },
  IMAGE: {
    LOGO: "zombie-logo.png",
    OPTIONS: "options_button.png",
    PLAY: "play_button.png",
    TITLE: "title_bg.jpg",
    COMING: "night-dark-halloween-horror.jpg"
  },
  AUDIO: {
    TITLE: "zombie-main-music.ogg"
  },
  SPRITE: {
    CAT: "cat.png",
    MENUICON: "greenBio.png",
    PLAYER: 'player.png'
  }
};
exports.CST = CST;
},{}],"src/scenes/LoadScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadScene = void 0;

var _CST = require("../CST");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LoadScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(LoadScene, _Phaser$Scene);

  function LoadScene() {
    _classCallCheck(this, LoadScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoadScene).call(this, {
      key: _CST.CST.SCENES.LOAD
    }));
  }

  _createClass(LoadScene, [{
    key: "init",
    value: function init() {}
  }, {
    key: "loadImages",
    value: function loadImages() {
      this.load.setPath("./assets/image");

      for (var prop in _CST.CST.IMAGE) {
        //@ts-ignore
        this.load.image(_CST.CST.IMAGE[prop], _CST.CST.IMAGE[prop]);
      }
    }
  }, {
    key: "loadAudio",
    value: function loadAudio() {
      this.load.setPath("./assets/audio");

      for (var prop in _CST.CST.AUDIO) {
        //@ts-ignore
        this.load.audio(_CST.CST.AUDIO[prop], _CST.CST.AUDIO[prop]);
      }
    }
  }, {
    key: "loadSprites",
    value: function loadSprites(frameConfig) {
      this.load.setPath("./assets/sprite");

      for (var prop in _CST.CST.SPRITE) {
        //@ts-ignore
        this.load.spritesheet(_CST.CST.SPRITE[prop], _CST.CST.SPRITE[prop], frameConfig);
      }
    }
  }, {
    key: "preload",
    value: function preload() {
      var _this = this;

      // this.load.spritesheet("player", "./assets/sprite/player.png", {frameHeight: 41, frameWidth: 16});
      this.load.spritesheet("anna", "./assets/sprite/anna.png", {
        frameHeight: 64,
        frameWidth: 64
      }); //load atlas

      this.load.atlas("characters", "./assets/atlas/characters.png", "./assets/atlas/characters.json");
      this.load.atlas("daze", "./assets/atlas/daze.png", "./assets/atlas/daze.json");
      this.loadAudio();
      this.loadSprites({
        frameHeight: 32,
        frameWidth: 32
      });
      this.loadImages(); // loading bar

      var loadingBar = this.add.graphics({
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

      for (var i = 0; i < 100; i++) {
        this.load.spritesheet("cat" + i, "./assets/sprite/cat.png", {
          frameHeight: 32,
          frameWidth: 32
        });
      }

      ;
      this.load.on("progress", function (percent) {
        loadingBar.fillRect(0, _this.game.renderer.height / 2, _this.game.renderer.width * percent, 50);
      });
      this.load.on("complete", function () {//this.scene.start(CST.SCENES.MENU, "Hello from load scene");
      });
      this.load.on("load", function (file) {
        console.log(file.src);
      });
    }
  }, {
    key: "create",
    value: function create() {
      this.scene.start(_CST.CST.SCENES.MENU);
    }
  }]);

  return LoadScene;
}(Phaser.Scene);

exports.LoadScene = LoadScene;
},{"../CST":"src/CST.js"}],"src/Sprite.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sprite = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Sprite =
/*#__PURE__*/
function (_Phaser$GameObjects$S) {
  _inherits(Sprite, _Phaser$GameObjects$S);

  function Sprite(scene, x, y, texture, frame) {
    var _this;

    _classCallCheck(this, Sprite);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Sprite).call(this, scene, x, y, texture, frame));
    scene.sys.updateList.add(_assertThisInitialized(_assertThisInitialized(_this)));
    scene.sys.displayList.add(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  return Sprite;
}(Phaser.GameObjects.Sprite);

exports.Sprite = Sprite;
},{}],"src/scenes/MenuScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuScene = void 0;

var _CST = require("../CST");

var _Sprite = require("../Sprite");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MenuScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(MenuScene, _Phaser$Scene);

  function MenuScene() {
    _classCallCheck(this, MenuScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuScene).call(this, {
      key: _CST.CST.SCENES.MENU
    }));
  }

  _createClass(MenuScene, [{
    key: "init",
    value: function init() {}
  }, {
    key: "preload",
    value: function preload() {
      this.load.audio('music', 'assets/audio/zombie-main-music.ogg'); // this.load.image('cat', 'assets/sprite/cat.png');
    }
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.3, _CST.CST.IMAGE.LOGO).setScale(1.1).setDepth(1);
      this.add.image(0, 0, _CST.CST.IMAGE.TITLE).setOrigin(0).setScale(.4).setDepth(0);
      var playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 66, _CST.CST.IMAGE.PLAY).setDepth(1);
      var optionsButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 115, _CST.CST.IMAGE.OPTIONS).setDepth(1); //create sprites (if using pixel art, remove sharpen)

      var hoverSprite = this.add.sprite(100, 100, _CST.CST.SPRITE.MENUICON);
      hoverSprite.setScale(1.5);
      hoverSprite.setOrigin(1);
      hoverSprite.setVisible(false); //create audio, disable pauseonblur

      this.sound.pauseOnBlur = false;
      this.sound.play(_CST.CST.AUDIO.TITLE, {
        loop: true,
        volume: 0.2,
        seek: 2
      }); //create animation
      // this.anims.create({
      //   key: "walk",
      //   frameRate: 4,
      //   repeat: -1,
      //   frames: this.anims.generateFrameNumbers(CST.SPRITE.CAT, {
      //     frames: [0, 1, 2, 3]
      //   })
      // });
      //tweens
      //   var image = this.add.image(-50, 385, 'cat');
      //   this.tweens.add({
      //     targets: image,
      //     x: 850,
      //     duration: 15500,
      //     ease: function (t) {
      //         return Math.pow(Math.sin(t * 3), 3);
      //     },
      //     delay: 1000,
      //     repeat: -1
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
      playButton.on("pointerover", function () {
        hoverSprite.setVisible(true); //hoverSprite.play("walk");

        hoverSprite.x = playButton.x - playButton.width + 30;
        hoverSprite.y = playButton.y;
      });
      playButton.on("pointerout", function () {
        hoverSprite.setVisible(false);
      });
      playButton.on("pointerup", function () {
        _this.scene.start(_CST.CST.SCENES.LEVEL01);
      });
      optionsButton.setInteractive();
      optionsButton.on("pointerover", function () {
        hoverSprite.setVisible(true); //hoverSprite.play("walk");

        hoverSprite.x = optionsButton.x - optionsButton.width + 50;
        hoverSprite.y = optionsButton.y;
      });
      optionsButton.on("pointerout", function () {
        hoverSprite.setVisible(false);
      });
      optionsButton.on("pointerup", function () {//this.scene.start();
      });
    }
  }]);

  return MenuScene;
}(Phaser.Scene);

exports.MenuScene = MenuScene;
},{"../CST":"src/CST.js","../Sprite":"src/Sprite.js"}],"src/CharacterSprite.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CharacterSprite = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var CharacterSprite =
/*#__PURE__*/
function (_Phaser$Physics$Arcad) {
  _inherits(CharacterSprite, _Phaser$Physics$Arcad);

  function CharacterSprite(scene, x, y, texture, frame) {
    var _this;

    _classCallCheck(this, CharacterSprite);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CharacterSprite).call(this, scene, x, y, texture, frame));
    scene.sys.updateList.add(_assertThisInitialized(_assertThisInitialized(_this)));
    scene.sys.displayList.add(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.setScale(2);

    scene.physics.world.enableBody(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.setImmovable(true);

    _this.hp = 10;
    return _this;
  }

  return CharacterSprite;
}(Phaser.Physics.Arcade.Sprite);

exports.CharacterSprite = CharacterSprite;
},{}],"src/scenes/PlayScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayScene = void 0;

var _CST = require("../CST");

var _CharacterSprite = require("../CharacterSprite");

var _Sprite = require("../Sprite");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PlayScene =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(PlayScene, _Phaser$Scene);

  function PlayScene() {
    _classCallCheck(this, PlayScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(PlayScene).call(this, {
      key: _CST.CST.SCENES.PLAY
    }));
  }

  _createClass(PlayScene, [{
    key: "preload",
    value: function preload() {
      //anna character animations
      this.anims.create({
        key: "left",
        frameRate: 10,
        frames: this.anims.generateFrameNumbers("anna", {
          start: 9,
          end: 17
        })
      });
      this.anims.create({
        key: "down",
        frameRate: 10,
        frames: this.anims.generateFrameNumbers("anna", {
          start: 18,
          end: 26
        })
      });
      this.anims.create({
        key: "up",
        frameRate: 10,
        frames: this.anims.generateFrameNumbers("anna", {
          start: 0,
          end: 8
        })
      });
      this.anims.create({
        key: "right",
        frameRate: 10,
        frames: this.anims.generateFrameNumbers("anna", {
          start: 27,
          end: 35
        })
      }); //effect animations

      this.anims.create({
        key: "blaze",
        duration: 50,
        frames: this.anims.generateFrameNames("daze", {
          prefix: "fire0",
          suffix: ".png",
          end: 55
        }),
        showOnStart: true,
        hideOnComplete: true
      }); //enemy sprite from atlas

      this.textures.addSpriteSheetFromAtlas("hooded", {
        frameHeight: 64,
        frameWidth: 64,
        atlas: "characters",
        frame: "hooded"
      });
    }
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      var cat = new _Sprite.Sprite(this, 300, 20, _CST.CST.SPRITE.CAT).setScale(2);
      this.anna = new _CharacterSprite.CharacterSprite(this, 400, 400, "anna", 26);
      this.hooded = this.physics.add.sprite(200, 200, "hooded", 26).setScale(2).setImmovable(true);
      this.fireAttacks = this.physics.add.group();
      this.assassins = this.physics.add.group({
        immovable: true
      });
      this.assassins.add(this.hooded); //this.physics.add.existing() manual add

      window.hooded = this.hooded;
      window.anna = this.anna; //set smaller hitbox

      this.anna.setSize(40, 50).setOffset(10, 10);
      this.anna.setCollideWorldBounds(true);
      this.keyboard = this.input.keyboard.addKeys("W, A, S, D");
      this.input.on("pointermove", function (pointer) {
        if (pointer.isDown) {
          //is clicking
          var fire = _this.add.sprite(pointer.x, pointer.y, "daze", "fire00.png").play("blaze");

          _this.fireAttacks.add(fire);

          fire.on("animationcomplete", function () {
            fire.destroy();
          });
        }
      });
      this.physics.world.addCollider(this.anna, this.assassins, function (anna, hooded) {
        anna.hp--;

        if (anna.hp <= 0) {
          anna.destroy();
        }

        hooded.destroy();
      });
      this.physics.world.addCollider(this.fireAttacks, this.assassins, function (fireAttacks, hooded) {
        fireAttacks.destroy();
        hooded.destroy();
        var x = 0;
        var y = 0;

        switch (Phaser.Math.Between(0, 1)) {
          case 0:
            x = Phaser.Math.Between(0, _this.game.renderer.width);
            break;

          case 1:
            y = Phaser.Math.Between(0, _this.game.renderer.height);
        }

        for (var i = 0; i < 2; i++) {
          //spawn 2
          _this.assassins.add(_this.physics.add.sprite(x, y, "hooded", 26).setScale(2).setImmovable(true));
        }
      });
    }
  }, {
    key: "update",
    value: function update(time, delta) {
      //delta 16.666 @ 60fps
      for (var i = 0; i < this.assassins.getChildren().length; i++) {
        this.physics.accelerateToObject(this.assassins.getChildren()[i], this.anna);
      }

      if (this.anna.active === true) {
        if (this.keyboard.D.isDown === true) {
          this.anna.setVelocityX(128);
        }

        if (this.keyboard.W.isDown === true) {
          this.anna.setVelocityY(-128);
        }

        if (this.keyboard.S.isDown === true) {
          this.anna.setVelocityY(128);
        }

        if (this.keyboard.A.isDown === true) {
          this.anna.setVelocityX(-128);
        }

        if (this.keyboard.A.isUp && this.keyboard.D.isUp) {
          //not moving on X axis
          this.anna.setVelocityX(0);
        }

        if (this.keyboard.W.isUp && this.keyboard.S.isUp) {
          //not pressing y movement
          this.anna.setVelocityY(0);
        }

        if (this.anna.body.velocity.x > 0) {
          //moving right
          this.anna.play("right", true);
        } else if (this.anna.body.velocity.x < 0) {
          //moving left
          this.anna.anims.playReverse("left", true);
        } else if (this.anna.body.velocity.y < 0) {
          //moving up
          this.anna.play("up", true);
        } else if (this.anna.body.velocity.y > 0) {
          //moving down
          this.anna.play("down", true);
        }
      }
    }
  }]);

  return PlayScene;
}(Phaser.Scene);

exports.PlayScene = PlayScene;
},{"../CST":"src/CST.js","../CharacterSprite":"src/CharacterSprite.js","../Sprite":"src/Sprite.js"}],"src/scenes/ComingSoon.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComingSoon = void 0;

var _CST = require("../CST");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ComingSoon =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(ComingSoon, _Phaser$Scene);

  function ComingSoon() {
    _classCallCheck(this, ComingSoon);

    return _possibleConstructorReturn(this, _getPrototypeOf(ComingSoon).call(this, {
      key: _CST.CST.SCENES.COMINGSOON
    }));
  }

  _createClass(ComingSoon, [{
    key: "create",
    value: function create() {
      this.add.image(0, 0, _CST.CST.IMAGE.COMING).setOrigin(0).setDepth(0);
      this.add.text(200, 150, "Coming Soon").setFontFamily("Arial").setFontSize(64).setColor("red").setOrigin(0);
    }
  }]);

  return ComingSoon;
}(Phaser.Scene);

exports.ComingSoon = ComingSoon;
},{"../CST":"src/CST.js"}],"src/scenes/Level01.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Level01 = void 0;

var _CST = require("../CST");

var _CharacterSprite = require("../CharacterSprite");

var _Sprite = require("../Sprite");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Level01 =
/*#__PURE__*/
function (_Phaser$Scene) {
  _inherits(Level01, _Phaser$Scene);

  function Level01() {
    _classCallCheck(this, Level01);

    return _possibleConstructorReturn(this, _getPrototypeOf(Level01).call(this, {
      key: _CST.CST.SCENES.LEVEL01
    }));
  }

  _createClass(Level01, [{
    key: "preload",
    value: function preload() {
      this.load.atlas('player', 'assets/atlas/player.png', 'assets/atlas/player.json');
    }
  }, {
    key: "create",
    value: function create() {
      // Create world bounds
      this.physics.world.setBounds(0, 0, 800, 600); // Create player sprite

      this.player = this.physics.add.sprite(100, 450, "player", 'HC_Humans1A_56.png').setScale(2);
      window.player = this.player; //set smaller hitbox

      this.player.setSize(20, 34).setOffset(-3, -3);
      this.player.setCollideWorldBounds(true);
      this.keyboard = this.input.keyboard.addKeys("W, A, S, D"); //player character animations

      this.anims.create({
        key: "down",
        frameRate: 5,
        frames: this.anims.generateFrameNames("player", {
          prefix: 'HC_Humans1A_',
          suffix: '.png',
          start: 55,
          end: 57,
          zeroPad: 2
        })
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
        })
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
        })
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
        })
      });
    }
  }, {
    key: "update",
    value: function update(time, delta) {
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
  }]);

  return Level01;
}(Phaser.Scene);

exports.Level01 = Level01;
},{"../CST":"src/CST.js","../CharacterSprite":"src/CharacterSprite.js","../Sprite":"src/Sprite.js"}],"src/main.js":[function(require,module,exports) {
"use strict";

var _LoadScene = require("./scenes/LoadScene");

var _MenuScene = require("./scenes/MenuScene");

var _PlayScene = require("./scenes/PlayScene");

var _ComingSoon = require("./scenes/ComingSoon");

var _Level = require("./scenes/Level01");

/** @type {import("../typings/phaser")} */
var config = {
  type: Phaser.Auto,
  width: 800,
  height: 600,
  scene: [_LoadScene.LoadScene, _MenuScene.MenuScene, _PlayScene.PlayScene, _ComingSoon.ComingSoon, _Level.Level01],
  extend: {
    player: null,
    healthpoints: null,
    reticle: null,
    moveKeys: null,
    playerBullets: null,
    enemyBullets: null,
    time: 0
  },
  render: {
    pixelArt: true
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 0
      },
      debug: true
    }
  },
  parent: 'phaser-game'
};
var game = new Phaser.Game(config);
},{"./scenes/LoadScene":"src/scenes/LoadScene.js","./scenes/MenuScene":"src/scenes/MenuScene.js","./scenes/PlayScene":"src/scenes/PlayScene.js","./scenes/ComingSoon":"src/scenes/ComingSoon.js","./scenes/Level01":"src/scenes/Level01.js"}],"C:/Users/shawn/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "1113" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["C:/Users/shawn/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/main.js"], null)
//# sourceMappingURL=/main.1e43358e.map