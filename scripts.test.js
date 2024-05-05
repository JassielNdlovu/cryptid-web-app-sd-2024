
//import userEvent from '@testing-library/user-event';
//import { fireEvent, render, screen } from '@testing-library/dom';
//import '@testing-library/jest-dom';
//document.body.innerHTML = html;
//let board = document.getElementById('board');
//let buildingsBoard = document.getElementById('buildings');
//let tokenBoard = document.getElementById('tokens');
//var buildingsBoard = document.createElement('canvas');
//const ctxBoard = board.getContext('2d');
//const ctxBuild = buildings.getContext('2d');
//const ctxTokens = tokens.getContext('2d');
const { render,fireEvent, screen, waitFor, setChecked } = require('@testing-library/dom');
const { toBeInTheDocument, toHaveClass } = require('@testing-library/jest-dom/matchers');
//jest.mock('axios');
//const axios = require('axios');
const userEvent = require('@testing-library/user-event');
import html from './index.html';
expect.extend({ toBeInTheDocument });
expect.extend({ toHaveClass });
//import {getByTestId} from '@testing-library/dom';
beforeEach(() => {
    // Set up the DOM here
    
    document.body.innerHTML = html;
    HTMLDialogElement.prototype.show = jest.fn();
    HTMLDialogElement.prototype.showModal = jest.fn();
    HTMLDialogElement.prototype.close = jest.fn();
    

  });
  afterEach(() => {
    jest.clearAllMocks(); // Clear all mocks after each test
});
test('testJestSetup', ()=> {
    const thisIsTrue = true
    expect(thisIsTrue).toBe(true)
  })
  describe("createPoly", () => {
    
  test('createPoly_sixSides_outputContainsSixElements', ()=> {
    const board = document.getElementById('board');
    const ctxBoard = board.getContext('2d');
    const buildingsBoard = document.getElementById('buildings');
    const tokenBoard = document.getElementById('tokens');
    //var buildingsBoard = document.createElement('canvas');
    //const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const TAU = 2 * Math.PI;
    const RADIUS = 30;
    const scripts = require('./scripts');
    expect(scripts.createPoly(6,RADIUS).length).toBe(6);
  })

  test('createPoly_fourSides_outputContainsFourElements', ()=> {
    const board = document.getElementById('board');
    const ctxBoard = board.getContext('2d');
    const buildingsBoard = document.getElementById('buildings');
    const tokenBoard = document.getElementById('tokens');
    //var buildingsBoard = document.createElement('canvas');
    //const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const TAU = 2 * Math.PI;
    const RADIUS = 30;
    const scripts = require('./scripts');
    expect(scripts.createPoly(4,RADIUS).length).toBe(4);
  })

  test('createPoly_threeSides_outputContainsFourElements', ()=> {
    const board = document.getElementById('board');
    const ctxBoard = board.getContext('2d');
    const buildingsBoard = document.getElementById('buildings');
    const tokenBoard = document.getElementById('tokens');
    //var buildingsBoard = document.createElement('canvas');
    //const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const TAU = 2 * Math.PI;
    const RADIUS = 30;
    const scripts = require('./scripts');
    expect(scripts.createPoly(3,RADIUS).length).toBe(3);
  })

  test('createPoly_eightSides_outputContainsFourElements', ()=> {
    const board = document.getElementById('board');
    const ctxBoard = board.getContext('2d');
    const buildingsBoard = document.getElementById('buildings');
    const tokenBoard = document.getElementById('tokens');
    //var buildingsBoard = document.createElement('canvas');
    //const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const TAU = 2 * Math.PI;
    const RADIUS = 30;
    const scripts = require('./scripts');
    expect(scripts.createPoly(8,RADIUS).length).toBe(8);
  })

  test('createPoly_tenSides_outputContainsFourElements', ()=> {
    const board = document.getElementById('board');
    const ctxBoard = board.getContext('2d');
    const buildingsBoard = document.getElementById('buildings');
    const tokenBoard = document.getElementById('tokens');
    //var buildingsBoard = document.createElement('canvas');
    //const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const TAU = 2 * Math.PI;
    const RADIUS = 30;
    const scripts = require('./scripts');
    expect(scripts.createPoly(10,RADIUS).length).toBe(10);
  })
})

describe("drawPoly", () => {
  test('drawPoly_hexCenteredOn11_canvasAt11ColoredBlackOnBoard', ()=> {
    const board = document.getElementById('board');
    const ctxBoard = board.getContext('2d');
    const buildingsBoard = document.getElementById('buildings');
    const tokenBoard = document.getElementById('tokens');
    //var buildingsBoard = document.createElement('canvas');
    //const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const TAU = 2 * Math.PI;
    const RADIUS = 30;
    const P2 = (x, y) => ({x,y});
    const scripts = require('./scripts');
    ctxBoard.fillStyle = "#ffffff";
    ctxBoard.lineWidth = 1;
      ctxBoard.strokeStyle ="black"
      var p = P2();
      const centerCoords = scripts.gridToPixel(1,1,p);
      scripts.drawPoly(centerCoords, scripts.createPoly(6,RADIUS),"board");
      const events = ctxBoard.__getEvents();
      expect(events).toMatchSnapshot();
  })
  test('drawPoly_hexCenteredOn11_canvasAt11ColoredBlueOnBoard', ()=> {
    const board = document.getElementById('board');
    const ctxBoard = board.getContext('2d');
    const buildingsBoard = document.getElementById('buildings');
    const tokenBoard = document.getElementById('tokens');
    //var buildingsBoard = document.createElement('canvas');
    //const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const TAU = 2 * Math.PI;
    const RADIUS = 30;
    const P2 = (x, y) => ({x,y});
    const scripts = require('./scripts');
    ctxBoard.fillStyle = "#00c3d9bf";
    ctxBoard.lineWidth = 1;
      ctxBoard.strokeStyle ="black"
      var p = P2();
      const centerCoords = scripts.gridToPixel(1,1,p);
      scripts.drawPoly(centerCoords, scripts.createPoly(6,RADIUS),"board");
      const events = ctxBoard.__getEvents();
      expect(events).toMatchSnapshot();
  })   
})

describe("drawTile", () => {
  test('drawTile_tile1CenteredOn11_canvasAt11ColorEqualToWater', ()=> {
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    p = P2();
    const testCoords = scripts.gridToPixel(1,1,p);
    var tileElems = scripts.drawTile(1,1,6,3,scripts.createPoly(6,RADIUS),cols1,habs1);
    //var elements = scripts.elements;
    //expect(ctxBoard.fillStyle).toBe('#000000');
    console.log(tileElems);
    const events = ctxBoard.__getEvents();
    expect(events).toMatchSnapshot();
    expect(tileElems[0].id).toEqual([1, 1]);
    expect(tileElems[0].color).toEqual(water);
  }) 
  test('drawTile_tile1CenteredOn11_canvasAt42ColorEqualToDesert', ()=> {
    const board = document.getElementById('board');
    const ctxBoard = board.getContext('2d');
    const buildingsBoard = document.getElementById('buildings');
    const tokenBoard = document.getElementById('tokens');
    //var buildingsBoard = document.createElement('canvas');
    //const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const TAU = 2 * Math.PI;
    const RADIUS = 30;
    const P2 = (x, y) => ({x,y});
    const scripts = require('./scripts');
    const water = "#00c3d9bf";
    const forest = "#36ba38bf";
    const swamp = "#422282bf";
    const desert = "#dbc13dbf";
    const mount = "#8f8f8fbf";
    const {elements} = require('./scripts');
    const cols1 = [water, water, water, water, forest, forest, swamp, swamp, water, desert, forest, forest, swamp, swamp, desert, desert, desert, forest];
    const habs1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1]
    var p = P2();
    const testCoords = scripts.gridToPixel(4,2,p);
    var tileElems = scripts.drawTile(1,1,6,3,scripts.createPoly(6,RADIUS),cols1,habs1);
    //var elements = scripts.elements;
    //expect(ctxBoard.fillStyle).toBe('#000000');
    //console.log(tileElems);
    const events = ctxBoard.__getEvents();
    expect(events).toMatchSnapshot();
    var tempElem = tileElems.find(({ id }) => (id[0] == 4)&&(id[1] == 2))
    console.log(tempElem);
    //expect(tileElems[0].id).toEqual([1, 1]);
    expect(tempElem.color).toEqual(desert);
  })
  test('drawTile_tile1CenteredOn71_canvasAt71ColorEqualToWater', ()=> {
    const board = document.getElementById('board');
    const ctxBoard = board.getContext('2d');
    const buildingsBoard = document.getElementById('buildings');
    const tokenBoard = document.getElementById('tokens');
    //var buildingsBoard = document.createElement('canvas');
    //const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const TAU = 2 * Math.PI;
    const RADIUS = 30;
    const P2 = (x, y) => ({x,y});
    const scripts = require('./scripts');
    const water = "#00c3d9bf";
    const forest = "#36ba38bf";
    const swamp = "#422282bf";
    const desert = "#dbc13dbf";
    const mount = "#8f8f8fbf";
    const {elements} = require('./scripts');
    const cols1 = [water, water, water, water, forest, forest, swamp, swamp, water, desert, forest, forest, swamp, swamp, desert, desert, desert, forest];
    const habs1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1]
    var p = P2();
    const testCoords = scripts.gridToPixel(4,2,p);
    var tileElems = scripts.drawTile(7,1,6,3,scripts.createPoly(6,RADIUS),cols1,habs1);
    //var elements = scripts.elements;
    //expect(ctxBoard.fillStyle).toBe('#000000');
    //console.log(tileElems);
    const events = ctxBoard.__getEvents();
    expect(events).toMatchSnapshot();
    var tempElem = tileElems.find(({ id }) => (id[0] == 7)&&(id[1] == 1))
    console.log(tempElem);
    //expect(tileElems[0].id).toEqual([1, 1]);
    expect(tempElem.color).toEqual(water);
  })
  test('drawTile_tile1CenteredOn14_canvasAt14ColorEqualToWater', ()=> {
    const board = document.getElementById('board');
    const ctxBoard = board.getContext('2d');
    const buildingsBoard = document.getElementById('buildings');
    const tokenBoard = document.getElementById('tokens');
    //var buildingsBoard = document.createElement('canvas');
    //const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const TAU = 2 * Math.PI;
    const RADIUS = 30;
    const P2 = (x, y) => ({x,y});
    const scripts = require('./scripts');
    const water = "#00c3d9bf";
    const forest = "#36ba38bf";
    const swamp = "#422282bf";
    const desert = "#dbc13dbf";
    const mount = "#8f8f8fbf";
    const {elements} = require('./scripts');
    const cols1 = [water, water, water, water, forest, forest, swamp, swamp, water, desert, forest, forest, swamp, swamp, desert, desert, desert, forest];
    const habs1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1]
    var p = P2();
    const testCoords = scripts.gridToPixel(4,2,p);
    var tileElems = scripts.drawTile(1,4,6,3,scripts.createPoly(6,RADIUS),cols1,habs1);
    //var elements = scripts.elements;
    //expect(ctxBoard.fillStyle).toBe('#000000');
    //console.log(tileElems);
    const events = ctxBoard.__getEvents();
    expect(events).toMatchSnapshot();
    var tempElem = tileElems.find(({ id }) => (id[0] == 1)&&(id[1] == 4))
    console.log(tempElem);
    //expect(tileElems[0].id).toEqual([1, 1]);
    expect(tempElem.color).toEqual(water);
  })
  test('drawTile_tile1CenteredOn74_canvasAt74ColorEqualToWater', ()=> {
    const board = document.getElementById('board');
    const ctxBoard = board.getContext('2d');
    const buildingsBoard = document.getElementById('buildings');
    const tokenBoard = document.getElementById('tokens');
    //var buildingsBoard = document.createElement('canvas');
    //const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const TAU = 2 * Math.PI;
    const RADIUS = 30;
    const P2 = (x, y) => ({x,y});
    const scripts = require('./scripts');
    const water = "#00c3d9bf";
    const forest = "#36ba38bf";
    const swamp = "#422282bf";
    const desert = "#dbc13dbf";
    const mount = "#8f8f8fbf";
    const {elements} = require('./scripts');
    const cols1 = [water, water, water, water, forest, forest, swamp, swamp, water, desert, forest, forest, swamp, swamp, desert, desert, desert, forest];
    const habs1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1]
    var p = P2();
    const testCoords = scripts.gridToPixel(4,2,p);
    var tileElems = scripts.drawTile(7,4,6,3,scripts.createPoly(6,RADIUS),cols1,habs1);
    //var elements = scripts.elements;
    //expect(ctxBoard.fillStyle).toBe('#000000');
    //console.log(tileElems);
    const events = ctxBoard.__getEvents();
    expect(events).toMatchSnapshot();
    var tempElem = tileElems.find(({ id }) => (id[0] == 7)&&(id[1] == 4))
    console.log(tempElem);
    //expect(tileElems[0].id).toEqual([1, 1]);
    expect(tempElem.color).toEqual(water);
  })
  test('drawTile_tile1CenteredOn17_canvasAt17ColorEqualToWater', ()=> {
    const board = document.getElementById('board');
    const ctxBoard = board.getContext('2d');
    const buildingsBoard = document.getElementById('buildings');
    const tokenBoard = document.getElementById('tokens');
    //var buildingsBoard = document.createElement('canvas');
    //const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const TAU = 2 * Math.PI;
    const RADIUS = 30;
    const P2 = (x, y) => ({x,y});
    const scripts = require('./scripts');
    const water = "#00c3d9bf";
    const forest = "#36ba38bf";
    const swamp = "#422282bf";
    const desert = "#dbc13dbf";
    const mount = "#8f8f8fbf";
    const {elements} = require('./scripts');
    const cols1 = [water, water, water, water, forest, forest, swamp, swamp, water, desert, forest, forest, swamp, swamp, desert, desert, desert, forest];
    const habs1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1]
    var p = P2();
    const testCoords = scripts.gridToPixel(4,2,p);
    var tileElems = scripts.drawTile(1,7,6,3,scripts.createPoly(6,RADIUS),cols1,habs1);
    //var elements = scripts.elements;
    //expect(ctxBoard.fillStyle).toBe('#000000');
    //console.log(tileElems);
    const events = ctxBoard.__getEvents();
    expect(events).toMatchSnapshot();
    var tempElem = tileElems.find(({ id }) => (id[0] == 1)&&(id[1] == 7))
    console.log(tempElem);
    //expect(tileElems[0].id).toEqual([1, 1]);
    expect(tempElem.color).toEqual(water);
  })
  test('drawTile_tile1CenteredOn77_canvasAt77ColorEqualToWater', ()=> {
    const board = document.getElementById('board');
    const ctxBoard = board.getContext('2d');
    const buildingsBoard = document.getElementById('buildings');
    const tokenBoard = document.getElementById('tokens');
    //var buildingsBoard = document.createElement('canvas');
    //const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const TAU = 2 * Math.PI;
    const RADIUS = 30;
    const P2 = (x, y) => ({x,y});
    const scripts = require('./scripts');
    const water = "#00c3d9bf";
    const forest = "#36ba38bf";
    const swamp = "#422282bf";
    const desert = "#dbc13dbf";
    const mount = "#8f8f8fbf";
    const {elements} = require('./scripts');
    const cols1 = [water, water, water, water, forest, forest, swamp, swamp, water, desert, forest, forest, swamp, swamp, desert, desert, desert, forest];
    const habs1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1]
    var p = P2();
    const testCoords = scripts.gridToPixel(4,2,p);
    var tileElems = scripts.drawTile(7,7,6,3,scripts.createPoly(6,RADIUS),cols1,habs1);
    //var elements = scripts.elements;
    //expect(ctxBoard.fillStyle).toBe('#000000');
    //console.log(tileElems);
    const events = ctxBoard.__getEvents();
    expect(events).toMatchSnapshot();
    var tempElem = tileElems.find(({ id }) => (id[0] == 7)&&(id[1] == 7))
    console.log(tempElem);
    //expect(tileElems[0].id).toEqual([1, 1]);
    expect(tempElem.color).toEqual(water);
  })
  test('drawTile_tile2CenteredOn11_canvasAt11ColorEqualToSwamp', ()=> {
    const board = document.getElementById('board');
    const ctxBoard = board.getContext('2d');
    const buildingsBoard = document.getElementById('buildings');
    const tokenBoard = document.getElementById('tokens');
    //var buildingsBoard = document.createElement('canvas');
    //const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const TAU = 2 * Math.PI;
    const RADIUS = 30;
    const P2 = (x, y) => ({x,y});
    const scripts = require('./scripts');
    const water = "#00c3d9bf";
    const forest = "#36ba38bf";
    const swamp = "#422282bf";
    const desert = "#dbc13dbf";
    const mount = "#8f8f8fbf";
    const {elements} = require('./scripts');
    const cols1 = [water, water, water, water, forest, forest, swamp, swamp, water, desert, forest, forest, swamp, swamp, desert, desert, desert, forest];
    const habs1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1]
    const cols2 = [swamp,forest,forest,forest,forest,forest,swamp,swamp,forest,desert,desert,desert,swamp,mount,mount,mount,mount,desert];
    const habs2 = [2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] 
    var p = P2();
    const testCoords = scripts.gridToPixel(4,2,p);
    var tileElems = scripts.drawTile(1,1,6,3,scripts.createPoly(6,RADIUS),cols2,habs2);
    //var elements = scripts.elements;
    //expect(ctxBoard.fillStyle).toBe('#000000');
    //console.log(tileElems);
    const events = ctxBoard.__getEvents();
    expect(events).toMatchSnapshot();
    var tempElem = tileElems.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    console.log(tempElem);
    //expect(tileElems[0].id).toEqual([1, 1]);
    expect(tempElem.color).toEqual(swamp);
  })
})
describe("createGridLayout", ()=>{
  test("createGridLayout_tileOrder123456AllFlips_colorsArrInCorrectOrder", ()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    scripts.tileOrder = [1,2,3,4,5,6];
    //scripts.flip = [1,1,1,1,1,1];
    scripts.setFlip([1,1,1,1,1,1])
    //jest.spyOn()
    //scripts.colors = []
    //ctxBoard = scripts.ctxBoard
    const testCols = [forest,desert,desert,desert,swamp,swamp,forest,forest,desert,water,swamp,swamp,forest,forest,water,water,water,water,desert,mount,mount,mount,mount,swamp,desert,desert,desert,forest,swamp,swamp,forest,forest,forest,forest,forest,swamp,water,water,mount,mount,mount,mount,water,water,mount,forest,swamp,swamp,water,forest,forest,forest,swamp,swamp,forest,forest,forest,desert,desert,desert,water,water,water,mount,desert,desert,mount,mount,mount,mount,desert,desert,water,water,water,water,desert,desert,mount,mount,water,desert,desert,swamp,mount,mount,mount,swamp,swamp,swamp,forest,water,water,water,water,mount,forest,forest,swamp,swamp,mount,mount,forest,swamp,swamp,swamp,desert,desert]
    
    
    
    scripts.createGridLayout([1,2,3,4,5,6],[1,1,1,1,1,1])
    var colors = scripts.getColors();
    //colors = scripts.colors;
    //console.log(testCols)
    //var colors = scripts.colors;
    console.log(colors);
    console.log(testCols);
    expect(colors).toEqual(testCols)
  })
  test("createGridLayout_tileOrder123456NoFlips_colorsArrInCorrectOrder", ()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    var colors = scripts.colors;
    var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    var tileOrder = [1,2,3,4,5,6];
    var flip = [0,0,0,0,0,0];
    
    //ctxBoard = scripts.ctxBoard
    var testCols = [water, water, water, water, forest, forest, swamp, swamp, water, desert, forest, forest, swamp, swamp, desert, desert, desert, forest,swamp,forest,forest,forest,forest,forest,swamp,swamp,forest,desert,desert,desert,swamp,mount,mount,mount,mount,desert,swamp,swamp,forest,forest,forest,water,swamp,swamp,forest,mount,water,water,mount,mount,mount,mount,water,water,desert,desert,mount,mount,mount,mount,desert,desert,mount,water,water,water,desert,desert,desert,forest,forest,forest,swamp,swamp,swamp,mount,mount,mount,swamp,desert,desert,water,mount,mount,desert,desert,water,water,water,water,desert,desert,swamp,swamp,swamp,forest,mount,mount,swamp,swamp,forest,forest,mount,water,water,water,water,forest]
    scripts.createGridLayout(tileOrder,flip)
    expect(colors).toEqual(testCols)
  })
  test("createGridLayout_tileOrder123456NoFlips_habsArrInCorrectOrder", ()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    var colors = scripts.colors;
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    var tileOrder = [1,2,3,4,5,6];
    var flip = [0,0,0,0,0,0];
    
    //ctxBoard = scripts.ctxBoard
    var testHabs = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0]
    scripts.createGridLayout(tileOrder,flip)
    var habs = scripts.getHabs();
    expect(habs).toEqual(testHabs);
  })
  test("createGridLayout_tileOrder123456AllFlips_habsArrInCorrectOrder", ()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    scripts.tileOrder = [1,2,3,4,5,6];
    //scripts.flip = [1,1,1,1,1,1];
    scripts.setFlip([1,1,1,1,1,1])
    //jest.spyOn()
    //scripts.colors = []
    //ctxBoard = scripts.ctxBoard
    const testHabs = [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,2,0,0,0,0,2,2,0,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1]
    
    
    
    scripts.createGridLayout([1,2,3,4,5,6],[1,1,1,1,1,1])
    var habs = scripts.getHabs();
    //colors = scripts.colors;
    //console.log(testCols)
    //var colors = scripts.colors;
    //console.log(colors)
    expect(habs).toEqual(testHabs)
  })
 /* test("createGridLayout_tileOrder425631100101_colorsArrInCorrectOrder", ()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    //scripts.tileOrder = [1,2,3,4,5,6];
    scripts.setTileOrder([4,2,5,6,3,1])
    //scripts.flip = [1,1,1,1,1,1];
    scripts.setFlip([1,0,0,1,0,1])
    //jest.spyOn()
    //scripts.colors = []
    //ctxBoard = scripts.ctxBoard
    const testCols = [forest,desert,desert,desert,swamp,swamp,forest,forest,desert,water,swamp,swamp,forest,forest,water,water,water,water,desert,mount,mount,mount,mount,swamp,desert,desert,desert,forest,swamp,swamp,forest,forest,forest,forest,forest,swamp,water,water,mount,mount,mount,mount,water,water,mount,forest,swamp,swamp,water,forest,forest,forest,swamp,swamp,forest,forest,forest,desert,desert,desert,water,water,water,mount,desert,desert,mount,mount,mount,mount,desert,desert,water,water,water,water,desert,desert,mount,mount,water,desert,desert,swamp,mount,mount,mount,swamp,swamp,swamp,forest,water,water,water,water,mount,forest,forest,swamp,swamp,mount,mount,forest,swamp,swamp,swamp,desert,desert]
    
    
    
    scripts.createGridLayout([4,2,5,6,3,1],[1,0,0,1,0,1])
    var colors = scripts.getColors();
    //colors = scripts.colors;
    //console.log(testCols)
    //var colors = scripts.colors;
    console.log(colors)
    expect(colors).toEqual(testCols)
  })*/
})
describe("drawGrid", () => {
  test('drawGrid_tileOrder123456NoFlips_canvasAtStartHexesCorrectColor', ()=> {
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    scripts.setFlip([0,0,0,0,0,0])
    scripts.setTileOrder([1,2,3,4,5,6])
    var flip = scripts.getFlip();
    var tileOrder = scripts.getTileOrder();
    scripts.createGridLayout(tileOrder,flip);
    var colors = scripts.getColors();
    var habs = scripts.getHabs();
    scripts.drawGrid(colors,habs);
    var elements = scripts.getElements();
    //var tileElems = scripts.drawTile(1,1,6,3,scripts.createPoly(6,RADIUS),cols1,habs1);
    //var elements = scripts.elements;
    //expect(ctxBoard.fillStyle).toBe('#000000');
    //console.log(tileElems);
    
    const events = ctxBoard.__getEvents();
    expect(events).toMatchSnapshot();
    //expect(tileElems[0].id).toEqual([1, 1]);
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.color).toEqual(water);
    tempElem = elements.find(({ id }) => (id[0] == 7)&&(id[1] == 1))
    expect(tempElem.color).toEqual(swamp);
    tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 4))
    expect(tempElem.color).toEqual(swamp);
    tempElem = elements.find(({ id }) => (id[0] == 7)&&(id[1] == 4))
    expect(tempElem.color).toEqual(desert);
    tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 7))
    expect(tempElem.color).toEqual(swamp);
    tempElem = elements.find(({ id }) => (id[0] == 7)&&(id[1] == 7))
    expect(tempElem.color).toEqual(desert);
  })
  test('drawGrid_tileOrder123456AllFlips_canvasAtStartHexesCorrectColor', ()=> {
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    scripts.tileOrder = [1,2,3,4,5,6];
    //scripts.flip = [1,1,1,1,1,1];
    scripts.setFlip([1,1,1,1,1,1]);
    scripts.setElements([]);
    //jest.spyOn()
    //scripts.colors = []
    //ctxBoard = scripts.ctxBoard
    const testCols = [forest,desert,desert,desert,swamp,swamp,forest,forest,desert,water,swamp,swamp,forest,forest,water,water,water,water,desert,mount,mount,mount,mount,swamp,desert,desert,desert,forest,swamp,swamp,forest,forest,forest,forest,forest,swamp,water,water,mount,mount,mount,mount,water,water,mount,forest,swamp,swamp,water,forest,forest,forest,swamp,swamp,forest,forest,forest,desert,desert,desert,water,water,water,mount,desert,desert,mount,mount,mount,mount,desert,desert,water,water,water,water,desert,desert,mount,mount,water,desert,desert,swamp,mount,mount,mount,swamp,swamp,swamp,forest,water,water,water,water,mount,forest,forest,swamp,swamp,mount,mount,forest,swamp,swamp,swamp,desert,desert]
    const testHabs = [1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,2,0,0,0,0,2,2,0,0,0,0,0,0,2,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1]
    
    
    scripts.createGridLayout([1,2,3,4,5,6],[1,1,1,1,1,1])
    var colors = scripts.getColors();
    var habs = scripts.getHabs();
    //colors = scripts.colors;
    //console.log(testCols)
    //var colors = scripts.colors;
    //console.log(colors);
    //console.log(testCols);
    scripts.drawGrid(scripts.getColors(),scripts.getHabs());
    var elements = scripts.getElements();
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.color).toEqual(forest);
    tempElem = elements.find(({ id }) => (id[0] == 7)&&(id[1] == 1))
    expect(tempElem.color).toEqual(desert);
    tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 4))
    expect(tempElem.color).toEqual(water);
    tempElem = elements.find(({ id }) => (id[0] == 7)&&(id[1] == 4))
    expect(tempElem.color).toEqual(forest);
    tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 7))
    expect(tempElem.color).toEqual(water);
    tempElem = elements.find(({ id }) => (id[0] == 7)&&(id[1] == 7))
    expect(tempElem.color).toEqual(forest);
  })
})

