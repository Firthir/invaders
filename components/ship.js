function Ship() {
    this.x = width/2;
    this.y = height - 30;
    this.xDir = 0;

    this.show = function() {
        fill(255);
        rectMode(CENTER);
        rect(this.x, this.y, 20, 40);
    }
    this.move = function() {
        this.x += this.xDir*5;
    }
    this.setDir = function(dir) {
        this.xDir = dir;
    }
}

