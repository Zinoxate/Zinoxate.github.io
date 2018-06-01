var ball;
var bhoop;
var game;
var background;
var chillMusic;

function Ball() {
    tBall = new Sprite(game, 'basketball.png', 50, 50);
    tBall.setPosition(50, 540);


    tBall.checkGravity = function() {
        if (this.falling) {
            this.addVector(180, 1);

        }
        //stop if on floor
        if (this.y >= 540) {
            this.falling = false;
            
        }
    } //end

    tBall.checkMovement = function() {
        if (keysDown[K_SPACE]) {
                this.addVector(0, 3.5);
                this.falling = true;
            } // end
    } //end
    return tBall;
} //end function


function init() {

    game = new Scene();


    background = new Sprite(game, 'sky.jpg', 900, 700);
    background.setPosition(400, 300)

    bhoop = new Sprite(game, 'hoop.png', 200, 200);
    bhoop.setPosition(700, 150)

    ball = new Ball();

    chillMusic = new Sound('Oddwin.mp3');

    bhoop.setSpeed(0);
    background.setSpeed(0);

    chillMusic.play();
    game.start();
}


function update() {

    game.clear();

    ball.checkMovement();
    ball.checkGravity();

    background.update();
    bhoop.update();
    ball.update();

}