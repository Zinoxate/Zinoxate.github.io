var scene;
var paddle;
var paddle2;
var CHANGE = 10;
var ball;


function checkCollisions() {
        
        if (paddle.collidesWith(ball)) {
        
    } 
    else if (paddle2.collidesWith(ball)){
        
    }
}

function Paddle() {
    tPaddle = new Sprite(scene, "paddle.png", 50, 15);
    tPaddle.setAngle(180);
    tPaddle.setSpeed(0);

    tPaddle.checkKeys = function() {
        if (keysDown[K_UP]) {
            this.changeYby(-CHANGE);
            if (this.y - this.width / 2 < 0) {
                this.setY(this.width / 2);
            }
            moveSound.play();
        }

        if (keysDown[K_DOWN]) {
            this.changeYby(CHANGE);
            if (this.y + this.width / 2 > scene.height) {
                this.setY(scene.height - this.width / 2);
            }
            moveSound.play();
        }
    }

    return tPaddle
}


function init() {
    scene = new Scene();
    scene.setSize(700,300);
    paddle = new Paddle();
    paddle2 = new Paddle();
    paddle2.setSpeed(5);
    paddle2.setBoundAction(BOUNCE);
    paddle.setPosition(15, scene.height / 2);
    paddle2.setPosition(scene.width - 20, scene.height / 2);
    ball = new Sprite(scene, "https://aharrisbooks.net/h5g/h5g_5/redBall.png" ,50, 50);
    ball.setMoveAngle(60);
    ball.setSpeed(8);
    ball.setBoundAction(BOUNCE);
    
    
    scene.start();
}



function update() {
    
    scene.clear();
    checkCollisions();
    paddle.checkKeys();
    paddle2.update();
    paddle.update();
    ball.update();
}
