class Obstacle{
    constructor(gameScreen){
        this.gameScreen = gameScreen;
        this.width = 40
        this.height = 50
        this.left = 500
        this.top = Math.floor(Math.random() * (480 - this.height - 300) + 300)
        this.element = document.createElement('img')
         this.element.src = '../images/cat.png'
         this.element.style.position = 'absolute'

    this.element.style.height = `${this.height}px`
    this.element.style.width = `${this.width}px`

    this.element.style.left = `${this.left}px`
    this.element.style.top = `${this.top}px`

    this.gameScreen.appendChild(this.element)
    }




}