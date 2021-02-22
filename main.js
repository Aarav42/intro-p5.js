function preload(){

}
function setup(){
canvas=createCanvas(640,480);
canvas.position(300,300);
video=createCapture(VIDEO);
video.hide();
tintcolour="";
}
function draw(){
    image(video,230,150,220,200);
tint(tintcolour);
fill(255,0,0)
stroke(255,0,0)
circle(50,50,80)

fill(0,128,0)
stroke(0,128,0)
rect(90,40,460,20)

rect(90,40,460,20)

fill(255,0,0)
stroke(255,0,0)
circle(590,50,80)

fill(0,128,0)
stroke(0,128,0)
rect(90,40,460,20)

rect(90,40,460,20)
}
function take_snapshot(){
save('Ahs.png');
}
function filtertint(){
    tintcolour=document.getElementById("colour_name").value;

}