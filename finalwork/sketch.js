// 最終課題を制作しよう
let a, b;
let timestamp = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);
  a=width/5
  b=height/5
  c=width/5
  d=height*2/5
  e=width*2/5
  f=height*3/5
  g=0
  h=height*4/5

  starttm = millis();
}

function draw(){
  background(160, 192, 255);

  ellipse(a, b, 30);
  a += 1.5;
  if(a > width*2/5){a=width*2/5;};

  let sabun = millis() - starttm;
  if(  sabun > 1000 * 5 ){
    ellipse(e,f,30);
  e += 1.5;
  if(e > width*3/5){e=width*3/5}
  }

  if(  sabun < 1000 * 2 ){
    fill(237, 197, 194)
    person(width/5, height*2/5,width/10);
  }


  if(  sabun > 1000 * 2 ){
  fill(237, 197, 194);
  person(c,d,width/10);
  c -= 0.8;
  if(c < 0){c=0;};
  }

   if(  sabun > 1000 * 7){
  person(g,h,width/10);
  g += 0.8;
  if(g > width/5){g=width/5;};
   }





  for(let i = 1; i < 5; i++){

  fill(255);
  rectMode(CENTER)
  rect(width * 2/5, height * (5 - i) / 5, width / 7, width/10);
  rect(width * 3/5, height * (5 - i) / 5, width / 10, width/10);

  fill(0);
   textAlign(CENTER, CENTER)
   text("A",width * 2/5, height * (5 - i) / 5);
   text("B",width * 3/5, height * (5 - i) / 5);
   textSize(width / 20);

  fill(237, 197, 194);
   person(width / 5, height /5 ,width/10);
   fill(206, 214, 242);
   person(width * 4/5, height * (5 - i) / 5, width/10);
  }
}


function person(x, y, size){
  ellipse(x,y+height/20,size*0.4,size * 0.8);
  ellipse(x,y,size*0.4,size * 0.4);
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
