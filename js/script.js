window.onload = function () {

    const startGamebtn = document.getElementById('head-dog');

    let game;


    startGamebtn.addEventListener("click", function () {
    
  
    });

    function startGame() {

        game = new Game()
        game.launch()
    }
  

    startGamebtn.addEventListener('click', function () {
        startGame();
      })

};