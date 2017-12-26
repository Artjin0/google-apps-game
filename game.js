/*jslint browser, devel*/
/*global window*/
var ballX = 75;
var ballSpeedX = 5;
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
    // console.log(ballX)
    if (ballX > canvas.width) {
        ballSpeedX *= -1;
    }
    if (ballX < 1) {
        ballSpeedX += 1;
    }
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    canvasContext.fillStyle = 'white';
    canvasContext.beginPath();
    canvasContext.arc(ballX, 100, 10, 0, Math.PI * 2, true);
    canvasContext.fill();
}