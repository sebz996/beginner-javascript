// select elements on page: canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');

// set up canvas for drawing
// make a variable called height and width from canvas properties
const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
// create random x, y starting point


ctx.linejoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// write a draw function

// write a handler for the keys

// clear/shake function

// listen for arrow keys
