var container = new PIXI.Container();
app.stage.addChild(container);

PIXI.Loader.shared.add("../resources/backgroundSpreadSheet.json").load(setup);
var containerSize = {
    x: innerWidth,
    y: innerHeight
};

function background(bgSize, inputSprite, type, forceSize) {
    var sprite = inputSprite;
    var bgContainer = new PIXI.Container();
    var mask = new PIXI.Graphics().beginFill(0x8bc5ff).drawRect(0, 0, bgSize.x, bgSize.y).endFill();
    bgContainer.mask = mask;
    bgContainer.addChild(mask);
    bgContainer.addChild(sprite);

    function resize() {
        var sp = {
            x: sprite.width,
            y: sprite.height
        };
        if (forceSize) sp = forceSize;
        var winratio = bgSize.x / bgSize.y;
        var spratio = sp.x / sp.y;
        var scale = 1;
        var pos = new PIXI.Point(0, 0);
        if (type == 'cover' ? (winratio > spratio) : (winratio < spratio)) {
            //photo is wider than background
            scale = bgSize.x / sp.x;
            pos.y = -((sp.y * scale) - bgSize.y) / 2
        } else {
            //photo is taller than background
            scale = bgSize.y / sp.y;
            pos.x = -((sp.x * scale) - bgSize.x) / 2
        }

        sprite.scale = new PIXI.Point(scale, scale);
        sprite.position = pos;
    }

    resize();

    return {
        container: bgContainer,
        doResize: resize
    }
}

function setup() {
    let sheet = PIXI.Loader.shared.resources["../resources/backgroundSpreadSheet.json"].spritesheet;

    // // initialize background sprite
    // background = new PIXI.Sprite(sheet.texturers["Ground_Tile_02_A.png"]);

    // // add it to the stage
    // app.stage.addChild(background);

    var slide = background(containerSize, new PIXI.Sprite(sheet.textures["Ground_Tile_02_B.png"]), 'cover');
    container.addChild(slide.container);
    // force resize: slide.doResize();
    app.renderer.render(stage);

}