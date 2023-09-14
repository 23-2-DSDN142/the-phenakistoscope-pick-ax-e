const SLICE_COUNT = 11;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK );
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  new PLayer(null, 255, 143, 87);  //lets us draw the whole circle background, ignoring the boundaries

  

  var layer1 = new PLayer(circles);   //background layers
  layer1.mode( RING );
  layer1.set_boundary( 0, 1000 );

  var layer2 = new PLayer(clouds);    //red clouds
  layer2.mode(RING);
  layer2.set_boundary( 0, 1000 );

  var layer3 = new PLayer(ducks);     //ring of ducks on the middle
  layer3.mode(RING);
  layer3.set_boundary( 0, 1000 );

  var layer4 = new PLayer(walkingDucks);  //herons
  layer4.mode(RING);
  layer4.set_boundary( 500, 800 );

  var effect = new PLayer(bubbles);       //middle effect
  effect.mode(SWIRL(3));
  effect.set_boundary( 0, 120 );
  
  var rainEffect = new PLayer(rain);      //rain
  rainEffect.mode(SWIRL(5));
  rainEffect.set_boundary( 350, 800 );
}




function circles(x, y, animation, pScope){
  scale(2)
  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;
 
  //orange layer
  fill(255, 202, 87)
  stroke(255, 127, 41)
  strokeWeight(10)
  
 
  arc(x,y,500,780,backgroundArcStart,backgroundArcEnd); // orange circle

  

  let angleOffset2 = (360 / SLICE_COUNT) / 2
  let backgroundArcStart2 = 270 - angleOffset2;
  let backgroundArcEnd2 = 270 + angleOffset2;
 
  fill(89, 255, 255) //lighter blue 89, 255, 255
  
  strokeWeight(80)
  stroke(177, 247, 64)
  arc(x,y,300,500,backgroundArcStart2,backgroundArcEnd2); //blue edge and green stroke
  
  noStroke()
  fill(52, 235, 232) //darker blue 52, 235, 232
 
  
  arc(x,y,200,400,backgroundArcStart2,backgroundArcEnd2); //pond
 

  //middle wirlpool dots
  

  fill( 89, 255, 255 )   
  
  ellipse(0,-40-animation.wave()*10,20) // .wave is a cosine wave btw negative numbers//first variable twists it
 

}

function clouds(x, y, animation, pScope){
  
  
  fill(250, 89, 67);
  
  let ballSize  = 100 + (animation.wave(1)* 20)
  let bouce = 30* animation.wave()
  noStroke();
  
  
  ellipse(250, 850+bouce-10 ,ballSize+40); //middle ball
  ellipse(180, 850+bouce-10 ,ballSize); 
  ellipse(120, 840+bouce-10 ,ballSize-30); 
  ellipse(-180, 850+bouce-10 ,ballSize); 
  ellipse(-120, 835+bouce-10 ,ballSize-30); 


}

function ducks(x, y, animation, pScope){
 

  push()
    rotate(360/SLICE_COUNT * animation.frame) 
    noStroke()
    fill(255)
    ellipse(150, 200, 100,100) 
    
    fill(255, 141, 41)
    ellipse(10, 160, 40,30) 
    fill(255)
    ellipse(10, 200, 70,70) 
    
    fill(0)
    ellipse(30, 190, 10)
    ellipse(-10, 190, 10)


  pop()
  
  } 

  function walkingDucks(x, y, animation, pScope){
 

    push()
      rotate(360/SLICE_COUNT  * animation.frame) 
      let rectJump = 550 + (animation.wave(1) * 50) 
      
      fill(0)
      ellipse(60, 675, 50,10)

      noStroke()
      fill(255)
      ellipse(0, 650, 100,50) 
      ellipse(40, 675, 50)
      
      stroke(0)
      strokeWeight(5)

      line(0,630,0,rectJump)
      line(0,rectJump,30,rectJump)
  
    pop()
    
    } 

  function bubbles(x, y, animation, pScope){
   
    
    fill(89, 255, 255) 
    strokeWeight(5)
    stroke(52, 235, 232 ) 
    
    ellipse(0,0,20)

    }

  function rain(x, y, animation, pScope){
      
    fill(64, 86, 255)
       
    ellipse(0,0,3,10)
    ellipse(50,20,3,10)
    ellipse(-50,20,3,10)
         
   }