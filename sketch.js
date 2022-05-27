var mode = 0;
const welcomeScreen = 0;
const gameScreen = 1;
const game2Screen = 2;
const gameOverScreen = 3;
const winScreen = 4;
const loseScreen = 5;
const loadingScreen = 6;

var ship;
var aliens = [];
var bullets = [];

function setup() {
  createCanvas(1000, 600);
  textAlign(CENTER, CENTER);
  ship = new Ship();
  for (var i = 0; i < 1; i++) {
    aliens[i] = new Alien(i * 80 + 40, 45, 'slow');
  }
}

function draw() {
  if (mode == welcomeScreen) {
    WelcomeView();
  }
  else if (mode == gameScreen) {
    Game1View();
    if (aliens.length === 0) {
      mode = loadingScreen;
      LoadingView();
      setTimeout(() => {
        mode = game2Screen;
        for (var i = 0; i < 3; i++) {
          aliens[i] = new Alien(i * 80 + 40, 45, 'fast');
        }
      }, 2000);
    }
  }
  else if (mode == game2Screen) {
    Game2View();
    var bottom = false;
    for (var i = 0; i < aliens.length; i++) {
      if (aliens[i].y > height + 300) {
        bottom = true;
      }
    }
    console.log(bottom);
    if (bottom) {
      mode = loseScreen;
    } else if (aliens.length === 0) {
      mode = loadingScreen;
      LoadingView();
      setTimeout(() => {
        mode = winScreen;
      }, 2000);
    }
  }
  else if (mode == winScreen) {
    WinView();
  }
  else if (mode == loseScreen) {
    LoseView();
  }

}

function keyReleased() {
  if (key !== ' ') {
    ship.setDir(0);
  }
}

function keyPressed() {
  console.log(key)
  if (key === 'Enter') {
    mode = gameScreen;
  }
  if (key === ' ') {
    var bullet = new Bullet(ship.x, ship.y);
    bullets.push(bullet);
  }
  if (key === 'ArrowRight') {
    ship.setDir(1);
  } else if (key === 'ArrowLeft') {
    ship.setDir(-1);
  }

}