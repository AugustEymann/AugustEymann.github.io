function Particle(x, y, firework,r,g,b) {   
    this.pos = createVector(x, y)
    this.acc = createVector(0, 0)
    this.firework = firework;
    this.lifespan = 255
    this.r = r
    this.g = g
    this.b = b
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
            stroke(this.r,this.g,this.b, this.lifespan)
        } else {
            strokeWeight(4)
            stroke(this.r,this.g,this.b)
        }
        point(this.pos.x, this.pos.y)
    }
}