var storeItems = [
  "Turrent 1",
  "Turrent 2",
  "Turrent 3",
  "Turrent 4",
]
var storeItemsPrices = [
  10,
  20,
  30,
  40,
]
var storeItemsPictures = [
  document.getElementById("tower1"),
  document.getElementById("tower2"),
  document.getElementById("tower3"),
  document.getElementById("tower4"),
]
var money = 100;
mouseX=-100;
mouseY=-100;
function store() {
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0,canvas.height-40,canvas.width,40);
  ctx.fillStyle = 'gold';
  ctx.font = "10px Arial";
  ctx.fillText(money, canvas.width-20, canvas.height-30);
  i=0;
  while(i<storeItems.length){
    ctx.fillStyle = 'red';
    ctx.font = "10px Arial";
    ctx.fillText(storeItems[i], (i*50)+5, canvas.height-30);
    ctx.fillText(storeItemsPrices[i], (i*50)+5, canvas.height-20);
    ctx.drawImage(storeItemsPictures[i], (i*50)+5, canvas.height-15, 20, 20);
    if(mouseX>(i*50)+5&&mouseX<((i*50)+5)+20&&mouseY>canvas.height-15&&mouseY<(canvas.height-15)+20&&money>=storeItemsPrices[i]&&selected==-1){
      money-=storeItemsPrices[i];
      selected=i;
    }
    i++;
  }
}


document.addEventListener('mousedown', function(evt){
  var rect = canvas.getBoundingClientRect(),
    scaleX = canvas.width / rect.width,
    scaleY = canvas.height / rect.height;
  mouseX = (evt.clientX - rect.left) * scaleX;
  mouseY = (evt.clientY - rect.top) * scaleY;
})
