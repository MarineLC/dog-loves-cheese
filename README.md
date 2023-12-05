# Dog chasing chesse

## [Play the game] (https://marinelc.github.io/dog-loves-cheese/)

# Description

Dog chasing chesse is a game where player can play a dog who find some cheese and has to avoid cats and puddles. The player got 3 lives, each collision woth a cats or puddles takes away a life. The game ends when tha player has no more lives.

# Main Functionalities

- Dog move when we press arrow from the keyboard
- Dog can move from left to right and can move from bottom to top
-

# Technologies Used

- HTML
- CSS
- JavaScript
- DOM Manipulation
- JS Classes
- JS Audio() and JS Image()

# States

- Start Screen
- Game Screen
- Game Over Screen

# Proyect Structure

## main.js

- window.onload();
- startGame();


## game.js

- Game ()
    - this.startScreen
    - this.heaDog
    -   this.gameScreen
    -   this.gameEndScreen
    -   this.height
    -   this.width
    -   this.dog
    -   this.cats
    -   this.puddles
    -   this.cheeses
    -   this.score 
    -   this.lives
    -   this.level
    -   this.animateId
    -   this.gameOver
    -   this.yummy
    -   this.umph

- launch()    
- gameLoop()
- obstacle(obstacles)
- gain(gains)
- checkSuperposition(obstacles2Remove, obstacles2Keep)


## dog.js

- Dog()
    - this.gameScreen
    - this.left
    - this.top
    - this.height
    - this.width
    - this.directionX
    - this.directionY
    - this.element

- move()  
- updatePosition()
- didCollide(obstacle)

## cheese.js

- Cheese()
    - this.gameScreen
    - this.left
    - this.top
    - this.height
    - this.width
    - this.element

- move()
- updatePosition() 

## cats.js

- Cat()
    - this.gameScreen
    - this.left
    - this.top
    - this.height
    - this.width
    - this.element

- move()
- updatePosition() 

## puddles.js

- Puddle()
    - this.gameScreen
    - this.left
    - this.top
    - this.height
    - this.width
    - this.element

- move()
- updatePosition() 

      