describe("drawHabs", () => {
  test('drawHabs_tileOrder123456NoFlips_elementsArrCorrectHabs', ()=> {
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    //scripts.setElements([]);
    scripts.setFlip([0,0,0,0,0,0])
    scripts.setTileOrder([1,2,3,4,5,6])
    scripts.setElements([]);
    var flip = scripts.getFlip();
    var tileOrder = scripts.getTileOrder();
    
    scripts.createGridLayout(tileOrder,flip);
  
    var colors = scripts.getColors();
    var habs = scripts.getHabs();
    console.log(habs);
    scripts.drawGrid(scripts.getColors(),scripts.getHabs());
    scripts.drawHabs(scripts.createPoly(EDGES,0.9*RADIUS),habs);
    var elements = scripts.getElements();
  
    
    const events = ctxBoard.__getEvents();
    expect(events).toMatchSnapshot();
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.hab).toEqual(0);
    tempElem = elements.find(({ id }) => (id[0] == 7)&&(id[1] == 1))
    expect(tempElem.hab).toEqual(2);
    tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 4))
    expect(tempElem.hab).toEqual(0);
    tempElem = elements.find(({ id }) => (id[0] == 7)&&(id[1] == 4))
    expect(tempElem.hab).toEqual(0);
    tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 7))
    expect(tempElem.hab).toEqual(0);
    tempElem = elements.find(({ id }) => (id[0] == 7)&&(id[1] == 7))
    expect(tempElem.hab).toEqual(1);
  })
  test('drawHabs_tileOrder123456AllFlips_elementsArrCorrectHabs', ()=> {
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    //scripts.setElements([]);
    scripts.setFlip([1,1,1,1,1,1])
    scripts.setTileOrder([1,2,3,4,5,6])
    scripts.setElements([]);
    var flip = scripts.getFlip();
    var tileOrder = scripts.getTileOrder();
    
    scripts.createGridLayout(tileOrder,flip);
  
    var colors = scripts.getColors();
    var habs = scripts.getHabs();
    console.log(habs);
    scripts.drawGrid(scripts.getColors(),scripts.getHabs());
    scripts.drawHabs(scripts.createPoly(EDGES,0.9*RADIUS),habs);
    var elements = scripts.getElements();
  
    
    const events = ctxBoard.__getEvents();
    expect(events).toMatchSnapshot();
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.hab).toEqual(1);
    tempElem = elements.find(({ id }) => (id[0] == 7)&&(id[1] == 1))
    expect(tempElem.hab).toEqual(0);
    tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 4))
    expect(tempElem.hab).toEqual(0);
    tempElem = elements.find(({ id }) => (id[0] == 7)&&(id[1] == 4))
    expect(tempElem.hab).toEqual(2);
    tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 7))
    expect(tempElem.hab).toEqual(1);
    tempElem = elements.find(({ id }) => (id[0] == 7)&&(id[1] == 7))
    expect(tempElem.hab).toEqual(0);
  })   
})

