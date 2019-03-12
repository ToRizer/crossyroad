function Road(){
  this.y = 0;
  this.speed = 2;

  this.show = function(){
    fill(0);
    rect(0, this.y, width, 40);
  }

  this.update = function(){
    this.y += this.speed;
  }
}
