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
const selectPlayerCount = document.getElementById("selectPlayerCount");
const noGameLoaded = document.getElementById("noGameLoaded");
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
var playerCount = 0;
var currentGameRules = [];
var currentGameDest = [0,0];
var currentGameHint = "";
var games = [];
var currentGame;
var currentGameRecord = {};
var currentTurn = 0;
var inGame = false;
const rules = {
    "water_or_desert" : "The habitat is on water or desert",
    "water_or_mountain" : "The habitat is on water or mountain",
    'water_or_forest': 'The habitat is on water or forest',
    'water_or_bone': 'The habitat is on water or swamp',
    'forest_or_desert' : 'The habitat is on forest or desert',
    'forest_or_mountain' : 'The habitat is on forest or mountain',
    'forest_or_bone' : 'The habitat is on forest or swamp',
    'desert_or_mountain':  'The habitat is on desert or mountain',
    'desert_or_bone' : 'The habitat is on desert or swamp',
    'mountain_or_bone':  'The habitat is on mountain or swamp',

    'within_water':  'The habitat is within one space of water',
    'within_forest': 'The habitat is within one space of forest',
    'within_desert': 'The habitat is within one space of desert',
    'within_mountain': 'The habitat is within one space of mountain',
    'within_bone': 'The habitat is within one space of swamp',
    'within_fissure':  'The habitat is within one space of either animal territory',

    'within_pyramid':  'The habitat is within two spaces of a standing stone',
    'within_colony': 'The habitat is within two spaces of a shack',
    'within_dormant_fissure':  'The habitat is within two spaces of a bear territory',
    'within_active_fissure': 'The habitat is within two spaces of a cougar territory',

    'within_green':  'The habitat is within three spaces of a green structure',
    'within_red':  'The habitat is within three spaces of a white structure',
    'within_blue': 'The habitat is within three spaces of a blue structure',
    'within_black':  'The habitat is not within three spaces of a black structure',

    "not_water_or_desert" : "The habitat is not on water or desert",
    "not_water_or_mountain" : "The habitat is not on water or mountain",
    'not_water_or_forest': 'The habitat is not on water or forest',
    'not_water_or_bone': 'The habitat is not on water or swamp',
    'not_forest_or_desert' : 'The habitat not is on forest or desert',
    'not_forest_or_mountain' : 'The habitat is not on forest or mountain',
    'not_forest_or_bone' : 'The habitat is not on forest or swamp',
    'not_desert_or_mountain':  'The habitat is not on desert or mountain',
    'not_desert_or_bone' : 'The habitat is not on desert or swamp',
    'not_mountain_or_bone':  'The habitat is not on mountain or swamp',

    'not_within_water':  'The habitat is not within one space of water',
    'not_within_forest': 'The habitat is not within one space of forest',
    'not_within_desert': 'The habitat is not within one space of desert',
    'not_within_mountain': 'The habitat is not within one space of mountain',
    'not_within_bone': 'The habitat is not within one space of swamp',
    'not_within_fissure':  'The habitat is not within one space of either animal territory',

    'not_within_pyramid':  'The habitat is not within two spaces of a standing stone',
    'not_within_colony': 'The habitat is not within two spaces of a shack',
    'not_within_dormant_fissure':  'The habitat is not within two spaces of a bear territory',
    'not_within_active_fissure': 'The habitat is not within two spaces of a cougar territory',

    'not_within_green':  'The habitat is not within three spaces of a green structure',
    'not_within_red':  'The habitat is not within three spaces of a white structure',
    'not_within_blue': 'The habitat is not within three spaces of a blue structure',
    'not_within_black':  'The habitat is within three spaces of a black structure',

}

var url = "https://www.playcryptid.com/php/getGame.php"; //base url for playcryptid.com
var tempStr = "";
//document.getElementById("selectGameMode").close();
genEmptyBoard();
//generate basic empty board
function genEmptyBoard(){
    inGame = false;
    document.getElementById("p1Rule").disabled = true;
    document.getElementById("p2Rule").disabled = true;
    document.getElementById("p3Rule").disabled = true;
    document.getElementById("p4Rule").disabled = true;
    document.getElementById("p5Rule").disabled = true;
    document.getElementById("endGame").disabled = true;
    document.getElementById("newGame").disabled = true;
    document.getElementById("endTurn").disabled = true;
    document.getElementById("btnNoToken").disabled = false;
    document.getElementById("btnNoPlayerToken").disabled = true;
    document.getElementById("startGame").disabled = true;
    document.getElementById("btnP4Disk").disabled = false;
    document.getElementById("btnP5Disk").disabled = false;
    document.getElementById("btnP4Cube").disabled = false;
    document.getElementById("btnP5Cube").disabled = false;
    currentBoard = "";
    currentGame = "";
    mapCode = "";
    playerCount = 0;
    currentGameRules = [];
    currentGameDest = [0,0];
    currentGameHint = "";
    currentPlayer = 0;
    inGame = false;
    cubePlaced = false;
    currentTokenUpdate = [];
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
    //createGridLayout(tileOrder,flip);
    //drawGrid(colors,habs); 
    //drawHabs(createPoly(EDGES,0.9*RADIUS),habs); 
    drawBoard("intro_123456CCCCCCCCCCCC");
    document.getElementById("newBoard").disabled = false;
    document.getElementById("boardControls").classList.remove("disabled");
}
module.exports.genEmptyBoard = genEmptyBoard;
//Generate New Random Board from playcryptid.com
//input: game mode, either 0 for normal(intro on mapKey) or 1 for advanced (normal on mapKey)
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




// draw board from playcryptid.com on canvas
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
document.getElementById("newBoard").disabled = false;
document.getElementById("boardControls").classList.remove("disabled");
}
//translate arrays saving board layout to something the rendering function uses
//input: tileOrder-array saving order of tiles; flip-array saving orientation of tiles
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
//draws a single tile on canvas
// input: x- start x-value; y- start y-value; w- width of tile; h- height of tile; points- points for polygon to draw, hexagons in this case; cols- colors for hexes; habs- animal habitat spaces
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
module.exports.drawTile = drawTile;
//draws entire grid
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
//draws habitats
function drawHabs(points,habs){
    const p = P2(); 
    var i = 0;
    //console.log(elements[1])
    
    for (i=0;i<habs.length;i++){
        ctxBoard.fillStyle = "#ffffff00";
        gx = elements[i].id[0];
        gy = elements[i].id[1];
        if (habs[i] == 1){
            //console.log("Bear Hab")
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
//draws a building
//input: coords- coordinate array for buildings; color- color of building; shape- shape of building, 8 for standing stone, 3 for shack
function drawBuild(coords,color,shape){
    if((coords[0] != 0) && (coords[1] != 0) && (coords[0] != 13) && (coords[1] != 13)){
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
//draws both buildings of one color
function drawBuildings(coords,color){
    //check if building coords have been set
    if((coords[0] != 0) && (coords[1] != 0)){
        drawBuild(coords[0],color,8);
        drawBuild(coords[1],color,3);
    }
    

}
//convert grid coords to pixel position on screen
function gridToPixel(gx, gy, p = {}) {
    p.x = ((gx) * GRID_X_SPACE);
    p.y = gy * GRID_Y_SPACE - (gx % 2 ? GRID_Y_OFFSET : 0);       
    return p;
}
module.exports.gridToPixel = gridToPixel;
//draws polygon on canvas
function drawPoly(p, points,layer) { // p.x, p.y is center
    var localCtx; //context for layer used
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
module.exports.drawPoly = drawPoly;
//creates polygon based on predetermined properties
//input: sides- number of sides; rad- radius; layer- canvas layer to use
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
};
module.exports.createPoly = createPoly;
//draw player tokens on canvas
//input: sol- whether to draw the solution marker or not
function drawTokens(sol){
    ctxTokens.setTransform(1,0,0,1,0,0);
    ctxTokens.clearRect(0, 0,
                tokenBoard.width, tokenBoard.height);
    var tokensOnHex;
    if (sol){
        ctxTokens.fillStyle = "#ffffff00";
        ctxTokens.strokeStyle = "#e300fc";
        ctxTokens.lineWidth = 4;
        const p = P2();
        var gx = currentGameDest[1]; 
        var gy = currentGameDest[0];
        drawPoly(gridToPixel(gx, gy, p), createPoly(EDGES,0.9*RADIUS),"tokens");
    }
    elements.forEach(function (hex) {
        tokensOnHex = hex.pieces;
        //console.log(hex);
        for (var j=0;j<tokensOnHex.length;j++){
            const pc = P2();
            switch (tokensOnHex[j]){
                case "p1c":
                    var Centx = hex.id[0];
                    var Centy = hex.id[1] - p1YOffset;
                    ctxTokens.fillStyle = p1color;
                    ctxTokens.lineWidth = 1;
                    ctxTokens.strokeStyle ="black";
                    drawPoly(gridToPixel(Centx, Centy, pc), createPoly(4,RADIUS*0.2),"tokens");
                    break;
                case "p1d":
                    var Centx = hex.id[0];
                    var Centy = hex.id[1] - p1YOffset;
                    
                    ctxTokens.fillStyle = p1color;
                    ctxTokens.lineWidth = 1;
                    ctxTokens.strokeStyle ="black";
                    drawPoly(gridToPixel(Centx, Centy, pc), createPoly(10,RADIUS*0.2),"tokens");
                    break;
                case "p2c":
                    var Centx = hex.id[0];
                    var Centy = hex.id[1] - p2YOffset;
                    
                    ctxTokens.fillStyle = p2color;
                    ctxTokens.lineWidth = 1;
                    ctxTokens.strokeStyle ="black";
                    drawPoly(gridToPixel(Centx, Centy, pc), createPoly(4,RADIUS*0.2),"tokens");
                    break;
                case "p2d":
                    var Centx = hex.id[0];
                    var Centy = hex.id[1] - p2YOffset;
                    
                    ctxTokens.fillStyle = p2color;
                    ctxTokens.lineWidth = 1;
                    ctxTokens.strokeStyle ="black";
                    drawPoly(gridToPixel(Centx, Centy, pc), createPoly(10,RADIUS*0.2),"tokens");
                    break;
                case "p3c":
                    var Centx = hex.id[0];
                    var Centy = hex.id[1] - p3YOffset;
                    
                    ctxTokens.fillStyle = p3color;
                    ctxTokens.lineWidth = 1;
                    ctxTokens.strokeStyle ="black";
                    drawPoly(gridToPixel(Centx, Centy, pc), createPoly(4,RADIUS*0.2),"tokens");
                    break;
                case "p3d":
                    var Centx = hex.id[0];
                    var Centy = hex.id[1] - p3YOffset;
                    
                    ctxTokens.fillStyle = p3color;
                    ctxTokens.lineWidth = 1;
                    ctxTokens.strokeStyle ="black";
                    drawPoly(gridToPixel(Centx, Centy, pc), createPoly(10,RADIUS*0.2),"tokens");
                    break;
                case "p4c":
                    var Centx = hex.id[0];
                    var Centy = hex.id[1] - p4YOffset;
                    
                    ctxTokens.fillStyle = p4color;
                    ctxTokens.lineWidth = 1;
                    ctxTokens.strokeStyle ="black";
                    drawPoly(gridToPixel(Centx, Centy, pc), createPoly(4,RADIUS*0.2),"tokens");
                    break;
                case "p4d":
                    var Centx = hex.id[0];
                    var Centy = hex.id[1] - p4YOffset;
                    
                    ctxTokens.fillStyle = p4color;
                    ctxTokens.lineWidth = 1;
                    ctxTokens.strokeStyle ="black";
                    drawPoly(gridToPixel(Centx, Centy, pc), createPoly(10,RADIUS*0.2),"tokens");
                    break;
                case "p5c":
                    var Centx = hex.id[0];
                    var Centy = hex.id[1] - p5YOffset;
                    
                    ctxTokens.fillStyle = p5color;
                    ctxTokens.lineWidth = 1;
                    ctxTokens.strokeStyle ="black";
                    drawPoly(gridToPixel(Centx, Centy, pc), createPoly(4,RADIUS*0.2),"tokens");
                    break;
                case "p5d":
                    var Centx = hex.id[0];
                    var Centy = hex.id[1] - p5YOffset;
                    
                    ctxTokens.fillStyle = p5color;
                    ctxTokens.lineWidth = 1;
                    ctxTokens.strokeStyle ="black";
                    drawPoly(gridToPixel(Centx, Centy, pc), createPoly(10,RADIUS*0.2),"tokens");
                    break;
            }
        }
    });    
}
var elem = document.getElementById('board')
var elemLeft = elem.offsetLeft + elem.clientLeft
var elemTop = elem.offsetTop + elem.clientTop
var context = elem.getContext('2d')

//determines whether a point is inside a circle defined by parameters given
//input: x- point to check x-coord; y- point to check y-coord; cx- center of circle x-coord; cy- center of circle y-coord; r- radius of circle
function inside_circle(x, y, cx, cy, r) {
    var dx = x - cx
    var dy = y - cy
    return dx*dx + dy*dy <= r*r
}
var selectedElem; // saves coords of hex selected
//checks if the top canvas layer was clicked
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
            if ((inGame) && (turnTaken == false)){
                document.getElementById("takeTurn").showModal();
            }
            else {
                selectHexItem.showModal(); //popup menu to select a piece to put on selected hex
            }
            
            
        }
    });

}, false);
//OnClick for button on popup menu to put the white stading stone on selected hex
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
//OnClick for button on popup menu to put the white shack on selected hex
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
//OnClick for button on popup menu to put the green stading stone on selected hex
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
//OnClick for button on popup menu to put the green shack on selected hex
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
//OnClick for button on popup menu to put the blue stading stone on selected hex
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
//OnClick for button on popup menu to put the blue shack on selected hex
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
//OnClick for button on popup menu to put the black stading stone on selected hex
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
//OnClick for button on popup menu to put the black shack on selected hex
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
//OnClick for button on popup menu to remove buildings on selected hex
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
//OnClick for button to generate random board
document.getElementById("newBoard").onclick = function() {
    //genNewBoard()
    document.getElementById("newBoard").disabled = true;
    document.getElementById("boardControls").classList.add("disabled");
    gameModeBox.showModal();
    };
