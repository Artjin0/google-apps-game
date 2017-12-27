/*jslint browser, devel*/
/*global window*/
var ballX = 75;
var ballY = 75;
var ballSpeedX = 5;
var ballSpeedY = 7;
var canvas, canvasContext;
window.onload = function () {
    "use strict";
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    var fPS = 30;
    setInterval(window.updateAll, 1000 / fPS);

};

function updateAll() {
    "use strict";
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballX > canvas.width) {
        ballSpeedX *= -1;
    }
    if (ballX < 0) {
        ballSpeedX *= -1;
    }
    if (ballY > canvas.height) {
        ballSpeedY *= -1;
    }
    if (ballY < 0) {
        ballSpeedY *= -1;
    }
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    canvasContext.fillStyle = 'white';
    canvasContext.beginPath();
    canvasContext.arc(ballX, ballY, 10, 0, Math.PI * 2, true);
    canvasContext.fill();
}