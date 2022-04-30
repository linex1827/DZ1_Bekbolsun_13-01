let SC = document.getElementById("screen");
let CX = SC.getContext("2d");

let bird = new Image();
let bg = new Image();
let fg = new Image();
let pipeUp = new Image();
let pipeBottom = new Image();

bird.src = "img/flappy_bird_bird.png";
bg.src = "img/flappy_bird_bg.png";
fg.src = "img/flappy_bird_fg.png";
pipeUp.src = "img/flappy_bird_pipeUp.png";
pipeBottom.src = "img/flappy_bird_pipeBottom.png";


let gap = 90;


document.addEventListener("keydown", moveUp);

function moveUp() {
 yPos -= 25;
}


let obj = [];

obj[0] = {
 x : SC.width,
 y : 0
}

let score = 0;

let xPos = 10;
let yPos = 150;
let grav = 1.5;

function draw() {
 CX.drawImage(bg, 0, 0);

 for(let i = 0; i < obj.length; i++) {
 CX.drawImage(pipeUp, obj[i].x, obj[i].y);
 CX.drawImage(pipeBottom, obj[i].x, obj[i].y + pipeUp.height + gap);

 obj[i].x--;


 if(obj[i].x == 125) {

 obj.push({

 x : SC.width,


 y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height

 }
 
 );
 
 }

 if(xPos + bird.width >= obj[i].x

 && xPos <= obj[i].x + pipeUp.width

 && (yPos <= obj[i].y + pipeUp.height
 || yPos + bird.height >= obj[i].y + pipeUp.height + gap) || yPos + bird.height >= SC.height - fg.height)
 {
 location.reload();
 }

 }

 CX.drawImage(fg, 0, SC.height - fg.height);

 CX.drawImage(bird, xPos, yPos);

 yPos += grav;

 CX.fillStyle = "#000";

 CX.font = "24px Verdana";

 CX.fillText("Счет: " + score, 10, SC.height - 20);

 requestAnimationFrame(draw);


 
}

pipeBottom.onload = draw;