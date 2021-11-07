var canvas = new fabric.Canvas("myCanvas");
ball_x =10;
ball_y =10;
var block_image_width = 30;
var block_image_height = 30;

var ball_object =("");
var block_image_objects=("");

function ballupdate(){
fabric.Image.fromURL("golf_ball.jpeg",function(Img){
 ball_object=Img;
 ball_object.scaleToWidth(150);
 ball_object.scaleToHeight(140);
 ball_object.set({
top:ball_y,
left:ball_x  
 });
 canvas.add(ball_object);
});

}
function new_image(get_image){
   fabric.Image.fromURL(get_image,function(Img){
    block_image_objects=Img;
    block_image_objects.scaleToWidth(block_image_width);
block_image_objects.scaleToHeight(block_image_height);
block_image_objects.set({
top:ball_y,
left:ball_x
});
canvas.add(block_image_objects);
   });
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
var keypressed=e.keyCode;
console.log(keypressed);
if(e.shiftKey == true && keypressed =="80" ){
console.log("p and shift pressed togther");
block_image_height = block_image_height+10;
block_image_width = block_image_width+10;
document.getElementById("current-width").innerHTML=block_image_width;
document.getElementById("current-height").innerHTML=block_image_height;
}
if(e.shiftKey == true && keypressed =="77" ){
    console.log("m and shift pressed togther");
    block_image_height = block_image_height-10;
    block_image_width = block_image_width-10;
    document.getElementById("current-width").innerHTML=block_image_width;
    document.getElementById("current-height").innerHTML=block_image_height;
    }
if(keypressed=="38"){
up();
console.log("up");   
}
if(keypressed=="40"){
    down();
    console.log("down");   
    }
    if(keypressed=="37"){
        left();
        console.log("left");   
        }
        if(keypressed=="39"){
            right();
            console.log("right");   
            }
            if(keypressed=="87"){
                new_image("wall.jpg");
                console.log("w");
            }
            if(keypressed=="89"){
                new_image("yellow_wall.png");
                console.log("y");
            }
            if(keypressed=="71"){
                new_image("ground.png");
                console.log("g");
            }
            if(keypressed=="68"){
                new_image("dark_green.png");
                console.log("d");
            }
            if(keypressed=="76"){
                new_image("light_green.png");
                console.log("l");
            }
            if(keypressed=="67"){
                new_image("cloud.jpg");
                console.log("c");
            }
            if(keypressed=="84"){
                new_image("trunk.jpg");
                console.log("t");
            }
            if(keypressed=="82"){
                new_image("roof.jpg");
                console.log("r");
            }
            if(keypressed=="85"){
                new_image("unique.png");
                console.log("u");
            }                          
}
function up(){
    if(ball_y >= 0){

    ball_y = ball_y - block_image_height;
    console.log("block image height = " + block_image_height);
     console.log("When Up arrow key is pressed, X = " + ball_x + " , Y = " + ball_y);
     canvas.remove(ball_object);
     ballupdate(); 
    }
}
function down(){
    if(ball_y <= 500){

    ball_y = ball_y + block_image_height;
    console.log("block image height = " + block_image_height);
     console.log("When down arrow key is pressed, X = " + ball_x + " , Y = " + ball_y);
     canvas.remove(ball_object);
     playerupdate(); 
    }
}
function left(){
    if(ball_x >= 0){

    ball_x = ball_x - block_image_width;
    console.log("block image width = " + block_image_width);
     console.log("When left arrow key is pressed, X = " + ball_x + " , Y = " + ball_y);
     canvas.remove(ball_object);
     playerupdate(); 
    }
}
function right(){
    if(ball_x <= 850){
        ball_x = ball_x + block_image_width;
        console.log("block image width = " + block_image_width);
         console.log("When right arrow key is pressed, X = " + ball_x + " , Y = " + ball_y);
         canvas.remove(ball_object);
         ballupdate(); 
        }
    }