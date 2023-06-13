function preload(){
}
function setup(){
    canvas = createCanvas(600,550);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function take_snapshot(){
    save("anbu.png");
}
function draw(){
    image(video,50,50,500,450);
    fill(0,200,50);
    stroke(0,200,50);
    rect(50, 50, 20, 450);
    rect(50,50,490,20);
    rect(530,60,20,450);
    rect(60,480,490,20);
    stroke(255,0,0);
    fill(255,0,0);
    circle(60, 60, 50);
    circle(540,60,50);
    circle(60,490,50);
    circle(540, 490, 50);
}
