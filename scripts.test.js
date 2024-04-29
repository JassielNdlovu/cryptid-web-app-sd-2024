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

test('testJestSetup', ()=> {
    const thisIsTrue = true
    expect(thisIsTrue).toBe(true)
  })

  test('createPoly_sixSides_outputContainsSixElements', ()=> {
    const board = document.getElementById('board');
    const ctxBoard = board.getContext('2d');
    const TAU = 2 * Math.PI;
    const RADIUS = 30;
    const scripts = require('./scripts');
    
    expect(scripts.createPoly(6,RADIUS).length).toBe(6);
  })
