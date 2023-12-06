window.onload = function () {

    const startGamebtn = document.getElementById('head-dog');
    const restartGameBtn = document.getElementById('restart-button');
    
    const audio = new Audio('sounds/background-sound.mp3');

    let game;

    function startGame() {
        game = new Game()
        game.launch()
    }
  

    startGamebtn.addEventListener('click', function () {
      audio.play();
      startGame();
      })

      restartGameBtn.addEventListener('click', function () {
       location.reload();
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