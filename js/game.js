class Game{

    constructor(){

        this.startScreen = document.getElementById('start-screen');
        this.gameScreen = document.getElementById('game-start');
        this.gameEndScreen = document.getElementById('game-end');
    }


    launch(){
        this.startScreen.style.display = 'none';
        this.gameScreen.style.display = 'block';
    }

}