describe("drawBuild", () => {
  test('drawBuild_whiteStone11_buildingDrawnOnCanvasAndSavedInElementsArr', ()=> {
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    //scripts.setElements([]);
    scripts.setFlip([0,0,0,0,0,0])
    scripts.setTileOrder([1,2,3,4,5,6])
    scripts.setElements([]);
    var flip = scripts.getFlip();
    var tileOrder = scripts.getTileOrder();
    
    scripts.createGridLayout(tileOrder,flip);
  
    var colors = scripts.getColors();
    var habs = scripts.getHabs();
    console.log(habs);
    scripts.drawGrid(scripts.getColors(),scripts.getHabs());
    scripts.drawHabs(scripts.createPoly(EDGES,0.9*RADIUS),habs);
    scripts.drawBuild([1,1],whitebuild,8);
    var elements = scripts.getElements();
  
    
    const events = ctxBoard.__getEvents();
    expect(events).toMatchSnapshot();
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.build).toEqual('wt');
  })
  test('drawBuild_blueStone11_buildingDrawnOnCanvasAndSavedInElementsArr', ()=> {
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const bluebuild = scripts.bluebuild;
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    //scripts.setElements([]);
    scripts.setFlip([0,0,0,0,0,0])
    scripts.setTileOrder([1,2,3,4,5,6])
    scripts.setElements([]);
    var flip = scripts.getFlip();
    var tileOrder = scripts.getTileOrder();
    
    scripts.createGridLayout(tileOrder,flip);
  
    var colors = scripts.getColors();
    var habs = scripts.getHabs();
    console.log(habs);
    scripts.drawGrid(scripts.getColors(),scripts.getHabs());
    scripts.drawHabs(scripts.createPoly(EDGES,0.9*RADIUS),habs);
    scripts.drawBuild([1,1],bluebuild,8);
    var elements = scripts.getElements();
  
    
    const events = ctxBoard.__getEvents();
    expect(events).toMatchSnapshot();
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.build).toEqual('bt');
  })
  test('drawBuild_greenStone11_buildingDrawnOnCanvasAndSavedInElementsArr', ()=> {
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const greenbuild = scripts.greenbuild;
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    //scripts.setElements([]);
    scripts.setFlip([0,0,0,0,0,0])
    scripts.setTileOrder([1,2,3,4,5,6])
    scripts.setElements([]);
    var flip = scripts.getFlip();
    var tileOrder = scripts.getTileOrder();
    
    scripts.createGridLayout(tileOrder,flip);
  
    var colors = scripts.getColors();
    var habs = scripts.getHabs();
    console.log(habs);
    scripts.drawGrid(scripts.getColors(),scripts.getHabs());
    scripts.drawHabs(scripts.createPoly(EDGES,0.9*RADIUS),habs);
    scripts.drawBuild([1,1],greenbuild,8);
    var elements = scripts.getElements();
  
    
    const events = ctxBoard.__getEvents();
    expect(events).toMatchSnapshot();
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.build).toEqual('gt');
  })
  test('drawBuild_blackStone11_buildingDrawnOnCanvasAndSavedInElementsArr', ()=> {
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const blackbuild = scripts.blackbuild;
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    //scripts.setElements([]);
    scripts.setFlip([0,0,0,0,0,0])
    scripts.setTileOrder([1,2,3,4,5,6])
    scripts.setElements([]);
    var flip = scripts.getFlip();
    var tileOrder = scripts.getTileOrder();
    
    scripts.createGridLayout(tileOrder,flip);
  
    var colors = scripts.getColors();
    var habs = scripts.getHabs();
    console.log(habs);
    scripts.drawGrid(scripts.getColors(),scripts.getHabs());
    scripts.drawHabs(scripts.createPoly(EDGES,0.9*RADIUS),habs);
    scripts.drawBuild([1,1],blackbuild,8);
    var elements = scripts.getElements();
  
    
    const events = ctxBoard.__getEvents();
    expect(events).toMatchSnapshot();
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.build).toEqual('xt');
  })
  test('drawBuild_whiteShack11_buildingDrawnOnCanvasAndSavedInElementsArr', ()=> {
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    //scripts.setElements([]);
    scripts.setFlip([0,0,0,0,0,0])
    scripts.setTileOrder([1,2,3,4,5,6])
    scripts.setElements([]);
    var flip = scripts.getFlip();
    var tileOrder = scripts.getTileOrder();
    
    scripts.createGridLayout(tileOrder,flip);
  
    var colors = scripts.getColors();
    var habs = scripts.getHabs();
    console.log(habs);
    scripts.drawGrid(scripts.getColors(),scripts.getHabs());
    scripts.drawHabs(scripts.createPoly(EDGES,0.9*RADIUS),habs);
    scripts.drawBuild([1,1],whitebuild,3);
    var elements = scripts.getElements();
  
    
    const events = ctxBoard.__getEvents();
    expect(events).toMatchSnapshot();
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.build).toEqual('ws');
  }) 
  test('drawBuild_blueShack11_buildingDrawnOnCanvasAndSavedInElementsArr', ()=> {
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const bluebuild = scripts.bluebuild;
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    //scripts.setElements([]);
    scripts.setFlip([0,0,0,0,0,0])
    scripts.setTileOrder([1,2,3,4,5,6])
    scripts.setElements([]);
    var flip = scripts.getFlip();
    var tileOrder = scripts.getTileOrder();
    
    scripts.createGridLayout(tileOrder,flip);
  
    var colors = scripts.getColors();
    var habs = scripts.getHabs();
    console.log(habs);
    scripts.drawGrid(scripts.getColors(),scripts.getHabs());
    scripts.drawHabs(scripts.createPoly(EDGES,0.9*RADIUS),habs);
    scripts.drawBuild([1,1],bluebuild,3);
    var elements = scripts.getElements();
  
    
    const events = ctxBoard.__getEvents();
    expect(events).toMatchSnapshot();
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.build).toEqual('bs');
  })
  test('drawBuild_greenShack11_buildingDrawnOnCanvasAndSavedInElementsArr', ()=> {
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const greenbuild = scripts.greenbuild;
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    //scripts.setElements([]);
    scripts.setFlip([0,0,0,0,0,0])
    scripts.setTileOrder([1,2,3,4,5,6])
    scripts.setElements([]);
    var flip = scripts.getFlip();
    var tileOrder = scripts.getTileOrder();
    
    scripts.createGridLayout(tileOrder,flip);
  
    var colors = scripts.getColors();
    var habs = scripts.getHabs();
    console.log(habs);
    scripts.drawGrid(scripts.getColors(),scripts.getHabs());
    scripts.drawHabs(scripts.createPoly(EDGES,0.9*RADIUS),habs);
    scripts.drawBuild([1,1],greenbuild,3);
    var elements = scripts.getElements();
  
    
    const events = ctxBoard.__getEvents();
    expect(events).toMatchSnapshot();
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.build).toEqual('gs');
  }) 
  test('drawBuild_blackShack11_buildingDrawnOnCanvasAndSavedInElementsArr', ()=> {
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const blackbuild = scripts.blackbuild;
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    //scripts.setElements([]);
    scripts.setFlip([0,0,0,0,0,0])
    scripts.setTileOrder([1,2,3,4,5,6])
    scripts.setElements([]);
    var flip = scripts.getFlip();
    var tileOrder = scripts.getTileOrder();
    
    scripts.createGridLayout(tileOrder,flip);
  
    var colors = scripts.getColors();
    var habs = scripts.getHabs();
    console.log(habs);
    scripts.drawGrid(scripts.getColors(),scripts.getHabs());
    scripts.drawHabs(scripts.createPoly(EDGES,0.9*RADIUS),habs);
    scripts.drawBuild([1,1],blackbuild,3);
    var elements = scripts.getElements();
  
    
    const events = ctxBoard.__getEvents();
    expect(events).toMatchSnapshot();
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.build).toEqual('xs');
  })  
})
describe("drawBuildings", () => {
  test('drawBuildings_whiteStone11whiteShack44_buildingDrawnOnCanvasAndSavedInElementsArr', ()=> {
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    //scripts.setElements([]);
    scripts.setFlip([0,0,0,0,0,0])
    scripts.setTileOrder([1,2,3,4,5,6])
    scripts.setElements([]);
    var flip = scripts.getFlip();
    var tileOrder = scripts.getTileOrder();
    var whitebuildcoords = [[1,1],[4,4]]
    scripts.createGridLayout(tileOrder,flip);
  
    var colors = scripts.getColors();
    var habs = scripts.getHabs();
    console.log(habs);
    scripts.drawGrid(scripts.getColors(),scripts.getHabs());
    scripts.drawHabs(scripts.createPoly(EDGES,0.9*RADIUS),habs);
    scripts.drawBuildings(whitebuildcoords,whitebuild);
    var elements = scripts.getElements();
  
    
    const events = ctxBoard.__getEvents();
    expect(events).toMatchSnapshot();
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.build).toEqual('wt');
    tempElem = elements.find(({ id }) => (id[0] == 4)&&(id[1] == 4))
    expect(tempElem.build).toEqual('ws');
  })
  test('drawBuildings_blueStone11blueShack44_buildingDrawnOnCanvasAndSavedInElementsArr', ()=> {
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const bluebuild = scripts.bluebuild;
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    //scripts.setElements([]);
    scripts.setFlip([0,0,0,0,0,0])
    scripts.setTileOrder([1,2,3,4,5,6])
    scripts.setElements([]);
    var flip = scripts.getFlip();
    var tileOrder = scripts.getTileOrder();
    var bluebuildcoords = [[1,1],[4,4]]
    scripts.createGridLayout(tileOrder,flip);
  
    var colors = scripts.getColors();
    var habs = scripts.getHabs();
    console.log(habs);
    scripts.drawGrid(scripts.getColors(),scripts.getHabs());
    scripts.drawHabs(scripts.createPoly(EDGES,0.9*RADIUS),habs);
    scripts.drawBuildings(bluebuildcoords,bluebuild);
    var elements = scripts.getElements();
  
    
    const events = ctxBoard.__getEvents();
    expect(events).toMatchSnapshot();
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.build).toEqual('bt');
    tempElem = elements.find(({ id }) => (id[0] == 4)&&(id[1] == 4))
    expect(tempElem.build).toEqual('bs');
  }) 
  test('drawBuildings_greenStone11greenShack44_buildingDrawnOnCanvasAndSavedInElementsArr', ()=> {
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const greenbuild = scripts.greenbuild;
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    //scripts.setElements([]);
    scripts.setFlip([0,0,0,0,0,0])
    scripts.setTileOrder([1,2,3,4,5,6])
    scripts.setElements([]);
    var flip = scripts.getFlip();
    var tileOrder = scripts.getTileOrder();
    var greenbuildcoords = [[1,1],[4,4]]
    scripts.createGridLayout(tileOrder,flip);
  
    var colors = scripts.getColors();
    var habs = scripts.getHabs();
    console.log(habs);
    scripts.drawGrid(scripts.getColors(),scripts.getHabs());
    scripts.drawHabs(scripts.createPoly(EDGES,0.9*RADIUS),habs);
    scripts.drawBuildings(greenbuildcoords,greenbuild);
    var elements = scripts.getElements();
  
    
    const events = ctxBoard.__getEvents();
    expect(events).toMatchSnapshot();
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.build).toEqual('gt');
    tempElem = elements.find(({ id }) => (id[0] == 4)&&(id[1] == 4))
    expect(tempElem.build).toEqual('gs');
  }) 
  test('drawBuildings_blackStone11blackShack44_buildingDrawnOnCanvasAndSavedInElementsArr', ()=> {
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const blackbuild = scripts.blackbuild;
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    //scripts.setElements([]);
    scripts.setFlip([0,0,0,0,0,0])
    scripts.setTileOrder([1,2,3,4,5,6])
    scripts.setElements([]);
    var flip = scripts.getFlip();
    var tileOrder = scripts.getTileOrder();
    var blackbuildcoords = [[1,1],[4,4]]
    scripts.createGridLayout(tileOrder,flip);
  
    var colors = scripts.getColors();
    var habs = scripts.getHabs();
    console.log(habs);
    scripts.drawGrid(scripts.getColors(),scripts.getHabs());
    scripts.drawHabs(scripts.createPoly(EDGES,0.9*RADIUS),habs);
    scripts.drawBuildings(blackbuildcoords,blackbuild);
    var elements = scripts.getElements();
  
    
    const events = ctxBoard.__getEvents();
    expect(events).toMatchSnapshot();
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.build).toEqual('xt');
    tempElem = elements.find(({ id }) => (id[0] == 4)&&(id[1] == 4))
    expect(tempElem.build).toEqual('xs');
  })
})

describe("drawBoard", () => {
  test('drawBoard_basicBoardNoBuildings_correctDrawOnCanvasAndSavedCorrectInElementsArr', ()=> {
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    //scripts.setElements([]);
    scripts.setFlip([0,0,0,0,0,0])
    scripts.setTileOrder([1,2,3,4,5,6])
    scripts.setElements([]);
    const testKey = "intro_123456CCCCCCCCCCCC"
    scripts.drawBoard(testKey);
    var flip = scripts.getFlip();
    var tileOrder = scripts.getTileOrder();
    //scripts.createGridLayout(tileOrder,flip);
  
    var colors = scripts.getColors();
    var habs = scripts.getHabs();
    console.log(habs);
    //scripts.drawGrid(scripts.getColors(),scripts.getHabs());
    //scripts.drawHabs(scripts.createPoly(EDGES,0.9*RADIUS),habs);
    //scripts.drawBuildings(whitebuildcoords,whitebuild);
    var elements = scripts.getElements();
  
    
    const events = ctxBoard.__getEvents();
    expect(events).toMatchSnapshot();
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.color).toEqual(water);
    expect(tempElem.hab).toEqual(0);
    tempElem = elements.find(({ id }) => (id[0] == 7)&&(id[1] == 1))
    expect(tempElem.color).toEqual(swamp);
    expect(tempElem.hab).toEqual(2);
    tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 4))
    expect(tempElem.color).toEqual(swamp);
    expect(tempElem.hab).toEqual(0);
    tempElem = elements.find(({ id }) => (id[0] == 7)&&(id[1] == 4))
    expect(tempElem.color).toEqual(desert);
    expect(tempElem.hab).toEqual(0);
    tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 7))
    expect(tempElem.color).toEqual(swamp);
    expect(tempElem.hab).toEqual(0);
    tempElem = elements.find(({ id }) => (id[0] == 7)&&(id[1] == 7))
    expect(tempElem.color).toEqual(desert);
    expect(tempElem.hab).toEqual(1);
    for(var i=0;i<elements.length;i++){
      expect(elements[i].build).toEqual("");
    }
  })
  test('drawBoard_basicBoardNoBuildings_editElementsCorrect', ()=> {
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    //scripts.setElements([]);
    scripts.setFlip([0,0,0,0,0,0])
    scripts.setTileOrder([1,2,3,4,5,6])
    scripts.setElements([]);
    const testKey = "intro_123456CCCCCCCCCCCC"
    scripts.drawBoard(testKey);
    var flip = scripts.getFlip();
    var tileOrder = scripts.getTileOrder();
    //scripts.createGridLayout(tileOrder,flip);
  
    var colors = scripts.getColors();
    var habs = scripts.getHabs();
    console.log(habs);
    //scripts.drawGrid(scripts.getColors(),scripts.getHabs());
    //scripts.drawHabs(scripts.createPoly(EDGES,0.9*RADIUS),habs);
    //scripts.drawBuildings(whitebuildcoords,whitebuild);
    var elements = scripts.getElements();
  
    
    const events = ctxBoard.__getEvents();
    expect(events).toMatchSnapshot();
    expect(document.getElementById("tileOne").options[0].selected).toEqual(true);
    expect(document.getElementById("tileTwo").options[1].selected).toEqual(true);
    expect(document.getElementById("tileThree").options[2].selected).toEqual(true);
    expect(document.getElementById("tileFour").options[3].selected).toEqual(true);
    expect(document.getElementById("tileFive").options[4].selected).toEqual(true);
    expect(document.getElementById("tileSix").options[5].selected).toEqual(true);
    expect(document.getElementById("tileOneFlip").checked).toEqual(false);
    expect(document.getElementById("tileTwoFlip").checked).toEqual(false);
    expect(document.getElementById("tileThreeFlip").checked).toEqual(false);
    expect(document.getElementById("tileFourFlip").checked).toEqual(false);
    expect(document.getElementById("tileFiveFlip").checked).toEqual(false);
    expect(document.getElementById("tileSixFlip").checked).toEqual(false);
  })
  test('drawBoard_randomIntroBoard_correctDrawOnCanvasAndSavedCorrectInElementsArr', ()=> {
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    //scripts.setElements([]);
    scripts.setFlip([0,0,0,0,0,0])
    scripts.setTileOrder([1,2,3,4,5,6])
    scripts.setElements([]);
    const testKey = "intro_BC472386888B617149"
    //564123
    //110100
    scripts.drawBoard(testKey);
    var flip = scripts.getFlip();
    var tileOrder = scripts.getTileOrder();
    //scripts.createGridLayout(tileOrder,flip);
  
    var colors = scripts.getColors();
    var habs = scripts.getHabs();
    console.log(habs);
    //scripts.drawGrid(scripts.getColors(),scripts.getHabs());
    //scripts.drawHabs(scripts.createPoly(EDGES,0.9*RADIUS),habs);
    //scripts.drawBuildings(whitebuildcoords,whitebuild);
    var elements = scripts.getElements();
  
    
    const events = ctxBoard.__getEvents();
    expect(events).toMatchSnapshot();
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.color).toEqual(water);
    expect(tempElem.hab).toEqual(1);
    tempElem = elements.find(({ id }) => (id[0] == 7)&&(id[1] == 1))
    expect(tempElem.color).toEqual(forest);
    expect(tempElem.hab).toEqual(0);
    tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 4))
    expect(tempElem.color).toEqual(desert);
    expect(tempElem.hab).toEqual(0);
    tempElem = elements.find(({ id }) => (id[0] == 7)&&(id[1] == 4))
    expect(tempElem.color).toEqual(forest);
    expect(tempElem.hab).toEqual(1);
    tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 7))
    expect(tempElem.color).toEqual(swamp);
    expect(tempElem.hab).toEqual(2);
    tempElem = elements.find(({ id }) => (id[0] == 7)&&(id[1] == 7))
    expect(tempElem.color).toEqual(swamp);
    expect(tempElem.hab).toEqual(0);
    tempElem = elements.find(({ id }) => (id[0] == 7)&&(id[1] == 9))
    expect(tempElem.build).toEqual("wt")
    tempElem = elements.find(({ id }) => (id[0] == 9)&&(id[1] == 9))
    expect(tempElem.build).toEqual("gt")
    tempElem = elements.find(({ id }) => (id[0] == 12)&&(id[1] == 9))
    expect(tempElem.build).toEqual("bt")
    tempElem = elements.find(({ id }) => (id[0] == 2)&&(id[1] == 7))
    expect(tempElem.build).toEqual("ws")
    tempElem = elements.find(({ id }) => (id[0] == 2)&&(id[1] == 8))
    expect(tempElem.build).toEqual("gs")
    tempElem = elements.find(({ id }) => (id[0] == 10)&&(id[1] == 5))
    expect(tempElem.build).toEqual("bs")
  })
 /* test('drawBoard_randomIntroBoard_editElementsCorrect', ()=> {
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    //scripts.setElements([]);
    scripts.setFlip([0,0,0,0,0,0])
    scripts.setTileOrder([1,2,3,4,5,6])
    scripts.setElements([]);
    const testKey = "intro_BC472386888B617149"
    //564123
    //110100
    scripts.drawBoard(testKey);
    var flip = scripts.getFlip();
    var tileOrder = scripts.getTileOrder();
    //scripts.createGridLayout(tileOrder,flip);
  
    var colors = scripts.getColors();
    var habs = scripts.getHabs();
    console.log(habs);
    //scripts.drawGrid(scripts.getColors(),scripts.getHabs());
    //scripts.drawHabs(scripts.createPoly(EDGES,0.9*RADIUS),habs);
    //scripts.drawBuildings(whitebuildcoords,whitebuild);
    var elements = scripts.getElements();
  
    
    const events = ctxBoard.__getEvents();
    expect(events).toMatchSnapshot();
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(document.getElementById("tileOne").options[4].selected).toEqual(true);
    expect(document.getElementById("tileTwo").options[5].selected).toEqual(true);
    expect(document.getElementById("tileThree").options[3].selected).toEqual(true);
    expect(document.getElementById("tileFour").options[0].selected).toEqual(true);
    expect(document.getElementById("tileFive").options[1].selected).toEqual(true);
    expect(document.getElementById("tileSix").options[2].selected).toEqual(true);
    expect(document.getElementById("tileOneFlip").checked).toEqual(true);
    expect(document.getElementById("tileTwoFlip").checked).toEqual(true);
    expect(document.getElementById("tileThreeFlip").checked).toEqual(false);
    expect(document.getElementById("tileFourFlip").checked).toEqual(true);
    expect(document.getElementById("tileFiveFlip").checked).toEqual(false);
    expect(document.getElementById("tileSixFlip").checked).toEqual(false);
  })*/
  test('drawBoard_randomNormalBoard_correctDrawOnCanvasAndSavedCorrectInElementsArr', ()=> {
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    //scripts.setElements([]);
    scripts.setFlip([0,0,0,0,0,0])
    scripts.setTileOrder([1,2,3,4,5,6])
    scripts.setElements([]);
    const testKey = "normal_478B9C3879103919116B0A"
    //412536
    //011111
    scripts.drawBoard(testKey);
    var flip = scripts.getFlip();
    var tileOrder = scripts.getTileOrder();
    //scripts.createGridLayout(tileOrder,flip);
  
    var colors = scripts.getColors();
    var habs = scripts.getHabs();
    console.log(habs);
    //scripts.drawGrid(scripts.getColors(),scripts.getHabs());
    //scripts.drawHabs(scripts.createPoly(EDGES,0.9*RADIUS),habs);
    //scripts.drawBuildings(whitebuildcoords,whitebuild);
    var elements = scripts.getElements();
  
    
    const events = ctxBoard.__getEvents();
    expect(events).toMatchSnapshot();
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.color).toEqual(desert);
    expect(tempElem.hab).toEqual(0);
    tempElem = elements.find(({ id }) => (id[0] == 7)&&(id[1] == 1))
    expect(tempElem.color).toEqual(forest);
    expect(tempElem.hab).toEqual(1);
    tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 4))
    expect(tempElem.color).toEqual(desert);
    expect(tempElem.hab).toEqual(0);
    tempElem = elements.find(({ id }) => (id[0] == 7)&&(id[1] == 4))
    expect(tempElem.color).toEqual(water);
    expect(tempElem.hab).toEqual(1);
    tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 7))
    expect(tempElem.color).toEqual(water);
    expect(tempElem.hab).toEqual(0);
    tempElem = elements.find(({ id }) => (id[0] == 7)&&(id[1] == 7))
    expect(tempElem.color).toEqual(forest);
    expect(tempElem.hab).toEqual(0);
    tempElem = elements.find(({ id }) => (id[0] == 9)&&(id[1] == 4))
    expect(tempElem.build).toEqual("wt")
    tempElem = elements.find(({ id }) => (id[0] == 10)&&(id[1] == 8))
    expect(tempElem.build).toEqual("gt")
    tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 2))
    expect(tempElem.build).toEqual("bt")
    tempElem = elements.find(({ id }) => (id[0] == 10)&&(id[1] == 4))
    expect(tempElem.build).toEqual("xt")
    tempElem = elements.find(({ id }) => (id[0] == 10)&&(id[1] == 2))
    expect(tempElem.build).toEqual("ws")
    tempElem = elements.find(({ id }) => (id[0] == 2)&&(id[1] == 2))
    expect(tempElem.build).toEqual("gs")
    tempElem = elements.find(({ id }) => (id[0] == 12)&&(id[1] == 7))
    expect(tempElem.build).toEqual("bs")
    tempElem = elements.find(({ id }) => (id[0] == 11)&&(id[1] == 1))
    expect(tempElem.build).toEqual("xs")
  }) 
 /* test('drawBoard_randomNormalBoard_editElementsCorrect', ()=> {
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    //scripts.setElements([]);
    scripts.setFlip([0,0,0,0,0,0])
    scripts.setTileOrder([1,2,3,4,5,6])
    scripts.setElements([]);
    const testKey = "normal_478B9C3879103919116B0A"
    //412536
    //011111
    scripts.drawBoard(testKey);
    var flip = scripts.getFlip();
    var tileOrder = scripts.getTileOrder();
    //scripts.createGridLayout(tileOrder,flip);
  
    var colors = scripts.getColors();
    var habs = scripts.getHabs();
    console.log(habs);
    //scripts.drawGrid(scripts.getColors(),scripts.getHabs());
    //scripts.drawHabs(scripts.createPoly(EDGES,0.9*RADIUS),habs);
    //scripts.drawBuildings(whitebuildcoords,whitebuild);
    var elements = scripts.getElements();
  
    
    const events = ctxBoard.__getEvents();
    expect(events).toMatchSnapshot();
    //expect(getByTestId("tileOne").options[3].selected).toBeTruthy()
    expect(document.getElementById("tileOne").options[3].selected).toEqual(true);
    expect(document.getElementById("tileTwo").options[0].selected).toEqual(true);
    expect(document.getElementById("tileThree").options[1].selected).toEqual(true);
    expect(document.getElementById("tileFour").options[4].selected).toEqual(true);
    expect(document.getElementById("tileFive").options[2].selected).toEqual(true);
    expect(document.getElementById("tileSix").options[5].selected).toEqual(true);
    expect(document.getElementById("tileOneFlip").checked).toEqual(false);
    expect(document.getElementById("tileTwoFlip").checked).toEqual(true);
    expect(document.getElementById("tileThreeFlip").checked).toEqual(true);
    expect(document.getElementById("tileFourFlip").checked).toEqual(true);
    expect(document.getElementById("tileFiveFlip").checked).toEqual(true);
    expect(document.getElementById("tileSixFlip").checked).toEqual(true);
  })  */ 
})

