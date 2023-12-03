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

 // Check if the pressed key is in the possibleKeystrokes array
 document.addEventListener('keydown', event => {

    if (event.code === 'ArrowUp' || event.code === 'KeyW') {
      console.log('Go up !')
      console.log(game.dog.directionY);
      console.log(game.dog.directionX);
      game.dog.directionY = -1
    }
    if (event.code === 'ArrowDown' || event.code === 'KeyS') {
      console.log('Go down !')
      game.dog.directionY = 1
    }
    if (event.code === 'ArrowLeft' || event.code === 'KeyA') {
      console.log('Go left !')
      game.dog.directionX = -1
    }
    if (event.code === 'ArrowRight' || event.code === 'KeyD') {
      console.log('Go right !')
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
      console.log('Stop moving on Y')
      game.dog.directionY = 0
    }
    if (
      event.code === 'ArrowLeft' ||
      event.code === 'KeyA' ||
      event.code === 'ArrowRight' ||
      event.code === 'KeyD'
    ) {
      console.log('Stop moving on X')
      game.dog.directionX = 0
    }
  }
  )


};