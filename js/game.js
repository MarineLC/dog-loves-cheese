class Game{

    constructor(){

        this.startScreen = document.getElementById('start-screen');
        this.heaDog = document.getElementById('head-dog');
        this.gameScreen = document.getElementById('game-start');
        this.gameEndScreen = document.getElementById('game-end');

        this.height = '600';
        this.width = '1000';

        this.dog = null;

        this.cats = [];

        this.cheeses = [];

        this.score = 0;
        this.lives = 3;

        this.animateId = null
        
        this.gameOver = false;
    }


    launch(){
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;
       
        this.startScreen.style.display = 'none';
        this.heaDog.style.display = 'none';
        
        this.gameScreen.style.display = 'block';

        this.dog = new Dog(this.gameScreen);

        this.gameLoop();
    }

    gameLoop(){
        // player moves
        this.dog.move();
    
    
    //Obstacles cats move
    const nextCats = []
    this.cats.forEach(currentCat => {
        currentCat.move();
        console.log(currentCat.left);
      if (currentCat.left < 1000) {
        if (this.dog.didCollide(currentCat)) {
          console.log('collision');
          currentCat.element.remove();
          this.lives -= 1;
          if (this.lives <= 0) {
            this.gameOver = true;
          }
        } else {
            nextCats.push(currentCat);
        }
    }
       else {
        currentCat.element.remove();
        this.score += 30;
       }

    });
     this.cats = nextCats;

     //Obstacles cheese move
    const nextCheeses = []
    this.cheeses.forEach(currentCheese => {
        currentCheese.move();
        console.log(currentCheese.left);
      if (currentCheese.left < 1000) {
        if (this.dog.didCollide(currentCheese)) {
          console.log('yummy');
          currentCheese.element.remove();
          this.score += 20;
          
        } else {
            nextCheeses.push(currentCheese);
        }
    }
       else {
        currentCheese.element.remove();
       }

    });
     this.cheeses = nextCheeses;


    //update the score and lives
     document.getElementById('score').innerText = this.score
    document.getElementById('lives').innerText = this.lives

     console.log(this.animateId)
     if (this.animateId % 300 === 0) {
        console.log(this.animateId)
        this.cats.push(new Cat(this.gameScreen))
        this.cheeses.push(new Cheese(this.gameScreen))
      }
      //speed up the animations
      if (this.score > 80 && this.animateId % 200 === 0) {
        this.cats.push(new Cat(this.gameScreen))

      }
      if (this.score > 120 && this.animateId % 100 === 0) {
        this.cats.push(new Cat(this.gameScreen))

      }
      console.log(this.cats)

         if (this.gameOver) {
           this.gameScreen.style.display = 'none'
           this.gameEndScreen.style.display = 'block'
          this.dog.element.remove()
         } else {

             this.animateId = requestAnimationFrame(() => this.gameLoop())

            }
}
}