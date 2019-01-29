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
})({"src/CST.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CST = {
  SCENES: {
    LOAD: "LOAD",
    MENU: "MENU",
    PLAY: "PLAY"
  },
  IMAGE: {
    LOGO: "logo.png",
    OPTIONS: "options_button.png",
    PLAY: "play_button.png",
    TITLE: "Ruined-City.png"
  },
  AUDIO: {
    TITLE: "zombie-main-music.ogg"
  },
  SPRITE: {
    CAT: "cat.png"
  }
};
},{}],"src/scenes/LoadScene.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var CST_1 = require("../CST");

var LoadScene =
/** @class */
function (_super) {
  __extends(LoadScene, _super);

  function LoadScene() {
    return _super.call(this, {
      key: CST_1.CST.SCENES.LOAD
    }) || this;
  }

  LoadScene.prototype.init = function () {};

  LoadScene.prototype.loadImages = function () {
    this.load.setPath("./assets/image");

    for (var prop in CST_1.CST.IMAGE) {
      //@ts-ignore
      this.load.image(CST_1.CST.IMAGE[prop], CST_1.CST.IMAGE[prop]);
    }
  };

  LoadScene.prototype.loadAudio = function () {
    this.load.setPath("./assets/audio");

    for (var prop in CST_1.CST.AUDIO) {
      //@ts-ignore
      this.load.audio(CST_1.CST.AUDIO[prop], CST_1.CST.AUDIO[prop]);
    }
  };

  LoadScene.prototype.loadSprites = function (frameConfig) {
    this.load.setPath("./assets/sprite");

    for (var prop in CST_1.CST.SPRITE) {
      //@ts-ignore
      this.load.spritesheet(CST_1.CST.SPRITE[prop], CST_1.CST.SPRITE[prop], frameConfig);
    }
  };

  LoadScene.prototype.preload = function () {
    var _this = this;

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
  };

  LoadScene.prototype.create = function () {
    this.scene.start(CST_1.CST.SCENES.MENU);
  };

  return LoadScene;
}(Phaser.Scene);

exports.LoadScene = LoadScene;
},{"../CST":"src/CST.ts"}],"src/scenes/MenuScene.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var CST_1 = require("../CST");

var MenuScene =
/** @class */
function (_super) {
  __extends(MenuScene, _super);

  function MenuScene() {
    return _super.call(this, {
      key: CST_1.CST.SCENES.MENU
    }) || this;
  }

  MenuScene.prototype.init = function () {};

  MenuScene.prototype.create = function () {
    var _this = this;

    this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.2, CST_1.CST.IMAGE.LOGO).setDepth(1);
    this.add.image(0, -200, CST_1.CST.IMAGE.TITLE).setOrigin(0).setDepth(0).setScale(2);
    var playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, CST_1.CST.IMAGE.PLAY).setDepth(1);
    var optionsButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 100, CST_1.CST.IMAGE.OPTIONS).setDepth(1); //create sprites (if using pixel art, remove sharpen)

    var hoverSprite = this.add.sprite(100, 100, CST_1.CST.SPRITE.CAT);
    hoverSprite.setScale(2);
    hoverSprite.setVisible(false); //create audio, disable pauseonblur

    this.sound.pauseOnBlur = false;
    this.sound.play(CST_1.CST.AUDIO.TITLE, {
      loop: true
    }); //create animation

    this.anims.create({
      key: "walk",
      frameRate: 4,
      repeat: -1,
      frames: this.anims.generateFrameNumbers(CST_1.CST.SPRITE.CAT, {
        frames: [0, 1, 2, 3]
      })
    }); //make image buttons interactive

    /*
            PointerEvents:
                pointerover - hovering
                pointerout  - not hovering
                pointerup   - click and release
                pointerdown - just click
      */

    playButton.setInteractive();
    playButton.on("pointerover", function () {
      hoverSprite.setVisible(true);
      hoverSprite.play("walk");
      hoverSprite.x = playButton.x - playButton.width;
      hoverSprite.y = playButton.y;
    });
    playButton.on("pointerout", function () {
      hoverSprite.setVisible(false);
    });
    playButton.on("pointerup", function () {
      _this.scene.start(CST_1.CST.SCENES.PLAY);
    });
    optionsButton.setInteractive();
    optionsButton.on("pointerover", function () {
      hoverSprite.setVisible(true);
      hoverSprite.play("walk");
      hoverSprite.x = optionsButton.x - optionsButton.width;
      hoverSprite.y = optionsButton.y;
    });
    optionsButton.on("pointerout", function () {
      hoverSprite.setVisible(false);
    });
    optionsButton.on("pointerup", function () {//this.scene.start();
    });
  };

  return MenuScene;
}(Phaser.Scene);

