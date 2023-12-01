class Dog{
    constructor(gameScreen){
        this.gameScreen = gameScreen;
       /* this.left = 230;
         this.top = 540;*/
         this.height = 80;
         this.width = 100;
        /* this.directionX = 0;
         this.directionY = 0;*/

         this.element = document.createElement('img');
         this.element.src = '../images/body.png';
        this.element.style.position = 'absolute';

        this.element.style.height = `${this.height}px`
        this.element.style.width = `${this.width}px`
  
  /*    this.element.style.left = `${this.left}px`
      this.element.style.top = `${this.top}px`
  */
 
       console.log(this.element);
      this.gameScreen.appendChild(this.element)
    }
}