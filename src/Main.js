//Aliases
let Application = PIXI.Application,
    loader = PIXI.Loader.shared,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;

//Create a Pixi Application
let app = new Application({
    width: window.innerWidth,
    height: window.innerHeight,
    transparent: false,
    resolution: window.devicePixelRatio
});

window.addEventListener('resize', resize)

function resize() {
    let _w = window.innerWidth;
    let _h = window.innerHeight;

    app.renderer.resize(_w, _h)
}

app.renderer.backgroundColor = 0x316400;

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

PIXI.Loader.shared.add("../resources/backgroundSpreadSheet.json").load(setup);


function setup() {
    let sheet = PIXI.Loader.shared.resources["../resources/backgroundSpreadSheet.json"].spritesheet;

        // initialize background sprite
        background = new PIXI.Sprite(sheet.textures["Ground_Tile_02_A.png"]);

        // add it to the stage
        app.stage.addChild(background);
    
  }