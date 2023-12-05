class Cheese{
    constructor(gameScreen){
        this.gameScreen = gameScreen;
        this.width = 40
        this.height = 40
        this.left = 1000
        this.top = Math.floor(Math.random() * (350 - this.height - 500) + 550);
        this.element = document.createElement('img')
         this.element.src = '../images/cheese.png'
         this.element.style.position = 'absolute'

    this.element.style.height = `${this.height}px`
    this.element.style.width = `${this.width}px`

    this.element.style.left = `${this.left}px`
    this.element.style.top = `${this.top}px`

    this.gameScreen.appendChild(this.element)
    }


    move() {
        this.left += -1
        this.updatePosition()
      }
    
      updatePosition() {
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
      }

      getPosition(){
        return this.top;
      }

      didSuperpose(obstacle) {
        const cheeseRect = this.element.getBoundingClientRect() 
        const obstacleRect = obstacle.element.getBoundingClientRect()
    
        if (
            cheeseRect.left < obstacleRect.right &&
            cheeseRect.right > obstacleRect.left &&
            cheeseRect.top < obstacleRect.bottom &&
            cheeseRect.bottom > obstacleRect.top
        ) {
          return true
        } else {
          return false
        }
      }
}