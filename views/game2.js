function Game2View() {
  background(50);
  ship.show();
  ship.move();

  for (var i = 0; i < bullets.length; i++) {
    bullets[i].show();
    bullets[i].move('fast');
    for (var index = 0; index < aliens.length; index++) {
      if (bullets[i].hits(aliens[index])) {
        aliens.splice(index, 1);
      }
    }
  }

  var edge = false;
  for (var i = 0; i < aliens.length; i++) {
    aliens[i].show();
    aliens[i].move();
    if (aliens[i].x > width || aliens[i].x < 0) {
      edge = true;
    }
  }
  if (edge) {
    for (var i = 0; i < aliens.length; i++) {
      aliens[i].shiftDown();
    }
  }
}