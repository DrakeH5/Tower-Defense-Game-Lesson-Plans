var enemiesX = [
  1,
  10
]
var enemiesY = [
  5,
  5
]
var enemiesDirection = [
  "right",
  "down"
]
var enemiesTurned = [
  0,
  0
]
var enemiesTurningPointsX = [
  canvas.width/2,
  canvas.width/2,
]
var enemiesTurningPointsY = [
  1,
  canvas.height-40
]
var enemiesHealth = [
  100,
  100
]
function enemies(){
  i=0;
  while(i<enemiesX.length){
    ctx.drawImage(document.getElementById("enemy1"), enemiesX[i], enemiesY[i], 5, 5);
    if(enemiesDirection[enemiesTurned[i]]=="left"){
      enemiesX[i]--;
    } else if(enemiesDirection[enemiesTurned[i]]=="right"){
      enemiesX[i]++;
    } else if(enemiesDirection[enemiesTurned[i]]=="up") {
        enemiesY[i]--;
    } else if(enemiesDirection[enemiesTurned[i]]=="down") {
        enemiesY[i]++;
    }
    if(Math.abs(enemiesX[i]-enemiesTurningPointsX[enemiesTurned[i]])<5&&Math.abs(enemiesY[i]-enemiesTurningPointsY[enemiesTurned[i]])<5){
      enemiesTurned[i]++;
      if(enemiesTurned[i]>=enemiesTurningPointsX.length) {
        alert("you lose");
        window.location.href = window.location.href;
      }
    }
    if(enemiesHealth[i]<1){
      enemiesX.splice(i,1);
      enemiesY.splice(i,1);
      enemiesDirection.splice(i,1);
      enemiesTurned.splice(i,1);
      enemiesTurningPointsX.splice(i,1);
      enemiesTurningPointsY.splice(i,1);
      enemiesHealth.splice(i,1);
      money+=10;
    }
    i++;
  }
}
