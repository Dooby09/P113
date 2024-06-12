function preload(){
    
}

function setup(){
    canvas=createCanvas(550,400);
    canvas.position(150,150);

    video=createCapture(VIDEO);
    video.size(100,100);
    video.hide();
}

function draw(){
    
    fill ("green");
    rect(150,100,300,10);

    fill ("green");
    rect(150,350,300,10);
    
    fill ("green");
    rect(120,125,10,200);

    fill ("green");
    rect(475,125,10,200);

    fill("red");
    circle(125,100,60);

    fill("red");
    circle(475,100,60);

    fill("red");
    circle(475,350,60);

    fill("red");
    circle(125,350,60);

    image(video,225,150,150,150);
    
}

function takesnapshot(){
    save("selfie.png");
}