describe("genEmptyBoard", () => {
  test('genEmptyBoard_none_correctDrawOnCanvasAndSavedCorrectInElementsArr', ()=> {
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    //scripts.setElements([]);
    scripts.setFlip([0,0,0,0,0,0])
    scripts.setTileOrder([1,2,3,4,5,6])
    scripts.setElements([]);
    //const testKey = "intro_123456CCCCCCCCCCCC"
    scripts.genEmptyBoard();
    var flip = scripts.getFlip();
    var tileOrder = scripts.getTileOrder();
    //scripts.createGridLayout(tileOrder,flip);
  
    var colors = scripts.getColors();
    var habs = scripts.getHabs();
    console.log(habs);
    //scripts.drawGrid(scripts.getColors(),scripts.getHabs());
    //scripts.drawHabs(scripts.createPoly(EDGES,0.9*RADIUS),habs);
    //scripts.drawBuildings(whitebuildcoords,whitebuild);
    var elements = scripts.getElements();
  
    
    const events = ctxBoard.__getEvents();
    expect(events).toMatchSnapshot();
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.color).toEqual(water);
    expect(tempElem.hab).toEqual(0);
    tempElem = elements.find(({ id }) => (id[0] == 7)&&(id[1] == 1))
    expect(tempElem.color).toEqual(swamp);
    expect(tempElem.hab).toEqual(2);
    tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 4))
    expect(tempElem.color).toEqual(swamp);
    expect(tempElem.hab).toEqual(0);
    tempElem = elements.find(({ id }) => (id[0] == 7)&&(id[1] == 4))
    expect(tempElem.color).toEqual(desert);
    expect(tempElem.hab).toEqual(0);
    tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 7))
    expect(tempElem.color).toEqual(swamp);
    expect(tempElem.hab).toEqual(0);
    tempElem = elements.find(({ id }) => (id[0] == 7)&&(id[1] == 7))
    expect(tempElem.color).toEqual(desert);
    expect(tempElem.hab).toEqual(1);
    for(var i=0;i<elements.length;i++){
      expect(elements[i].build).toEqual("");
    }
  })  
})

/*describe("genNewBoard", ()=>{
  test("genNewBoard_mode0_tileOrderCorrectflipCorrectBuildingCoordsCorrect", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    const responseData = {"mapCode":"9251A620244A638066","mode":"intro","key":"intro_9251A620244A638066"};

    
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(responseData),
    });
    await scripts.genNewBoard(0);
    const tileFlip = scripts.getTileOrder();
    expect(tileFlip).toEqual([3,2,5,1,4,6])
    const flip = scripts.getFlip()
    expect(flip).toEqual([1,0,0,0,1,0])
  })
})*/
test("test opening selectHexItem dialog manually", ()=>{
  const scripts = require('./scripts');
  let board = document.getElementById('board');
  let buildingsBoard = document.getElementById('buildings');
  let tokenBoard = document.getElementById('tokens');
  const ctxBoard = board.getContext('2d');
  const ctxBuild = buildings.getContext('2d');
  const ctxTokens = tokens.getContext('2d');
  const selectPlayerCount = document.getElementById("selectPlayerCount");
  const noGameLoaded = document.getElementById("noGameLoaded");
  const P2 = scripts.P2;
  const EDGES = scripts.EDGES;
  const RADIUS = scripts.RADIUS;
  const TAU = scripts.TAU;
  const EDGE_LEN = scripts.EDGE_LEN;
  const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
  const GRID_X_SPACE = scripts.GRID_X_SPACE;
  const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
  const water = scripts.water;
  const forest = scripts.forest;
  const swamp = scripts.swamp;
  const desert = scripts.desert;
  const mount = scripts.mount;
  
  //var habs = scripts.habs;
  const cols1 = scripts.cols1;
  const habs1 = scripts.habs1;
  const cols2 = scripts.cols2;
  const habs2 = scripts.habs2;
  const cols3 = scripts.cols3;
  const habs3 = scripts.habs3;
  const cols4 = scripts.cols4;
  const habs4 = scripts.habs4;
  const cols5 = scripts.cols5;
  const habs5 = scripts.habs5;
  const cols6 = scripts.cols6;
  const habs6 = scripts.habs6;
  const whitebuild = scripts.whitebuild;
  const bluebuild = scripts.bluebuild;
  const greenbuild = scripts.greenbuild;
  const blackbuild = scripts.blackbuild;
  var p = P2()
  const testCoords = scripts.gridToPixel(1,1,p);
  var x = testCoords[0];
  var y = testCoords[1];
  const selectHexItem = screen.getByTestId('selectHexItem'); // Replace 'elementId' with the actual test ID or other selector
  console.log(selectHexItem.id)
  // Simulate a click at specific coordinates
  //const x = 100;
  //const y = 100;
  selectHexItem.setAttribute('open', '');
  scripts.setSelectedElem([1,1])
  const selectedElem = scripts.getSelectedElem()
  //console.log(selectedElem);
  // Trigger a click event on the element at the specified coordinates
  //userEvent.click(tokensBoard, { offsetX: x, offsetY: y });
  //expect(selectHexItem).toBeInTheDocument();
  expect(selectedElem[0]).toEqual(1);
  expect(selectedElem[1]).toEqual(1);
  expect(selectHexItem.hasAttribute('open')).toBeTruthy();
  //document.getElementById()
})

describe("btnWhiteStone", () => {
  test("btnWhiteStone_selectedElem11_elementsArr11HasWhiteStoneAndWhiteCoordsStoneIs11", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]])
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([1,1])
    const selectedElem = scripts.getSelectedElem()
    console.log(selectedElem);
    const btnWhiteStone = screen.getByTestId('btnWhiteStone');
    btnWhiteStone.onclick = scripts.btnWhiteStoneClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('btnWhiteStone'));
    
    const elements = scripts.getElements();
    const whitebuildcoords = scripts.getWhiteCoords();
    //console.log(elements)
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.build).toEqual('wt');
    expect(whitebuildcoords[0][0]).toEqual(1);
    expect(whitebuildcoords[0][1]).toEqual(1);
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();
  })  
  test("btnWhiteStone_selectedElem77_elementsArr77HasWhiteStoneAndWhiteCoordsStoneIs77", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]])
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([7,7])
    const selectedElem = scripts.getSelectedElem()
    console.log(selectedElem);
    const btnWhiteStone = screen.getByTestId('btnWhiteStone');
    btnWhiteStone.onclick = scripts.btnWhiteStoneClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('btnWhiteStone'));
    
    const elements = scripts.getElements();
    const whitebuildcoords = scripts.getWhiteCoords();
    //console.log(elements)
    var tempElem = elements.find(({ id }) => (id[0] == 7)&&(id[1] == 7))
    expect(tempElem.build).toEqual('wt');
    expect(whitebuildcoords[0][0]).toEqual(7);
    expect(whitebuildcoords[0][1]).toEqual(7);
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();
  })
})

describe("btnWhiteShack", () => {
  test("btnWhiteShack_selectedElem11_elementsArr11HasWhiteShackAndWhiteCoordsShackIs11", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]])
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('btnWhiteShack')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([1,1])
    const selectedElem = scripts.getSelectedElem()
    console.log(selectedElem);
    const btnWhiteShack = screen.getByTestId('btnWhiteShack');
    btnWhiteShack.onclick = scripts.btnWhiteShackClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('btnWhiteShack'));
    
    const elements = scripts.getElements();
    const whitebuildcoords = scripts.getWhiteCoords();
    //console.log(elements)
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.build).toEqual('ws');
    expect(whitebuildcoords[1][0]).toEqual(1);
    expect(whitebuildcoords[1][1]).toEqual(1);
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();
  })  
  test("btnWhiteShack_selectedElem77_elementsArr77HasWhiteShackAndWhiteCoordsShackIs77", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]])
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('btnWhiteShack')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([7,7])
    const selectedElem = scripts.getSelectedElem()
    console.log(selectedElem);
    const btnWhiteStone = screen.getByTestId('btnWhiteShack');
    btnWhiteStone.onclick = scripts.btnWhiteShackClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('btnWhiteShack'));
    
    const elements = scripts.getElements();
    const whitebuildcoords = scripts.getWhiteCoords();
    //console.log(elements)
    var tempElem = elements.find(({ id }) => (id[0] == 7)&&(id[1] == 7))
    expect(tempElem.build).toEqual('ws');
    expect(whitebuildcoords[1][0]).toEqual(7);
    expect(whitebuildcoords[1][1]).toEqual(7);
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();
  })
})

describe("btnGreenStone", () => {
  test("btnGreenStone_selectedElem11_elementsArr11HasGreenStoneAndGreenCoordsStoneIs11", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setGreenCoords([[0,0],[0,0]])
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('btnGreenStone')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([1,1])
    const selectedElem = scripts.getSelectedElem()
    console.log(selectedElem);
    const btnGreenStone = screen.getByTestId('btnGreenStone');
    btnGreenStone.onclick = scripts.btnGreenStoneClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('btnGreenStone'));
    
    const elements = scripts.getElements();
    const greenbuildcoords = scripts.getGreenCoords()
    //console.log(elements)
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.build).toEqual('gt');
    expect(greenbuildcoords[0][0]).toEqual(1)
    expect(greenbuildcoords[0][1]).toEqual(1)
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();
  })  
  test("btnGreenStone_selectedElem77_elementsArr77HasGreenStoneAndGreenCoordsStoneIs77", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setGreenCoords([[0,0],[0,0]])
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('btnGreenStone')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([7,7])
    const selectedElem = scripts.getSelectedElem()
    console.log(selectedElem);
    const btnGreenStone = screen.getByTestId('btnGreenStone');
    btnGreenStone.onclick = scripts.btnGreenStoneClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('btnGreenStone'));
    
    const elements = scripts.getElements();
    const greenbuildcoords = scripts.getGreenCoords()
    //console.log(elements)
    var tempElem = elements.find(({ id }) => (id[0] == 7)&&(id[1] == 7))
    expect(tempElem.build).toEqual('gt');
    expect(greenbuildcoords[0][0]).toEqual(7)
    expect(greenbuildcoords[0][1]).toEqual(7)
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();
  })
})

describe("btnGreenShack", () => {
  test("btnGreenShack_selectedElem11_elementsArr11HasGreenShackAndGreenCoordsShackIs11", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setGreenCoords([[0,0],[0,0]])
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('btnGreenShack')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([1,1])
    const selectedElem = scripts.getSelectedElem()
    console.log(selectedElem);
    const btnGreenShack = screen.getByTestId('btnGreenShack');
    btnGreenShack.onclick = scripts.btnGreenShackClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('btnGreenShack'));
    
    const elements = scripts.getElements();
    const greenbuildcoords = scripts.getGreenCoords()
    //console.log(elements)
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.build).toEqual('gs');
    expect(greenbuildcoords[1][0]).toEqual(1)
    expect(greenbuildcoords[1][1]).toEqual(1)
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();
  })  
  test("btnGreenShack_selectedElem77_elementsArr77HasGreenShack", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('btnGreenShack')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([7,7])
    const selectedElem = scripts.getSelectedElem()
    console.log(selectedElem);
    const btnGreenStone = screen.getByTestId('btnGreenShack');
    btnGreenStone.onclick = scripts.btnGreenShackClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('btnGreenShack'));
    
    const elements = scripts.getElements();
    //console.log(elements)
    var tempElem = elements.find(({ id }) => (id[0] == 7)&&(id[1] == 7))
    expect(tempElem.build).toEqual('gs');
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();
  })
})

