class Flower {

  constructor(x, y, size) {

    // Position of the bottom of the stem
    this.x = x;
    this.y = y;

    // Final flower size
    this.size = size;

    // Starts as a small bud
    this.currentSize = 5;

    // Random stem height
    this.stemHeight = random(50, 130);

    // Has this flower started blooming?
    this.blooming = false;


    // Random flower colour
    this.colour = random([
      color(245, 100, 25), // orange
      color(220, 55, 40),  // red
      color(170, 55, 150),  // purple
      color(245, 240, 220), // white
      color(210, 100, 170)  // pink
    ]);
  }


  // Start blooming
  bloom() {
    this.blooming = true;
  }

  // Update flower size
  update() {

    if (this.blooming) {

      // Slowly grow
      this.currentSize += 0.5;


      // Stop at final size
      if (this.currentSize > this.size) {

        this.currentSize = this.size;

      }
    }
  }

  // Draw flower
  display() {

    // Position of flower head
    let flowerY = this.y - this.stemHeight;

    // STEM
    stroke(95, 145, 75);
    strokeWeight(3);

    line(this.x, this.y, this.x, flowerY);

    // FLOWER
   
    noStroke();

    fill(this.colour);

    circle(this.x, flowerY, this.currentSize);

    // FLOWER CENTER

    fill(235, 190, 60);

    circle(this.x, flowerY, this.currentSize * 0.3);

  }

}