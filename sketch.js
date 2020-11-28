var bullet , wall , speed , weight, thickness;
function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);
  bullet=createSprite(50,200,50,50);
  wall=createSprite(1200,200,thickness,height/2);
  bullet.velocityX=speed;
  thickness=random(22,83);
  bullet.shapeColor=("white")
  speed=random(223,221)
  weight=random(30,52)
}

function draw() {
  background("black");  
  if (wall.x-bullet.x < (bullet.width + wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5 * width * speed * speed/22509
    if(deformation>180)
    {
      bullet.shapeColor=color(255,0,0)
    }
if (deformation <180 && deformation>100)
{bullet.shapeColor=color(230,230,0)
 }
 if(deformation<100)
 {
   bullet.shapeColor=color(0,255,0);
 }

 
  }
  drawSprites();


  if(hasCollided(bullet,wall))
{
  bullet.velocity=0;
  var damage=0.5 * weight * speed *speed/(thickness*thickness*thickness);
 
}
if(damage>10);
{
 wall.shapeColor=color(255,0,0)
}
if(damage<10)

{

  wall.shapeColor=color(0,255,0);
}

  function hasCollided(lbullet,lwall){

    bulletRightEdge=lBullet.x+ lBullet.width;
    wallLeftEdge=lWall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true ;
  }
}

return false;
}