var fireworks = [];
var gravity;

function setup() {
	createCanvas(windowWidth, windowHeight);
	gravity = createVector(0, 0.2)
	stroke(255);
}

function draw() {

	background(51,25)
	if (random(1) < 0.1) {
		fireworks.push(new Firework());
	}
	for (var i = fireworks.length - 1; i >= 0; i--) {
		fireworks[i].update();
		fireworks[i].show();
		if (fireworks[i].done()) {
			fireworks.splice(i,1);
		}
	}
}