describe("btnBlueStone", () => {
  test("btnBlueStone_selectedElem11_elementsArr11HasBlueStone", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('btnBlueStone')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([1,1])
    const selectedElem = scripts.getSelectedElem()
    console.log(selectedElem);
    const btnBlueStone = screen.getByTestId('btnBlueStone');
    btnBlueStone.onclick = scripts.btnBlueStoneClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('btnBlueStone'));
    
    const elements = scripts.getElements();
    //console.log(elements)
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.build).toEqual('bt');
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();
  })  
  test("btnBlueStone_selectedElem77_elementsArr77HasBlueStone", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('btnBlueStone')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([7,7])
    const selectedElem = scripts.getSelectedElem()
    console.log(selectedElem);
    const btnBlueStone = screen.getByTestId('btnBlueStone');
    btnBlueStone.onclick = scripts.btnBlueStoneClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('btnBlueStone'));
    
    const elements = scripts.getElements();
    //console.log(elements)
    var tempElem = elements.find(({ id }) => (id[0] == 7)&&(id[1] == 7))
    expect(tempElem.build).toEqual('bt');
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();
  })
})

describe("btnBlueShack", () => {
  test("btnBlueShack_selectedElem11_elementsArr11HasBlueShack", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('btnBlueShack')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([1,1])
    const selectedElem = scripts.getSelectedElem()
    console.log(selectedElem);
    const btnBlueShack = screen.getByTestId('btnBlueShack');
    btnBlueShack.onclick = scripts.btnBlueShackClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('btnBlueShack'));
    
    const elements = scripts.getElements();
    //console.log(elements)
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.build).toEqual('bs');
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();
  })  
  test("btnBlueShack_selectedElem77_elementsArr77HasBlueShack", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('btnBlueShack')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([7,7])
    const selectedElem = scripts.getSelectedElem()
    console.log(selectedElem);
    const btnBlueShack = screen.getByTestId('btnBlueShack');
    btnBlueShack.onclick = scripts.btnBlueShackClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('btnBlueShack'));
    
    const elements = scripts.getElements();
    //console.log(elements)
    var tempElem = elements.find(({ id }) => (id[0] == 7)&&(id[1] == 7))
    expect(tempElem.build).toEqual('bs');
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();
  })
})

describe("btnBlackStone", () => {
  test("btnBlackStone_selectedElem11_elementsArr11HasBlackStone", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('btnBlackStone')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([1,1])
    const selectedElem = scripts.getSelectedElem()
    console.log(selectedElem);
    const btnBlackStone = screen.getByTestId('btnBlackStone');
    btnBlackStone.onclick = scripts.btnBlackStoneClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('btnBlackStone'));
    
    const elements = scripts.getElements();
    //console.log(elements)
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.build).toEqual('xt');
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();
  })  
  test("btnBlackStone_selectedElem77_elementsArr77HasBlackStone", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('btnBlackStone')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([7,7])
    const selectedElem = scripts.getSelectedElem()
    console.log(selectedElem);
    const btnBlackStone = screen.getByTestId('btnBlackStone');
    btnBlackStone.onclick = scripts.btnBlackStoneClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('btnBlackStone'));
    
    const elements = scripts.getElements();
    //console.log(elements)
    var tempElem = elements.find(({ id }) => (id[0] == 7)&&(id[1] == 7))
    expect(tempElem.build).toEqual('xt');
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();
  })
})

describe("btnBlackShack", () => {
  test("btnBlackShack_selectedElem11_elementsArr11HasBlackShack", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('btnBlackShack')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([1,1])
    const selectedElem = scripts.getSelectedElem()
    console.log(selectedElem);
    const btnBlackShack = screen.getByTestId('btnBlackShack');
    btnBlackShack.onclick = scripts.btnBlackShackClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('btnBlackShack'));
    
    const elements = scripts.getElements();
    //console.log(elements)
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.build).toEqual('xs');
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();
  })  
  test("btnBlackShack_selectedElem77_elementsArr77HasBlackShack", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('btnBlackShack')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([7,7])
    const selectedElem = scripts.getSelectedElem()
    console.log(selectedElem);
    const btnBlackStone = screen.getByTestId('btnBlackShack');
    btnBlackStone.onclick = scripts.btnBlackShackClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('btnBlackShack'));
    
    const elements = scripts.getElements();
    //console.log(elements)
    var tempElem = elements.find(({ id }) => (id[0] == 7)&&(id[1] == 7))
    expect(tempElem.build).toEqual('xs');
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();
  })
})

describe("noBuilds",()=>{
  test("noBuilds_selectedElemNoBuilds_elementsArr11HasNoBuilds", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    const drawbuildings = scripts.drawBuildings;
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('noBuilds')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([1,1])
    const selectedElem = scripts.getSelectedElem()
    //console.log(selectedElem);
    const noBuilds = screen.getByTestId('noBuilds');
    noBuilds.onclick = scripts.btnNoBuildClickTest;
    console.log(noBuilds.onclick)
    fireEvent.click(screen.getByTestId('noBuilds'));
    
    const elements = scripts.getElements();
    //console.log(elements)
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.build).toEqual('');
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();  
  })
  test("noBuilds_selectedElemNoBuilds_allCoordsDoNotContain11", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    const drawbuildings = scripts.drawBuildings;
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('noBuilds')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([1,1])
    const selectedElem = scripts.getSelectedElem()
    //console.log(selectedElem);
    const noBuilds = screen.getByTestId('noBuilds');
    noBuilds.onclick = scripts.btnNoBuildClickTest;
    console.log(noBuilds.onclick)
    fireEvent.click(screen.getByTestId('noBuilds'));
    
    const elements = scripts.getElements();
    const whitebuildcoords = scripts.getWhiteCoords();
    const bluebuildcoords = scripts.getBlueCoords();
    const greenbuildcoords = scripts.getGreenCoords();
    const blackbuildcoords = scripts.getBlackCoords();
    expect(whitebuildcoords[0]).not.toEqual([1,1])
    expect(whitebuildcoords[1]).not.toEqual([1,1])
    expect(bluebuildcoords[0]).not.toEqual([1,1])
    expect(bluebuildcoords[1]).not.toEqual([1,1])
    expect(greenbuildcoords[0]).not.toEqual([1,1])
    expect(greenbuildcoords[1]).not.toEqual([1,1])
    expect(blackbuildcoords[0]).not.toEqual([1,1])
    expect(blackbuildcoords[1]).not.toEqual([1,1])
    //console.log(elements)
    //var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    //expect(tempElem.build).toEqual('');
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();  
  })
  test("noBuilds_selectedElemBlackShack_elementsArr11HasNoBuilds", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('noBuilds')).toBeInTheDocument();
      expect(screen.getByTestId('btnBlackShack')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([1,1])
    const selectedElem = scripts.getSelectedElem()
    console.log(selectedElem);
    const btnBlackShack = screen.getByTestId('btnBlackShack');
    btnBlackShack.onclick = scripts.btnBlackShackClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('btnBlackShack'));
    const noBuilds = screen.getByTestId('noBuilds');
    noBuilds.onclick = scripts.btnNoBuildClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('noBuilds'));
    
    const elements = scripts.getElements();
    //console.log(elements)
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.build).toEqual('');
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();
  })
  test("noBuilds_selectedElemBlackShack_blackShackCoordsDoNotContain11", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('noBuilds')).toBeInTheDocument();
      expect(screen.getByTestId('btnBlackShack')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([1,1])
    const selectedElem = scripts.getSelectedElem()
    console.log(selectedElem);
    const btnBlackShack = screen.getByTestId('btnBlackShack');
    btnBlackShack.onclick = scripts.btnBlackShackClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('btnBlackShack'));
    const noBuilds = screen.getByTestId('noBuilds');
    noBuilds.onclick = scripts.btnNoBuildClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('noBuilds'));
    
    const elements = scripts.getElements();
    //console.log(elements)
    const blackbuildcoords = scripts.getBlackCoords();
    expect(blackbuildcoords[1]).not.toEqual([1,1]);
    //var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    //expect(tempElem.build).toEqual('');
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();
  })
  test("noBuilds_selectedElemBlackStone_elementsArr11HasNoBuilds", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('noBuilds')).toBeInTheDocument();
      expect(screen.getByTestId('btnBlackStone')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([1,1])
    const selectedElem = scripts.getSelectedElem()
    console.log(selectedElem);
    const btnBlackStone = screen.getByTestId('btnBlackStone');
    btnBlackStone.onclick = scripts.btnBlackStoneClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('btnBlackStone'));
    const noBuilds = screen.getByTestId('noBuilds');
    noBuilds.onclick = scripts.btnNoBuildClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('noBuilds'));
    
    const elements = scripts.getElements();
    //console.log(elements)
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.build).toEqual('');
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();
  })
  test("noBuilds_selectedElemBlackStone_blackStoneCoordsDoNotContain11", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('noBuilds')).toBeInTheDocument();
      expect(screen.getByTestId('btnBlackStone')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([1,1])
    const selectedElem = scripts.getSelectedElem()
    console.log(selectedElem);
    const btnBlackStone = screen.getByTestId('btnBlackStone');
    btnBlackStone.onclick = scripts.btnBlackStoneClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('btnBlackStone'));
    const noBuilds = screen.getByTestId('noBuilds');
    noBuilds.onclick = scripts.btnNoBuildClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('noBuilds'));
    
    const elements = scripts.getElements();
    //console.log(elements)
    const blackbuildcoords = scripts.getBlackCoords();
    expect(blackbuildcoords[0]).not.toEqual([1,1]);
    //var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    //expect(tempElem.build).toEqual('');
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();
  })
  test("noBuilds_selectedElemBlueShack_elementsArr11HasNoBuilds", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('noBuilds')).toBeInTheDocument();
      expect(screen.getByTestId('btnBlueShack')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([1,1])
    const selectedElem = scripts.getSelectedElem()
    console.log(selectedElem);
    const btnBlueShack = screen.getByTestId('btnBlueShack');
    btnBlueShack.onclick = scripts.btnBlueShackClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('btnBlueShack'));
    const noBuilds = screen.getByTestId('noBuilds');
    noBuilds.onclick = scripts.btnNoBuildClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('noBuilds'));
    
    const elements = scripts.getElements();
    //console.log(elements)
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.build).toEqual('');
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();
  })
  test("noBuilds_selectedElemBlueShack_blueShackCoordsDoNotContain11", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('noBuilds')).toBeInTheDocument();
      expect(screen.getByTestId('btnBlueShack')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([1,1])
    const selectedElem = scripts.getSelectedElem()
    console.log(selectedElem);
    const btnBlueShack = screen.getByTestId('btnBlueShack');
    btnBlueShack.onclick = scripts.btnBlueShackClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('btnBlueShack'));
    const noBuilds = screen.getByTestId('noBuilds');
    noBuilds.onclick = scripts.btnNoBuildClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('noBuilds'));
    
    const elements = scripts.getElements();
    //console.log(elements)
    const bluebuildcoords = scripts.getBlueCoords();
    expect(bluebuildcoords[1]).not.toEqual([1,1]);
    //var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    //expect(tempElem.build).toEqual('');
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();
  })
  test("noBuilds_selectedElemBlueStone_elementsArr11HasNoBuilds", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('noBuilds')).toBeInTheDocument();
      expect(screen.getByTestId('btnBlueStone')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([1,1])
    const selectedElem = scripts.getSelectedElem()
    console.log(selectedElem);
    const btnBlueStone = screen.getByTestId('btnBlueStone');
    btnBlueStone.onclick = scripts.btnBlueStoneClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('btnBlueStone'));
    const noBuilds = screen.getByTestId('noBuilds');
    noBuilds.onclick = scripts.btnNoBuildClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('noBuilds'));
    
    const elements = scripts.getElements();
    //console.log(elements)
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.build).toEqual('');
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();
  })
  test("noBuilds_selectedElemBlueStone_blueStoneCoordsDoNotContain11", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('noBuilds')).toBeInTheDocument();
      expect(screen.getByTestId('btnBlueStone')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([1,1])
    const selectedElem = scripts.getSelectedElem()
    console.log(selectedElem);
    const btnBlueStone = screen.getByTestId('btnBlueStone');
    btnBlueStone.onclick = scripts.btnBlueStoneClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('btnBlueStone'));
    const noBuilds = screen.getByTestId('noBuilds');
    noBuilds.onclick = scripts.btnNoBuildClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('noBuilds'));
    
    const elements = scripts.getElements();
    //console.log(elements)
    const bluebuildcoords = scripts.getBlueCoords();
    expect(bluebuildcoords[0]).not.toEqual([1,1]);
    //var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    //expect(tempElem.build).toEqual('');
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();
  })
  test("noBuilds_selectedElemGreenShack_elementsArr11HasNoBuilds", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('noBuilds')).toBeInTheDocument();
      expect(screen.getByTestId('btnGreenShack')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([1,1])
    const selectedElem = scripts.getSelectedElem()
    console.log(selectedElem);
    const btnGreenShack = screen.getByTestId('btnGreenShack');
    btnGreenShack.onclick = scripts.btnGreenShackClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('btnGreenShack'));
    const noBuilds = screen.getByTestId('noBuilds');
    noBuilds.onclick = scripts.btnNoBuildClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('noBuilds'));
    
    const elements = scripts.getElements();
    //console.log(elements)
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.build).toEqual('');
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();
  })
  test("noBuilds_selectedElemGreenShack_greenShackCoordsDoNotContain11", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('noBuilds')).toBeInTheDocument();
      expect(screen.getByTestId('btnGreenShack')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([1,1])
    const selectedElem = scripts.getSelectedElem()
    console.log(selectedElem);
    const btnGreenShack = screen.getByTestId('btnGreenShack');
    btnGreenShack.onclick = scripts.btnGreenShackClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('btnGreenShack'));
    const noBuilds = screen.getByTestId('noBuilds');
    noBuilds.onclick = scripts.btnNoBuildClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('noBuilds'));
    
    const elements = scripts.getElements();
    //console.log(elements)
    const greenbuildcoords = scripts.getGreenCoords();
    expect(greenbuildcoords[1]).not.toEqual([1,1]);
    //var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    //expect(tempElem.build).toEqual('');
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();
  })
  test("noBuilds_selectedElemGreenStone_elementsArr11HasNoBuilds", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('noBuilds')).toBeInTheDocument();
      expect(screen.getByTestId('btnGreenStone')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([1,1])
    const selectedElem = scripts.getSelectedElem()
    console.log(selectedElem);
    const btnGreenStone = screen.getByTestId('btnGreenStone');
    btnGreenStone.onclick = scripts.btnGreenStoneClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('btnGreenStone'));
    const noBuilds = screen.getByTestId('noBuilds');
    noBuilds.onclick = scripts.btnNoBuildClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('noBuilds'));
    
    const elements = scripts.getElements();
    //console.log(elements)
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.build).toEqual('');
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();
  })
  test("noBuilds_selectedElemGreenStone_greenStoneCoordsDoNotContain11", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('noBuilds')).toBeInTheDocument();
      expect(screen.getByTestId('btnGreenStone')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([1,1])
    const selectedElem = scripts.getSelectedElem()
    console.log(selectedElem);
    const btnGreenStone = screen.getByTestId('btnGreenStone');
    btnGreenStone.onclick = scripts.btnGreenStoneClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('btnGreenStone'));
    const noBuilds = screen.getByTestId('noBuilds');
    noBuilds.onclick = scripts.btnNoBuildClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('noBuilds'));
    
    const elements = scripts.getElements();
    //console.log(elements)
    const greenbuildcoords = scripts.getGreenCoords();
    expect(greenbuildcoords[0]).not.toEqual([1,1]);
    //var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    //expect(tempElem.build).toEqual('');
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();
  })
  test("noBuilds_selectedElemWhiteShack_elementsArr11HasNoBuilds", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('noBuilds')).toBeInTheDocument();
      expect(screen.getByTestId('btnWhiteShack')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([1,1])
    const selectedElem = scripts.getSelectedElem()
    console.log(selectedElem);
    const btnWhiteShack = screen.getByTestId('btnWhiteShack');
    btnWhiteShack.onclick = scripts.btnWhiteShackClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('btnWhiteShack'));
    const noBuilds = screen.getByTestId('noBuilds');
    noBuilds.onclick = scripts.btnNoBuildClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('noBuilds'));
    
    const elements = scripts.getElements();
    //console.log(elements)
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.build).toEqual('');
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();
  })
  test("noBuilds_selectedElemWhiteShack_whiteShackCoordsDoNotContain11", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('noBuilds')).toBeInTheDocument();
      expect(screen.getByTestId('btnWhiteShack')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([1,1])
    const selectedElem = scripts.getSelectedElem()
    console.log(selectedElem);
    const btnWhiteShack = screen.getByTestId('btnWhiteShack');
    btnWhiteShack.onclick = scripts.btnWhiteShackClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('btnWhiteShack'));
    const noBuilds = screen.getByTestId('noBuilds');
    noBuilds.onclick = scripts.btnNoBuildClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('noBuilds'));
    
    const elements = scripts.getElements();
    //console.log(elements)
    const whitebuildcoords = scripts.getWhiteCoords();
    expect(whitebuildcoords[1]).not.toEqual([1,1]);
    //var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    //expect(tempElem.build).toEqual('');
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();
  })
  test("noBuilds_selectedElemWhiteStone_elementsArr11HasNoBuilds", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('noBuilds')).toBeInTheDocument();
      expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([1,1])
    const selectedElem = scripts.getSelectedElem()
    console.log(selectedElem);
    const btnWhiteStone = screen.getByTestId('btnWhiteStone');
    btnWhiteStone.onclick = scripts.btnWhiteStoneClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('btnWhiteStone'));
    const noBuilds = screen.getByTestId('noBuilds');
    noBuilds.onclick = scripts.btnNoBuildClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('noBuilds'));
    
    const elements = scripts.getElements();
    //console.log(elements)
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.build).toEqual('');
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();
  })
  test("noBuilds_selectedElemWhiteStone_whiteStoneCoordsDoNotContain11", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('noBuilds')).toBeInTheDocument();
      expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([1,1])
    const selectedElem = scripts.getSelectedElem()
    console.log(selectedElem);
    const btnWhiteStone = screen.getByTestId('btnWhiteStone');
    btnWhiteStone.onclick = scripts.btnWhiteStoneClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('btnWhiteStone'));
    const noBuilds = screen.getByTestId('noBuilds');
    noBuilds.onclick = scripts.btnNoBuildClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('noBuilds'));
    
    const elements = scripts.getElements();
    //console.log(elements)
    const whitebuildcoords = scripts.getWhiteCoords();
    expect(whitebuildcoords[0]).not.toEqual([1,1]);
    //var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    //expect(tempElem.build).toEqual('');
    //expect(selectHexItem.hasAttribute('open')).toBeFalsy();
  })
})

