class Iron {
    constructor (x,y,width,height)
    {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':30
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 60;
      this.height = 50;
      World.add(world, this.body);
    };
    display(){
        var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      strokeWeight(6);
	  stroke("brown");
      fill('grey')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
}