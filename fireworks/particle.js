function Particle(x, y, firework,col,col2,col3) {
    this.pos = createVector(x, y)
    this.acc = createVector(0, 0)
    this.firework = firework;
    this.lifespan = 255
    this.col = col
    this.col2 = col2
    this.col3 = col3
    if (this.firework) {
        this.vel = createVector(0, random(-18, -10));
    } else {
        this.vel = p5.Vector.random2D()
        this.vel.mult(random(2, 15))
    }
    this.applyForce = function (force) {
        this.acc.add(force)
    }

    this.done = function () {
        if (this.lifespan < 0) {
            return true;
        } else {
            return false;
        }
    }

    this.update = function () {
        if (!this.firework) {
            this.vel.mult(0.85)
            this.lifespan -= 4
        }
        this.vel.add(this.acc)
        this.pos.add(this.vel)
        this.acc.mult(0)
    }

    this.show = function () {
        if (!this.firework) {
            strokeWeight(2)
            stroke(this.col,this.col2,this.col3, this.lifespan)
        } else {
            strokeWeight(4)
            stroke(this.col,this.col2,this.col3)
        }
        point(this.pos.x, this.pos.y)
    }
}