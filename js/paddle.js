class Paddle {
    constructor(paddelX, paddelY, paddleWidth, paddleHeight) {
        this.x = paddelX;
        this.y = paddelY;
        this.width = paddleWidth;
        this.height = paddleHeight;
        this.leftClick = false;
        this.rightClick = false;
    }

    get paddleX() {
        return this.x;
    }

    get paddleY() {
        return this.y;
    }

    set paddleX(value) {
        this.x = value;
    }
    get paddleWidth() {
        return this.width;
    }

    draw() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.closePath();
    }

    move(width) {
        if (this.rightClick && this.x + this.width < width) {
            this.x += 7;
        } else if (this.leftClick && this.x > 0) {
            this.x -= 7;
        }
    }

    keyDownHandler(e, key1, key2) {
        if (e.keyCode == key1) {
            this.rightClick = true;
        }
        if (e.keyCode == key2) {
            this.leftClick = true;
        }
    }
    keyUpHandler(e, key1, key2) {
        if (e.keyCode == key1) {
            this.rightClick = false;
        }
        if (e.keyCode == key2) {
            this.leftClick = false;
        }
    }

}