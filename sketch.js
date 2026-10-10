let flowers = [];

// Which flower blooms next?
let currentFlower = 0;

// Timer
let lastBloomTime = 0;

// One flower blooms every 2 seconds
let bloomInterval = 2000;


function setup() {

  createCanvas(800, 600);

  // CREATE FLOWERS

  for (let i = 0; i < 25; i++) {

    let x = random(40, width - 40);

    // Bottom of stem
    let y = random(500, 590);

    let size = random(30,70);

    flowers.push(
      new Flower(x, y, size)
    );
  }

  lastBloomTime = millis();

}


function draw() {

  // BACKGROUND can add perlin noise

  drawGround();

  // TIMER

  if (millis() - lastBloomTime >= bloomInterval) {
    if (currentFlower < flowers.length){

      // Bloom next flower
      flowers[currentFlower].bloom();

      // Move to next flower
      currentFlower++;

    }

    // Reset timer
    lastBloomTime = millis();

  }

  // FLOWERS

  for (let flower of flowers) {

    flower.update();

    flower.display();

  }

}

// BACKGROUND

// GRASS
function drawGround() {

  noStroke();

  // Main grass
  fill(175,205,145);

  rect(0,420,width,height - 420);
  
}