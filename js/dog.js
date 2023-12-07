class Dog {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = 5;
    this.top = 800;
    this.height = 120;
    this.width = 140;
    this.directionX = 0;
    this.directionY = 0;

    this.element = document.createElement("img");
    this.element.src = "images/body.png";
    this.element.style.position = "absolute";

    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;

    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.gameScreen.appendChild(this.element);
  }

  move() {
    if (this.left >= 5) {
      this.left += this.directionX;
    } else {
      this.left = 5;
    }
    if (this.left <= 1020 - this.width) {
      this.left += this.directionX;
    } else {
      this.left = 1020 - this.width;
    }

    if (this.top >= 280) {
      this.top += this.directionY;
    } else {
      this.top = 280;
    }
    if (this.top <= 800) {
      this.top += this.directionY;
    } else {
      this.top = 800;
    }
    if (this.top <= this.gameScreen.offsetHeight - (this.height - 20)) {
      this.top += this.directionY;
    } else {
      this.top = this.gameScreen.offsetHeight - (this.height - 20);
    }

    this.updatePosition();
  }
  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right - 25 &&
      playerRect.right > obstacleRect.left + 25 &&
      playerRect.top < obstacleRect.bottom - 25 &&
      playerRect.bottom > obstacleRect.top + 25
    ) {
      return true;
    } else {
      return false;
    }
  }
}
