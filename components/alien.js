function Alien(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.r = 30;
    this.xDir = 1;

    this.show = function() {
        fill(255, 0, 200);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }

    this.move = function() {
        console.log(this.speed);
        if (this.speed === 'fast') {
        this.x = this.x + this.xDir * 13;
        } else {
        this.x = this.x + this.xDir;
        }
    }

    this.shiftDown = function() {
        this.xDir *= -1;
        this.y =  this.y + this.r;
    }
}

