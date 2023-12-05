class Puddle{

    constructor(gameScreen){
        this.gameScreen = gameScreen;
        this.width = 60
        this.height = 60
        this.left = 1000
        this.top = Math.floor(Math.random() * (350 - this.height - 500) + 550) + 50;
        this.element = document.createElement('img')
         this.element.src = 'images/puddle.png'
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




}