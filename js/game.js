class Game{

    constructor(){

        this.startScreen = document.getElementById('start-screen');
        this.heaDog = document.getElementById('head-dog');
        this.gameScreen = document.getElementById('game-start');
        this.gameEndScreen = document.getElementById('game-end');

        this.height = '600';
        this.width = '1000';

        this.dog = null;

        this.cat = null;

    }


    launch(){
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;
       
        this.startScreen.style.display = 'none';
        this.heaDog.style.display = 'none';
        
        this.gameScreen.style.display = 'block';

        this.dog = new Dog(this.gameScreen);

        this.cat = new Obstacle(this.gameScreen);

        this.gameLoop();
    }

    gameLoop(){
        this.dog.move();
    
       
        window.requestAnimationFrame(() => this.gameLoop());
    }
}