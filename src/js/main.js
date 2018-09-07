bG = {};
bG.map = [];
function MapTile(){
  this.occupied = false;
  this.occupant = null;
};

for (var i = 0, il = 100; i<il;i++){
	bG.map.push([]);
	for (var j = 0, jl =100;j<jl;j++){
		bG.map[i].push(new MapTile())
  }
}

function Bot(){
	var randomX = Math.floor(Math.random() * 100);
	var randomY = Math.floor(Math.random() * 100);
	bG.map[randomX][randomY].occupant = this;
	bG.map[randomX][randomY].occupied = true;
	console.log("new Bot at: ", randomX, randomY);
}

new Bot();
const roboParts = "<div class='leg leg--left'></div><div class='leg leg--right'></div><div class='body'></div><div class='arm arm--left'></div><div class='arm arm--right'></div><div class='head'></div>";
var roboBody = document.createElement("DIV");
roboBody.innerHTML = roboParts;
document.body.appendChild(roboBody);