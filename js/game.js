'use strict';
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width / 2;
var y = canvas.height - 30;
var width = 50;
var height = 50;
var ballRadius = 10
var dx = 2;
var dy = -2;

function animateBall() {
    requestAnimationFrame(animateBall);

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    x += dx;
    y += dy;
}

animateBall();

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;

function animatePaddle() {
    requestAnimationFrame(animatePaddle);

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight * 4, paddleWidth, paddleHeight);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
    if(rightClick && paddleX + paddleWidth < canvas.width) {
        paddleX += 7;
    }
    else if(leftClick && paddleX > 0) {
        paddleX -= 7;
    }
}

var rightClick = false;
var leftClick = false;

window.addEventListener('keydown', keyDownHandler, false);
window.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(e){
    if(e.keyCode == 68){
        rightClick = true;
    }
    if(e.keyCode == 65){
        leftClick = true;
    }
}

function keyUpHandler(e){
    if(e.keyCode == 68){
        rightClick = false;
    }
    if(e.keyCode == 65){
        leftClick = false;
    }
}

animatePaddle();
