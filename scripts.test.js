//import {screen,render} from '@testing-library/dom';
//import userEvent from '@testing-library/user-event';

//document.body.innerHTML = html;
//let board = document.getElementById('board');
//let buildingsBoard = document.getElementById('buildings');
//let tokenBoard = document.getElementById('tokens');
//var buildingsBoard = document.createElement('canvas');
//const ctxBoard = board.getContext('2d');
//const ctxBuild = buildings.getContext('2d');
//const ctxTokens = tokens.getContext('2d');
import html from './index.html';
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
})


