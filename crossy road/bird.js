function Bird() {
  this.y = height/2;
  this.x = width/2;

  this.velocity = 2;
  this.gravity = 0.2;
  this.lift = 40

  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, 35, 35);
  }

  this.up = function(){
    this.y -= this.lift;
  }
  this.down = function(){
    this.y += this.lift;
  }

  this.left = function(){
    this.x -= 20;
  }

  this.right = function(){
    this.x += 20;
  }

  this.death = function(){
    if(this.y > height){
      alert("Too Slow !");
      this.velocity = 0;
    }
  }

  this.update = function(){
    this.y += this.velocity;
    if(this.y < 20){
      this.y=20;
    }
  }
}
