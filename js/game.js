class Game{

    constructor(){

        this.startScreen = document.getElementById('start-screen');
        this.heaDog = document.getElementById('head-dog');
        this.gameScreen = document.getElementById('game-start');
        this.gameEndScreen = document.getElementById('game-end');

        this.height = '600';
        this.width = '1000';

        //dog
        this.dog = null;

        //obstacles
        this.cats = [];
        this.puddles = [];

        //gain
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
    
     
       //Obstacles 
        this.obstacle(this.cats);
        this.obstacle(this.puddles);

       //gains
       this.gain(this.cheeses);
  

        //update the score and lives
         document.getElementById('score').innerText = this.score
          document.getElementById('lives').innerText = this.lives

     console.log(this.animateId)
     if (this.animateId % 300 === 0) {
        this.cats.push(new Cat(this.gameScreen));
        this.cheeses.push(new Cheese(this.gameScreen));
    
        this.checkSuperposition(this.cats, this.cheeses);

        //add obstacles when score increses
        if(this.score > 80){
            this.puddles.push(new Puddle(this.gameScreen))
            this.checkSuperposition(this.cats, this.puddles);
            this.checkSuperposition(this.puddles, this.cheeses);
        }   
      }
         if (this.gameOver) {
           this.gameScreen.style.display = 'none'
           this.gameEndScreen.style.display = 'block'
          this.dog.element.remove()
         } else {

             this.animateId = requestAnimationFrame(() => this.gameLoop())
             
            }
            
}

//factorisation obstacles
obstacle(obstacles){
    const nextObstacle = []
    obstacles.forEach(currentObstacle => {
        currentObstacle.move();
        console.log(currentObstacle.left);
      if (currentObstacle.left < 1000) {
        if (this.dog.didCollide(currentObstacle)) {
          currentObstacle.element.remove();
          this.lives -= 1;
          if (this.lives <= 0) {
            this.gameOver = true;
          }
        } else {
            nextObstacle.push(currentObstacle);
        }
    }
       else {
        currentObstacle.element.remove();
       }
    });
     obstacles = nextObstacle;
}


//factorisation cheeses 
gain(gains){
const nextGains = []
    this.cheeses.forEach(currentGain => {
      currentGain.move();
        console.log(currentGain.left);
      if (currentGain.left < 1000) {
        if (this.dog.didCollide(currentGain)) {
          currentGain.element.remove();
          this.score += 20;
        
        } else {
          nextGains.push(currentGain);
        }
    }
       else {
        currentGain.element.remove();
       }

    });
    gains = nextGains;
  }

//avoid superposition 
    checkSuperposition(obstacles2Remove, obstacles2Keep){

        obstacles2Remove.forEach(element2remove => {
            obstacles2Keep.forEach(element2keep => {
                
                const element2removeRect = element2remove.element.getBoundingClientRect();
                 const element2keepRect = element2keep.element.getBoundingClientRect();
                 
                 if (
                    element2removeRect.left < element2keepRect.right &&
                    element2removeRect.right > element2keepRect.left &&
                    element2removeRect.top < element2keepRect.bottom &&
                    element2removeRect.bottom > element2keepRect.top
                  )
                  element2keep.element.remove();             
            });            
        });
    } 




}