/*describe("btnNewBoard", ()=>{
  test("btnNewBoard_none_newBoardButtonDisabledAndBoardConfigElementsDisabled", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('btnNewBoard')).toBeInTheDocument();
      //expect(screen.getByTestId('secBoardControls')).toBeInTheDocument();
    });
    
    screen.getByTestId("btnNewBoard").onclick = scripts.btnNewBoardTest;  
    fireEvent.click(screen.getByTestId("btnNewBoard"));

    expect(screen.getByTestId("btnNewBoard").disabled).toBeTruthy();
    expect(screen.getByTestId("secBoardControls")).toHaveClass("disabled");
  })
})*/

describe("tileOneFlip", ()=>{
  test("tileOneFlip_baseBoardLoaded_checkboxCheckedFlipChanged", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      scripts.genEmptyBoard();
      screen.getByTestId("tileOneFlip").checked = false;
      expect(screen.getByTestId("tileOneFlip").checked).toBeFalsy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileOneFlip = screen.getByTestId("tileOneFlip");
    
    //console.log(tileOneFlip.checked)
    tileOneFlip.onclick = scripts.tileOneFlipClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileOneFlip.checked = true;
      fireEvent.click(screen.getByTestId("tileOneFlip"));
      console.log(tileOneFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileOneFlip.checked).toBe(true);
    expect(tileOrder).toEqual([1,2,3,4,5,6])
    expect(flip).toEqual([1,0,0,0,0,0])
  })
  test("tileOneFlip_baseBoardLoaded1AlreadyFlipped_checkboxUnCheckedFlipChanged", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      screen.getByTestId("tileOneFlip").checked = false;
      const tileOneFlip = screen.getByTestId("tileOneFlip");
      tileOneFlip.onclick = scripts.tileOneFlipClickTest;
      fireEvent.click(screen.getByTestId("tileOneFlip"));
      expect(screen.getByTestId("tileOneFlip").checked).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([1,0,0,0,0,0])
    });

    const tileOneFlip = screen.getByTestId("tileOneFlip");
    
    //console.log(tileOneFlip.checked)
    tileOneFlip.onclick = scripts.tileOneFlipClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileOneFlip.checked = true;
      fireEvent.click(screen.getByTestId("tileOneFlip"));
      //console.log(tileOneFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileOneFlip.checked).toBe(true);
    expect(tileOrder).toEqual([1,2,3,4,5,6])
    expect(flip).toEqual([0,0,0,0,0,0])
  })
})

describe("tileTwoFlip", ()=>{
  test("tileTwoFlip_baseBoardLoaded_checkboxCheckedFlipChanged", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileTwoFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileTwoFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      scripts.setTileOrder([1,2,3,4,5,6])
      scripts.setFlip([0,0,0,0,0,0])
      screen.getByTestId("tileTwoFlip").checked = false;
      expect(screen.getByTestId("tileTwoFlip").checked).toBeFalsy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileTwoFlip = screen.getByTestId("tileTwoFlip");
    
    //console.log(tileTwoFlip.checked)
    tileTwoFlip.onclick = scripts.tileTwoFlipClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileTwoFlip.checked = true;
      fireEvent.click(screen.getByTestId("tileTwoFlip"));
      console.log(tileTwoFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileTwoFlip.checked).toBe(true);
    expect(tileOrder).toEqual([1,2,3,4,5,6])
    expect(flip).toEqual([0,1,0,0,0,0])
  })
  test("tileTwoFlip_baseBoardLoaded1AlreadyFlipped_checkboxUnCheckedFlipChanged", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileTwoFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileTwoFlip')).toBeInTheDocument();
      scripts.setTileOrder([1,2,3,4,5,6])
      scripts.setFlip([0,0,0,0,0,0])
      screen.getByTestId("tileTwoFlip").checked = false;
      const tileTwoFlip = screen.getByTestId("tileTwoFlip");
      tileTwoFlip.onclick = scripts.tileTwoFlipClickTest;
      fireEvent.click(screen.getByTestId("tileTwoFlip"));
      expect(screen.getByTestId("tileTwoFlip").checked).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,1,0,0,0,0])
    });

    const tileTwoFlip = screen.getByTestId("tileTwoFlip");
    
    //console.log(tileTwoFlip.checked)
    tileTwoFlip.onclick = scripts.tileTwoFlipClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileTwoFlip.checked = true;
      fireEvent.click(screen.getByTestId("tileTwoFlip"));
      //console.log(tileTwoFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileTwoFlip.checked).toBe(true);
    expect(tileOrder).toEqual([1,2,3,4,5,6])
    expect(flip).toEqual([0,0,0,0,0,0])
  })
})

describe("tileThreeFlip", ()=>{
  test("tileThreeFlip_baseBoardLoaded_checkboxCheckedFlipChanged", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileThreeFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileThreeFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      scripts.setTileOrder([1,2,3,4,5,6])
      scripts.setFlip([0,0,0,0,0,0])
      screen.getByTestId("tileThreeFlip").checked = false;
      expect(screen.getByTestId("tileThreeFlip").checked).toBeFalsy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileThreeFlip = screen.getByTestId("tileThreeFlip");
    
    //console.log(tileThreeFlip.checked)
    tileThreeFlip.onclick = scripts.tileThreeFlipClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileThreeFlip.checked = true;
      fireEvent.click(screen.getByTestId("tileThreeFlip"));
      console.log(tileThreeFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileThreeFlip.checked).toBe(true);
    expect(tileOrder).toEqual([1,2,3,4,5,6])
    expect(flip).toEqual([0,0,1,0,0,0])
  })
  test("tileThreeFlip_baseBoardLoaded1AlreadyFlipped_checkboxUnCheckedFlipChanged", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileThreeFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileThreeFlip')).toBeInTheDocument();
      scripts.setTileOrder([1,2,3,4,5,6])
      scripts.setFlip([0,0,0,0,0,0])
      screen.getByTestId("tileThreeFlip").checked = false;
      const tileThreeFlip = screen.getByTestId("tileThreeFlip");
      tileThreeFlip.onclick = scripts.tileThreeFlipClickTest;
      fireEvent.click(screen.getByTestId("tileThreeFlip"));
      expect(screen.getByTestId("tileThreeFlip").checked).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,1,0,0,0])
    });

    const tileThreeFlip = screen.getByTestId("tileThreeFlip");
    
    //console.log(tileThreeFlip.checked)
    tileThreeFlip.onclick = scripts.tileThreeFlipClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileThreeFlip.checked = true;
      fireEvent.click(screen.getByTestId("tileThreeFlip"));
      //console.log(tileThreeFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileThreeFlip.checked).toBe(true);
    expect(tileOrder).toEqual([1,2,3,4,5,6])
    expect(flip).toEqual([0,0,0,0,0,0])
  })
})

describe("tileFourFlip", ()=>{
  test("tileFourFlip_baseBoardLoaded_checkboxCheckedFlipChanged", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileFourFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileFourFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      scripts.setTileOrder([1,2,3,4,5,6])
      scripts.setFlip([0,0,0,0,0,0])
      screen.getByTestId("tileFourFlip").checked = false;
      expect(screen.getByTestId("tileFourFlip").checked).toBeFalsy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileFourFlip = screen.getByTestId("tileFourFlip");
    
    //console.log(tileFourFlip.checked)
    tileFourFlip.onclick = scripts.tileFourFlipClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileFourFlip.checked = true;
      fireEvent.click(screen.getByTestId("tileFourFlip"));
      console.log(tileFourFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileFourFlip.checked).toBe(true);
    expect(tileOrder).toEqual([1,2,3,4,5,6])
    expect(flip).toEqual([0,0,0,1,0,0])
  })
  test("tileFourFlip_baseBoardLoaded1AlreadyFlipped_checkboxUnCheckedFlipChanged", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileFourFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileFourFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      scripts.setTileOrder([1,2,3,4,5,6])
      scripts.setFlip([0,0,0,0,0,0])
      screen.getByTestId("tileFourFlip").checked = false;
      const tileFourFlip = screen.getByTestId("tileFourFlip");
      tileFourFlip.onclick = scripts.tileFourFlipClickTest;
      fireEvent.click(screen.getByTestId("tileFourFlip"));
      expect(screen.getByTestId("tileFourFlip").checked).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,1,0,0])
    });

    const tileFourFlip = screen.getByTestId("tileFourFlip");
    
    //console.log(tileFourFlip.checked)
    tileFourFlip.onclick = scripts.tileFourFlipClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileFourFlip.checked = true;
      fireEvent.click(screen.getByTestId("tileFourFlip"));
      //console.log(tileFourFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileFourFlip.checked).toBe(true);
    expect(tileOrder).toEqual([1,2,3,4,5,6])
    expect(flip).toEqual([0,0,0,0,0,0])
  })
})

describe("tileFiveFlip", ()=>{
  test("tileFiveFlip_baseBoardLoaded_checkboxCheckedFlipChanged", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileFiveFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileFiveFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      screen.getByTestId("tileFiveFlip").checked = false;
      expect(screen.getByTestId("tileFiveFlip").checked).toBeFalsy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileFiveFlip = screen.getByTestId("tileFiveFlip");
    
    //console.log(tileFiveFlip.checked)
    tileFiveFlip.onclick = scripts.tileFiveFlipClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileFiveFlip.checked = true;
      fireEvent.click(screen.getByTestId("tileFiveFlip"));
      console.log(tileFiveFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileFiveFlip.checked).toBe(true);
    expect(tileOrder).toEqual([1,2,3,4,5,6])
    expect(flip).toEqual([0,0,0,0,1,0])
  })
  test("tileFiveFlip_baseBoardLoaded1AlreadyFlipped_checkboxUnCheckedFlipChanged", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileFiveFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileFiveFlip')).toBeInTheDocument();
      screen.getByTestId("tileFiveFlip").checked = false;
      const tileFiveFlip = screen.getByTestId("tileFiveFlip");
      tileFiveFlip.onclick = scripts.tileFiveFlipClickTest;
      fireEvent.click(screen.getByTestId("tileFiveFlip"));
      expect(screen.getByTestId("tileFiveFlip").checked).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,1,0])
    });

    const tileFiveFlip = screen.getByTestId("tileFiveFlip");
    
    //console.log(tileFiveFlip.checked)
    tileFiveFlip.onclick = scripts.tileFiveFlipClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileFiveFlip.checked = true;
      fireEvent.click(screen.getByTestId("tileFiveFlip"));
      //console.log(tileFiveFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileFiveFlip.checked).toBe(true);
    expect(tileOrder).toEqual([1,2,3,4,5,6])
    expect(flip).toEqual([0,0,0,0,0,0])
  })
})

describe("tileSixFlip", ()=>{
  test("tileSixFlip_baseBoardLoaded_checkboxCheckedFlipChanged", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileSixFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileSixFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      screen.getByTestId("tileSixFlip").checked = false;
      expect(screen.getByTestId("tileSixFlip").checked).toBeFalsy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileSixFlip = screen.getByTestId("tileSixFlip");
    
    //console.log(tileSixFlip.checked)
    tileSixFlip.onclick = scripts.tileSixFlipClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileSixFlip.checked = true;
      fireEvent.click(screen.getByTestId("tileSixFlip"));
      console.log(tileSixFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileSixFlip.checked).toBe(true);
    expect(tileOrder).toEqual([1,2,3,4,5,6])
    expect(flip).toEqual([0,0,0,0,0,1])
  })
  test("tileSixFlip_baseBoardLoaded1AlreadyFlipped_checkboxUnCheckedFlipChanged", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileSixFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileSixFlip')).toBeInTheDocument();
      screen.getByTestId("tileSixFlip").checked = false;
      const tileSixFlip = screen.getByTestId("tileSixFlip");
      tileSixFlip.onclick = scripts.tileSixFlipClickTest;
      fireEvent.click(screen.getByTestId("tileSixFlip"));
      expect(screen.getByTestId("tileSixFlip").checked).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,1])
    });

    const tileSixFlip = screen.getByTestId("tileSixFlip");
    
    //console.log(tileSixFlip.checked)
    tileSixFlip.onclick = scripts.tileSixFlipClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileSixFlip.checked = true;
      fireEvent.click(screen.getByTestId("tileSixFlip"));
      //console.log(tileSixFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileSixFlip.checked).toBe(true);
    expect(tileOrder).toEqual([1,2,3,4,5,6])
    expect(flip).toEqual([0,0,0,0,0,0])
  })
})

