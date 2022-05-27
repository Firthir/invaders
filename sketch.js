var mode = 0;
const welcomeScreen = 0;
const gameScreen = 1;
const game2Screen = 2;
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
    aliens[i] = new Alien(i * 20 + 40, 45, 'slow');
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
        for (var i = 0; i < 6; i++) {
          aliens[i] = new Alien(i * 80 + 40, 45, 'fast');
        }
      }, 2000);
    }
  }
  else if (mode == game2Screen) {
    Game2View();
    var bottom = false;
    for (var i = 0; i < aliens.length; i++) {
      if (aliens[i].y > height - 40) {
        bottom = true;
      }
    }

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
  if (key === 'Enter' && mode == welcomeScreen) {
    mode = gameScreen;
  }
  if (key === 'Enter' && mode == winScreen || mode == loseScreen) {
    mode = welcomeScreen;
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