/* Place your JavaScript in this file */
//var domContext
let board = document.getElementById('board');
let buildingsBoard = document.getElementById('buildings');
let tokenBoard = document.getElementById('tokens');
//var buildingsBoard = document.createElement('canvas');
const ctxBoard = board.getContext('2d');
const ctxBuild = buildings.getContext('2d');
const ctxTokens = tokens.getContext('2d');
//ctxBoard.drawImage(buildingsBoard, 0, 0, 200, 200);
const P2 = (x, y) => ({x,y});
const EDGES = 6;
const RADIUS = 30;
const TAU = 2 * Math.PI;
const EDGE_LEN = Math.sin(Math.PI / EDGES) * RADIUS * 2;
const GRID_Y_SPACE = Math.cos(Math.PI / EDGES) * RADIUS * 2;
const GRID_X_SPACE = RADIUS * 2 - EDGE_LEN * 0.5;
const GRID_Y_OFFSET = GRID_Y_SPACE * 0.5;
const xOffset = 90;
const yOffset = 51.96152422706632;
const water = "#00c3d9bf";
const forest = "#36ba38bf";
const swamp = "#422282bf";
const desert = "#dbc13dbf";
const mount = "#8f8f8fbf";
const whitebuild = "#ffffff";
const bluebuild = "#0008fc";
const greenbuild = "#004721";
const blackbuild = "#000000";
const p1color = "#f7747b";
const p2color = "#5b754c";
const p3color = "#b1dcf2";
const p4color = "#57493c";
const p5color = "#786aab";
const p1YOffset = 0.40;
const p2YOffset = 0.20;
const p3YOffset = 0.00;
const p4YOffset = -0.20;
const p5YOffset = -0.40;
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
const tileOneSelector = document.getElementById("tileOne");
const tileTwoSelector = document.getElementById("tileTwo");
const tileThreeSelector = document.getElementById("tileThree");
const tileFourSelector = document.getElementById("tileFour");
const tileFiveSelector = document.getElementById("tileFive");
const tileSixSelector = document.getElementById("tileSix");
const tileOneFlip = document.getElementById("tileOneFlip");
const tileTwoFlip = document.getElementById("tileTwoFlip");
const tileThreeFlip = document.getElementById("tileThreeFlip");
const tileFourFlip = document.getElementById("tileFourFlip");
const tileFiveFlip = document.getElementById("tileFiveFlip");
const tileSixFlip = document.getElementById("tileSixFlip");
const gameModeBox = document.getElementById("selectGameMode");
const selectHexItem = document.getElementById("selectHexItem");
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
var currentBoard;
var gameMode = 0;
var mapCode = "";

