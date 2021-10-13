var towerPlacementSpotsX = [
  10,
  100,
]
var towerPlacementSpotsY = [
  30,
  60,
]
var towerBasesPlaced = [
  -1,
  -1,
]
var selected="";
function towers(){
  i=0;
  while(i<towerPlacementSpotsX.length){
    ctx.fillStyle = 'rgba(225,225,225,0.5)';
    ctx.fillRect(towerPlacementSpotsX[i]-30, towerPlacementSpotsY[i]-30, 100, 100);
    if(towerBasesPlaced[i]>-1){
      i2=0;
      while(i2<enemiesX.length){
        if(enemiesX[i2]>towerPlacementSpotsX[i]-30&&enemiesX[i2]<towerPlacementSpotsX[i]+70&&enemiesY[i2]>towerPlacementSpotsY[i]-30&&enemiesY[i2]<towerPlacementSpotsY[i]+70){
          ctx.strokeStyle = 'red';
          ctx.beginPath();
          ctx.moveTo(towerPlacementSpotsX[i]+20, towerPlacementSpotsY[i]+20);
          ctx.lineTo(enemiesX[i2]+5, enemiesY[i2]+5);
          ctx.stroke();
          enemiesHealth[i2]-=0.5*(towerBasesPlaced[i]+1);
        }
        i2++;
      }
    }
    ctx.drawImage(document.getElementById("towerbase"), towerPlacementSpotsX[i], towerPlacementSpotsY[i], 40, 40);
    if(selected>-1){
      if(mouseX>towerPlacementSpotsX[i]&&mouseX<towerPlacementSpotsX[i]+40&&mouseY>towerPlacementSpotsY[i]&&mouseY<towerPlacementSpotsY[i]+40&&towerBasesPlaced[i]==-1){
        towerBasesPlaced[i]=selected;
        selected="";
      }
    }
    i++;
  }
  i=0;
  while(i<towerBasesPlaced.length){
    if(towerBasesPlaced[i]!=-1){
      ctx.drawImage(storeItemsPictures[towerBasesPlaced[i]], towerPlacementSpotsX[i]+10, towerPlacementSpotsY[i]+10, 20, 20);
    }
    i++;
  }
}
