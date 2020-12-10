class BaseClass
   constructer(x, y, width, height ){
   var option = {
      'restitustion'::0.8,
      'friction':1.0,
      'density':0.1,

   }
   this.body = Bodies.rectangle('x , y, width, height, option');
   this.width = widht;
   this.height = height;
   this.image = Loadimage("sprites/base.png")
   World.add(world, this.body)
   }
   display
   var angle = this.body.angle;
   push();
  translate(this.body.x, this.body.y);
  rotate(angle);
  imageMode(CENTER);
  Image(this.image,0,0,this.width,this.height);
pop();
    }
}