//OnClick for button on popup menu to generate random normal map
document.getElementById("btnNormalMode").onclick = function() {
    genNewBoard(0);
    gameModeBox.close();
    document.getElementById("newGame").disabled = false;
};
//OnClick for button on popup menu to generate random advanced map
document.getElementById("btnAdvMode").onclick = function() {
    genNewBoard(1);
    gameModeBox.close();
    document.getElementById("newGame").disabled = false;
    };
//OnClick for checkbox to flip tile 1 (top left)
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
//OnClick for checkbox to flip tile 2 (top right)
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
//OnClick for checkbox to flip tile 3 (middle left)
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
//OnClick for checkbox to flip tile 4 (middle right)
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
//OnClick for checkbox to flip tile 5 (bottom left)
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
//OnClick for checkbox to flip tile 6 (bottom right)
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
//OnClick for dropdown menu to select tile for position 1 (top left)
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


//OnClick for dropdown menu to select tile for position 2 (top right)
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

//OnClick for dropdown menu to select tile for position 3 (middle left)
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

//OnClick for dropdown menu to select tile for position 4 (middle right)
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
//OnClick for dropdown menu to select tile for position 5 (bottom left)
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
//OnClick for dropdown menu to select tile for position 6 (bottom right)
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
var tempTokensArr;
//var selectedElem;
//OnClick for button on popup menu to place a cube from player 1 on the selected hex
document.getElementById("btnP1Cube").onclick = function() {
    tempTokensArr = elements.find(x => ((x.id[0] == selectedElem[0]) &&  (x.id[1] == selectedElem[1]))).pieces;
    for(var i=0;i<tempTokensArr.length;i++){
        if((tempTokensArr[i] == "p1c") || (tempTokensArr[i] == "p1d")){
            delete tempTokensArr[i];
            break;
        }
    }
    tempTokensArr.push("p1c");
    drawTokens(false);
    console.log()
    selectHexItem.close();        
};
//OnClick for button on popup menu to place a cube from player 2 on the selected hex
document.getElementById("btnP2Cube").onclick = function() {
    tempTokensArr = elements.find(x => ((x.id[0] == selectedElem[0]) &&  (x.id[1] == selectedElem[1]))).pieces;
    for(var i=0;i<tempTokensArr.length;i++){
        if((tempTokensArr[i] == "p2c") || (tempTokensArr[i] == "p2d")){
            delete tempTokensArr[i];
            break;
        }
    }
    tempTokensArr.push("p2c");
    drawTokens(false);
    console.log()
    selectHexItem.close();        
};
//OnClick for button on popup menu to place a cube from player 3 on the selected hex
document.getElementById("btnP3Cube").onclick = function() {
    tempTokensArr = elements.find(x => ((x.id[0] == selectedElem[0]) &&  (x.id[1] == selectedElem[1]))).pieces;
    for(var i=0;i<tempTokensArr.length;i++){
        if((tempTokensArr[i] == "p3c") || (tempTokensArr[i] == "p3d")){
            delete tempTokensArr[i];
            break;
        }
    }
    tempTokensArr.push("p3c");
    drawTokens(false);
    console.log()
    selectHexItem.close();        
};
//OnClick for button on popup menu to place a cube from player 4 on the selected hex
document.getElementById("btnP4Cube").onclick = function() {
    tempTokensArr = elements.find(x => ((x.id[0] == selectedElem[0]) &&  (x.id[1] == selectedElem[1]))).pieces;
    for(var i=0;i<tempTokensArr.length;i++){
        if((tempTokensArr[i] == "p4c") || (tempTokensArr[i] == "p4d")){
            delete tempTokensArr[i];
            break;
        }
    }
    tempTokensArr.push("p4c");
    drawTokens(false);
    console.log()
    selectHexItem.close();        
};
//OnClick for button on popup menu to place a cube from player 5 on the selected hex
document.getElementById("btnP5Cube").onclick = function() {
    tempTokensArr = elements.find(x => ((x.id[0] == selectedElem[0]) &&  (x.id[1] == selectedElem[1]))).pieces;
    for(var i=0;i<tempTokensArr.length;i++){
        if((tempTokensArr[i] == "p5c") || (tempTokensArr[i] == "p5d")){
            delete tempTokensArr[i];
            break;
        }
    }
    tempTokensArr.push("p5c");
    drawTokens(false);
    console.log()
    selectHexItem.close();        
};
//OnClick for button on popup menu to place a disk from player 1 on the selected hex
document.getElementById("btnP1Disk").onclick = function() {
    tempTokensArr = elements.find(x => ((x.id[0] == selectedElem[0]) &&  (x.id[1] == selectedElem[1]))).pieces;
    for(var i=0;i<tempTokensArr.length;i++){
        if((tempTokensArr[i] == "p1c") || (tempTokensArr[i] == "p1d")){
            delete tempTokensArr[i];
            break;
        }
    }
    tempTokensArr.push("p1d");
    drawTokens(false);
    console.log()
    selectHexItem.close();        
};
//OnClick for button on popup menu to place a disk from player 2 on the selected hex
document.getElementById("btnP2Disk").onclick = function() {
    tempTokensArr = elements.find(x => ((x.id[0] == selectedElem[0]) &&  (x.id[1] == selectedElem[1]))).pieces;
    for(var i=0;i<tempTokensArr.length;i++){
        if((tempTokensArr[i] == "p2c") || (tempTokensArr[i] == "p2d")){
            delete tempTokensArr[i];
            break;
        }
    }
    tempTokensArr.push("p2d");
    drawTokens(false);
    console.log()
    selectHexItem.close();        
};
//OnClick for button on popup menu to place a disk from player 3 on the selected hex
document.getElementById("btnP3Disk").onclick = function() {
    tempTokensArr = elements.find(x => ((x.id[0] == selectedElem[0]) &&  (x.id[1] == selectedElem[1]))).pieces;
    for(var i=0;i<tempTokensArr.length;i++){
        if((tempTokensArr[i] == "p3c") || (tempTokensArr[i] == "p3d")){
            delete tempTokensArr[i];
            break;
        }
    }
    tempTokensArr.push("p3d");
    drawTokens(false);
    console.log()
    selectHexItem.close();        
};
//OnClick for button on popup menu to place a disk from player 4 on the selected hex
document.getElementById("btnP4Disk").onclick = function() {
    tempTokensArr = elements.find(x => ((x.id[0] == selectedElem[0]) &&  (x.id[1] == selectedElem[1]))).pieces;
    for(var i=0;i<tempTokensArr.length;i++){
        if((tempTokensArr[i] == "p4c") || (tempTokensArr[i] == "p4d")){
            delete tempTokensArr[i];
            break;
        }
    }
    tempTokensArr.push("p4d");
    drawTokens(false);
    console.log()
    selectHexItem.close();        
};
//OnClick for button on popup menu to place a disk from player 5 on the selected hex
document.getElementById("btnP5Disk").onclick = function() {
    tempTokensArr = elements.find(x => ((x.id[0] == selectedElem[0]) &&  (x.id[1] == selectedElem[1]))).pieces;
    for(var i=0;i<tempTokensArr.length;i++){
        if((tempTokensArr[i] == "p5c") || (tempTokensArr[i] == "p5d")){
            delete tempTokensArr[i];
            break;
        }
    }
    tempTokensArr.push("p5d");
    drawTokens(false);
    console.log()
    selectHexItem.close();        
};
//OnClick for button on popup menu to remove player tokens from the selected hex
document.getElementById("btnNoToken").onclick = function() {
    elements.find(x => ((x.id[0] == selectedElem[0]) &&  (x.id[1] == selectedElem[1]))).pieces = [];
    drawTokens(false);
    console.log()
    selectHexItem.close();        
};
//OnClick for New Game button to create a new game using the map showing on the canvas
document.getElementById("newGame").onclick = function(){
    if (jsonSetup != ""){
        selectPlayerCount.showModal();    
    }
    else{
        noGameLoaded.showModal();
    }
    document.getElementById("newBoard").disabled = true;
    document.getElementById("startGame").disabled = false;
    document.getElementById("boardControls").classList.add("disabled");
    document.getElementById("hexBuildings").classList.add("disabled");

};

