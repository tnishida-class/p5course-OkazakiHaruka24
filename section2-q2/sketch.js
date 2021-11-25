// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if((i+j)%2==0){
        noFill();
    }
      else{
        fill(150,150,150);
      }
      rect(size * i ,size * j ,size)
    }
  }
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 3; j++){
   if((i+j)%2==0){
      noFill();
      }
   else{
      fill(255,0,0);
      }
  ellipse(size * i +12.5,size * j+12.5 ,20)
    }
  }
  for(let i = 0; i < 8; i++){
    for(let j = 5; j < 8; j++){
   if((i+j)%2==0){
      noFill();
      }
   else{
      fill(50,50,0);
      }
  ellipse(size * i +12.5,size * j+12.5 ,20)
    }
  }
}
