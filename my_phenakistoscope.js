const SLICE_COUNT = 11;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);//ANIMATED_DISK//OUTPUT_GIF(1000
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  new PLayer(null, 126, 252, 227);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(faces);
  
  layer1.mode( SWIRL(10) );
  layer1.set_boundary( 0, 1000 ); //1000

  var layer2 = new PLayer(squares);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );
  
}

function faces(x, y, animation, pScope){
  
  //scale(animation.frame*2);
  scale(1);

  ellipse(0,0,50,50); // draw head
  fill(30);
  ellipse(-10,-10,10,10); //draw eye
  ellipse(10,-10,10,10); // draw eye
  arc(0,10,20,10,0,180); // draw mouth

  //rect(-25,0, 55, 55)

}

function squares(x, y, animation, pScope){
  scale(2)
  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(120, 191, 120)
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background have to be the same number for a circle

  fill(255)
  rect(0,-300-animation.wave()*50,20,20) // .wave is a cosine wave btw negative numbers

}