exports.MenuScene = MenuScene;
},{"../CST":"src/CST.ts"}],"src/CharacterSprite.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var CharacterSprite =
/** @class */
function (_super) {
  __extends(CharacterSprite, _super);

  function CharacterSprite(scene, x, y, texture, frame) {
    var _this = _super.call(this, scene, x, y, texture, frame) || this;

    scene.sys.updateList.add(_this);
    scene.sys.displayList.add(_this);

    _this.setScale(2);

    scene.physics.world.enableBody(_this);

    _this.setImmovable(true);

    _this.hp = 10;
    return _this;
  }

  return CharacterSprite;
}(Phaser.Physics.Arcade.Sprite);

exports.CharacterSprite = CharacterSprite;
},{}],"src/Sprite.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Sprite =
/** @class */
function (_super) {
  __extends(Sprite, _super);

  function Sprite(scene, x, y, texture, frame) {
    var _this = _super.call(this, scene, x, y, texture, frame) || this;

    scene.sys.updateList.add(_this);
    scene.sys.displayList.add(_this);
    return _this;
  }

  return Sprite;
}(Phaser.GameObjects.Sprite);

exports.Sprite = Sprite;
},{}],"src/scenes/PlayScene.ts":[function(require,module,exports) {
"use strict";

var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var CST_1 = require("../CST");

var CharacterSprite_1 = require("../CharacterSprite");

var Sprite_1 = require("../Sprite");

var PlayScene =
/** @class */
function (_super) {
  __extends(PlayScene, _super);

  function PlayScene() {
    return _super.call(this, {
      key: CST_1.CST.SCENES.PLAY
    }) || this;
  }

  PlayScene.prototype.preload = function () {
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
    });
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
    });
    this.textures.addSpriteSheetFromAtlas("hooded", {
      frameHeight: 64,
      frameWidth: 64,
      atlas: "characters",
      frame: "hooded"
    });
  };

  PlayScene.prototype.create = function () {
    var _this = this;

    var cat = new Sprite_1.Sprite(this, 300, 20, CST_1.CST.SPRITE.CAT).setScale(2);
    this.anna = new CharacterSprite_1.CharacterSprite(this, 400, 400, "anna", 26);
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
        var fire_1 = _this.add.sprite(pointer.x, pointer.y, "daze", "fire00.png").play("blaze");

        _this.fireAttacks.add(fire_1);

        fire_1.on("animationcomplete", function () {
          fire_1.destroy();
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
  };

  PlayScene.prototype.update = function (time, delta) {
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
  };

  return PlayScene;
}(Phaser.Scene);

exports.PlayScene = PlayScene;
},{"../CST":"src/CST.ts","../CharacterSprite":"src/CharacterSprite.ts","../Sprite":"src/Sprite.ts"}],"src/main.ts":[function(require,module,exports) {
"use strict";
/** @type {import("../typings/phaser")} */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var LoadScene_1 = require("./scenes/LoadScene");

var MenuScene_1 = require("./scenes/MenuScene");

var PlayScene_1 = require("./scenes/PlayScene");

var game = new Phaser.Game({
  width: 800,
  height: 600,
  scene: [LoadScene_1.LoadScene, MenuScene_1.MenuScene, PlayScene_1.PlayScene],
  render: {
    pixelArt: true
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  }
});
},{"./scenes/LoadScene":"src/scenes/LoadScene.ts","./scenes/MenuScene":"src/scenes/MenuScene.ts","./scenes/PlayScene":"src/scenes/PlayScene.ts"}],"C:/Users/shawn/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "25911" + '/');

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
},{}]},{},["C:/Users/shawn/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/main.ts"], null)
//# sourceMappingURL=/main.b0a109ad.map