//OnClick for button on popup menu to select three players for the new game
document.getElementById("btnThreePlayers").onclick = function(){
    playerCount = 3;
    games = currentBoard.players["3"];
    currentGame = rndItem(games);
    currentGameDest = currentGame.destination.split(", ");
    currentGameDest[0] = parseInt(currentGameDest[0]);
    currentGameDest[1] = parseInt(currentGameDest[1]);
    currentGameRules = currentGame.rules;
    currentGameHint = currentGame.hint;
    console.log(currentGameDest);
    selectPlayerCount.close();
    document.getElementById("startGame").disabled = false;
    document.getElementById("p1Rule").disabled = false;
    document.getElementById("p2Rule").disabled = false;
    document.getElementById("p3Rule").disabled = false;
    //document.getElementById("p4Rule").disabled = false;
    //document.getElementById("p5Rule").disabled = false;
    document.getElementById("endGame").disabled = false;
    document.getElementById("endTurn").disabled = true;
    document.getElementById("btnP4Disk").disabled = true;
    document.getElementById("btnP5Disk").disabled = true;
    document.getElementById("btnP4Cube").disabled = true;
    document.getElementById("btnP5Cube").disabled = true;
};
//OnClick for button on popup menu to select four players for the new game
document.getElementById("btnFourPlayers").onclick = function(){
    playerCount = 4;
    games = currentBoard.players["4"];
    currentGame = rndItem(games);
    currentGameDest = currentGame.destination.split(", ");
    currentGameDest[0] = parseInt(currentGameDest[0]);
    currentGameDest[1] = parseInt(currentGameDest[1]);
    currentGameRules = currentGame.rules;
    currentGameHint = currentGame.hint;
    console.log(currentGameDest);
    selectPlayerCount.close();
    document.getElementById("startGame").disabled = false;
    document.getElementById("p1Rule").disabled = false;
    document.getElementById("p2Rule").disabled = false;
    document.getElementById("p3Rule").disabled = false;
    document.getElementById("p4Rule").disabled = false;
    //document.getElementById("p5Rule").disabled = false;
    document.getElementById("endGame").disabled = false;
    document.getElementById("endTurn").disabled = true;
    //document.getElementById("btnP4Disk").disabled = true;
    document.getElementById("btnP5Disk").disabled = true;
    //document.getElementById("btnP4Cube").disabled = true;
    document.getElementById("btnP5Cube").disabled = true;
};
//OnClick for button on popup menu to select five players for the new game
document.getElementById("btnFivePlayers").onclick = function(){
    playerCount = 5;
    games = currentBoard.players["5"];
    currentGame = rndItem(games);
    currentGameDest = currentGame.destination.split(", ");
    currentGameDest[0] = parseInt(currentGameDest[0]);
    currentGameDest[1] = parseInt(currentGameDest[1]);
    currentGameRules = currentGame.rules;
    currentGameHint = currentGame.hint;
    console.log(currentGameDest);
    selectPlayerCount.close();
    document.getElementById("startGame").disabled = false;
    document.getElementById("p1Rule").disabled = false;
    document.getElementById("p2Rule").disabled = false;
    document.getElementById("p3Rule").disabled = false;
    document.getElementById("p4Rule").disabled = false;
    document.getElementById("p5Rule").disabled = false;
    document.getElementById("endGame").disabled = false;
    document.getElementById("endTurn").disabled = true;
    //document.getElementById("btnP4Disk").disabled = true;
    document.getElementById("btnP5Disk").disabled = false;
    //document.getElementById("btnP4Cube").disabled = true;
    document.getElementById("btnP5Cube").disabled = false;
};
//OnClick for Show P1 Rule to show Player 1's clue/rule
document.getElementById("p1Rule").onclick = function(){
    document.getElementById("hintBoxText").innerText = rules[currentGameRules[0]];
    document.getElementById("hintBox").showModal();
};
//OnClick for Show P2 Rule to show Player 2's clue/rule
document.getElementById("p2Rule").onclick = function(){
    document.getElementById("hintBoxText").innerText = rules[currentGameRules[1]];
    document.getElementById("hintBox").showModal();
};
//OnClick for Show P3 Rule to show Player 3's clue/rule
document.getElementById("p3Rule").onclick = function(){
    document.getElementById("hintBoxText").innerText = rules[currentGameRules[2]];
    document.getElementById("hintBox").showModal();
};
//OnClick for Show P4 Rule to show Player 4's clue/rule
document.getElementById("p4Rule").onclick = function(){
    document.getElementById("hintBoxText").innerText = rules[currentGameRules[3]];
    document.getElementById("hintBox").showModal();
};
//OnClick for Show P5 Rule to show Player 5's clue/rule
document.getElementById("p5Rule").onclick = function(){
    document.getElementById("hintBoxText").innerText = rules[currentGameRules[4]];
    document.getElementById("hintBox").showModal();
};
//OnClick for OK button on hint popup
document.getElementById("hintBoxOK").onclick = function(){
    document.getElementById("hintBox").close();
}
//OnClick for End Game button to end current game
document.getElementById("endGame").onclick = function(){
    document.getElementById("endConfirm").showModal();
}
//OnClick for Yes button on end game popup to end the game
document.getElementById("endYes").onclick = function(){
    document.getElementById("endConfirm").close(); 
    document.getElementById("endGameBox").showModal();
        
}
//OnClick for No button on end game popup to return to the game
document.getElementById("endNo").onclick = function(){
    document.getElementById("endConfirm").close();     
}
//OnClick for Show Solution button on end game popup to show solution to current game
document.getElementById("endSolution").onclick = function(){
    document.getElementById("p1RuleText").innerText = rules[currentGameRules[0]];
    document.getElementById("p2RuleText").innerText = rules[currentGameRules[1]];
    document.getElementById("p3RuleText").innerText = rules[currentGameRules[2]];
    if ((playerCount == 4)||(playerCount == 5)){
        document.getElementById("p4RuleText").innerText = rules[currentGameRules[3]];
    }
    if(playerCount == 5){
        document.getElementById("p5RuleText").innerText = rules[currentGameRules[4]];
    }
    drawTokens(true);  
    document.getElementById("p1Rule").disabled = true;
    document.getElementById("p2Rule").disabled = true;
    document.getElementById("p3Rule").disabled = true;
    document.getElementById("p4Rule").disabled = true;
    document.getElementById("p5Rule").disabled = true;
    document.getElementById("endGame").disabled = true;
    document.getElementById("endTurn").disabled = true;
    document.getElementById("btnNoToken").disabled = false;
    document.getElementById("btnNoPlayerToken").disabled = true;
    document.getElementById("startGame").disabled = true;
    document.getElementById("endGameBox").close(); 
    inGame = false;   
}
//OnClick for Don't Show Solution button on end game popup to end game without showing solution
document.getElementById("endNoSolution").onclick = function(){
    ctxTokens.setTransform(1,0,0,1,0,0);
    ctxTokens.clearRect(0, 0,
                tokenBoard.width, tokenBoard.height);
    elements.forEach(function (hex) {
        hex.pieces = [];
    });
    document.getElementById("p1RuleText").innerText = "";
    document.getElementById("p2RuleText").innerText = "";
    document.getElementById("p3RuleText").innerText = "";
    if ((playerCount == 4)||(playerCount == 5)){
        document.getElementById("p4RuleText").innerText = "";
    }
    if(playerCount == 5){
        document.getElementById("p5RuleText").innerText = "";
    }
    document.getElementById("p1Rule").disabled = true;
    document.getElementById("p2Rule").disabled = true;
    document.getElementById("p3Rule").disabled = true;
    document.getElementById("p4Rule").disabled = true;
    document.getElementById("p5Rule").disabled = true;
    document.getElementById("endGame").disabled = true;
    document.getElementById("endTurn").disabled = true;
    document.getElementById("startGame").disabled = true;
    document.getElementById("endGameBox").close();  
    inGame = false;  
}
//OnClick for Reset Board button to reset the board to a blank, basic board
document.getElementById("resetBoard").onclick = function(){
    document.getElementById("resetConfirm").showModal();
}
//OnClick for No button on reset board popup to go back to the main board
document.getElementById("resetNo").onclick = function(){
    document.getElementById("resetConfirm").close();
}
//OnClick for Yes button on reset board popup to reset the board
document.getElementById("resetYes").onclick = function(){
    genEmptyBoard();
    document.getElementById("p1RuleText").innerText = '';
    document.getElementById("p2RuleText").innerText = '';
    document.getElementById("p3RuleText").innerText = '';
    if ((playerCount == 4)||(playerCount == 5)){
        document.getElementById("p4RuleText").innerText = '';
    }
    if(playerCount == 5){
        document.getElementById("p5RuleText").innerText = '';
    }
    document.getElementById("boardControls").classList.remove("disabled");
    document.getElementById("hexBuildings").classList.remove("disabled");
    document.getElementById("newBoard").disabled = false;
    document.getElementById("resetConfirm").close();
}

