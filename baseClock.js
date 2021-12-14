class BaseClock {
  constructor() {
    
  }

  update() {
    this.date = new Date();
  }

  draw(x, y, width, height) {
    // To be done by subclasses
  }
}
