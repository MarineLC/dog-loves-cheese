class Cat{
    constructor(gameScreen){
        this.gameScreen = gameScreen;
        this.width = 40;
        this.height = 50;
        this.left = 1000;
        this.top = Math.floor(Math.random() * (350 - this.height - 500) + 550);
        this.element = document.createElement('img');
         this.element.src = 'images/cat.png';
         this.element.style.position = 'absolute';

    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;

    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.gameScreen.appendChild(this.element);
    }


    move() {
        this.left += -1;
        this.updatePosition();
      }
    
      updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
      }

      getPosition(){
        return this.top;
      }

      didSuperpose(obstacle) {
        const catRect = this.element.getBoundingClientRect() 
        const obstacleRect = obstacle.element.getBoundingClientRect()
    
        if (
          catRect.left < obstacleRect.right &&
          catRect.right > obstacleRect.left &&
          catRect.top < obstacleRect.bottom &&
          catRect.bottom > obstacleRect.top
        ) {
          return true
        } else {
          return false
        }
      }
}