//Variables to track state of play and record for later viewing
var newGameRecord;
var newTurn;
var roundNum = -1;
var turnCount = 0;
var currentPlayer = 0;
var activePlayer = 0;
var currentTokenUpdate = [];
//function to help record each turn in a game
// move = setup/quest/search
function recordTurn(gameRecord,round,turn,player,move,hex,tokenUpdate){
    newTurn = {
            "round" : round,
            "turn": turn,
            "move": move,
            "player": player,
            "hex": hex,
            "tokenUpdate": tokenUpdate
        }
    gameRecord.turns.push(newTurn);
}
//OnClick for the Start Game button to start the game
document.getElementById("startGame").onclick = function(){
    newGameRecord = {
        "map" : mapCode,
        "players": playerCount,
        "mode" : gameMode,
        "dest" : currentGameDest,
        "rules": currentGameRules,
        "hint": currentGameHint,
        "turns": []

    }
    currentGameRecord = newGameRecord;
    document.getElementById("btnP1Disk").disabled = true;
    document.getElementById("btnP2Disk").disabled = true;
    document.getElementById("btnP3Disk").disabled = true;
    document.getElementById("btnP4Disk").disabled = true;
    document.getElementById("btnP5Disk").disabled = true;
    document.getElementById("newGame").disabled = true;
    document.getElementById("p1Rule").disabled = true;
    document.getElementById("p2Rule").disabled = true;
    document.getElementById("p3Rule").disabled = true;
    document.getElementById("p4Rule").disabled = true;
    document.getElementById("p5Rule").disabled = true;
    document.getElementById("endTurn").disabled = false;
    document.getElementById("btnNoToken").disabled = true;
    document.getElementById("btnNoPlayerToken").disabled = false;
    document.getElementById("passTurnText").innerText = "Please Pass to Player 1";
    document.getElementById("passTurn").showModal();
}
document.getElementById("btnNoPlayerToken").onclick = function(){
    var tokensOnHex = elements.find(x => ((x.id[0] == selectedElem[0]) &&  (x.id[1] == selectedElem[1]))).pieces;
    
        switch (currentPlayer){
            case 1:
                var index = tokensOnHex.indexOf("p1c");
                if (index > -1) { // only splice array when item is found
                    tokensOnHex.splice(index, 1);
                    break; // 2nd parameter means remove one item only
                }
                else{
                    index = tokensOnHex.indexOf("p1d");
                        if (index > -1) { // only splice array when item is found
                        tokensOnHex.splice(index, 1);
                        break; // 2nd parameter means remove one item only
                    }
                }
                break;
            case 2:
                var index = tokensOnHex.indexOf("p2c");
                if (index > -1) { // only splice array when item is found
                    tokensOnHex.splice(index, 1);
                    break; // 2nd parameter means remove one item only
                }
                else{
                    index = tokensOnHex.indexOf("p2d");
                        if (index > -1) { // only splice array when item is found
                        tokensOnHex.splice(index, 1);
                        break; // 2nd parameter means remove one item only
                    }
                }
                break;
            case 3:
                var index = tokensOnHex.indexOf("p3c");
                if (index > -1) { // only splice array when item is found
                    tokensOnHex.splice(index, 1);
                    break; // 2nd parameter means remove one item only
                }
                else{
                    index = tokensOnHex.indexOf("p3d");
                        if (index > -1) { // only splice array when item is found
                        tokensOnHex.splice(index, 1);
                        break; // 2nd parameter means remove one item only
                    }
                }
                break;
            case 4:
                var index = tokensOnHex.indexOf("p4c");
                if (index > -1) { // only splice array when item is found
                    tokensOnHex.splice(index, 1);
                    break; // 2nd parameter means remove one item only
                }
                else{
                    index = tokensOnHex.indexOf("p4d");
                        if (index > -1) { // only splice array when item is found
                        tokensOnHex.splice(index, 1);
                        break; // 2nd parameter means remove one item only
                    }
                }
                break;
            case 5:
                var index = tokensOnHex.indexOf("p5c");
                if (index > -1) { // only splice array when item is found
                    tokensOnHex.splice(index, 1);
                    break; // 2nd parameter means remove one item only
                }
                else{
                    index = tokensOnHex.indexOf("p5d");
                        if (index > -1) { // only splice array when item is found
                        tokensOnHex.splice(index, 1);
                        break; // 2nd parameter means remove one item only
                    }
                }
                break;
        }

    elements.find(x => ((x.id[0] == selectedElem[0]) &&  (x.id[1] == selectedElem[1]))).pieces = tokensOnHex;
    drawTokens(false);
    console.log()
    selectHexItem.close();       
}
var currentPlayerCubeCount = 0;
function countCubesFunc(player){
    var cubeCount = 0;
    //currentPlayerCubeCount = 0;
    switch (player){
        case 1:
            elements.forEach(function (hex) {
                    if (hex.pieces.includes("p1c")){
                        cubeCount = cubeCount + 1;
                    }
                });
            break;
        case 2:
            elements.forEach(function (hex) {
                    if (hex.pieces.includes("p2c")){
                        cubeCount = cubeCount + 1;
                    }
                });
            break;
        case 3:
            elements.forEach(function (hex) {
                    if (hex.pieces.includes("p3c")){
                        cubeCount = cubeCount + 1;
                    }
                });
            break;
        case 4:
            elements.forEach(function (hex) {
                    if (hex.pieces.includes("p4c")){
                        cubeCount = cubeCount + 1;
                    }
                });
            break; 
        case 5:
            elements.forEach(function (hex) {
                    if (hex.pieces.includes("p5c")){
                        cubeCount = cubeCount + 1;
                    }
                });
            break;       
    }
    return cubeCount;
}
//OnClick for OK button on pass turn popup to pass the turn to the next player
document.getElementById("passTurnBtn").onclick = function() {
    if (inGame == false){
        currentPlayer = currentPlayer + 1;
    }
    var gameIntruction;
    if ((roundNum == -1)){
        switch(currentPlayer){
            case 1:
                document.getElementById("p1Rule").disabled = false;
                document.getElementById("p2Rule").disabled = true;
                document.getElementById("p3Rule").disabled = true;
                document.getElementById("p4Rule").disabled = true;
                document.getElementById("p5Rule").disabled = true;
                document.getElementById("p1Tokens").classList.remove("disabled");
                document.getElementById("p2Tokens").classList.add("disabled");
                document.getElementById("p3Tokens").classList.add("disabled");
                document.getElementById("p4Tokens").classList.add("disabled");
                document.getElementById("p5Tokens").classList.add("disabled");
                gameInstruction = "Look at your clue, then place a cube on a space where the cryptid cannot be according to it. \n Click on End Turn below to pass to the next player";
                
                break;
            case 2:
                document.getElementById("p2Rule").disabled = false;
                document.getElementById("p1Rule").disabled = true;
                document.getElementById("p3Rule").disabled = true;
                document.getElementById("p4Rule").disabled = true;
                document.getElementById("p5Rule").disabled = true;
                document.getElementById("p2Tokens").classList.remove("disabled");
                document.getElementById("p1Tokens").classList.add("disabled");
                document.getElementById("p3Tokens").classList.add("disabled");
                document.getElementById("p4Tokens").classList.add("disabled");
                document.getElementById("p5Tokens").classList.add("disabled");
                gameInstruction = "Look at your clue, then place a cube on a space where the cryptid cannot be according to it. \n Click on End Turn below to pass to the next player";
                
                break;
            case 3:
                document.getElementById("p3Rule").disabled = false;
                document.getElementById("p1Rule").disabled = true;
                document.getElementById("p2Rule").disabled = true;
                document.getElementById("p4Rule").disabled = true;
                document.getElementById("p5Rule").disabled = true;
                document.getElementById("p3Tokens").classList.remove("disabled");
                document.getElementById("p1Tokens").classList.add("disabled");
                document.getElementById("p2Tokens").classList.add("disabled");
                document.getElementById("p4Tokens").classList.add("disabled");
                document.getElementById("p5Tokens").classList.add("disabled");
                gameInstruction = "Look at your clue, then place a cube on a space where the cryptid cannot be according to it. \n Click on End Turn below to pass to the next player";
                
                break;
            case 4:
                document.getElementById("p4Rule").disabled = false;
                document.getElementById("p1Rule").disabled = true;
                document.getElementById("p3Rule").disabled = true;
                document.getElementById("p2Rule").disabled = true;
                document.getElementById("p5Rule").disabled = true;
                document.getElementById("p4Tokens").classList.remove("disabled");
                document.getElementById("p1Tokens").classList.add("disabled");
                document.getElementById("p3Tokens").classList.add("disabled");
                document.getElementById("p2Tokens").classList.add("disabled");
                document.getElementById("p5Tokens").classList.add("disabled");
                gameInstruction = "Look at your clue, then place a cube on a space where the cryptid cannot be according to it. \n Click on End Turn below to pass to the next player";
                
                break;
            case 5:
                document.getElementById("p5Rule").disabled = false;
                document.getElementById("p1Rule").disabled = true;
                document.getElementById("p3Rule").disabled = true;
                document.getElementById("p2Rule").disabled = true;
                document.getElementById("p4Rule").disabled = true;
                document.getElementById("p5Tokens").classList.remove("disabled");
                document.getElementById("p1Tokens").classList.add("disabled");
                document.getElementById("p3Tokens").classList.add("disabled");
                document.getElementById("p2Tokens").classList.add("disabled");
                document.getElementById("p4Tokens").classList.add("disabled");
                gameInstruction = "Look at your clue, then place a cube on a space where the cryptid cannot be according to it. \n Click on End Turn below to pass to the next player";
                
                break;
        }
    }
    else if ((roundNum == 0)){
        switch(currentPlayer){
            case 1:
                document.getElementById("p1Rule").disabled = false;
                document.getElementById("p2Rule").disabled = true;
                document.getElementById("p3Rule").disabled = true;
                document.getElementById("p4Rule").disabled = true;
                document.getElementById("p5Rule").disabled = true;
                document.getElementById("p1Tokens").classList.remove("disabled");
                document.getElementById("p2Tokens").classList.add("disabled");
                document.getElementById("p3Tokens").classList.add("disabled");
                document.getElementById("p4Tokens").classList.add("disabled");
                document.getElementById("p5Tokens").classList.add("disabled");
                gameInstruction = "Place another cube on a different space where the cryptid cannot be according to your clue. \n Click on End Turn below to pass to the next player";
                
                break;
            case 2:
                document.getElementById("p2Rule").disabled = false;
                document.getElementById("p1Rule").disabled = true;
                document.getElementById("p3Rule").disabled = true;
                document.getElementById("p4Rule").disabled = true;
                document.getElementById("p5Rule").disabled = true;
                document.getElementById("p2Tokens").classList.remove("disabled");
                document.getElementById("p1Tokens").classList.add("disabled");
                document.getElementById("p3Tokens").classList.add("disabled");
                document.getElementById("p4Tokens").classList.add("disabled");
                document.getElementById("p5Tokens").classList.add("disabled");
                gameInstruction = "Place another cube on a different space where the cryptid cannot be according to your clue. \n Click on End Turn below to pass to the next player";
                
                break;
            case 3:
                document.getElementById("p3Rule").disabled = false;
                document.getElementById("p1Rule").disabled = true;
                document.getElementById("p2Rule").disabled = true;
                document.getElementById("p4Rule").disabled = true;
                document.getElementById("p5Rule").disabled = true;
                document.getElementById("p3Tokens").classList.remove("disabled");
                document.getElementById("p1Tokens").classList.add("disabled");
                document.getElementById("p2Tokens").classList.add("disabled");
                document.getElementById("p4Tokens").classList.add("disabled");
                document.getElementById("p5Tokens").classList.add("disabled");
                gameInstruction = "Place another cube on a different space where the cryptid cannot be according to your clue.\n Click on End Turn below to pass to the next player";
                
                break;
            case 4:
                document.getElementById("p4Rule").disabled = false;
                document.getElementById("p1Rule").disabled = true;
                document.getElementById("p3Rule").disabled = true;
                document.getElementById("p2Rule").disabled = true;
                document.getElementById("p5Rule").disabled = true;
                document.getElementById("p4Tokens").classList.remove("disabled");
                document.getElementById("p1Tokens").classList.add("disabled");
                document.getElementById("p3Tokens").classList.add("disabled");
                document.getElementById("p2Tokens").classList.add("disabled");
                document.getElementById("p5Tokens").classList.add("disabled");
                gameInstruction = "Place another cube on a different space where the cryptid cannot be according to your clue.\n Click on End Turn below to pass to the next player";
                
                break;
            case 5:
                document.getElementById("p5Rule").disabled = false;
                document.getElementById("p1Rule").disabled = true;
                document.getElementById("p3Rule").disabled = true;
                document.getElementById("p2Rule").disabled = true;
                document.getElementById("p4Rule").disabled = true;
                document.getElementById("p5Tokens").classList.remove("disabled");
                document.getElementById("p1Tokens").classList.add("disabled");
                document.getElementById("p3Tokens").classList.add("disabled");
                document.getElementById("p2Tokens").classList.add("disabled");
                document.getElementById("p4Tokens").classList.add("disabled");
                gameInstruction = "Place another cube on a different space where the cryptid cannot be according to your clue. \n Click on End Turn below to pass to the next player";
                
                break;
        }    
    }
    else{
        inGame = true;
        if (turnTaken == false){
            currentPlayerCubeCount = countCubesFunc(currentPlayer);
        }
        console.log(currentGameRecord);
        switch(currentPlayer){
            case 1:
                
                document.getElementById("p1Rule").disabled = false;
                document.getElementById("p2Rule").disabled = true;
                document.getElementById("p3Rule").disabled = true;
                document.getElementById("p4Rule").disabled = true;
                document.getElementById("p5Rule").disabled = true;
                document.getElementById("p1Tokens").classList.remove("disabled");
                document.getElementById("p2Tokens").classList.add("disabled");
                document.getElementById("p3Tokens").classList.add("disabled");
                document.getElementById("p4Tokens").classList.add("disabled");
                document.getElementById("p5Tokens").classList.add("disabled");
                console.log(turnTaken);
                if (turnTaken == true){
                    document.getElementById("endTurn").disabled = false;
                    if (cubePlaced == true){
                        gameInstruction = "Please place a cube on a space where the cryptid cannot be according to your clue, then press End Turn";    
                    }
                    else{
                        gameInstruction = "Press End Turn to pass to the next player";    
                    }
                }
                else{
                    currentTurn = currentTurn + 1;
                    document.getElementById("endTurn").disabled = true;
                    gameInstruction = "Select a hex to take your turn";
                }
                
                break;
            case 2:
                
                document.getElementById("p2Rule").disabled = false;
                document.getElementById("p1Rule").disabled = true;
                document.getElementById("p3Rule").disabled = true;
                document.getElementById("p4Rule").disabled = true;
                document.getElementById("p5Rule").disabled = true;
                document.getElementById("p2Tokens").classList.remove("disabled");
                document.getElementById("p1Tokens").classList.add("disabled");
                document.getElementById("p3Tokens").classList.add("disabled");
                document.getElementById("p4Tokens").classList.add("disabled");
                document.getElementById("p5Tokens").classList.add("disabled");
                console.log(turnTaken);
                if (turnTaken == true){
                    document.getElementById("endTurn").disabled = false;
                    if (cubePlaced == true){
                        gameInstruction = "Please place a cub on a space where the cryptid cannot be according to your clue, then press End Turn";    
                    }
                    else{
                        gameInstruction = "Press End Turn to pass to the next player";    
                    }
                }
                else{
                    currentTurn = currentTurn + 1;
                    document.getElementById("endTurn").disabled = true;
                    gameInstruction = "Select a hex to take your turn";
                }
                
                break; 
            case 3:
                
                document.getElementById("p3Rule").disabled = false;
                document.getElementById("p2Rule").disabled = true;
                document.getElementById("p1Rule").disabled = true;
                document.getElementById("p4Rule").disabled = true;
                document.getElementById("p5Rule").disabled = true;
                document.getElementById("p3Tokens").classList.remove("disabled");
                document.getElementById("p2Tokens").classList.add("disabled");
                document.getElementById("p1Tokens").classList.add("disabled");
                document.getElementById("p4Tokens").classList.add("disabled");
                document.getElementById("p5Tokens").classList.add("disabled");
                console.log(turnTaken);
                if (turnTaken == true){
                    document.getElementById("endTurn").disabled = false;
                    if (cubePlaced == true){
                        gameInstruction = "Please place a cub on a space where the cryptid cannot be according to your clue, then press End Turn";    
                    }
                    else{
                        gameInstruction = "Press End Turn to pass to the next player";    
                    }
                }
                else{
                    currentTurn = currentTurn + 1;
                    document.getElementById("endTurn").disabled = true;
                    gameInstruction = "Select a hex to take your turn";
                }
                
                break;
            case 4:
                
                document.getElementById("p4Rule").disabled = false;
                document.getElementById("p2Rule").disabled = true;
                document.getElementById("p3Rule").disabled = true;
                document.getElementById("p1Rule").disabled = true;
                document.getElementById("p5Rule").disabled = true;
                document.getElementById("p4Tokens").classList.remove("disabled");
                document.getElementById("p2Tokens").classList.add("disabled");
                document.getElementById("p3Tokens").classList.add("disabled");
                document.getElementById("p1Tokens").classList.add("disabled");
                document.getElementById("p5Tokens").classList.add("disabled");
                console.log(turnTaken);
                if (turnTaken == true){
                    document.getElementById("endTurn").disabled = false;
                    if (cubePlaced == true){
                        gameInstruction = "Please place a cub on a space where the cryptid cannot be according to your clue, then press End Turn";    
                    }
                    else{
                        gameInstruction = "Press End Turn to pass to the next player";    
                    }
                }
                else{
                    currentTurn = currentTurn + 1;
                    document.getElementById("endTurn").disabled = true;
                    gameInstruction = "Select a hex to take your turn";
                }
                
                break;
            case 5:
                
                document.getElementById("p5Rule").disabled = false;
                document.getElementById("p2Rule").disabled = true;
                document.getElementById("p3Rule").disabled = true;
                document.getElementById("p4Rule").disabled = true;
                document.getElementById("p1Rule").disabled = true;
                document.getElementById("p5Tokens").classList.remove("disabled");
                document.getElementById("p2Tokens").classList.add("disabled");
                document.getElementById("p3Tokens").classList.add("disabled");
                document.getElementById("p4Tokens").classList.add("disabled");
                document.getElementById("p1Tokens").classList.add("disabled");
                console.log(turnTaken);
                if (turnTaken == true){
                    document.getElementById("endTurn").disabled = false;
                    if (cubePlaced == true){
                        gameInstruction = "Please place a cub on a space where the cryptid cannot be according to your clue, then press End Turn";    
                    }
                    else{
                        gameInstruction = "Press End Turn to pass to the next player";    
                    }
                }
                else{
                    currentTurn = currentTurn + 1;
                    document.getElementById("endTurn").disabled = true;
                    gameInstruction = "Select a hex to take your turn";
                }
                
                break;   
        }    
    }
    document.getElementById("gameInstructionsText").innerText = gameInstruction;
    document.getElementById("passTurn").close();
}
var turnType = "";
//OnClick for the End Turn button to end your turn
document.getElementById("endTurn").onclick = function(){
    if ((roundNum == -1) && (currentPlayer != playerCount)){
        var countCubes = 0;
        switch (currentPlayer){
            case 1:
                elements.forEach(function (hex) {
                    if (hex.pieces.includes("p1c")){
                        countCubes = countCubes + 1;
                    }
                });
                if (countCubes != 1){
                    document.getElementById("hintBoxText").innerText = "Please place exactly one cube on the board";
                    document.getElementById("hintBox").showModal();    
                }
                else{
                    currentTokenUpdate.push("p1c");
                    recordTurn(currentGameRecord,-1,1,1,"setup",selectedElem,currentTokenUpdate)
                    document.getElementById("passTurnText").innerText = "Please Pass to Player 2";
                    document.getElementById("passTurn").showModal();
                }
                break;
            case 2:
                elements.forEach(function (hex) {
                    if (hex.pieces.includes("p2c")){
                        countCubes = countCubes + 1;
                    }
                });
                if (countCubes != 1){
                    document.getElementById("hintBoxText").innerText = "Please place exactly one cube on the board";
                    document.getElementById("hintBox").showModal();    
                }
                else{
                    currentTokenUpdate.push("p2c");
                    recordTurn(currentGameRecord,-1,2,2,"setup",selectedElem,currentTokenUpdate)
                    document.getElementById("passTurnText").innerText = "Please Pass to Player 3";
                    document.getElementById("passTurn").showModal();
                }
                break;
            case 3:
                elements.forEach(function (hex) {
                    if (hex.pieces.includes("p3c")){
                        countCubes = countCubes + 1;
                    }
                });
                if (countCubes != 1){
                    document.getElementById("hintBoxText").innerText = "Please place exactly one cube on the board";
                    document.getElementById("hintBox").showModal();    
                }
                else{
                    currentTokenUpdate.push("p3c");
                    recordTurn(currentGameRecord,-1,3,3,"setup",selectedElem,currentTokenUpdate)
                    document.getElementById("passTurnText").innerText = "Please Pass to Player 4";
                    document.getElementById("passTurn").showModal();
                }
                break;
            case 4:
                elements.forEach(function (hex) {
                    if (hex.pieces.includes("p4c")){
                        countCubes = countCubes + 1;
                    }
                });
                if (countCubes != 1){
                    document.getElementById("hintBoxText").innerText = "Please place exactly one cube on the board";
                    document.getElementById("hintBox").showModal();    
                }
                else{
                    currentTokenUpdate.push("p4c");
                    recordTurn(currentGameRecord,-1,4,4,"setup",selectedElem,currentTokenUpdate)
                    document.getElementById("passTurnText").innerText = "Please Pass to Player 5";
                    document.getElementById("passTurn").showModal();
                }
                break;
            
                           
        }
        
        }
        else if ((roundNum == -1) && (currentPlayer == playerCount)){
            var countCubes = 0;
            if (playerCount == 3){
                elements.forEach(function (hex) {
                    if (hex.pieces.includes("p3c")){
                        countCubes = countCubes + 1;
                    }
                });
                if (countCubes != 1){
                    document.getElementById("hintBoxText").innerText = "Please place exactly one cube on the board";
                    document.getElementById("hintBox").showModal();    
                }
                else{
                    roundNum = 0;
                    currentPlayer = 0;
                    currentTokenUpdate.push("p3c");
                    recordTurn(currentGameRecord,-1,3,3,"setup",selectedElem,currentTokenUpdate)
                    document.getElementById("passTurnText").innerText = "Please Pass to Player 1";
                    document.getElementById("passTurn").showModal();
                }
            }
            else if (playerCount == 4){
                elements.forEach(function (hex) {
                    if (hex.pieces.includes("p4c")){
                        countCubes = countCubes + 1;
                    }
                });
                if (countCubes != 1){
                    document.getElementById("hintBoxText").innerText = "Please place exactly one cube on the board";
                    document.getElementById("hintBox").showModal();    
                }
                else{
                    roundNum = 0;
                    currentPlayer = 0;
                    currentTokenUpdate.push("p4c");
                    recordTurn(currentGameRecord,-1,4,4,"setup",selectedElem,currentTokenUpdate)
                    document.getElementById("passTurnText").innerText = "Please Pass to Player 1";
                    document.getElementById("passTurn").showModal();
                }
            }
            else{
                elements.forEach(function (hex) {
                    if (hex.pieces.includes("p5c")){
                        countCubes = countCubes + 1;
                    }
                });
                if (countCubes != 1){
                    document.getElementById("hintBoxText").innerText = "Please place exactly one cube on the board";
                    document.getElementById("hintBox").showModal();    
                }
                else{
                    roundNum = 0;
                    currentPlayer = 0;
                    currentTokenUpdate.push("p5c");
                    recordTurn(currentGameRecord,-1,5,5,"setup",selectedElem,currentTokenUpdate)
                    document.getElementById("passTurnText").innerText = "Please Pass to Player 1";
                    document.getElementById("passTurn").showModal();
                }
            }
            
    } 
    if ((roundNum == 0) && (currentPlayer != playerCount)){
        var countCubes = 0;
        switch (currentPlayer){
            case 1:
                elements.forEach(function (hex) {
                    if (hex.pieces.includes("p1c")){
                        countCubes = countCubes + 1;
                    }
                });
                if (countCubes != 2){
                    document.getElementById("hintBoxText").innerText = "Please place exactly one more cube on the board";
                    document.getElementById("hintBox").showModal();    
                }
                else{
                    currentTokenUpdate.push("p1c");
                    recordTurn(currentGameRecord,0,1,1,"setup",selectedElem,currentTokenUpdate)
                    document.getElementById("passTurnText").innerText = "Please Pass to Player 2";
                    document.getElementById("passTurn").showModal();
                }
                break;
            case 2:
                elements.forEach(function (hex) {
                    if (hex.pieces.includes("p2c")){
                        countCubes = countCubes + 1;
                    }
                });
                if (countCubes != 2){
                    document.getElementById("hintBoxText").innerText = "Please place exactly one more cube on the board";
                    document.getElementById("hintBox").showModal();    
                }
                else{
                    currentTokenUpdate.push("p2c");
                    recordTurn(currentGameRecord,0,2,2,"setup",selectedElem,currentTokenUpdate)
                    document.getElementById("passTurnText").innerText = "Please Pass to Player 3";
                    document.getElementById("passTurn").showModal();
                }
                break;
            case 3:
                elements.forEach(function (hex) {
                    if (hex.pieces.includes("p3c")){
                        countCubes = countCubes + 1;
                    }
                });
                if (countCubes != 2){
                    document.getElementById("hintBoxText").innerText = "Please place exactly one more cube on the board";
                    document.getElementById("hintBox").showModal();    
                }
                else{
                    currentTokenUpdate.push("p3c");
                    recordTurn(currentGameRecord,0,3,3,"setup",selectedElem,currentTokenUpdate)
                    document.getElementById("passTurnText").innerText = "Please Pass to Player 4";
                    document.getElementById("passTurn").showModal();
                }
                break;
            case 4:
                elements.forEach(function (hex) {
                    if (hex.pieces.includes("p4c")){
                        countCubes = countCubes + 1;
                    }
                });
                if (countCubes != 2){
                    document.getElementById("hintBoxText").innerText = "Please place exactly one more cube on the board";
                    document.getElementById("hintBox").showModal();    
                }
                else{
                    currentTokenUpdate.push("p4c");
                    recordTurn(currentGameRecord,0,4,4,"setup",selectedElem,currentTokenUpdate)
                    document.getElementById("passTurnText").innerText = "Please Pass to Player 5";
                    document.getElementById("passTurn").showModal();
                }
                break;
            
                           
        }
        
        }
        else if ((roundNum == 0) && (currentPlayer == playerCount)){
            var countCubes = 0;
            if (playerCount == 3){
                elements.forEach(function (hex) {
                    if (hex.pieces.includes("p3c")){
                        countCubes = countCubes + 1;
                    }
                });
                if (countCubes != 2){
                    document.getElementById("hintBoxText").innerText = "Please place exactly one more cube on the board";
                    document.getElementById("hintBox").showModal();    
                }
                else{
                    roundNum = 1;
                    currentPlayer = 0;
                    currentTokenUpdate.push("p3c");
                    recordTurn(currentGameRecord,0,3,3,"setup",selectedElem,currentTokenUpdate)
                    document.getElementById("passTurnText").innerText = "Please Pass to Player 1";
                    document.getElementById("passTurn").showModal();
                    //console.log(newGameRecord);
                }
            }
            else if (playerCount == 4){
                elements.forEach(function (hex) {
                    if (hex.pieces.includes("p4c")){
                        countCubes = countCubes + 1;
                    }
                });
                if (countCubes != 2){
                    document.getElementById("hintBoxText").innerText = "Please place exactly one more cube on the board";
                    document.getElementById("hintBox").showModal();    
                }
                else{
                    roundNum = 1;
                    currentPlayer = 0;
                    currentTokenUpdate.push("p4c");
                    recordTurn(currentGameRecord,0,4,4,"setup",selectedElem,currentTokenUpdate)
                    document.getElementById("passTurnText").innerText = "Please Pass to Player 1";
                    document.getElementById("passTurn").showModal();
                }
            }
            else{
                elements.forEach(function (hex) {
                    if (hex.pieces.includes("p5c")){
                        countCubes = countCubes + 1;
                    }
                });
                if (countCubes != 2){
                    document.getElementById("hintBoxText").innerText = "Please place exactly one more cube on the board";
                    document.getElementById("hintBox").showModal();    
                }
                else{
                    roundNum = 1;
                    currentPlayer = 0;
                    currentTokenUpdate.push("p5c");
                    recordTurn(currentGameRecord,0,5,5,"setup",selectedElem,currentTokenUpdate)
                    document.getElementById("passTurnText").innerText = "Please Pass to Player 1";
                    document.getElementById("passTurn").showModal();
                }
            }
            
    }
    else if ((cubePlaced == true) && (turnType == "quest") && (turnTaken)){
        var newCubeCount = countCubesFunc(currentPlayer);
        if (newCubeCount != currentPlayerCubeCount + 1){
            document.getElementById("hintBoxText").innerText = "Please place exactly one more cube on the board";
            document.getElementById("hintBox").showModal();    
        }
        else{
            currentTokenUpdate = [];
           switch (currentPlayer){
            case 1:
                currentTokenUpdate.push("p1c");
                document.getElementById("passTurnText").innerText = "Please Pass to Player 2";
                break;
            case 2:
                currentTokenUpdate.push("p2c");
                document.getElementById("passTurnText").innerText = "Please Pass to Player 3";
                break;
            case 3:
                currentTokenUpdate.push("p3c");
                document.getElementById("passTurnText").innerText = "Please Pass to Player 4";
                break;
            case 4:
                currentTokenUpdate.push("p4c");
                document.getElementById("passTurnText").innerText = "Please Pass to Player 5";
                break;
            case 5:
                currentTokenUpdate.push("p5c");
                document.getElementById("passTurnText").innerText = "Please Pass to Player 1";
                break;
           }
           recordTurn(newGameRecord,1,currentTurn,currentPlayer,"quest",selectedElem,currentTokenUpdate);
           if (currentPlayer == playerCount){
            currentPlayer = 0;
            document.getElementById("passTurnText").innerText = "Please Pass to Player 1";
           }
           turnTaken = false;
           cubePlaced = false;
           currentPlayer = currentPlayer + 1;
            document.getElementById("passTurn").showModal();
        }
    }
    else if ((turnType == "quest") && (cubePlaced == false) && (turnTaken)){
        currentTokenUpdate = [];
           switch (currentPlayer){
            case 1:
                //currentTokenUpdate.push("p1c");
                document.getElementById("passTurnText").innerText = "Please Pass to Player 2";
                break;
            case 2:
                //currentTokenUpdate.push("p2c");
                document.getElementById("passTurnText").innerText = "Please Pass to Player 3";
                break;
            case 3:
                //currentTokenUpdate.push("p3c");
                document.getElementById("passTurnText").innerText = "Please Pass to Player 4";
                break;
            case 4:
                //currentTokenUpdate.push("p4c");
                document.getElementById("passTurnText").innerText = "Please Pass to Player 5";
                break;
            case 5:
                //currentTokenUpdate.push("p5c");
                document.getElementById("passTurnText").innerText = "Please Pass to Player 1";
                break;
           }
           //recordTurn(newGameRecord,1,currentTurn,"quest",currentPlayer,selectedElem,currentTokenUpdate);
           if (currentPlayer == playerCount){
            currentPlayer = 0;
            document.getElementById("passTurnText").innerText = "Please Pass to Player 1";
           }
           turnTaken = false;
           cubePlaced = false;
           
           currentPlayer = currentPlayer + 1;
            document.getElementById("passTurn").showModal();    
    }
    else if ((cubePlaced == true) && (turnType == "search") && (turnTaken)){
        var newCubeCount = countCubesFunc(currentPlayer);
        if (newCubeCount != currentPlayerCubeCount + 1){
            document.getElementById("hintBoxText").innerText = "Please place exactly one more cube on the board";
            document.getElementById("hintBox").showModal();    
        }
        else{
            currentTokenUpdate = [];
           switch (currentPlayer){
            case 1:
                currentTokenUpdate.push("p1c");
                document.getElementById("passTurnText").innerText = "Please Pass to Player 2";
                break;
            case 2:
                currentTokenUpdate.push("p2c");
                document.getElementById("passTurnText").innerText = "Please Pass to Player 3";
                break;
            case 3:
                currentTokenUpdate.push("p3c");
                document.getElementById("passTurnText").innerText = "Please Pass to Player 4";
                break;
            case 4:
                currentTokenUpdate.push("p4c");
                document.getElementById("passTurnText").innerText = "Please Pass to Player 5";
                break;
            case 5:
                currentTokenUpdate.push("p5c");
                document.getElementById("passTurnText").innerText = "Please Pass to Player 1";
                break;
           }
           recordTurn(newGameRecord,1,currentTurn,currentPlayer,"search",selectedElem,currentTokenUpdate);
           if (currentPlayer == playerCount){
            currentPlayer = 0;
            document.getElementById("passTurnText").innerText = "Please Pass to Player 1";
           }
           turnTaken = false;
           cubePlaced = false;
           currentPlayer = currentPlayer + 1;
            document.getElementById("passTurn").showModal();
        }
    }
    currentTokenUpdate = [];       
}
//OnClick for Question button on take turn popup to take a Question action
document.getElementById("takeTurnQuest").onclick = function(){
    turnType = "quest";
    const p = P2();
    switch(currentPlayer){
        case 1:
            document.getElementById("pickPlayer1").disabled = true;
            document.getElementById("pickPlayer2").disabled = false;
            document.getElementById("pickPlayer3").disabled = false;
            document.getElementById("pickPlayer4").disabled = true;
            document.getElementById("pickPlayer5").disabled = true;
            if ((playerCount == 4)||(playerCount == 5)){
                document.getElementById("pickPlayer4").disabled = false;
            }
            if (playerCount == 5){
                document.getElementById("pickPlayer4").disabled = false;
            }
        break;
        case 2:
            document.getElementById("pickPlayer2").disabled = true;
            document.getElementById("pickPlayer1").disabled = false;
            document.getElementById("pickPlayer3").disabled = false;
            document.getElementById("pickPlayer4").disabled = true;
            document.getElementById("pickPlayer5").disabled = true;
            if ((playerCount == 4)||(playerCount == 5)){
                document.getElementById("pickPlayer4").disabled = false;
            }
            if (playerCount == 5){
                document.getElementById("pickPlayer4").disabled = false;
            }
        break;
        case 3:
            document.getElementById("pickPlayer3").disabled = true;
            document.getElementById("pickPlayer2").disabled = false;
            document.getElementById("pickPlayer1").disabled = false;
            document.getElementById("pickPlayer4").disabled = true;
            document.getElementById("pickPlayer5").disabled = true;
            if ((playerCount == 4)||(playerCount == 5)){
                document.getElementById("pickPlayer4").disabled = false;
            }
            if (playerCount == 5){
                document.getElementById("pickPlayer4").disabled = false;
            }
        break;
        case 4:
            document.getElementById("pickPlayer1").disabled = false;
            document.getElementById("pickPlayer2").disabled = false;
            document.getElementById("pickPlayer3").disabled = false;
            document.getElementById("pickPlayer4").disabled = true;
            document.getElementById("pickPlayer5").disabled = true;
            if (playerCount == 5){
                document.getElementById("pickPlayer4").disabled = false;
            }
        break;
        case 5:
            document.getElementById("pickPlayer1").disabled = false;
            document.getElementById("pickPlayer2").disabled = false;
            document.getElementById("pickPlayer3").disabled = false;
            document.getElementById("pickPlayer4").disabled = false;
            document.getElementById("pickPlayer5").disabled = true;
        break;
    }
    ctxTokens.fillStyle = "#ffffff00";
    ctxTokens.strokeStyle = "#6100fc";
    ctxTokens.lineWidth = 4;
    drawPoly(gridToPixel(selectedElem[0], selectedElem[1], p), createPoly(EDGES,0.8*RADIUS),"tokens");
    document.getElementById("pickPlayer").showModal();
    document.getElementById("takeTurn").close();    
}
//OnClick for Player 2 button on pick player popup to pass to Player 2 for a response 
document.getElementById("pickPlayer2").onclick = function() {
    activePlayer = 2;
    var clue = rules[currentGameRules[1]];
    document.getElementById("questPlacePieceText").innerText = "The Hex selected id highlighted. Your clue is the following: \n" + clue + "\n Is this a valid space according to your clue?"
    document.getElementById("questPlacePiece").showModal();
    document.getElementById("pickPlayer").close();
}
document.getElementById("pickPlayer1").onclick = function() {
    activePlayer = 1;
    var clue = rules[currentGameRules[0]];
    document.getElementById("questPlacePieceText").innerText = "The Hex selected id highlighted. Your clue is the following: \n" + clue + "\n Is this a valid space according to your clue?"
    document.getElementById("questPlacePiece").showModal();
    document.getElementById("pickPlayer").close();
}
document.getElementById("pickPlayer3").onclick = function() {
    activePlayer = 3;
    var clue = rules[currentGameRules[2]];
    document.getElementById("questPlacePieceText").innerText = "The Hex selected id highlighted. Your clue is the following: \n" + clue + "\n Is this a valid space according to your clue?"
    document.getElementById("questPlacePiece").showModal();
    document.getElementById("pickPlayer").close();
}
document.getElementById("pickPlayer4").onclick = function() {
    activePlayer = 4;
    var clue = rules[currentGameRules[3]];
    document.getElementById("questPlacePieceText").innerText = "The Hex selected id highlighted. Your clue is the following: \n" + clue + "\n Is this a valid space according to your clue?"
    document.getElementById("questPlacePiece").showModal();
    document.getElementById("pickPlayer").close();
}
document.getElementById("pickPlayer5").onclick = function() {
    activePlayer = 5;
    var clue = rules[currentGameRules[4]];
    document.getElementById("questPlacePieceText").innerText = "The Hex selected id highlighted. Your clue is the following: \n" + clue + "\n Is this a valid space according to your clue?"
    document.getElementById("questPlacePiece").showModal();
    document.getElementById("pickPlayer").close();
}
var cubePlaced = false;
var turnTaken = false;
document.getElementById("questPieceYes").onclick = function() {
    currentTokenUpdate = []
     var tokensOnHex = elements.find(x => ((x.id[0] == selectedElem[0]) &&  (x.id[1] == selectedElem[1]))).pieces;
     switch (activePlayer){
        case 1:
            tokensOnHex.push("p1d");
            currentTokenUpdate.push("p1d");
            break;
        case 2:
            tokensOnHex.push("p2d");
            currentTokenUpdate.push("p2d");
            break;
        case 3:
            tokensOnHex.push("p3d");
            currentTokenUpdate.push("p3d");
            break;
        case 4:
            tokensOnHex.push("p2d");
            currentTokenUpdate.push("p4d");
            break;
        case 5:
            tokensOnHex.push("p2d");
            currentTokenUpdate.push("p5d");
            break;
     } 
    recordTurn(currentGameRecord,1,currentTurn,currentPlayer,"quest",selectedElem,currentTokenUpdate);
    elements.find(x => ((x.id[0] == selectedElem[0]) &&  (x.id[1] == selectedElem[1]))).pieces = tokensOnHex;
    drawTokens(false);
    var passText = "";
    switch (currentPlayer){
        case 1:
            passText = "Please Pass to Player 1";
            break;
        case 2:
            passText = "Please Pass to Player 2";
            break;
        case 3:
            passText = "Please Pass to Player 3";
            break;
        case 4:
            passText = "Please Pass to Player 4";
            break;
        case 5:
            passText = "Please Pass to Player 5";
            break;
    } 
    document.getElementById("passTurnText").innerText = passText;
    turnTaken = true;
    document.getElementById("passTurn").showModal();
    document.getElementById("questPlacePiece").close();
}
document.getElementById("questPieceNo").onclick = function() {
    currentTokenUpdate = []
     var tokensOnHex = elements.find(x => ((x.id[0] == selectedElem[0]) &&  (x.id[1] == selectedElem[1]))).pieces;
     switch (activePlayer){
        case 1:
            tokensOnHex.push("p1c");
            currentTokenUpdate.push("p1c");
            break;
        case 2:
            tokensOnHex.push("p2c");
            currentTokenUpdate.push("p2c");
            break;
        case 3:
            tokensOnHex.push("p3c");
            currentTokenUpdate.push("p3c");
            break;
        case 4:
            tokensOnHex.push("p4c");
            currentTokenUpdate.push("p4c");
            break;
        case 5:
            tokensOnHex.push("p5c");
            currentTokenUpdate.push("p5c");
            break;
     } 
    recordTurn(currentGameRecord,1,currentTurn,currentPlayer,"quest",selectedElem,currentTokenUpdate);
    elements.find(x => ((x.id[0] == selectedElem[0]) &&  (x.id[1] == selectedElem[1]))).pieces = tokensOnHex;
    drawTokens(false);
    var passText = "";
    switch (currentPlayer){
        case 1:
            passText = "Please Pass to Player 1";
            break;
        case 2:
            passText = "Please Pass to Player 2";
            break;
        case 3:
            passText = "Please Pass to Player 3";
            break;
        case 4:
            passText = "Please Pass to Player 4";
            break;
        case 5:
            passText = "Please Pass to Player 5";
            break;
    } 
    document.getElementById("passTurnText").innerText = passText;
    document.getElementById("passTurn").showModal();
    turnTaken = true;
    cubePlaced = true;
    console.log("Cube Placed")
    document.getElementById("questPlacePiece").close();
}

