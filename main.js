function preload(){

}

function setup(){
    canvas = createCanvas(650, 500);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.
    video.hide();

    tint_color="";
}

function draw(){
    image(video,0,0,400,350);
    fill(255,0,100);
    stroke(255,0,100)
    circle(50,50,100)
    
}

function take_snapshot(){
    save("anbu.png");
}

function filter_tint(){
    if(document.getElementById("color_name").value==""){
        document.getElementById("color").innerHTML="Please fill the Textinput"
        document.getElementById("color").style.color=red;
    }
    else{
    tint_color=document.getElementById("color_name").value
    }
}