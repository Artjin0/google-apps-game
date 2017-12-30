/*jslint browser, devel, es6*/
/*global window*/
var ballX = 75;
var ballY = 75;
var ballSpeedX = 5;
var ballSpeedY = 7;
const PADDLE_WIDTH = 100;
const PADDLE_THICKNESS = 10;
const PADDLE_DIST_FROM_EDGE = 60;
var paddleX = 400;

var canvas;
var canvasContext;

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

<<<<<<< HEAD
window.onload = function () {
    "use strict";
    canvas = document.getElementById("gameCanvas");
    canvasContext = canvas.getContext("2d");

    var fPS = 30;
    setInterval(window.updateAll, 1000 / fPS);

    canvas.addEventListener("mousemove", updateMousePos);
};

=======
>>>>>>> d92fec4cdd8cb9de39d935d4ed2aeac2a1b479c2
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
    }
    if (ballY < 0) { //top
        ballSpeedY *= -1;
        console.log(ballY);
    }

<<<<<<< HEAD
=======
    var paddleTopEdgeY = canvas.height - PADDLE_DIST_FROM_EDGE;
    var paddleBottomEdgeY = paddleTopEdgeY + PADDLE_THICKNESS;
    var paddleLeftEdgeX = paddleX;
    var paddleRightEdgeX = paddleLeftEdgeX + PADDLE_WIDTH;

    if (
        ballY > paddleTopEdgeY &&
        ballY < paddleBottomEdgeY &&
        ballX > paddleLeftEdgeX &&
        ballX < paddleRightEdgeX
    ) {

        ballSpeedY *= -1;
        var centerOfPaddleX = paddleX + PADDLE_WIDTH / 2;
        var ballDistPromCenterOfPaddleX = ballX - centerOfPaddleX;
        ballSpeedX = ballDistPromCenterOfPaddleX * 0.5;
    }
}


>>>>>>> d92fec4cdd8cb9de39d935d4ed2aeac2a1b479c2
function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
    "use strict";
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor);
}

function colorCircle(centerX, centerY, radius, fillColor) {
    "use strict";
    canvasContext.fillStyle = fillColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    canvasContext.fill();
}

function drawAll() {
    "use strict";
<<<<<<< HEAD
    colorRect(0, 0, canvas.width, canvas.height, "black");
    colorCircle(ballX, ballY, 10, "white");
    colorRect(paddleX, canvas.height - PADDLE_THICKNESS, PADDLE_WIDTH, PADDLE_THICKNESS, "white");
=======
    colorRect(0, 0, canvas.width, canvas.height, 'black');
    colorCircle(ballX, ballY, 10, 'blue');
    colorRect(paddleX, canvas.height - PADDLE_DIST_FROM_EDGE, PADDLE_WIDTH, PADDLE_THICKNESS, 'yellow');
>>>>>>> d92fec4cdd8cb9de39d935d4ed2aeac2a1b479c2

}

function updateAll() {
    "use strict";
    moveAll();
    drawAll();
}

window.onload = function () {
    "use strict";
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    var fPS = 30;
    setInterval(updateAll, 1000 / fPS);

    canvas.addEventListener('mousemove', updateMousePos);

};