describe("tileOneSelector", ()=>{
  test("tileOneSelector_baseBoardLoadedSelectTile2_tileOneSelectorOn2tileTwoSelectorOn1", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    scripts.genEmptyBoard()
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      //screen.getByTestId("tileOne").checked = false;
      expect(screen.getByTestId("tileOne").options[0].selected).toBeTruthy();
      expect(screen.getByTestId("tileTwo").options[1].selected).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileOne = screen.getByTestId("tileOne");
    
    //console.log(tileOneFlip.checked)
    tileOne.onclick = scripts.tileOneSelectorClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileOneFlip.checked = true;
      tileOne.selectedIndex = 1;
      fireEvent.click(screen.getByTestId("tileOne"));
      //console.log(tileOneFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileOneFlip.checked).toBe(true);
    expect(tileOrder).toEqual([2,1,3,4,5,6])
    expect(flip).toEqual([0,0,0,0,0,0])
    expect(tileOne.options[1].selected).toBeTruthy();
    expect(screen.getByTestId("tileTwo").options[0].selected).toBeTruthy()
  })
  test("tileOneSelector_baseBoardLoadedSelectTile3_tileOneSelectorOn3tileThreeSelectorOn1", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    scripts.genEmptyBoard()
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      //screen.getByTestId("tileOne").checked = false;
      expect(screen.getByTestId("tileOne").options[0].selected).toBeTruthy();
      expect(screen.getByTestId("tileThree").options[2].selected).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileOne = screen.getByTestId("tileOne");
    
    //console.log(tileOneFlip.checked)
    tileOne.onclick = scripts.tileOneSelectorClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileOneFlip.checked = true;
      tileOne.selectedIndex = 2;
      fireEvent.click(screen.getByTestId("tileOne"));
      //console.log(tileOneFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileOneFlip.checked).toBe(true);
    expect(tileOrder).toEqual([3,2,1,4,5,6])
    expect(flip).toEqual([0,0,0,0,0,0])
    expect(tileOne.options[2].selected).toBeTruthy();
    expect(screen.getByTestId("tileThree").options[0].selected).toBeTruthy()
  })
  test("tileOneSelector_baseBoardLoadedSelectTile4_tileOneSelectorOn4tileFourSelectorOn1", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    scripts.genEmptyBoard()
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      //screen.getByTestId("tileOne").checked = false;
      expect(screen.getByTestId("tileOne").options[0].selected).toBeTruthy();
      expect(screen.getByTestId("tileFour").options[3].selected).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileOne = screen.getByTestId("tileOne");
    
    //console.log(tileOneFlip.checked)
    tileOne.onclick = scripts.tileOneSelectorClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileOneFlip.checked = true;
      tileOne.selectedIndex = 3;
      fireEvent.click(screen.getByTestId("tileOne"));
      //console.log(tileOneFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileOneFlip.checked).toBe(true);
    expect(tileOrder).toEqual([4,2,3,1,5,6])
    expect(flip).toEqual([0,0,0,0,0,0])
    expect(tileOne.options[3].selected).toBeTruthy();
    expect(screen.getByTestId("tileFour").options[0].selected).toBeTruthy()
  })
  test("tileOneSelector_baseBoardLoadedSelectTile5_tileOneSelectorOn5tileFiveSelectorOn1", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    scripts.genEmptyBoard()
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      //screen.getByTestId("tileOne").checked = false;
      expect(screen.getByTestId("tileOne").options[0].selected).toBeTruthy();
      expect(screen.getByTestId("tileFive").options[4].selected).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileOne = screen.getByTestId("tileOne");
    
    //console.log(tileOneFlip.checked)
    tileOne.onclick = scripts.tileOneSelectorClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileOneFlip.checked = true;
      tileOne.selectedIndex = 4;
      fireEvent.click(screen.getByTestId("tileOne"));
      //console.log(tileOneFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileOneFlip.checked).toBe(true);
    expect(tileOrder).toEqual([5,2,3,4,1,6])
    expect(flip).toEqual([0,0,0,0,0,0])
    expect(tileOne.options[4].selected).toBeTruthy();
    expect(screen.getByTestId("tileFive").options[0].selected).toBeTruthy()
  })
  test("tileOneSelector_baseBoardLoadedSelectTile6_tileOneSelectorOn6tileSixSelectorOn1", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    scripts.genEmptyBoard()
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      //screen.getByTestId("tileOne").checked = false;
      expect(screen.getByTestId("tileOne").options[0].selected).toBeTruthy();
      expect(screen.getByTestId("tileSix").options[5].selected).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileOne = screen.getByTestId("tileOne");
    
    //console.log(tileOneFlip.checked)
    tileOne.onclick = scripts.tileOneSelectorClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileOneFlip.checked = true;
      tileOne.selectedIndex = 5;
      fireEvent.click(screen.getByTestId("tileOne"));
      //console.log(tileOneFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileOneFlip.checked).toBe(true);
    expect(tileOrder).toEqual([6,2,3,4,5,1])
    expect(flip).toEqual([0,0,0,0,0,0])
    expect(tileOne.options[5].selected).toBeTruthy();
    expect(screen.getByTestId("tileSix").options[0].selected).toBeTruthy()
  })
})

describe("tileTwoSelector", ()=>{
  test("tileTwoSelector_baseBoardLoadedSelectTile1_tileTwoSelectorOn1tileOneSelectorOn2", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    scripts.genEmptyBoard()
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      //screen.getByTestId("tileOne").checked = false;
      expect(screen.getByTestId("tileTwo").options[1].selected).toBeTruthy();
      expect(screen.getByTestId("tileOne").options[0].selected).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileTwo = screen.getByTestId("tileTwo");
    
    //console.log(tileOneFlip.checked)
    tileTwo.onclick = scripts.tileTwoSelectorClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileOneFlip.checked = true;
      tileTwo.selectedIndex = 0;
      fireEvent.click(screen.getByTestId("tileTwo"));
      //console.log(tileOneFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileOneFlip.checked).toBe(true);
    expect(tileOrder).toEqual([2,1,3,4,5,6])
    expect(flip).toEqual([0,0,0,0,0,0])
    expect(tileTwo.options[0].selected).toBeTruthy();
    expect(screen.getByTestId("tileOne").options[1].selected).toBeTruthy()
  })
  test("tileTwoSelector_baseBoardLoadedSelectTile3_tileTwoSelectorOn3tileThreeSelectorOn2", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    scripts.genEmptyBoard()
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      //screen.getByTestId("tileOne").checked = false;
      expect(screen.getByTestId("tileTwo").options[1].selected).toBeTruthy();
      expect(screen.getByTestId("tileThree").options[2].selected).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileTwo = screen.getByTestId("tileTwo");
    
    //console.log(tileOneFlip.checked)
    tileTwo.onclick = scripts.tileTwoSelectorClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileOneFlip.checked = true;
      tileTwo.selectedIndex = 2;
      fireEvent.click(screen.getByTestId("tileTwo"));
      //console.log(tileOneFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileOneFlip.checked).toBe(true);
    expect(tileOrder).toEqual([1,3,2,4,5,6])
    expect(flip).toEqual([0,0,0,0,0,0])
    expect(tileTwo.options[2].selected).toBeTruthy();
    expect(screen.getByTestId("tileThree").options[1].selected).toBeTruthy()
  })
  test("tileTwoSelector_baseBoardLoadedSelectTile4_tileTwoSelectorOn4tileFourSelectorOn2", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    scripts.genEmptyBoard()
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      //screen.getByTestId("tileOne").checked = false;
      expect(screen.getByTestId("tileTwo").options[1].selected).toBeTruthy();
      expect(screen.getByTestId("tileFour").options[3].selected).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileTwo = screen.getByTestId("tileTwo");
    
    //console.log(tileOneFlip.checked)
    tileTwo.onclick = scripts.tileTwoSelectorClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileOneFlip.checked = true;
      tileTwo.selectedIndex = 3;
      fireEvent.click(screen.getByTestId("tileTwo"));
      //console.log(tileOneFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileOneFlip.checked).toBe(true);
    expect(tileOrder).toEqual([1,4,3,2,5,6])
    expect(flip).toEqual([0,0,0,0,0,0])
    expect(tileTwo.options[3].selected).toBeTruthy();
    expect(screen.getByTestId("tileFour").options[1].selected).toBeTruthy()
  })
  test("tileTwoSelector_baseBoardLoadedSelectTile5_tileTwoSelectorOn5tileFiveSelectorOn2", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    scripts.genEmptyBoard()
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      //screen.getByTestId("tileOne").checked = false;
      expect(screen.getByTestId("tileTwo").options[1].selected).toBeTruthy();
      expect(screen.getByTestId("tileFive").options[4].selected).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileTwo = screen.getByTestId("tileTwo");
    
    //console.log(tileOneFlip.checked)
    tileTwo.onclick = scripts.tileTwoSelectorClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileOneFlip.checked = true;
      tileTwo.selectedIndex = 4;
      fireEvent.click(screen.getByTestId("tileTwo"));
      //console.log(tileOneFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileOneFlip.checked).toBe(true);
    expect(tileOrder).toEqual([1,5,3,4,2,6])
    expect(flip).toEqual([0,0,0,0,0,0])
    expect(tileTwo.options[4].selected).toBeTruthy();
    expect(screen.getByTestId("tileFive").options[1].selected).toBeTruthy()
  })
  test("tileTwoSelector_baseBoardLoadedSelectTile6_tileTwoSelectorOn6tileSixSelectorOn2", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    scripts.genEmptyBoard()
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      //screen.getByTestId("tileOne").checked = false;
      expect(screen.getByTestId("tileTwo").options[1].selected).toBeTruthy();
      expect(screen.getByTestId("tileSix").options[5].selected).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileTwo = screen.getByTestId("tileTwo");
    
    //console.log(tileOneFlip.checked)
    tileTwo.onclick = scripts.tileTwoSelectorClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileOneFlip.checked = true;
      tileTwo.selectedIndex = 5;
      fireEvent.click(screen.getByTestId("tileTwo"));
      //console.log(tileOneFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileOneFlip.checked).toBe(true);
    expect(tileOrder).toEqual([1,6,3,4,5,2])
    expect(flip).toEqual([0,0,0,0,0,0])
    expect(tileTwo.options[5].selected).toBeTruthy();
    expect(screen.getByTestId("tileSix").options[1].selected).toBeTruthy()
  })
})

describe("tileThreeSelector", ()=>{
  test("tileThreeSelector_baseBoardLoadedSelectTile1_tileThreeSelectorOn1tileOneSelectorOn3", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    scripts.genEmptyBoard()
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      //screen.getByTestId("tileOne").checked = false;
      expect(screen.getByTestId("tileThree").options[2].selected).toBeTruthy();
      expect(screen.getByTestId("tileOne").options[0].selected).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileThree = screen.getByTestId("tileThree");
    
    //console.log(tileOneFlip.checked)
    tileThree.onclick = scripts.tileThreeSelectorClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileOneFlip.checked = true;
      tileThree.selectedIndex = 0;
      fireEvent.click(screen.getByTestId("tileThree"));
      //console.log(tileOneFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileOneFlip.checked).toBe(true);
    expect(tileOrder).toEqual([3,2,1,4,5,6])
    expect(flip).toEqual([0,0,0,0,0,0])
    expect(tileThree.options[0].selected).toBeTruthy();
    expect(screen.getByTestId("tileOne").options[2].selected).toBeTruthy()
  })
  test("tileThreeSelector_baseBoardLoadedSelectTile2_tileThreeSelectorOn2tileTwoSelectorOn3", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    scripts.genEmptyBoard()
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      //screen.getByTestId("tileOne").checked = false;
      expect(screen.getByTestId("tileThree").options[2].selected).toBeTruthy();
      expect(screen.getByTestId("tileTwo").options[1].selected).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileThree = screen.getByTestId("tileThree");
    
    //console.log(tileOneFlip.checked)
    tileThree.onclick = scripts.tileThreeSelectorClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileOneFlip.checked = true;
      tileThree.selectedIndex = 1;
      fireEvent.click(screen.getByTestId("tileThree"));
      //console.log(tileOneFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileOneFlip.checked).toBe(true);
    expect(tileOrder).toEqual([1,3,2,4,5,6])
    expect(flip).toEqual([0,0,0,0,0,0])
    expect(tileThree.options[1].selected).toBeTruthy();
    expect(screen.getByTestId("tileTwo").options[2].selected).toBeTruthy()
  })
  test("tileThreeSelector_baseBoardLoadedSelectTile4_tileThreeSelectorOn4tileFourSelectorOn3", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    scripts.genEmptyBoard()
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      //screen.getByTestId("tileOne").checked = false;
      expect(screen.getByTestId("tileThree").options[2].selected).toBeTruthy();
      expect(screen.getByTestId("tileFour").options[3].selected).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileThree = screen.getByTestId("tileThree");
    
    //console.log(tileOneFlip.checked)
    tileThree.onclick = scripts.tileThreeSelectorClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileOneFlip.checked = true;
      tileThree.selectedIndex = 3;
      fireEvent.click(screen.getByTestId("tileThree"));
      //console.log(tileOneFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileOneFlip.checked).toBe(true);
    expect(tileOrder).toEqual([1,2,4,3,5,6])
    expect(flip).toEqual([0,0,0,0,0,0])
    expect(tileThree.options[3].selected).toBeTruthy();
    expect(screen.getByTestId("tileFour").options[2].selected).toBeTruthy()
  })
  test("tileThreeSelector_baseBoardLoadedSelectTile5_tileThreeSelectorOn5tileFiveSelectorOn3", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    scripts.genEmptyBoard()
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      //screen.getByTestId("tileOne").checked = false;
      expect(screen.getByTestId("tileThree").options[2].selected).toBeTruthy();
      expect(screen.getByTestId("tileFive").options[4].selected).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileThree = screen.getByTestId("tileThree");
    
    //console.log(tileOneFlip.checked)
    tileThree.onclick = scripts.tileThreeSelectorClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileOneFlip.checked = true;
      tileThree.selectedIndex = 4;
      fireEvent.click(screen.getByTestId("tileThree"));
      //console.log(tileOneFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileOneFlip.checked).toBe(true);
    expect(tileOrder).toEqual([1,2,5,4,3,6])
    expect(flip).toEqual([0,0,0,0,0,0])
    expect(tileThree.options[4].selected).toBeTruthy();
    expect(screen.getByTestId("tileFive").options[2].selected).toBeTruthy()
  })
  test("tileThreeSelector_baseBoardLoadedSelectTile6_tileThreeSelectorOn6tileSixSelectorOn3", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    scripts.genEmptyBoard()
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      //screen.getByTestId("tileOne").checked = false;
      expect(screen.getByTestId("tileThree").options[2].selected).toBeTruthy();
      expect(screen.getByTestId("tileSix").options[5].selected).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileThree = screen.getByTestId("tileThree");
    
    //console.log(tileOneFlip.checked)
    tileThree.onclick = scripts.tileThreeSelectorClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileOneFlip.checked = true;
      tileThree.selectedIndex = 5;
      fireEvent.click(screen.getByTestId("tileThree"));
      //console.log(tileOneFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileOneFlip.checked).toBe(true);
    expect(tileOrder).toEqual([1,2,6,4,5,3])
    expect(flip).toEqual([0,0,0,0,0,0])
    expect(tileThree.options[5].selected).toBeTruthy();
    expect(screen.getByTestId("tileSix").options[2].selected).toBeTruthy()
  })
})

describe("tileFourSelector", ()=>{
  test("tileFourSelector_baseBoardLoadedSelectTile1_tileFourSelectorOn1tileOneSelectorOn4", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    scripts.genEmptyBoard()
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      //screen.getByTestId("tileOne").checked = false;
      expect(screen.getByTestId("tileFour").options[3].selected).toBeTruthy();
      expect(screen.getByTestId("tileOne").options[0].selected).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileFour = screen.getByTestId("tileFour");
    
    //console.log(tileOneFlip.checked)
    tileFour.onclick = scripts.tileFourSelectorClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileOneFlip.checked = true;
      tileFour.selectedIndex = 0;
      fireEvent.click(screen.getByTestId("tileFour"));
      //console.log(tileOneFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileOneFlip.checked).toBe(true);
    expect(tileOrder).toEqual([4,2,3,1,5,6])
    expect(flip).toEqual([0,0,0,0,0,0])
    expect(tileFour.options[0].selected).toBeTruthy();
    expect(screen.getByTestId("tileOne").options[3].selected).toBeTruthy()
  })
  test("tileFourSelector_baseBoardLoadedSelectTile2_tileFourSelectorOn2tileTwoSelectorOn4", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    scripts.genEmptyBoard()
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      //screen.getByTestId("tileOne").checked = false;
      expect(screen.getByTestId("tileFour").options[3].selected).toBeTruthy();
      expect(screen.getByTestId("tileTwo").options[1].selected).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileFour = screen.getByTestId("tileFour");
    
    //console.log(tileOneFlip.checked)
    tileFour.onclick = scripts.tileFourSelectorClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileOneFlip.checked = true;
      tileFour.selectedIndex = 1;
      fireEvent.click(screen.getByTestId("tileFour"));
      //console.log(tileOneFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileOneFlip.checked).toBe(true);
    expect(tileOrder).toEqual([1,4,3,2,5,6])
    expect(flip).toEqual([0,0,0,0,0,0])
    expect(tileFour.options[1].selected).toBeTruthy();
    expect(screen.getByTestId("tileTwo").options[3].selected).toBeTruthy()
  })
  test("tileFourSelector_baseBoardLoadedSelectTile3_tileFourSelectorOn3tileThreeSelectorOn4", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    scripts.genEmptyBoard()
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      //screen.getByTestId("tileOne").checked = false;
      expect(screen.getByTestId("tileFour").options[3].selected).toBeTruthy();
      expect(screen.getByTestId("tileThree").options[2].selected).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileFour = screen.getByTestId("tileFour");
    
    //console.log(tileOneFlip.checked)
    tileFour.onclick = scripts.tileFourSelectorClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileOneFlip.checked = true;
      tileFour.selectedIndex = 2;
      fireEvent.click(screen.getByTestId("tileFour"));
      //console.log(tileOneFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileOneFlip.checked).toBe(true);
    expect(tileOrder).toEqual([1,2,4,3,5,6])
    expect(flip).toEqual([0,0,0,0,0,0])
    expect(tileFour.options[2].selected).toBeTruthy();
    expect(screen.getByTestId("tileThree").options[3].selected).toBeTruthy()
  })
  test("tileFourSelector_baseBoardLoadedSelectTile5_tileFourSelectorOn5tileFiveSelectorOn4", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    scripts.genEmptyBoard()
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      //screen.getByTestId("tileOne").checked = false;
      expect(screen.getByTestId("tileFour").options[3].selected).toBeTruthy();
      expect(screen.getByTestId("tileFive").options[4].selected).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileFour = screen.getByTestId("tileFour");
    
    //console.log(tileOneFlip.checked)
    tileFour.onclick = scripts.tileFourSelectorClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileOneFlip.checked = true;
      tileFour.selectedIndex = 4;
      fireEvent.click(screen.getByTestId("tileFour"));
      //console.log(tileOneFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileOneFlip.checked).toBe(true);
    expect(tileOrder).toEqual([1,2,3,5,4,6])
    expect(flip).toEqual([0,0,0,0,0,0])
    expect(tileFour.options[4].selected).toBeTruthy();
    expect(screen.getByTestId("tileFive").options[3].selected).toBeTruthy()
  })
  test("tileFourSelector_baseBoardLoadedSelectTile6_tileFourSelectorOn6tileSixSelectorOn4", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    scripts.genEmptyBoard()
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      //screen.getByTestId("tileOne").checked = false;
      expect(screen.getByTestId("tileFour").options[3].selected).toBeTruthy();
      expect(screen.getByTestId("tileSix").options[5].selected).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileFour = screen.getByTestId("tileFour");
    
    //console.log(tileOneFlip.checked)
    tileFour.onclick = scripts.tileFourSelectorClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileOneFlip.checked = true;
      tileFour.selectedIndex = 5;
      fireEvent.click(screen.getByTestId("tileFour"));
      //console.log(tileOneFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileOneFlip.checked).toBe(true);
    expect(tileOrder).toEqual([1,2,3,6,5,4])
    expect(flip).toEqual([0,0,0,0,0,0])
    expect(tileFour.options[5].selected).toBeTruthy();
    expect(screen.getByTestId("tileSix").options[3].selected).toBeTruthy()
  })
})

