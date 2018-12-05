var app = new PIXI.Application(800, 600, {
  backgroundColor: 0x1099bb
});
document.body.appendChild(app.view);

const state = {
  sprite: {}
}

PIXI.loader
  .add('sprites', "./dist/sprites/0x72_16x16DungeonTileset.v4.png")
  .load((loader, resources) => {
    let spriteFrame = new PIXI.Texture(resources["sprites"].texture, new PIXI.Rectangle(81, 215, 16, 16));

    const sprite = new PIXI.Sprite(spriteFrame)

    sprite.name = 'bixo'
    
    sprite.vx = 0
    sprite.vy = 0

    app.stage.addChild(sprite);

    state.sprite = (app.stage.children.filter(f => f.name == 'bixo'))[0]
    
    // Listen for animate update
    app.ticker.add(function (delta) {
      state.sprite.x += state.sprite.vx
      state.sprite.y += state.sprite.vy

      
    });
    
    
    const VELOCITY = 1
    const keyboard = new Keyboard(state.sprite)
    window.addEventListener('keydown', () => keyboard.addVelocity(VELOCITY).keyDown())  
    window.addEventListener('keyup', () => keyboard.addVelocity(VELOCITY).keyUp())
  });
  
