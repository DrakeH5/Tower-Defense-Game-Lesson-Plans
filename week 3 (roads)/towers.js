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