describe("tileFiveSelector", ()=>{
  test("tileFiveSelector_baseBoardLoadedSelectTile1_tileFiveSelectorOn1tileOneSelectorOn5", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    scripts.genEmptyBoard()
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      //screen.getByTestId("tileOne").checked = false;
      expect(screen.getByTestId("tileFive").options[4].selected).toBeTruthy();
      expect(screen.getByTestId("tileOne").options[0].selected).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileFive = screen.getByTestId("tileFive");
    
    //console.log(tileOneFlip.checked)
    tileFive.onclick = scripts.tileFiveSelectorClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileOneFlip.checked = true;
      tileFive.selectedIndex = 0;
      fireEvent.click(screen.getByTestId("tileFive"));
      //console.log(tileOneFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileOneFlip.checked).toBe(true);
    expect(tileOrder).toEqual([5,2,3,4,1,6])
    expect(flip).toEqual([0,0,0,0,0,0])
    expect(tileFive.options[0].selected).toBeTruthy();
    expect(screen.getByTestId("tileOne").options[4].selected).toBeTruthy()
  })
  test("tileFiveSelector_baseBoardLoadedSelectTile2_tileFiveSelectorOn2tileTwoSelectorOn5", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    scripts.genEmptyBoard()
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      //screen.getByTestId("tileOne").checked = false;
      expect(screen.getByTestId("tileFive").options[4].selected).toBeTruthy();
      expect(screen.getByTestId("tileTwo").options[1].selected).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileFive = screen.getByTestId("tileFive");
    
    //console.log(tileOneFlip.checked)
    tileFive.onclick = scripts.tileFiveSelectorClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileOneFlip.checked = true;
      tileFive.selectedIndex = 1;
      fireEvent.click(screen.getByTestId("tileFive"));
      //console.log(tileOneFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileOneFlip.checked).toBe(true);
    expect(tileOrder).toEqual([1,5,3,4,2,6])
    expect(flip).toEqual([0,0,0,0,0,0])
    expect(tileFive.options[1].selected).toBeTruthy();
    expect(screen.getByTestId("tileTwo").options[4].selected).toBeTruthy()
  })
  test("tileFiveSelector_baseBoardLoadedSelectTile3_tileFiveSelectorOn3tileThreeSelectorOn5", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    scripts.genEmptyBoard()
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      //screen.getByTestId("tileOne").checked = false;
      expect(screen.getByTestId("tileFive").options[4].selected).toBeTruthy();
      expect(screen.getByTestId("tileThree").options[2].selected).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileFive = screen.getByTestId("tileFive");
    
    //console.log(tileOneFlip.checked)
    tileFive.onclick = scripts.tileFiveSelectorClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileOneFlip.checked = true;
      tileFive.selectedIndex = 2;
      fireEvent.click(screen.getByTestId("tileFive"));
      //console.log(tileOneFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileOneFlip.checked).toBe(true);
    expect(tileOrder).toEqual([1,2,5,4,3,6])
    expect(flip).toEqual([0,0,0,0,0,0])
    expect(tileFive.options[2].selected).toBeTruthy();
    expect(screen.getByTestId("tileThree").options[4].selected).toBeTruthy()
  })
  test("tileFiveSelector_baseBoardLoadedSelectTile4_tileFiveSelectorOn4tileFourSelectorOn5", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    scripts.genEmptyBoard()
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      //screen.getByTestId("tileOne").checked = false;
      expect(screen.getByTestId("tileFive").options[4].selected).toBeTruthy();
      expect(screen.getByTestId("tileFour").options[3].selected).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileFive = screen.getByTestId("tileFive");
    
    //console.log(tileOneFlip.checked)
    tileFive.onclick = scripts.tileFiveSelectorClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileOneFlip.checked = true;
      tileFive.selectedIndex = 3;
      fireEvent.click(screen.getByTestId("tileFive"));
      //console.log(tileOneFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileOneFlip.checked).toBe(true);
    expect(tileOrder).toEqual([1,2,3,5,4,6])
    expect(flip).toEqual([0,0,0,0,0,0])
    expect(tileFive.options[3].selected).toBeTruthy();
    expect(screen.getByTestId("tileFour").options[4].selected).toBeTruthy()
  })
  test("tileFiveSelector_baseBoardLoadedSelectTile6_tileFiveSelectorOn6tileSixSelectorOn5", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    scripts.genEmptyBoard()
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      //screen.getByTestId("tileOne").checked = false;
      expect(screen.getByTestId("tileFive").options[4].selected).toBeTruthy();
      expect(screen.getByTestId("tileSix").options[5].selected).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileFive = screen.getByTestId("tileFive");
    
    //console.log(tileOneFlip.checked)
    tileFive.onclick = scripts.tileFiveSelectorClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileOneFlip.checked = true;
      tileFive.selectedIndex = 5;
      fireEvent.click(screen.getByTestId("tileFive"));
      //console.log(tileOneFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileOneFlip.checked).toBe(true);
    expect(tileOrder).toEqual([1,2,3,4,6,5])
    expect(flip).toEqual([0,0,0,0,0,0])
    expect(tileFive.options[5].selected).toBeTruthy();
    expect(screen.getByTestId("tileSix").options[4].selected).toBeTruthy()
  })
})

describe("tileSixSelector", ()=>{
  test("tileSixSelector_baseBoardLoadedSelectTile1_tileSixSelectorOn1tileOneSelectorOn6", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    scripts.genEmptyBoard()
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      //screen.getByTestId("tileOne").checked = false;
      expect(screen.getByTestId("tileSix").options[5].selected).toBeTruthy();
      expect(screen.getByTestId("tileOne").options[0].selected).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileSix = screen.getByTestId("tileSix");
    
    //console.log(tileOneFlip.checked)
    tileSix.onclick = scripts.tileSixSelectorClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileOneFlip.checked = true;
      tileSix.selectedIndex = 0;
      fireEvent.click(screen.getByTestId("tileSix"));
      //console.log(tileOneFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileOneFlip.checked).toBe(true);
    expect(tileOrder).toEqual([6,2,3,4,5,1])
    expect(flip).toEqual([0,0,0,0,0,0])
    expect(tileSix.options[0].selected).toBeTruthy();
    expect(screen.getByTestId("tileOne").options[5].selected).toBeTruthy()
  })
  test("tileSixSelector_baseBoardLoadedSelectTile2_tileSixSelectorOn2tileTwoSelectorOn6", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    scripts.genEmptyBoard()
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      //screen.getByTestId("tileOne").checked = false;
      expect(screen.getByTestId("tileSix").options[5].selected).toBeTruthy();
      expect(screen.getByTestId("tileTwo").options[1].selected).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileSix = screen.getByTestId("tileSix");
    
    //console.log(tileOneFlip.checked)
    tileSix.onclick = scripts.tileSixSelectorClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileOneFlip.checked = true;
      tileSix.selectedIndex = 1;
      fireEvent.click(screen.getByTestId("tileSix"));
      //console.log(tileOneFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileOneFlip.checked).toBe(true);
    expect(tileOrder).toEqual([1,6,3,4,5,2])
    expect(flip).toEqual([0,0,0,0,0,0])
    expect(tileSix.options[1].selected).toBeTruthy();
    expect(screen.getByTestId("tileTwo").options[5].selected).toBeTruthy()
  })
  test("tileSixSelector_baseBoardLoadedSelectTile3_tileSixSelectorOn3tileThreeSelectorOn6", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    scripts.genEmptyBoard()
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      //screen.getByTestId("tileOne").checked = false;
      expect(screen.getByTestId("tileSix").options[5].selected).toBeTruthy();
      expect(screen.getByTestId("tileThree").options[2].selected).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileSix = screen.getByTestId("tileSix");
    
    //console.log(tileOneFlip.checked)
    tileSix.onclick = scripts.tileSixSelectorClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileOneFlip.checked = true;
      tileSix.selectedIndex = 2;
      fireEvent.click(screen.getByTestId("tileSix"));
      //console.log(tileOneFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileOneFlip.checked).toBe(true);
    expect(tileOrder).toEqual([1,2,6,4,5,3])
    expect(flip).toEqual([0,0,0,0,0,0])
    expect(tileSix.options[2].selected).toBeTruthy();
    expect(screen.getByTestId("tileThree").options[5].selected).toBeTruthy()
  })
  test("tileSixSelector_baseBoardLoadedSelectTile4_tileSixSelectorOn4tileFourSelectorOn6", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    scripts.genEmptyBoard()
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      //screen.getByTestId("tileOne").checked = false;
      expect(screen.getByTestId("tileSix").options[5].selected).toBeTruthy();
      expect(screen.getByTestId("tileFour").options[3].selected).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileSix = screen.getByTestId("tileSix");
    
    //console.log(tileOneFlip.checked)
    tileSix.onclick = scripts.tileSixSelectorClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileOneFlip.checked = true;
      tileSix.selectedIndex = 3;
      fireEvent.click(screen.getByTestId("tileSix"));
      //console.log(tileOneFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileOneFlip.checked).toBe(true);
    expect(tileOrder).toEqual([1,2,3,6,5,4])
    expect(flip).toEqual([0,0,0,0,0,0])
    expect(tileSix.options[3].selected).toBeTruthy();
    expect(screen.getByTestId("tileFour").options[5].selected).toBeTruthy()
  })
  test("tileSixSelector_baseBoardLoadedSelectTile6_tileSixSelectorOn5tileFiveSelectorOn6", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]]);
    scripts.setBlueCoords([[0,0],[0,0]]);
    scripts.setGreenCoords([[0,0],[0,0]]);
    scripts.setBlackCoords([[0,0],[0,0]]);
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    scripts.genEmptyBoard()
    await waitFor(() => {
      expect(screen.getByTestId('board')).toBeInTheDocument();
      //expect(screen.getByTestId('btnWhiteStone')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //expect(screen.getByTestId('tileOneFlip')).toBeInTheDocument();
      //scripts.genEmptyBoard();
      //screen.getByTestId("tileOne").checked = false;
      expect(screen.getByTestId("tileSix").options[5].selected).toBeTruthy();
      expect(screen.getByTestId("tileFive").options[4].selected).toBeTruthy();
      expect(scripts.getTileOrder()).toEqual([1,2,3,4,5,6])
      expect(scripts.getFlip()).toEqual([0,0,0,0,0,0])
    });

    const tileSix = screen.getByTestId("tileSix");
    
    //console.log(tileOneFlip.checked)
    tileSix.onclick = scripts.tileSixSelectorClickTest;
    await waitFor(()=>{
      //scripts.genEmptyBoard();
      //tileOneFlip.checked = true;
      tileSix.selectedIndex = 4;
      fireEvent.click(screen.getByTestId("tileSix"));
      //console.log(tileOneFlip.checked)
    })
    

    const tileOrder = scripts.getTileOrder();
    const flip = scripts.getFlip();

    //expect(tileOneFlip.checked).toBe(true);
    expect(tileOrder).toEqual([1,2,3,4,6,5])
    expect(flip).toEqual([0,0,0,0,0,0])
    expect(tileSix.options[4].selected).toBeTruthy();
    expect(screen.getByTestId("tileFive").options[5].selected).toBeTruthy()
  })
})

describe("btnP1Cube", () => {
  test("btnP1Cube_selectedElem11_elementsArr11HasP1Cube", async()=>{
    const scripts = require('./scripts');
    let board = document.getElementById('board');
    let buildingsBoard = document.getElementById('buildings');
    let tokenBoard = document.getElementById('tokens');
    const ctxBoard = board.getContext('2d');
    const ctxBuild = buildings.getContext('2d');
    const ctxTokens = tokens.getContext('2d');
    const selectPlayerCount = document.getElementById("selectPlayerCount");
    const noGameLoaded = document.getElementById("noGameLoaded");
    const P2 = scripts.P2;
    const EDGES = scripts.EDGES;
    const RADIUS = scripts.RADIUS;
    const TAU = scripts.TAU;
    const EDGE_LEN = scripts.EDGE_LEN;
    const GRID_Y_SPACE = scripts.GRID_Y_SPACE;
    const GRID_X_SPACE = scripts.GRID_X_SPACE;
    const GRID_Y_OFFSET = scripts.GRID_Y_OFFSET;
    const water = scripts.water;
    const forest = scripts.forest;
    const swamp = scripts.swamp;
    const desert = scripts.desert;
    const mount = scripts.mount;
    
    //var habs = scripts.habs;
    const cols1 = scripts.cols1;
    const habs1 = scripts.habs1;
    const cols2 = scripts.cols2;
    const habs2 = scripts.habs2;
    const cols3 = scripts.cols3;
    const habs3 = scripts.habs3;
    const cols4 = scripts.cols4;
    const habs4 = scripts.habs4;
    const cols5 = scripts.cols5;
    const habs5 = scripts.habs5;
    const cols6 = scripts.cols6;
    const habs6 = scripts.habs6;
    const whitebuild = scripts.whitebuild;
    const bluebuild = scripts.bluebuild;
    const greenbuild = scripts.greenbuild;
    const blackbuild = scripts.blackbuild;
    scripts.setWhiteCoords([[0,0],[0,0]])
    var p = P2()
    const testCoords = scripts.gridToPixel(1,1,p);
    var x = testCoords[0];
    var y = testCoords[1];
    await waitFor(() => {
      expect(screen.getByTestId('btnP1Cube')).toBeInTheDocument();
      expect(screen.getByTestId('selectHexItem')).toBeInTheDocument();
    });
    const selectHexItem = screen.getByTestId('selectHexItem');
    
    //console.log(selectHexItem.id)
    // Simulate a click at specific coordinates
    //const x = 100;
    //const y = 100;
    selectHexItem.setAttribute('open', '');
    scripts.setSelectedElem([1,1])
    const selectedElem = scripts.getSelectedElem()
    //console.log(selectedElem);
    const btnP1Cube = screen.getByTestId('btnP1Cube');
    btnP1Cube.onclick = scripts.btnP1CubeClickTest;
    //console.log(btnWhiteStone.onclick)
    fireEvent.click(screen.getByTestId('btnP1Cube'));
    
    const elements = scripts.getElements();
    //const whitebuildcoords = scripts.getWhiteCoords();
    //console.log(elements)
    var tempElem = elements.find(({ id }) => (id[0] == 1)&&(id[1] == 1))
    expect(tempElem.pieces).toContain('p1c');
  })  
})