document.getElementById("takeTurnSearch").onclick = function(){
    //var nextPlayer;
    currentTokenUpdate = [];
    turnType = "search";
    var piece;
    turnTaken = true;
    const p = P2();
    switch(currentPlayer){
        case 1:
            activePlayer = 2;
            passText = "Please Pass to Player 2";
            piece = "p1d";
        break;
        case 2:
            activePlayer = 3;  
            passText = "Please Pass to Player 3";
            piece = "p2d";  
        break;
        case 3:
            piece = "p3d";
            switch (playerCount){
                case 3:
                    activePlayer = 1;
                    passText = "Please Pass to Player 1";
                    break;
                default:
                    activePlayer = 4;
                    passText = "Please Pass to Player 4";
                    break;
            }    
        break;
        case 4:
        piece = "p4d";
            switch (playerCount){
                case 4:
                    activePlayer = 1;
                    passText = "Please Pass to Player 1";
                    break;
                default:
                    activePlayer = 5;
                    passText = "Please Pass to Player 5";
                    break;
            }    
        break;
        case 5:
        piece = "p5d";
            activePlayer = 1; 
            passText = "Please Pass to Player 1";   
        break;
    }
    elements.find(x => ((x.id[0] == selectedElem[0]) &&  (x.id[1] == selectedElem[1]))).pieces.push(piece);
    currentTokenUpdate = [];
    currentTokenUpdate.push(piece);
    drawTokens(false);
    ctxTokens.fillStyle = "#ffffff00";
    ctxTokens.strokeStyle = "#6100fc";
    ctxTokens.lineWidth = 4;
    
    //document.getElementById("questPlacePieceText").innerText = "The Hex selected id highlighted. Your clue is the following: \n" + clue + "\n Is this a valid space according to your clue?"
    //document.getElementById("questPlacePiece").showModal();
    drawPoly(gridToPixel(selectedElem[0], selectedElem[1], p), createPoly(EDGES,0.8*RADIUS),"tokens");
    //document.getElementById("pickPlayer").showModal();
    document.getElementById("passTurnTextSearch").innerText = passText;
    document.getElementById("passTurnSearch").showModal();
    document.getElementById("takeTurn").close();      
}

