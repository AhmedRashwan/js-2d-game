'use strict';
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width / 2;
var y = canvas.height - 30;
var width = 50;
var height = 50;
var ballRadius = 10
var dx = 6;
var dy = -6;


var paddleHeight = 10;
var paddleWidth = 100;

var upperPaddle = new Paddle((canvas.width - paddleWidth) / 2, paddleHeight * 4, paddleWidth, paddleHeight)
var lowerPaddle = new Paddle((canvas.width - paddleWidth) / 2, canvas.height - paddleHeight * 4, paddleWidth, paddleHeight)

var rightClick = false;
var leftClick = false;

//upper paddle handlers
window.addEventListener('keydown', (e) => {
    upperPaddle.keyDownHandler(e, 68, 65)
});
window.addEventListener('keyup', (e) => {
    upperPaddle.keyUpHandler(e, 68, 65)
});

//lower paddle handlers
window.addEventListener('keydown', (e) => {
    lowerPaddle.keyDownHandler(e, 39, 37)
});
window.addEventListener('keyup', (e) => {
    lowerPaddle.keyUpHandler(e, 39, 37)
});



function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();

}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight * 4, paddleWidth, paddleHeight);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    upperPaddle.draw();
    lowerPaddle.draw();

    upperPaddle.move(canvas.width);
    lowerPaddle.move(canvas.width);

    let bounceX = directionX();
    let bounceY = directionY();

    if (bounceX) {
        dx = -dx;
    }

    if (bounceY) {
        console.log('ahahahha');
        
        dy = -dy;
    }

    x += dx;
    y += dy;

}

function gameOver() {
    alert('Game over!')
    document.location.reload();
}

function collision(paddel) {
    return x < paddel.paddleX || x > paddel.paddleX + paddel.paddleWidth;
}

function directionX() {
    let bounce = false;
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        bounce = true
    }
    return bounce;
}

function directionY() {
    if (collision(upperPaddle) && y < upperPaddle.paddleY || collision(lowerPaddle) && y > lowerPaddle.paddleY) {
        return true;
    } else if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        gameOver();
    }
    return false;
    // if (y + dy < ballRadius) {
    //    bounce = true;
    // } else if (y + dy > canvas.height - ballRadius) {
    //     bounce = true;
    // }
    // if(collision(upperPaddle) || collision(lowerPaddle)){
    //     return bounce;
    // }
    // return bounce;
}
animate();