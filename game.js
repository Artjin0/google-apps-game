/*jslint browser, devel, es6*/
/*global window*/
var ballX = 75;
var ballY = 75;
var ballSpeedX = 5;
var ballSpeedY = 7;
<<<<<<< HEAD
var canvas;
var canvasContext;
=======
const PADDLE_WIDTH = 100;
const PADDLE_THICKNESS = 10;
var paddleX = 400;

var canvas, canvasContext;

function ballReset() {
    "use strict";
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;

}

function updateMousePos(evt) {
    "use strict";
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;

    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    //var mouseY = evt.clientY - rect.top - root.scrollTop;
    paddleX = mouseX - PADDLE_WIDTH;
}

>>>>>>> b9c77304f9fdda0331dd99c66889f15f078c94d9
window.onload = function () {
    "use strict";
    canvas = document.getElementById("gameCanvas");
    canvasContext = canvas.getContext("2d");

    var fPS = 30;
    setInterval(window.updateAll, 1000 / fPS);
<<<<<<< HEAD
    canvasContext.fillStyle = "black";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
=======

    canvas.addEventListener('mousemove', updateMousePos);

>>>>>>> b9c77304f9fdda0331dd99c66889f15f078c94d9
};



function moveAll() {
    "use strict";
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballX > canvas.width) { //right
        ballSpeedX *= -1;
    }
    if (ballX < 0) { //left
        ballSpeedX *= -1;
    }
    if (ballY > canvas.height) { //bottom
        ballReset();
        //ballSpeedY *= -1;
    }
    if (ballY < 0) { //top
        ballSpeedY *= -1;
    }
<<<<<<< HEAD
    canvasContext.fillStyle = "black";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    canvasContext.fillStyle = "white";
=======
}



function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
    "use strict";
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor);
}

function colorCircle(centerX, centerY, radius, fillColor) {
    "use strict";
    canvasContext.fillStyle = fillColor;
>>>>>>> b9c77304f9fdda0331dd99c66889f15f078c94d9
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    canvasContext.fill();
}

function drawAll() {
    "use strict";
    colorRect(0, 0, canvas.width, canvas.height, 'black');
    colorCircle(ballX, ballY, 10, 'white');
    colorRect(paddleX, canvas.height - PADDLE_THICKNESS, PADDLE_WIDTH, PADDLE_THICKNESS, 'white');

}

function updateAll() {
    "use strict";
    moveAll();
    drawAll();
}