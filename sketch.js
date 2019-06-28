var amplitude;

var frames = 200
var num = 50
var playing;
var mic;
var smoothMicLevel = 0;



var theta = 0.0001;

var c = ['white']

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('black');
    

    slider = createSlider(0,1,0.5,0.01);
    mic = new p5.AudioIn()
    mic.start();
}

function draw() {
    line(windowWidth, windowHeight)

    background('black');

    stroke(random(c));
    translate(width / 2, height / 2);
    micLevel = mic.getLevel() * 10000;
    multiplier = slider.value()
    micLevel = micLevel* multiplier
    // console.log(micLevel)
    fill(255,micLevel/2);
    ellipse(0, 0, 200, 200);


    for (i = 0; i < num; i++) {
        push();
        let offSet = TWO_PI / num * i;
        rotate(offSet);
        sz = 200;
        x = map(sin(theta), -1, 1, sz, width * 0.2);
        translate(x, 90);
        push();
        line(height / 2, width / 2)
        rotate(theta);


        if (i % 2 == 0) {
            // fill(100, 100);
            rect(micLevel, micLevel, sz, sz * 1);

        } else {
            stroke('#42d6f7')
            line(699, 1000, -100, -9000)
        }


        pop();
        pop();
    }
    theta += TWO_PI / frames;
}


function toggleListen() {
    if (getAudioContext().state !== 'running') {
        getAudioContext().resume();
        console.log("start")
        mic.start();
    } else {
        console.log("stop")
        // mic.stop();
    }
}

function mousePressed() {
    toggleListen()
    // mic.stop()
}



