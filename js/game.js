class Game {
  constructor() {
    this.startScreen = document.getElementById("start-screen");
    this.heaDog = document.getElementById("head-dog");
    this.gameScreen = document.getElementById("game-start");
    this.gameEndScreen = document.getElementById("game-end");
    this.gameScore = document.getElementById("game-score");

    this.height = "600";
    this.width = "1000";

    //dog
    this.dog = null;

    //obstacles
    this.cats = [];
    this.puddles = [];

    //gain
    this.cheeses = [];

    this.score = 0;

    this.lives = [];

    this.level = null;

    this.booleanScore = false;

    this.heart = [];

    this.srcBone = "images/bones.png";

    this.createImg(this.srcBone, "level");

    this.createHeartimg(this.heart, this.lives);

    this.animateId = null;

    this.gameOver = false;

    //sounds effect
    this.audio = new Audio("sounds/background-sound.mp3");
    this.audio.play();
    this.yummy = new Audio("sounds/yummy.mp3");
    this.umph = new Audio("sounds/umph.mp3");
    this.lose = new Audio("sounds/lose.wav");
  }

  launch() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    this.startScreen.style.display = "none";
    this.heaDog.style.display = "none";

    this.gameScreen.style.display = "block";
    this.gameScore.style.display = "block";

    this.dog = new Dog(this.gameScreen);

    this.gameLoop();
    //localStorage.setItem(this.score);
    //const storeScore = localStorage.getItem(this.score);
  }

  gameLoop() {
    // player moves
    this.dog.move();

    //Obstacles
    this.obstacle(this.cats);
    this.obstacle(this.puddles);

    //gains
    this.gain(this.cheeses);

    //update the score, lives and level
    document.getElementById("score").innerText = this.score;

    if (this.score == 40 && !this.booleanScore) {
      this.createImg(this.srcBone, "level");
      this.booleanScore = true;
    }
    if (this.score == 80 && this.booleanScore) {
      this.createImg(this.srcBone, "level");
      this.booleanScore = false;
    }
    if (this.score == 120 && !this.booleanScore) {
      this.createImg(this.srcBone, "level");
      this.booleanScore = true;
    }
    if (this.score == 160 && this.booleanScore) {
      this.createImg(this.srcBone, "level");
      this.booleanScore = false;
    }

    if (this.animateId % 300 === 0 && this.score < 40) {
      this.cats.push(new Cat(this.gameScreen));
      this.cheeses.push(new Cheese(this.gameScreen));
      this.checkSuperposition(this.cats, this.cheeses);
    }
    //add obstacles when score increases
    if (this.animateId % 200 === 0 && this.score >= 40) {
      this.cats.push(new Cat(this.gameScreen));
      this.puddles.push(new Puddle(this.gameScreen));
      this.cheeses.push(new Cheese(this.gameScreen));

      this.checkSuperposition(this.cats, this.cheeses);
      this.checkSuperposition(this.cats, this.puddles);
      this.checkSuperposition(this.puddles, this.cheeses);
    }

    if (this.animateId % 100 === 0 && this.score >= 80) {
      this.cats.push(new Cat(this.gameScreen));
      this.puddles.push(new Puddle(this.gameScreen));
      this.cheeses.push(new Cheese(this.gameScreen));

      this.checkSuperposition(this.cats, this.puddles);
      this.checkSuperposition(this.puddles, this.cheeses);
      this.checkSuperposition(this.cats, this.cheeses);
    }
    if (this.gameOver) {
      this.audio.pause();
      this.lose.play();
      this.createImg("images/skull.png", "lives");

      this.gameScreen.style.display = "none";
      this.gameEndScreen.style.display = "block";
      this.dog.element.remove();
    } else {
      this.animateId = requestAnimationFrame(() => this.gameLoop());
    }
  }

  //factorisation obstacles
  obstacle(obstacles) {
    const nextObstacle = [];
    obstacles.forEach((currentObstacle) => {
      currentObstacle.move();

      if (currentObstacle.left < 1000) {
        if (this.dog.didCollide(currentObstacle)) {
          currentObstacle.element.remove();
          this.umph.play();
          this.removeLives(this.heart, this.lives);
          if (this.lives.length <= 0) {
            this.gameOver = true;
          }
        } else {
          nextObstacle.push(currentObstacle);
        }
      } else {
        currentObstacle.element.remove();
      }
    });
    obstacles = nextObstacle;
  }

  //factorisation cheeses
  gain(gains) {
    const nextGains = [];
    this.cheeses.forEach((currentGain) => {
      currentGain.move();

      if (currentGain.left < 1000) {
        if (this.dog.didCollide(currentGain)) {
          currentGain.element.remove();
          this.score += 20;
          this.yummy.play();
        } else {
          nextGains.push(currentGain);
        }
      } else {
        currentGain.element.remove();
      }
    });
    gains = nextGains;
  }

  //avoid superposition
  checkSuperposition(obstacles2Remove, obstacles2Keep) {
    obstacles2Remove.forEach((element2remove) => {
      obstacles2Keep.forEach((element2keep) => {
        const element2removeRect =
          element2remove.element.getBoundingClientRect();
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

  //remove lives
  removeLives(heart, lives) {
    lives.pop();
    heart[lives.length].remove();
  }

  //create image
  createImg(src, elementId) {
    let img = document.createElement("img");
    img.src = src;
    document.getElementById(elementId).appendChild(img);
  }

  //create multiple images
  createHeartimg(heart, lives) {
    for (let i = 0; i < 3; i++) {
      heart.push(document.createElement("img"));
      heart[i].src = "images/heart.png";
      lives.push(document.getElementById("lives").appendChild(heart[i]));
    }
  }
}