document.getElementById("passTurnBtnSearch").onclick = function(){
    if (cubePlaced == false){
        if (activePlayer == currentPlayer){
            document.getElementById("p1RuleText").innerText = rules[currentGameRules[0]];
            document.getElementById("p2RuleText").innerText = rules[currentGameRules[1]];
            document.getElementById("p3RuleText").innerText = rules[currentGameRules[2]];
            if ((playerCount == 4)||(playerCount == 5)){
                document.getElementById("p4RuleText").innerText = rules[currentGameRules[3]];
            }
            if(playerCount == 5){
                document.getElementById("p5RuleText").innerText = rules[currentGameRules[4]];
            }
            drawTokens(true);  
            document.getElementById("p1Rule").disabled = true;
            document.getElementById("p2Rule").disabled = true;
            document.getElementById("p3Rule").disabled = true;
            document.getElementById("p4Rule").disabled = true;
            document.getElementById("p5Rule").disabled = true;
            document.getElementById("endGame").disabled = false;
            document.getElementById("endTurn").disabled = true;
            document.getElementById("btnNoToken").disabled = false;
            document.getElementById("btnNoPlayerToken").disabled = true;
            document.getElementById("startGame").disabled = true;
            document.getElementById("endGameBox").close();
            inGame = false;
            document.getElementById("hintBoxText").innerText = "Player " + currentPlayer + " found the cryptid.";
            document.getElementById("hintBox").showModal();
            recordTurn(currentGameRecord,1,currentTurn,currentPlayer,"search",selectedElem,currentTokenUpdate);
            console.log(currentGameRecord);
            currentPlayer = 0;
            document.getElementById("passTurnSearch").close();
        }
        else {
    switch(activePlayer){
        case 1:
            var clue = rules[currentGameRules[0]];
            break;
            //document.getElementById("searchPlacePieceText").innerText = "The Hex selected id highlighted. Your clue is the following: \n" + clue + "\n Is this a valid space according to your clue?"
        case 2:
            var clue = rules[currentGameRules[1]];
            break;
        case 3:
            var clue = rules[currentGameRules[2]];
            break;
        case 4:
            var clue = rules[currentGameRules[3]];
            break;
        case 5:
            var clue = rules[currentGameRules[4]];
            break;
                    
    }
    
    document.getElementById("searchPlacePieceText").innerText = "The Hex selected id highlighted. Your clue is the following: \n" + clue + "\n Is this a valid space according to your clue?"
    document.getElementById("searchPlacePiece").showModal();
    document.getElementById("passTurnSearch").close();
    }
    
}
}

