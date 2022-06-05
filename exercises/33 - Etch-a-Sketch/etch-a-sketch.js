// select elements on page: canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const moveAmount = 10;
// set up canvas for drawing
// make a variable called height and width from canvas properties
const { width, height } = canvas;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
// create random x, y starting point


ctx.linejoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// write a draw function
function draw({ key }) {
    //increment hue
    hue += 10;
    ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
    console.log(key); 
    // start path
    ctx.beginPath();
    ctx.moveTo(x, y);
    // move x, y values depending on user action
  switch (key) {
      case 'ArrowUp':
          y -= moveAmount;
          break; 
      case 'ArrowRight':
          x += moveAmount;
          break;
      case 'ArrowDown':
          y += moveAmount;
          break;
      case 'ArrowLeft':
          x -= moveAmount;
          break;
  }
    ctx.lineTo(x, y);
    ctx.stroke();
}

// write a handler for the keys
function handleKey(e) {    
    if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });   
    }    
}

// clear/shake function
function clearCanvas() {
    canvas.classList.add('shake');
    canvas.addEventListener('animationend', function() {
        canvas.classList.remove('shake');
    }, 
    { once: true}
    );
}

// listen for arrow keys
window.addEventListener('keydown', handleKey) 
