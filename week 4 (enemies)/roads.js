var roadX = [
  1,
  canvas.width/2
]
var roadY = [
  1,
  1
]
var roadWidth = [
  canvas.width/2,
  3
]
var roadHeight = [
  3,
  canvas.height-40
]
function roads(){
  i0=0;
  while(i0<roadX.length){
    x = roadX[i0];
    y = roadY[i0];
    width = roadWidth[i0]/10;
    height = roadHeight[i0]/10;
    i=0;
    while(i<height){
      i2=0;
      while(i2<width){
        ctx.drawImage(document.getElementById("tile"), x+(i2*10), y+(i*10), 10, 10);
        i2++;
      }
      i++;
    }
    i0++;
  }
}
