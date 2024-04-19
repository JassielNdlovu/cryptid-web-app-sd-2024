/* Place your JavaScript in this file */

const ctx = board.getContext('2d');

const P2 = (x, y) => ({x,y});
const EDGES = 6;
const RADIUS = 30;
const TAU = 2 * Math.PI;
const EDGE_LEN = Math.sin(Math.PI / EDGES) * RADIUS * 2;
const GRID_Y_SPACE = Math.cos(Math.PI / EDGES) * RADIUS * 2;
const GRID_X_SPACE = RADIUS * 2 - EDGE_LEN * 0.5;
const GRID_Y_OFFSET = GRID_Y_SPACE * 0.5;
const water = "#00c3d9bf";
const forest = "#36ba38bf";
const swamp = "#422282bf";
const desert = "#dbc13dbf";
const mount = "#8f8f8fbf";
const whitebuild = "#ffffff";
const bluebuild = "#0008fc";
const greenbuild = "#004721";
const blackbuild = "#000000";
var colors = [];
var habs = [];
//const COLS = "=#00c3d9,#01335f,#3f0e77,#204a73,#511d94,#fe1f00,#0060fd,#fe7603,#f0ca1d,#b085e8,#e9cafa".split(",");
const cols1 = [water, water, water, water, forest, forest, swamp, swamp, water, desert, forest, forest, swamp, swamp, desert, desert, desert, forest];
const habs1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1]
const cols2 = [swamp,forest,forest,forest,forest,forest,swamp,swamp,forest,desert,desert,desert,swamp,mount,mount,mount,mount,desert];
const habs2 = [2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
const cols3 = [swamp,swamp,forest,forest,forest,water,swamp,swamp,forest,mount,water,water,mount,mount,mount,mount,water,water];
const habs3 = [0,0,0,0,0,0,2,2,0,0,0,0,2,0,0,0,0,0]
const cols4 = [desert,desert,mount,mount,mount,mount,desert,desert,mount,water,water,water,desert,desert,desert,forest,forest,forest];
const habs4 = [0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,2]
const cols5 = [swamp,swamp,swamp,mount,mount,mount,swamp,desert,desert,water,mount,mount,desert,desert,water,water,water,water];
const habs5 = [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1]
const cols6 = [desert,desert,swamp,swamp,swamp,forest,mount,mount,swamp,swamp,forest,forest,mount,water,water,water,water,forest];
const habs6 = [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0]
//stone then shack
//column then row
let jsonSetup = "";
var whitebuildcoords = [];
var bluebuildcoords = [];
var greenbuildcoords = [];
var blackbuildcoords = [];
const rndItem = arr => arr[Math.random() * arr.length | 0];
var elements = []
var tileOrder = [1,2,3,4,5,6];
var flip = [0,0,0,0,0,0];

var gameMode = 0;
var mapCode = "";
jsonSetup = prompt("Please enter a key from playcryptid.com", "intro_186435778A711A2311");
//let text;
if (jsonSetup == null || jsonSetup == "") {
  text = "User cancelled the prompt.";
} else {
  drawBoard(jsonSetup);
}



// input: map key from playcryptid.com
function drawBoard(key){
    var jsonSplit = key.split("_");
mapCode = jsonSplit[1];
if (jsonSplit[0] == "normal"){
    gameMode = 1;
}
var temp;
console.log(mapCode)
for(var i=0;i<6;i++){
    temp = parseInt(mapCode[i],16);
    if (temp >= 7){
        flip[i] = 1;
        tileOrder[i] = ((parseInt(mapCode[i],16) -6));
    }
    else{
        tileOrder[i] = ((parseInt(mapCode[i],16)));
    }
    
}
var buildings = mapCode.substring(6,mapCode.length);
var tempArr = [0,0];
tempArr = [parseInt(buildings[1],16)+1,parseInt(buildings[0],16)+1];
whitebuildcoords.push(tempArr);
tempArr = [parseInt(buildings[3],16)+1,parseInt(buildings[2],16)+1];
greenbuildcoords.push(tempArr);
tempArr = [parseInt(buildings[5],16)+1,parseInt(buildings[4],16)+1];
bluebuildcoords.push(tempArr);
if (gameMode == 1){
    tempArr = [parseInt(buildings[7],16)+1,parseInt(buildings[6],16)+1];
    blackbuildcoords.push(tempArr);
    tempArr = [parseInt(buildings[9],16)+1,parseInt(buildings[8],16)+1];
    whitebuildcoords.push(tempArr);
    tempArr = [parseInt(buildings[11],16)+1,parseInt(buildings[10],16)+1];
    greenbuildcoords.push(tempArr);
    tempArr = [parseInt(buildings[13],16)+1,parseInt(buildings[12],16)+1];
    bluebuildcoords.push(tempArr);
    tempArr = [parseInt(buildings[15],16)+1,parseInt(buildings[14],16)+1];
    blackbuildcoords.push(tempArr);
}
else{
    tempArr = [parseInt(buildings[7],16)+1,parseInt(buildings[6],16)+1];
    whitebuildcoords.push(tempArr);
    tempArr = [parseInt(buildings[9],16)+1,parseInt(buildings[8],16)+1];
    greenbuildcoords.push(tempArr);
    tempArr = [parseInt(buildings[11],16)+1,parseInt(buildings[10],16)+1];
    bluebuildcoords.push(tempArr);    
}
createGridLayout(tileOrder,flip);
drawGrid(colors,habs);
//drawGrid(1, 1, 6, 3, createPoly(EDGES,RADIUS), cols1,habs1);
//drawGrid(7, 1, 6, 3, createPoly(EDGES,RADIUS), cols2,habs2);
//drawGrid(1, 4, 6, 3, createPoly(EDGES,RADIUS), cols3,habs3);
//drawGrid(7, 4, 6, 3, createPoly(EDGES,RADIUS), cols4,habs4);
//drawGrid(1, 7, 6, 3, createPoly(EDGES,RADIUS), cols5,habs5);
//drawGrid(7, 7, 6, 3, createPoly(EDGES,RADIUS), cols6,habs6);
//habs = habs.concat(habs1);
//habs = habs.concat(habs2);
//habs = habs.concat(habs3);
//habs = habs.concat(habs4);
//habs = habs.concat(habs5);
//habs = habs.concat(habs6);
console.log(bluebuildcoords);
drawHabs(createPoly(EDGES,0.9*RADIUS),habs);
//drawBuildings(whitebuildcoords,whitebuild);
drawBuildings(whitebuildcoords,whitebuild);
drawBuildings(greenbuildcoords,greenbuild);
drawBuildings(bluebuildcoords,bluebuild);
if (gameMode == 1){
    drawBuildings(blackbuildcoords,blackbuild);    
}
}
//console.log(elements.find(x => ((x.id[0] == whitebuildcoords[0][0]) &&  (x.id[1] == whitebuildcoords[0][1]))))
function createGridLayout(tileOrder,flip){
    for(var i =0; i<tileOrder.length;i++){
        console.log(tileOrder[i]);
        console.log(flip[i]);
        switch(tileOrder[i]) {
        case 1:
            if (flip[i]){
                colors = colors.concat(cols1.reverse());
                habs = habs.concat(habs1.reverse());
            }
            else{
                colors = colors.concat(cols1);
                habs = habs.concat(habs1);   
            }
            break;
        case 2:
            if (flip[i]){
                colors = colors.concat(cols2.reverse());
                habs = habs.concat(habs2.reverse());
            }
            else{
                colors = colors.concat(cols2);
                habs = habs.concat(habs2);   
            }
            break;
        case 3:
            if (flip[i]){
                colors = colors.concat(cols3.reverse());
                habs = habs.concat(habs3.reverse());
            }
            else{
                colors = colors.concat(cols3);
                habs = habs.concat(habs3);   
            }
            break;
        case 4:
            if (flip[i]){
                colors = colors.concat(cols4.reverse());
                habs = habs.concat(habs4.reverse());
            }
            else{
                colors = colors.concat(cols4);
                habs = habs.concat(habs4);   
            }
            break;
        case 5:
            if (flip[i]){
                colors = colors.concat(cols5.reverse());
                habs = habs.concat(habs5.reverse());
            }
            else{
                colors = colors.concat(cols5);
                habs = habs.concat(habs5);   
            }
            break;
        case 6:
            if (flip[i]){
                colors = colors.concat(cols6.reverse());
                habs = habs.concat(habs6.reverse());
            }
            else{
                colors = colors.concat(cols6);
                habs = habs.concat(habs6);   
            }
            break;
}}
    
}
function drawTile(x, y, w, h, points,cols,habs) {
  const p = P2();
  var gy, gx;
  var i = 0;
  for (gy = y; gy < y + h; gy++) {
      for (gx = x; gx < x + w; gx++) {
          ctx.fillStyle = cols[i];
          ctx.lineWidth = 1;
            ctx.strokeStyle ="black"
          drawPoly(gridToPixel(gx, gy, p), points,RADIUS);
          elements.push({
            id : [gx,gy],
            cx: p.x,
            cy: p.y,
            color: cols[i],
            hab: habs[i],
            build: ""
            });
        i = i+1;
          
      }

  }
}
function drawGrid(cols,habs){
    var colsTemp;
    var habsTemp;
    const tileStartCoords = [[1,1],[7,1],[1,4],[7,4],[1,7],[7,7]];
    for(var i=0;i<cols.length;i=i+18){
        colsTemp = cols.slice(i,i+18);
        console.log(i);
        habsTemp = habs.slice(i,i+18);
        drawTile(tileStartCoords[(i / 18) | 0][0],tileStartCoords[(i / 18) | 0][1],6, 3, createPoly(EDGES,RADIUS), colsTemp,habsTemp);
    }
}
function drawHabs(points,habs){
    const p = P2(); 
    var i = 0;
    //console.log(elements[1])
    
    for (i=0;i<habs.length;i++){
        ctx.fillStyle = "#ffffff00";
        gx = elements[i].id[0];
        gy = elements[i].id[1];
        if (habs[i] == 1){
            console.log("Bear Hab")
            ctx.lineWidth = 4;
            ctx.strokeStyle ="black"
            drawPoly(gridToPixel(gx, gy, p), points);    
        }
        else if (habs[i] == 2){
            ctx.lineWidth = 4;
            ctx.strokeStyle ="red" 
            drawPoly(gridToPixel(gx, gy, p), points);     
        }
    }          
}
//coords -> [x,y]; color -> string; shape -> sides of shape
function drawBuild(coords,color,shape){
    const p = P2(); 
    var i = 0;

    ctx.fillStyle = color;
    gx = coords[0];
    gy = coords[1];
    var buildtype;
    if (color == whitebuild){
        if (shape == 3){
            buildtype = "ws"
        }
        else{
            buildtype = "wt" //white tower/stone
        }
    }
    else if (color == greenbuild){
        if (shape == 3){
            buildtype = "gs"
        }
        else{
            buildtype = "gt" //green tower/stone
        }    
    }
    else if (color == bluebuild){
        if (shape == 3){
            buildtype = "bs"
        }
        else{
            buildtype = "bt" //blue tower/stone
        }    
    }
    else{
        if (shape == 3){
            buildtype = "xs"
        }
        else{
            buildtype = "xt" //black tower/stone
        }     
    }
    elements.find(x => ((x.id[0] == coords[0]) &&  (x.id[1] == coords[1]))).build = buildtype;
    ctx.lineWidth = 1;
    ctx.strokeStyle ="black";
    drawPoly(gridToPixel(gx, gy, p), createPoly(shape,RADIUS*0.4));    
}
function drawBuildings(coords,color){
    
    drawBuild(coords[0],color,8);
    drawBuild(coords[1],color,3);

}
function gridToPixel(gx, gy, p = {}) {
    p.x = gx * GRID_X_SPACE;
    p.y = gy * GRID_Y_SPACE - (gx % 2 ? GRID_Y_OFFSET : 0);       
    return p;
}
function drawPoly(p, points) { // p.x, p.y is center
    ctx.setTransform(1, 0, 0, 1, p.x, p.y);
    var i = 0;
    ctx.beginPath();
    while (i < points.length) {
        const p2 = points[i++];
        ctx.lineTo(p2.x, p2.y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}
function createPoly(sides,rad, points = []) {
    const step = TAU / sides;
    var ang = 0, i = sides;
    if (sides == 3){
        ang = (3/2) * Math.PI;        
    }
    while (i--) {
        
        points.push(P2(rad * Math.cos(ang), rad * Math.sin(ang)));
        ang += step;
    }
    
    return points;
}
var elem = document.getElementById('board')
var elemLeft = elem.offsetLeft + elem.clientLeft
var elemTop = elem.offsetTop + elem.clientTop
var context = elem.getContext('2d')
board.addEventListener('click', function() { }, false);

function inside_circle(x, y, cx, cy, r) {
    var dx = x - cx
    var dy = y - cy
    return dx*dx + dy*dy <= r*r
}
elem.addEventListener('click', function(event) {
    var x = event.pageX - elemLeft,
        y = event.pageY - elemTop;

    // Collision detection between clicked offset and element.
    elements.forEach(function(element) {
        if (inside_circle(x,y,element.cx,element.cy,(3**0.5/2)*RADIUS)) {
            alert('clicked element ' + element.id);
        }
    });

}, false);