document.getElementById("searchPieceYes").onclick = function(){
    var p = P2();
    var tokensOnHex = elements.find(x => ((x.id[0] == selectedElem[0]) &&  (x.id[1] == selectedElem[1]))).pieces;
    var passText;
    switch(activePlayer){
        case 1:
            tokensOnHex.push("p1d");
            currentTokenUpdate.push("p1d");
            activePlayer = 2;
            passText = "Please Pass to Player 2";
            break;
        case 2:
            tokensOnHex.push("p2d");
            currentTokenUpdate.push("p2d");
            activePlayer = 3;
            passText = "Please Pass to Player 3";
            break;
        case 3:
            tokensOnHex.push("p3d");
            currentTokenUpdate.push("p3d");
            switch (playerCount){
                case 3:
                    activePlayer = 1;
                    passText = "Please Pass to Player 1";
                    break;
                default:
                    activePlayer = 4;
                    passText = "Please Pass to Player 4";
                    break;
            }
            break;
        case 4:
            tokensOnHex.push("p4d");
            currentTokenUpdate.push("p4d");
            switch (playerCount){
                case 4:
                    activePlayer = 1;
                    passText = "Please Pass to Player 1";
                    break;
                default:
                    activePlayer = 5;
                    passText = "Please Pass to Player 5";
                    break;
            }
            break;
        case 5:
            tokensOnHex.push("p5d");
            currentTokenUpdate.push("p5d");
            activePlayer = 1; 
            passText = "Please Pass to Player 1";
            break;
    }
    drawTokens(false);
    ctxTokens.fillStyle = "#ffffff00";
    ctxTokens.strokeStyle = "#6100fc";
    ctxTokens.lineWidth = 4;
    drawPoly(gridToPixel(selectedElem[0], selectedElem[1], p), createPoly(EDGES,0.8*RADIUS),"tokens");
    
    document.getElementById("passTurnTextSearch").innerText = passText;
    document.getElementById("passTurnSearch").showModal();
    document.getElementById("searchPlacePiece").close();
}
document.getElementById("searchPieceNo").onclick = function(){
    var p = P2();
    var tokensOnHex = elements.find(x => ((x.id[0] == selectedElem[0]) &&  (x.id[1] == selectedElem[1]))).pieces;
    var passText;
    switch(activePlayer){
        case 1:
            tokensOnHex.push("p1c");
            currentTokenUpdate.push("p1c");
            break;
        case 2:
            tokensOnHex.push("p2c");
            currentTokenUpdate.push("p2c");
            break;
        case 3:
            tokensOnHex.push("p3c");
            currentTokenUpdate.push("p3c");
            break;
        case 4:
            tokensOnHex.push("p4c");
            currentTokenUpdate.push("p4c");
            break;
        case 5:
            tokensOnHex.push("p5c");
            currentTokenUpdate.push("p5c");
            break;
    }
    recordTurn(currentGameRecord,1,currentTurn,currentPlayer,"search",selectedElem,currentTokenUpdate);
    switch (currentPlayer){
        case 1:
            passText = "Please Pass to Player 1";
            break;
        case 2:
            passText = "Please Pass to Player 2";
            break;
        case 3:
            passText = "Please Pass to Player 3";
            break;
        case 4:
            passText = "Please Pass to Player 4";
            break;
        case 5:
            passText = "Please Pass to Player 5";
            break;
    }
    drawTokens(false);
    ctxTokens.fillStyle = "#ffffff00";
    ctxTokens.strokeStyle = "#6100fc";
    ctxTokens.lineWidth = 4;

    drawPoly(gridToPixel(selectedElem[0], selectedElem[1], p), createPoly(EDGES,0.8*RADIUS),"tokens");
    document.getElementById("passTurnText").innerText = passText;
    document.getElementById("passTurn").showModal();
    turnTaken = true;
    cubePlaced = true;
    console.log("Cube Placed")
    document.getElementById("searchPlacePiece").close();
}