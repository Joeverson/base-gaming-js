
class Keyboard {
  constructor(sprite) {
    this.sprite = sprite
  }

  addVelocity(velocity) {
    this.velocity = velocity

    return this
  }

  keyDown() {
    const key = event.keyCode
    console.log(this);
    
    switch (key) {
      case 87:
        this.sprite.vy = -(this.velocity) // up
        break;
      case 68:
        this.sprite.vx = (this.velocity) // right
        break;
      case 83:
        this.sprite.vy = (this.velocity) // down
        break;
      case 65:
        this.sprite.vx = -(this.velocity) // left
        break;
    }
  }

  keyUp() {
    const key = event.keyCode

    switch (key) {
      case 87:
        this.sprite.vy = 0 // up
        break;
      case 68:
        this.sprite.vx = 0 // right
        break;
      case 83:
        this.sprite.vy = 0 // down
        break;
      case 65:
        this.sprite.vx = 0 // left
        break;
    }
  }
}
