window.onload = function () {

    const startGamebtn = document.getElementById('head-dog');
    const restartGameBtn = document.getElementById('restart-button');

    let game;


    startGamebtn.addEventListener("click", function () {
    
  
    });
    
    const audio = new Audio("sounds/background-sound.mp3");
    const buttons = document.querySelectorAll("button");

  buttons.forEach(button => {
   button.addEventListener("click", () => {
      audio.play();
   });
  });

    function startGame() {

        game = new Game()
        game.launch()
    }
  

    startGamebtn.addEventListener('click', function () {
        startGame();
      })

      restartGameBtn.addEventListener('click', function () {
        // startGame()
        //startGame();
       location.reload()
      })

 // Check if the pressed key is in the possibleKeystrokes array
 document.addEventListener('keydown', event => {

    if (event.code === 'ArrowUp' || event.code === 'KeyW') {
      game.dog.directionY = -1
    }
    if (event.code === 'ArrowDown' || event.code === 'KeyS') {
      game.dog.directionY = 1
    }
    if (event.code === 'ArrowLeft' || event.code === 'KeyA') {
      game.dog.directionX = -1
    }
    if (event.code === 'ArrowRight' || event.code === 'KeyD') {
      game.dog.directionX = 1
    }
  })

  document.addEventListener('keyup', event => {
    if (
      event.code === 'ArrowUp' ||
      event.code === 'KeyW' ||
      event.code === 'ArrowDown' ||
      event.code === 'KeyS'
    ) {

      game.dog.directionY = 0
    }
    if (
      event.code === 'ArrowLeft' ||
      event.code === 'KeyA' ||
      event.code === 'ArrowRight' ||
      event.code === 'KeyD'
    ) {

      game.dog.directionX = 0
    }
  }
  )


};