var url = "https://www.playcryptid.com/php/getGame.php";
var tempStr = "";
//genNewBoard();
gameModeBox.close();
genEmptyBoard();
console.log(elements[1]);
function genEmptyBoard(){
    gameMode = 0;
    url = "https://www.playcryptid.com/php/getGame.php";
    ctxBoard.setTransform(1,0,0,1,0,0);
    ctxBoard.clearRect(0, 0,
                board.width, board.height);
    ctxBuild.setTransform(1,0,0,1,0,0);
    ctxBuild.clearRect(0, 0,
                board.width, board.height);
    ctxTokens.setTransform(1,0,0,1,0,0);
    ctxTokens.clearRect(0, 0,
                tokenBoard.width, tokenBoard.height);
    elements = [];
    whitebuildcoords = [[0,0],[0,0]];
    bluebuildcoords = [[0,0],[0,0]];
    greenbuildcoords = [[0,0],[0,0]];
    blackbuildcoords = [[0,0],[0,0]];
    habs = [];
    colors = [];
    tileOrder = [1,2,3,4,5,6];
    flip = [0,0,0,0,0,0]; 
    createGridLayout(tileOrder,flip);
    drawGrid(colors,habs); 
    drawHabs(createPoly(EDGES,0.9*RADIUS),habs); 
}
function genNewBoard(mode){
    gameMode = 0;
    url = "https://www.playcryptid.com/php/getGame.php";
    ctxBoard.setTransform(1,0,0,1,0,0);
    ctxBoard.clearRect(0, 0,
                board.width, board.height);
    ctxBuild.setTransform(1,0,0,1,0,0);
    ctxBuild.clearRect(0, 0,
                buildingsBoard.width, buildingsBoard.height);
    ctxTokens.setTransform(1,0,0,1,0,0);
    ctxTokens.clearRect(0, 0,
                tokenBoard.width, tokenBoard.height);
    elements = [];
    whitebuildcoords = [[0,0],[0,0]];
    bluebuildcoords = [[0,0],[0,0]];
    greenbuildcoords = [[0,0],[0,0]];
    blackbuildcoords = [[0,0],[0,0]];
    habs = [];
    colors = [];
    console.log(habs);
    console.log(colors);
    flip = [0,0,0,0,0,0]
    tileOrder = [1,2,3,4,5,6];
    if (mode == 0) {
  tempStr = "intro";
  
} else {
  tempStr = "normal"
}
url = url.concat("?mode=".concat(tempStr));
console.log(url);
var noCORSurl = 'https://api.allorigins.win/get?' + url;
//console.log(noCORSurl);

fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`, {cache: "no-store"})
.then(response => {
	if (response.ok) return response.json()
	throw new Error('Network response was not ok.')
})
.then(data => {
                console.log(data.contents);
                currentBoard = JSON.parse(data.contents);
                jsonSetup = currentBoard.key;
                console.log(jsonSetup);
                if (tempStr == "normal"){
                    jsonSetup = "normal_".concat(jsonSetup);
                }
                drawBoard(jsonSetup);
});
}

/*fetch(noCORSurl)
            .then(response => response.json())
            .then(data => {
                jsonSetup = data.key;
                if (tempStr == "normal"){
                    jsonSetup = "normal_".concat(jsonSetup);
                }
                drawBoard(jsonSetup);
            })
            .catch(error => {
                console.error('Error fetching board data:', error);
            });*/
/*jsonSetup = prompt("Please enter a key from playcryptid.com", "intro_186435778A711A2311");
//let text;
if (jsonSetup == null || jsonSetup == "") {
  text = "User cancelled the prompt.";
} else {
  drawBoard(jsonSetup);
}*/



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
        tileOrder[i] = (temp -6);
    }
    else{
        tileOrder[i] = (temp);
    }
    switch(i) {
        case 0:
            //tileOneSelector.options[0].selected = 'selected';
            tileOneSelector.options[tileOrder[i]-1].selected = 'selected';
            //console.log(tileOneSelector.options);
            //tileOneSelector.value = toString(tileOrder[i]);
            if (flip[i] == 1){
                tileOneFlip.checked = true;
            }
            else{
                tileOneFlip.checked = false;    
            }
            break;
        case 1:
            //tileOneSelector.options[0].selected = 'selected';
            tileTwoSelector.options[tileOrder[i]-1].selected = 'selected';
            //console.log(tileOneSelector.options);
            //tileOneSelector.value = toString(tileOrder[i]);
            if (flip[i] == 1){
                tileTwoFlip.checked = true;
            }
            else{
                tileTwoFlip.checked = false;    
            }
            break;
        case 2:
            //tileOneSelector.options[0].selected = 'selected';
            tileThreeSelector.options[tileOrder[i]-1].selected = 'selected';
            //console.log(tileOneSelector.options);
            //tileOneSelector.value = toString(tileOrder[i]);
            if (flip[i] == 1){
                tileThreeFlip.checked = true;
            }
            else{
                tileThreeFlip.checked = false;    
            }
            break;
        case 3:
            //tileOneSelector.options[0].selected = 'selected';
            tileFourSelector.options[tileOrder[i]-1].selected = 'selected';
            //console.log(tileOneSelector.options);
            //tileOneSelector.value = toString(tileOrder[i]);
            if (flip[i] == 1){
                tileFourFlip.checked = true;
            }
            else{
                tileFourFlip.checked = false;    
            }
            break;
        case 4:
            //tileOneSelector.options[0].selected = 'selected';
            tileFiveSelector.options[tileOrder[i]-1].selected = 'selected';
            //console.log(tileOneSelector.options);
            //tileOneSelector.value = toString(tileOrder[i]);
            if (flip[i] == 1){
                tileFiveFlip.checked = true;
            }
            else{
                tileFiveFlip.checked = false;    
            }
            break;
        case 5:
            //tileOneSelector.options[0].selected = 'selected';
            tileSixSelector.options[tileOrder[i]-1].selected = 'selected';
            //console.log(tileOneSelector.options);
            //tileOneSelector.value = toString(tileOrder[i]);
            if (flip[i] == 1){
                tileSixFlip.checked = true;
            }
            else{
                tileSixFlip.checked = false;    
            }
            break;
    }
    
}
console.log(tileOrder);
console.log(flip);
var buildings = mapCode.substring(6,mapCode.length);
var tempArr = [0,0];
tempArr = [parseInt(buildings[1],16)+1,parseInt(buildings[0],16)+1];
//whitebuildcoords.push(tempArr);
whitebuildcoords[0][0] = tempArr[0];
whitebuildcoords[0][1] = tempArr[1];
tempArr = [parseInt(buildings[3],16)+1,parseInt(buildings[2],16)+1];
//greenbuildcoords.push(tempArr);
greenbuildcoords[0][0] = tempArr[0];
greenbuildcoords[0][1] = tempArr[1];
tempArr = [parseInt(buildings[5],16)+1,parseInt(buildings[4],16)+1];
//bluebuildcoords.push(tempArr);
bluebuildcoords[0][0] = tempArr[0];
bluebuildcoords[0][1] = tempArr[1];
if (gameMode == 1){
    tempArr = [parseInt(buildings[7],16)+1,parseInt(buildings[6],16)+1];
    //blackbuildcoords.push(tempArr);
    blackbuildcoords[0][0] = tempArr[0];
    blackbuildcoords[0][1] = tempArr[1];
    tempArr = [parseInt(buildings[9],16)+1,parseInt(buildings[8],16)+1];
    //whitebuildcoords.push(tempArr);
    whitebuildcoords[1][0] = tempArr[0];
    whitebuildcoords[1][1] = tempArr[1];
    tempArr = [parseInt(buildings[11],16)+1,parseInt(buildings[10],16)+1];
    //greenbuildcoords.push(tempArr);
    greenbuildcoords[1][0] = tempArr[0];
    greenbuildcoords[1][1] = tempArr[1];
    tempArr = [parseInt(buildings[13],16)+1,parseInt(buildings[12],16)+1];
    //bluebuildcoords.push(tempArr);
    bluebuildcoords[1][0] = tempArr[0];
    bluebuildcoords[1][1] = tempArr[1];
    tempArr = [parseInt(buildings[15],16)+1,parseInt(buildings[14],16)+1];
    //blackbuildcoords.push(tempArr);
    blackbuildcoords[1][0] = tempArr[0];
    blackbuildcoords[1][1] = tempArr[1];
}
else{
    tempArr = [parseInt(buildings[7],16)+1,parseInt(buildings[6],16)+1];
    //whitebuildcoords.push(tempArr);
    whitebuildcoords[1][0] = tempArr[0];
    whitebuildcoords[1][1] = tempArr[1];
    tempArr = [parseInt(buildings[9],16)+1,parseInt(buildings[8],16)+1];
    //greenbuildcoords.push(tempArr);
    greenbuildcoords[1][0] = tempArr[0];
    greenbuildcoords[1][1] = tempArr[1];
    tempArr = [parseInt(buildings[11],16)+1,parseInt(buildings[10],16)+1];
    //bluebuildcoords.push(tempArr);
    bluebuildcoords[1][0] = tempArr[0];
    bluebuildcoords[1][1] = tempArr[1];    
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
                tempArr = cols1.slice().reverse();
                colors = colors.concat(tempArr);
                tempArr = habs1.slice().reverse();
                habs = habs.concat(tempArr);
            }
            else{
                colors = colors.concat(cols1);
                habs = habs.concat(habs1);   
            }
            break;
        case 2:
            if (flip[i]){
                tempArr = cols2.slice().reverse();
                colors = colors.concat(tempArr);
                tempArr = habs2.slice().reverse();
                habs = habs.concat(tempArr);
            }
            else{
                colors = colors.concat(cols2);
                habs = habs.concat(habs2);   
            }
            break;
        case 3:
            if (flip[i]){
                tempArr = cols3.slice().reverse();
                colors = colors.concat(tempArr);
                tempArr = habs3.slice().reverse();
                habs = habs.concat(tempArr);
            }
            else{
                colors = colors.concat(cols3);
                habs = habs.concat(habs3);   
            }
            break;
        case 4:
            if (flip[i]){
                tempArr = cols4.slice().reverse();
                colors = colors.concat(tempArr);
                tempArr = habs4.slice().reverse();
                habs = habs.concat(tempArr);
            }
            else{
                colors = colors.concat(cols4);
                habs = habs.concat(habs4);   
            }
            break;
        case 5:
            if (flip[i]){
                tempArr = cols5.slice().reverse();
                colors = colors.concat(tempArr);
                tempArr = habs5.slice().reverse();
                habs = habs.concat(tempArr);
            }
            else{
                colors = colors.concat(cols5);
                habs = habs.concat(habs5);   
            }
            break;
        case 6:
            if (flip[i]){
                tempArr = cols6.slice().reverse();
                colors = colors.concat(tempArr);
                tempArr = habs6.slice().reverse();
                habs = habs.concat(tempArr);
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
          ctxBoard.fillStyle = cols[i];
          ctxBoard.lineWidth = 1;
            ctxBoard.strokeStyle ="black"
          drawPoly(gridToPixel(gx, gy, p), points,"board");
          //drawPoly(gridToPixel(gx, gy, p), points,"buildings");
          elements.push({
            id : [gx,gy],
            cx: p.x,
            cy: p.y,
            color: cols[i],
            hab: habs[i],
            build: "",
            pieces: []
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
        ctxBoard.fillStyle = "#ffffff00";
        gx = elements[i].id[0];
        gy = elements[i].id[1];
        if (habs[i] == 1){
            console.log("Bear Hab")
            ctxBoard.lineWidth = 4;
            ctxBoard.strokeStyle ="black"
            drawPoly(gridToPixel(gx, gy, p), points,"board");    
        }
        else if (habs[i] == 2){
            ctxBoard.lineWidth = 4;
            ctxBoard.strokeStyle ="red" 
            drawPoly(gridToPixel(gx, gy, p), points,"board");     
        }
    }          
}
//coords -> [x,y]; color -> string; shape -> sides of shape
function drawBuild(coords,color,shape){
    if((coords[0] != 0) && (coords[1] != 0)){
    const p = P2(); 
    var i = 0;

    ctxBuild.fillStyle = color;
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
    ctxBuild.lineWidth = 1;
    ctxBuild.strokeStyle ="black";
    drawPoly(gridToPixel(gx, gy, p), createPoly(shape,RADIUS*0.5),"build"); 
    //ctxBoard.drawImage(buildingsBoard, 0, 0, 1000, 600); 
    } 
}
function drawBuildings(coords,color){
    if((coords[0] != 0) && (coords[1] != 0)){
        drawBuild(coords[0],color,8);
        drawBuild(coords[1],color,3);
    }
    

}
function gridToPixel(gx, gy, p = {}) {
    p.x = ((gx) * GRID_X_SPACE);
    p.y = gy * GRID_Y_SPACE - (gx % 2 ? GRID_Y_OFFSET : 0);       
    return p;
}
function drawPoly(p, points,layer) { // p.x, p.y is center
    var localCtx;
    if (layer == "board"){
        localCtx = ctxBoard;
    }
    else if (layer == "build"){
        localCtx = ctxBuild;
    }
    else{
        localCtx = ctxTokens;
    }
    localCtx.setTransform(1, 0, 0, 1, p.x, p.y);
    var i = 0;
    localCtx.beginPath();
    while (i < points.length) {
        const p2 = points[i++];
        localCtx.lineTo(p2.x, p2.y);
    }
    localCtx.closePath();
    localCtx.fill();
    localCtx.stroke();
}
function createPoly(sides,rad, points = [],layer) {
    const step = TAU / sides;
    var ang = 0, i = sides;
    if (sides == 3){
        ang = (3/2) * Math.PI;        
    }
    else if(sides == 4){
        ang = (1/4)*Math.PI;
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
//buildings.addEventListener('click', function() { }, false);

function inside_circle(x, y, cx, cy, r) {
    var dx = x - cx
    var dy = y - cy
    return dx*dx + dy*dy <= r*r
}
var selectedElem;
tokens.addEventListener('click', function(event) {
    var x = event.pageX;
    var y = event.pageY;
    console.log(x);
    console.log(y);
    // Collision detection between clicked offset and element.
    elements.forEach(function(element) {
        if (inside_circle(x,y,element.cx,element.cy,(3**0.5/2)*RADIUS)) {
            //alert('clicked element ' + element.id);
            selectedElem = element.id;
            console.log(element.id)
            selectHexItem.showModal();
        }
    });

}, false);
function clearTile(id){

}
document.getElementById("btnWhiteStone").onclick = function() {
    for (i in elements) {
        i.build = "";
    }
    whitebuildcoords[0] = selectedElem;
    elements.find(x => ((x.id[0] == whitebuildcoords[0][0]) &&  (x.id[1] == whitebuildcoords[0][1]))).build = "wt";
    ctxBuild.setTransform(1,0,0,1,0,0);
    ctxBuild.clearRect(0, 0,
                buildingsBoard.width, buildingsBoard.height);
    drawBuildings(whitebuildcoords,whitebuild);
    drawBuildings(greenbuildcoords,greenbuild);
    drawBuildings(bluebuildcoords,bluebuild);
    drawBuildings(blackbuildcoords,blackbuild);
    //console.log(elements.find(x => ((x.id[0] == whitebuildcoords[0]) &&  (x.id[1] == whitebuildcoords[1]))));
    selectHexItem.close();
};

document.getElementById("btnWhiteShack").onclick = function() {
    for (i in elements) {
        i.build = "";
    }
    whitebuildcoords[1] = selectedElem;
    elements.find(x => ((x.id[0] == whitebuildcoords[1][0]) &&  (x.id[1] == whitebuildcoords[1][1]))).build = "ws";
    ctxBuild.setTransform(1,0,0,1,0,0);
    ctxBuild.clearRect(0, 0,
                buildingsBoard.width, buildingsBoard.height);
    drawBuildings(whitebuildcoords,whitebuild);
    drawBuildings(greenbuildcoords,greenbuild);
    drawBuildings(bluebuildcoords,bluebuild);
    drawBuildings(blackbuildcoords,blackbuild);
    //console.log(elements.find(x => ((x.id[0] == whitebuildcoords[0]) &&  (x.id[1] == whitebuildcoords[1]))));
    selectHexItem.close();
};
document.getElementById("btnGreenStone").onclick = function() {
    for (i in elements) {
        i.build = "";
    }
    greenbuildcoords[0] = selectedElem;
    elements.find(x => ((x.id[0] == greenbuildcoords[0][0]) &&  (x.id[1] == greenbuildcoords[0][1]))).build = "gt";
    ctxBuild.setTransform(1,0,0,1,0,0);
    ctxBuild.clearRect(0, 0,
                buildingsBoard.width, buildingsBoard.height);
    drawBuildings(whitebuildcoords,whitebuild);
    drawBuildings(greenbuildcoords,greenbuild);
    drawBuildings(bluebuildcoords,bluebuild);
    drawBuildings(blackbuildcoords,blackbuild);
    //console.log(elements.find(x => ((x.id[0] == whitebuildcoords[0]) &&  (x.id[1] == whitebuildcoords[1]))));
    selectHexItem.close();
};
document.getElementById("btnGreenShack").onclick = function() {
    for (i in elements) {
        i.build = "";
    }
    greenbuildcoords[1] = selectedElem;
    elements.find(x => ((x.id[0] == greenbuildcoords[1][0]) &&  (x.id[1] == greenbuildcoords[1][1]))).build = "gs";
    ctxBuild.setTransform(1,0,0,1,0,0);
    ctxBuild.clearRect(0, 0,
                buildingsBoard.width, buildingsBoard.height);
    drawBuildings(whitebuildcoords,whitebuild);
    drawBuildings(greenbuildcoords,greenbuild);
    drawBuildings(bluebuildcoords,bluebuild);
    drawBuildings(blackbuildcoords,blackbuild);
    //console.log(elements.find(x => ((x.id[0] == whitebuildcoords[0]) &&  (x.id[1] == whitebuildcoords[1]))));
    selectHexItem.close();
};

document.getElementById("btnBlueStone").onclick = function() {
    for (i in elements) {
        i.build = "";
    }
    bluebuildcoords[0] = selectedElem;
    elements.find(x => ((x.id[0] == bluebuildcoords[0][0]) &&  (x.id[1] == bluebuildcoords[0][1]))).build = "bt";
    ctxBuild.setTransform(1,0,0,1,0,0);
    ctxBuild.clearRect(0, 0,
                buildingsBoard.width, buildingsBoard.height);
    drawBuildings(whitebuildcoords,whitebuild);
    drawBuildings(greenbuildcoords,greenbuild);
    drawBuildings(bluebuildcoords,bluebuild);
    drawBuildings(blackbuildcoords,blackbuild);
    //console.log(elements.find(x => ((x.id[0] == whitebuildcoords[0]) &&  (x.id[1] == whitebuildcoords[1]))));
    selectHexItem.close();
};
document.getElementById("btnBlueShack").onclick = function() {
    for (i in elements) {
        i.build = "";
    }
    bluebuildcoords[1] = selectedElem;
    elements.find(x => ((x.id[0] == bluebuildcoords[1][0]) &&  (x.id[1] == bluebuildcoords[1][1]))).build = "bs";
    ctxBuild.setTransform(1,0,0,1,0,0);
    ctxBuild.clearRect(0, 0,
                buildingsBoard.width, buildingsBoard.height);
    drawBuildings(whitebuildcoords,whitebuild);
    drawBuildings(greenbuildcoords,greenbuild);
    drawBuildings(bluebuildcoords,bluebuild);
    drawBuildings(blackbuildcoords,blackbuild);
    //console.log(elements.find(x => ((x.id[0] == whitebuildcoords[0]) &&  (x.id[1] == whitebuildcoords[1]))));
    selectHexItem.close();
};

document.getElementById("btnBlackStone").onclick = function() {
    for (i in elements) {
        i.build = "";
    }
    blackbuildcoords[0] = selectedElem;
    elements.find(x => ((x.id[0] == blackbuildcoords[0][0]) &&  (x.id[1] == blackbuildcoords[0][1]))).build = "xt";
    ctxBuild.setTransform(1,0,0,1,0,0);
    ctxBuild.clearRect(0, 0,
                buildingsBoard.width, buildingsBoard.height);
    drawBuildings(whitebuildcoords,whitebuild);
    drawBuildings(greenbuildcoords,greenbuild);
    drawBuildings(bluebuildcoords,bluebuild);
    drawBuildings(blackbuildcoords,blackbuild);
    //console.log(elements.find(x => ((x.id[0] == whitebuildcoords[0]) &&  (x.id[1] == whitebuildcoords[1]))));
    selectHexItem.close();
};
document.getElementById("btnBlackShack").onclick = function() {
    for (i in elements) {
        i.build = "";
    }
    blackbuildcoords[1] = selectedElem;
    elements.find(x => ((x.id[0] == blackbuildcoords[1][0]) &&  (x.id[1] == blackbuildcoords[1][1]))).build = "xs";
    ctxBuild.setTransform(1,0,0,1,0,0);
    ctxBuild.clearRect(0, 0,
                buildingsBoard.width, buildingsBoard.height);
    drawBuildings(whitebuildcoords,whitebuild);
    drawBuildings(greenbuildcoords,greenbuild);
    drawBuildings(bluebuildcoords,bluebuild);
    drawBuildings(blackbuildcoords,blackbuild);
    //console.log(elements.find(x => ((x.id[0] == whitebuildcoords[0]) &&  (x.id[1] == whitebuildcoords[1]))));
    selectHexItem.close();
};

document.getElementById("btnNoBuild").onclick = function() {
    var hexBuilds = elements.find(x => ((x.id[0] == selectedElem[0]) &&  (x.id[1] == selectedElem[1]))).build;
    switch(hexBuilds){
        case "wt":
            whitebuildcoords[0] = [0,0];
            break;
        case "ws":
            whitebuildcoords[1] = [0,0];
            break;
        case "gt":
            greenbuildcoords[0] = [0,0];
            break;
        case "gs":
            greenbuildcoords[1] = [0,0];
            break;
        case "bt":
            bluebuildcoords[0] = [0,0];
            break;
        case "bs":
            bluebuildcoords[1] = [0,0];
            break;
        case "xt":
            blackbuildcoords[0] = [0,0];
            break;
        case "xs":
            blackbuildcoords[1] = [0,0];
            break;
    }
    for (i in elements) {
        i.build = "";
    }
    //blackbuildcoords[1] = selectedElem;
    
    ctxBuild.setTransform(1,0,0,1,0,0);
    ctxBuild.clearRect(0, 0,
                buildingsBoard.width, buildingsBoard.height);
    drawBuildings(whitebuildcoords,whitebuild);
    drawBuildings(greenbuildcoords,greenbuild);
    drawBuildings(bluebuildcoords,bluebuild);
    drawBuildings(blackbuildcoords,blackbuild);
    //console.log(elements.find(x => ((x.id[0] == whitebuildcoords[0]) &&  (x.id[1] == whitebuildcoords[1]))));
    selectHexItem.close();
};

document.getElementById("newBoard").onclick = function() {
    //genNewBoard()
    gameModeBox.showModal();
    };
document.getElementById("btnNormalMode").onclick = function() {
    genNewBoard(0);
    gameModeBox.close();
};
document.getElementById("btnAdvMode").onclick = function() {
    genNewBoard(1);
    gameModeBox.close();
    };

tileOneFlip.onclick = function() {
    if (tileOneFlip.checked){
        flip[0] = 1;  
    }
    else{
        flip[0] = 0;
    }
    ctxBoard.setTransform(1,0,0,1,0,0);
    ctxBoard.clearRect(0, 0,
                board.width, board.height);
    habs = [];
    colors = [];
    createGridLayout(tileOrder,flip);
    drawGrid(colors,habs);
    drawHabs(createPoly(EDGES,0.9*RADIUS),habs);
    ctxBuild.setTransform(1,0,0,1,0,0);
    ctxBuild.clearRect(0, 0,
                buildingsBoard.width, buildingsBoard.height);
    drawBuildings(whitebuildcoords,whitebuild);
    drawBuildings(greenbuildcoords,greenbuild);
    drawBuildings(bluebuildcoords,bluebuild);
    drawBuildings(blackbuildcoords,blackbuild);
};

tileTwoFlip.onclick = function() {
    if (tileTwoFlip.checked){
        flip[1] = 1;  
    }
    else{
        flip[1] = 0;
    }
    ctxBoard.setTransform(1,0,0,1,0,0);
    ctxBoard.clearRect(0, 0,
                board.width, board.height);
    habs = [];
    colors = [];
    createGridLayout(tileOrder,flip);
    drawGrid(colors,habs);
    drawHabs(createPoly(EDGES,0.9*RADIUS),habs);
    ctxBuild.setTransform(1,0,0,1,0,0);
    ctxBuild.clearRect(0, 0,
                buildingsBoard.width, buildingsBoard.height);
    drawBuildings(whitebuildcoords,whitebuild);
    drawBuildings(greenbuildcoords,greenbuild);
    drawBuildings(bluebuildcoords,bluebuild);
    drawBuildings(blackbuildcoords,blackbuild);
};

tileThreeFlip.onclick = function() {
    if (tileThreeFlip.checked){
        flip[2] = 1;  
    }
    else{
        flip[2] = 0;
    }
    ctxBoard.setTransform(1,0,0,1,0,0);
    ctxBoard.clearRect(0, 0,
                board.width, board.height);
    habs = [];
    colors = [];
    createGridLayout(tileOrder,flip);
    drawGrid(colors,habs);
    drawHabs(createPoly(EDGES,0.9*RADIUS),habs);
    ctxBuild.setTransform(1,0,0,1,0,0);
    ctxBuild.clearRect(0, 0,
                buildingsBoard.width, buildingsBoard.height);
    drawBuildings(whitebuildcoords,whitebuild);
    drawBuildings(greenbuildcoords,greenbuild);
    drawBuildings(bluebuildcoords,bluebuild);
    drawBuildings(blackbuildcoords,blackbuild);
};

tileFourFlip.onclick = function() {
    if (tileFourFlip.checked){
        flip[3] = 1;  
    }
    else{
        flip[3] = 0;
    }
    ctxBoard.setTransform(1,0,0,1,0,0);
    ctxBoard.clearRect(0, 0,
                board.width, board.height);
    habs = [];
    colors = [];
    createGridLayout(tileOrder,flip);
    drawGrid(colors,habs);
    drawHabs(createPoly(EDGES,0.9*RADIUS),habs);
    ctxBuild.setTransform(1,0,0,1,0,0);
    ctxBuild.clearRect(0, 0,
                buildingsBoard.width, buildingsBoard.height);
    drawBuildings(whitebuildcoords,whitebuild);
    drawBuildings(greenbuildcoords,greenbuild);
    drawBuildings(bluebuildcoords,bluebuild);
    drawBuildings(blackbuildcoords,blackbuild);
};

tileFiveFlip.onclick = function() {
    if (tileFiveFlip.checked){
        flip[4] = 1;  
    }
    else{
        flip[4] = 0;
    }
    ctxBoard.setTransform(1,0,0,1,0,0);
    ctxBoard.clearRect(0, 0,
                board.width, board.height);
    habs = [];
    colors = [];
    createGridLayout(tileOrder,flip);
    drawGrid(colors,habs);
    drawHabs(createPoly(EDGES,0.9*RADIUS),habs);
    ctxBuild.setTransform(1,0,0,1,0,0);
    ctxBuild.clearRect(0, 0,
                buildingsBoard.width, buildingsBoard.height);
    drawBuildings(whitebuildcoords,whitebuild);
    drawBuildings(greenbuildcoords,greenbuild);
    drawBuildings(bluebuildcoords,bluebuild);
    drawBuildings(blackbuildcoords,blackbuild);
};

tileSixFlip.onclick = function() {
    if (tileSixFlip.checked){
        flip[5] = 1;  
    }
    else{
        flip[5] = 0;
    }
    ctxBoard.setTransform(1,0,0,1,0,0);
    ctxBoard.clearRect(0, 0,
                board.width, board.height);
    habs = [];
    colors = [];
    createGridLayout(tileOrder,flip);
    drawGrid(colors,habs);
    drawHabs(createPoly(EDGES,0.9*RADIUS),habs);
    ctxBuild.setTransform(1,0,0,1,0,0);
    ctxBuild.clearRect(0, 0,
                buildingsBoard.width, buildingsBoard.height);
    drawBuildings(whitebuildcoords,whitebuild);
    drawBuildings(greenbuildcoords,greenbuild);
    drawBuildings(bluebuildcoords,bluebuild);
    drawBuildings(blackbuildcoords,blackbuild);
};

tileOneSelector.onclick = function() {
    if (tileOrder[0] != this.selectedIndex + 1){
  var newTile = this.selectedIndex + 1;
  var prevTile = tileOrder[0];
  for (var i=0;i<6;i++){
    if (tileOrder[i] == newTile){
        tileOrder[i] = prevTile;
        switch(i){
            case 0:
                tileOneSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            case 1:
                tileTwoSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            case 2:
                tileThreeSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            case 3:
                tileFourSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            case 4:
                tileFiveSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            case 5:
                tileSixSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            
        }
        
        break;
    }
  }
  tileOrder[0] = newTile;
  ctxBoard.setTransform(1,0,0,1,0,0);
    ctxBoard.clearRect(0, 0,
                board.width, board.height);
    habs = [];
    colors = [];
    createGridLayout(tileOrder,flip);
    drawGrid(colors,habs);
    drawHabs(createPoly(EDGES,0.9*RADIUS),habs);
    ctxBuild.setTransform(1,0,0,1,0,0);
    ctxBuild.clearRect(0, 0,
                buildingsBoard.width, buildingsBoard.height);
    drawBuildings(whitebuildcoords,whitebuild);
    drawBuildings(greenbuildcoords,greenbuild);
    drawBuildings(bluebuildcoords,bluebuild);
    drawBuildings(blackbuildcoords,blackbuild);
    }
};



tileTwoSelector.onclick = function() {
    if (tileOrder[1] != this.selectedIndex + 1){
  var newTile = this.selectedIndex + 1;
  var prevTile = tileOrder[1];
  for (var i=0;i<6;i++){
    if (tileOrder[i] == newTile){
        tileOrder[i] = prevTile;
        switch(i){
            case 0:
                tileOneSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            case 1:
                tileTwoSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            case 2:
                tileThreeSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            case 3:
                tileFourSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            case 4:
                tileFiveSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            case 5:
                tileSixSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            
        }
        break;
    }
  }
  tileOrder[1] = newTile;
  ctxBoard.setTransform(1,0,0,1,0,0);
    ctxBoard.clearRect(0, 0,
                board.width, board.height);
    habs = [];
    colors = [];
    createGridLayout(tileOrder,flip);
    drawGrid(colors,habs);
    drawHabs(createPoly(EDGES,0.9*RADIUS),habs);
    ctxBuild.setTransform(1,0,0,1,0,0);
    ctxBuild.clearRect(0, 0,
                buildingsBoard.width, buildingsBoard.height);
    drawBuildings(whitebuildcoords,whitebuild);
    drawBuildings(greenbuildcoords,greenbuild);
    drawBuildings(bluebuildcoords,bluebuild);
    drawBuildings(blackbuildcoords,blackbuild);
    }
};


tileThreeSelector.onclick = function() {
    if (tileOrder[2] != this.selectedIndex + 1){
  var newTile = this.selectedIndex + 1;
  var prevTile = tileOrder[2];
  for (var i=0;i<6;i++){
    if (tileOrder[i] == newTile){
        tileOrder[i] = prevTile;
        switch(i){
            case 0:
                tileOneSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            case 1:
                tileTwoSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            case 2:
                tileThreeSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            case 3:
                tileFourSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            case 4:
                tileFiveSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            case 5:
                tileSixSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            
        }
        break;
    }
  }
  tileOrder[2] = newTile;
  ctxBoard.setTransform(1,0,0,1,0,0);
    ctxBoard.clearRect(0, 0,
                board.width, board.height);
    habs = [];
    colors = [];
    createGridLayout(tileOrder,flip);
    drawGrid(colors,habs);
    drawHabs(createPoly(EDGES,0.9*RADIUS),habs);
    ctxBuild.setTransform(1,0,0,1,0,0);
    ctxBuild.clearRect(0, 0,
                buildingsBoard.width, buildingsBoard.height);
    drawBuildings(whitebuildcoords,whitebuild);
    drawBuildings(greenbuildcoords,greenbuild);
    drawBuildings(bluebuildcoords,bluebuild);
    drawBuildings(blackbuildcoords,blackbuild);
    }
};


tileFourSelector.onclick = function() {
    if (tileOrder[3] != this.selectedIndex + 1){
  var newTile = this.selectedIndex + 1;
  var prevTile = tileOrder[3];
  for (var i=0;i<6;i++){
    if (tileOrder[i] == newTile){
        tileOrder[i] = prevTile;
        switch(i){
            case 0:
                tileOneSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            case 1:
                tileTwoSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            case 2:
                tileThreeSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            case 3:
                tileFourSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            case 4:
                tileFiveSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            case 5:
                tileSixSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            
        }
        break;
    }
  }
  tileOrder[3] = newTile;
  ctxBoard.setTransform(1,0,0,1,0,0);
    ctxBoard.clearRect(0, 0,
                board.width, board.height);
    habs = [];
    colors = [];
    createGridLayout(tileOrder,flip);
    drawGrid(colors,habs);
    drawHabs(createPoly(EDGES,0.9*RADIUS),habs);
    ctxBuild.setTransform(1,0,0,1,0,0);
    ctxBuild.clearRect(0, 0,
                buildingsBoard.width, buildingsBoard.height);
    drawBuildings(whitebuildcoords,whitebuild);
    drawBuildings(greenbuildcoords,greenbuild);
    drawBuildings(bluebuildcoords,bluebuild);
    drawBuildings(blackbuildcoords,blackbuild);
    }
};

tileFiveSelector.onclick = function() {
    if (tileOrder[4] != this.selectedIndex + 1){
  var newTile = this.selectedIndex + 1;
  var prevTile = tileOrder[4];
  for (var i=0;i<6;i++){
    if (tileOrder[i] == newTile){
        tileOrder[i] = prevTile;
        switch(i){
            case 0:
                tileOneSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            case 1:
                tileTwoSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            case 2:
                tileThreeSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            case 3:
                tileFourSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            case 4:
                tileFiveSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            case 5:
                tileSixSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            
        }
        break;
    }
  }
  tileOrder[4] = newTile;
  ctxBoard.setTransform(1,0,0,1,0,0);
    ctxBoard.clearRect(0, 0,
                board.width, board.height);
    habs = [];
    colors = [];
    createGridLayout(tileOrder,flip);
    drawGrid(colors,habs);
    drawHabs(createPoly(EDGES,0.9*RADIUS),habs);
    ctxBuild.setTransform(1,0,0,1,0,0);
    ctxBuild.clearRect(0, 0,
                buildingsBoard.width, buildingsBoard.height);
    drawBuildings(whitebuildcoords,whitebuild);
    drawBuildings(greenbuildcoords,greenbuild);
    drawBuildings(bluebuildcoords,bluebuild);
    drawBuildings(blackbuildcoords,blackbuild);
    }
};

tileSixSelector.onclick = function() {
    if (tileOrder[5] != this.selectedIndex + 1){
  var newTile = this.selectedIndex + 1;
  var prevTile = tileOrder[5];
  for (var i=0;i<6;i++){
    if (tileOrder[i] == newTile){
        tileOrder[i] = prevTile;
        switch(i){
            case 0:
                tileOneSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            case 1:
                tileTwoSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            case 2:
                tileThreeSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            case 3:
                tileFourSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            case 4:
                tileFiveSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            case 5:
                tileSixSelector.options[tileOrder[i]-1].selected = 'selected';
                break;
            
        }
        break;
    }
  }
  tileOrder[5] = newTile;
  ctxBoard.setTransform(1,0,0,1,0,0);
    ctxBoard.clearRect(0, 0,
                board.width, board.height);
    habs = [];
    colors = [];
    createGridLayout(tileOrder,flip);
    drawGrid(colors,habs);
    drawHabs(createPoly(EDGES,0.9*RADIUS),habs);
    ctxBuild.setTransform(1,0,0,1,0,0);
    ctxBuild.clearRect(0, 0,
                buildingsBoard.width, buildingsBoard.height);
    drawBuildings(whitebuildcoords,whitebuild);
    drawBuildings(greenbuildcoords,greenbuild);
    drawBuildings(bluebuildcoords,bluebuild);
    drawBuildings(blackbuildcoords,blackbuild);
    }
};

document.getElementById("btnP1Cube").onclick = function() {
    var p1Centx = selectedElem[0];
    var p1Centy = selectedElem[1] - p1YOffset;
    const p = P2();
    ctxTokens.fillStyle = p1color;
    ctxTokens.lineWidth = 1;
    ctxTokens.strokeStyle ="black";
    drawPoly(gridToPixel(p1Centx, p1Centy, p), createPoly(4,RADIUS*0.2),"tokens");
    console.log()
    selectHexItem.close();        
};

document.getElementById("btnP2Cube").onclick = function() {
    var p2Centx = selectedElem[0];
    var p2Centy = selectedElem[1] - p2YOffset;
    const p = P2();
    ctxTokens.fillStyle = p2color;
    ctxTokens.lineWidth = 1;
    ctxTokens.strokeStyle ="black";
    drawPoly(gridToPixel(p2Centx, p2Centy, p), createPoly(4,RADIUS*0.2),"tokens");
    console.log()
    selectHexItem.close();        
};

document.getElementById("btnP3Cube").onclick = function() {
    var p3Centx = selectedElem[0];
    var p3Centy = selectedElem[1] - p3YOffset;
    const p = P2();
    ctxTokens.fillStyle = p3color;
    ctxTokens.lineWidth = 1;
    ctxTokens.strokeStyle ="black";
    drawPoly(gridToPixel(p3Centx, p3Centy, p), createPoly(4,RADIUS*0.2),"tokens");
    console.log()
    selectHexItem.close();        
};

document.getElementById("btnP4Cube").onclick = function() {
    var p4Centx = selectedElem[0];
    var p4Centy = selectedElem[1] - p4YOffset;
    const p = P2();
    ctxTokens.fillStyle = p4color;
    ctxTokens.lineWidth = 1;
    ctxTokens.strokeStyle ="black";
    drawPoly(gridToPixel(p4Centx, p4Centy, p), createPoly(4,RADIUS*0.2),"tokens");
    console.log()
    selectHexItem.close();        
};

document.getElementById("btnP5Cube").onclick = function() {
    var p5Centx = selectedElem[0];
    var p5Centy = selectedElem[1] - p5YOffset;
    const p = P2();
    ctxTokens.fillStyle = p5color;
    ctxTokens.lineWidth = 1;
    ctxTokens.strokeStyle ="black";
    drawPoly(gridToPixel(p5Centx, p5Centy, p), createPoly(4,RADIUS*0.2),"tokens");
    console.log()
    selectHexItem.close();        
};

document.getElementById("btnP1Disk").onclick = function() {
    var p1Centx = selectedElem[0];
    var p1Centy = selectedElem[1] - p1YOffset;
    const p = P2();
    ctxTokens.fillStyle = p1color;
    ctxTokens.lineWidth = 1;
    ctxTokens.strokeStyle ="black";
    drawPoly(gridToPixel(p1Centx, p1Centy, p), createPoly(10,RADIUS*0.2),"tokens");
    console.log()
    selectHexItem.close();        
};

document.getElementById("btnP2Disk").onclick = function() {
    var p2Centx = selectedElem[0];
    var p2Centy = selectedElem[1] - p2YOffset;
    const p = P2();
    ctxTokens.fillStyle = p2color;
    ctxTokens.lineWidth = 1;
    ctxTokens.strokeStyle ="black";
    drawPoly(gridToPixel(p2Centx, p2Centy, p), createPoly(10,RADIUS*0.2),"tokens");
    console.log()
    selectHexItem.close();        
};

document.getElementById("btnP3Disk").onclick = function() {
    var p3Centx = selectedElem[0];
    var p3Centy = selectedElem[1] - p3YOffset;
    const p = P2();
    ctxTokens.fillStyle = p3color;
    ctxTokens.lineWidth = 1;
    ctxTokens.strokeStyle ="black";
    drawPoly(gridToPixel(p3Centx, p3Centy, p), createPoly(10,RADIUS*0.2),"tokens");
    console.log()
    selectHexItem.close();        
};

document.getElementById("btnP4Disk").onclick = function() {
    var p4Centx = selectedElem[0];
    var p4Centy = selectedElem[1] - p4YOffset;
    const p = P2();
    ctxTokens.fillStyle = p4color;
    ctxTokens.lineWidth = 1;
    ctxTokens.strokeStyle ="black";
    drawPoly(gridToPixel(p4Centx, p4Centy, p), createPoly(10,RADIUS*0.2),"tokens");
    console.log()
    selectHexItem.close();        
};

document.getElementById("btnP5Disk").onclick = function() {
    var p5Centx = selectedElem[0];
    var p5Centy = selectedElem[1] - p5YOffset;
    const p = P2();
    ctxTokens.fillStyle = p5color;
    ctxTokens.lineWidth = 1;
    ctxTokens.strokeStyle ="black";
    drawPoly(gridToPixel(p5Centx, p5Centy, p), createPoly(10,RADIUS*0.2),"tokens");
    console.log()
    selectHexItem.close();        
};