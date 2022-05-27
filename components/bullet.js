function Bullet(x, y) {
    this.x = x;
    this.y = y;
    this.r = 6;

    this.show = function() {
        noStroke();
        fill(100, 200, 255);
        ellipse(this.x, this.y,  this.r,  this.r * 2);
    }
    this.move = function() {
        this.y = this.y - 5;
    }
    this.hits = function(alien) {
        var d = dist(this.x, this.y, alien.x, alien.y);
        if (d < 10) {
            return true;
        } else {
            return false;
        }
    }
}

