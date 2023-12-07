class Cheese {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.width = 30;
    this.height = 30;
    this.left = 1000;
    this.top = Math.floor(Math.random() * (350 - this.height - 500) + 550);
    this.element = document.createElement("img");
    this.element.src = "images/cheese.png";
    this.element.style.position = "absolute";

    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;

    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.gameScreen.appendChild(this.element);
  }

  move(score) {
    if (score < 40) {
      this.left += -0.5;
    } else if (score >= 40 && score < 80) {
      this.left += -1;
    } else if (score >= 80 && score < 120) {
      this.left += -2;
    } else {
      this.left += -3;
    }
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
}
