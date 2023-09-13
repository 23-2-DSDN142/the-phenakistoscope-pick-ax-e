const SLICE_COUNT = 11;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);//ANIMATED_DISK//OUTPUT_GIF(1000) //
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  new PLayer(null, 255, 143, 87);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(faces);
  
  layer1.mode( SWIRL(10) );
  layer1.set_boundary( 0, 1000 ); //1000

  var layer2 = new PLayer(squares);
  layer2.mode( RING );
  layer2.set_boundary( 0, 500 );

  var layer3 = new PLayer(circles);
  layer3.mode(RING);
  layer3.set_boundary( 0, 1000 );

  var layer4 = new PLayer(edge);
  layer4.mode(RING);
  layer4.set_boundary( 0, 1000 );
  
}

function faces(x, y, animation, pScope){
  
  //scale(animation.frame*2);
  //scale(1);
 // fill(247, 64, 64);
  //noStroke()
  //ellipse(0,0,30,30); // draw head
 
  
  

}

function squares(x, y, animation, pScope){
  scale(2)
  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;
 
  fill(255, 202, 87)
  stroke(255, 127, 41)
  arc(x,y,500,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background have to be the same number for a circle

  fill(255, 225, 89)
  stroke(255, 242, 0)
  strokeWeight(5)
  ellipse(0,-300-animation.wave()*80,20,20) // .wave is a cosine wave btw negative numbers//first variable twists it
  ellipse(40,-300-animation.wave()*50,20,20) //make the rain
  ellipse(-40,-300-animation.wave()*50,20,20)

  let angleOffset2 = (360 / SLICE_COUNT) / 2
  let backgroundArcStart2 = 270 - angleOffset2;
  let backgroundArcEnd2 = 270 + angleOffset2;
 
  fill(89, 255, 255)
  strokeWeight(80)
  stroke(177, 247, 64)
  arc(x,y,300,500,backgroundArcStart2,backgroundArcEnd2); 

}

function circles(x, y, animation, pScope){
  //translate(50 * animation.frame, 0);
  //scale(animation.frame*2);
  fill(250, 89, 67);
  
  let ballSize  = 100 + (animation.wave(1)* 20)
  let bouce = 30* animation.wave()
  noStroke();
  
  
  ellipse(250, 850+bouce ,ballSize+40); //middle ball
  ellipse(180, 850+bouce ,ballSize); 
  ellipse(120, 840+bouce ,ballSize-30); 
  ellipse(-180, 850+bouce ,ballSize); 
  ellipse(-120, 835+bouce ,ballSize-30); 


}

function edge(x, y, animation, pScope){
 
  
 
 
  push()
    rotate(30 * animation.frame) //90 originaly
    let rectJump = 200 + (animation.wave(1) * 25) //750 and 50 originaly
    noStroke()
    fill(255)
    ellipse(150, 200, 100,100) //y was rectjump
    
    fill(255, 141, 41)
    ellipse(10, 160, 40,30) 
    fill(255)
    ellipse(10, 200, 70,70) 
    
    fill(0)
    ellipse(30, 190, 10)
    ellipse(-10, 190, 10)


  pop()

  
  } 