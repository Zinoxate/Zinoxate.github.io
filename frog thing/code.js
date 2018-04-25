var scene;
var fly;
var frog;
var ribbit;
var flies;
var NUMFLIES;
var MAXTIME = 10;
var timer;
var time;
var gui;
var score = 0;

function checkCollisions() {
    if (frog.collidesWith(fly)) {
        ribbit.play();
        fly.hide();
        score += 10;
    }
}

function checkTime() {
    time = timer.getElapsedTime();
    if (time > MAXTIME) {
        scene.stop();
    }
}

function updateGUI() {
    gui.innerHtml = "Score" + score + "Time:" + time;
}

function restart() {
    //document.location.href = "";
    time = 0;
    timer.reset();
    score = 0;
    scene.start();
}

//Sets the scene, calls the update function, creates the Sprites

function init() {
    gui = document.getElementBy('gui');
    timer = new Timer();
    scene = new Scene();
    scene.setBG("green");
    scene.setSize(300, 400);
    fly = new Fly();
    frog = new Frog();
    leaves = new Sprite(scene, "http://aharrisbooks.net/h5g/h5g_7/leaves.png", 400, 450);
    ribbit = new Sound("https://jlaw21.github.io/Resources/ribbit.mp3");
    leaves.setSpeed(0);
    scene.start();

}

//Makes things MOVE, draws things on the canvas

function update() {
    //Clears the scene so we have clean movement
    scene.clear();
    checkTime();
    updateGUI();
    //MOVE THINGS
    fly.wriggle();
    frog.checkKeys();
    //REDRAW THINGS
    checkCollisions();
    leaves.update();

    for (var i = 0; i < flies.length; i++) {
        flies[i].wriggle();
        checkCollisions(i);
        flies[i].update();
    }

    frog.update();

}