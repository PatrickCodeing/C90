canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define the width & height of the rover image.
rover_width = 100;
rover_height = 90;

background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

//Create "add()" function
  function add() {
    background_img = new Image();
    background_img.onload = uploadBackground;
    background_img.src = background_image;

    rover_img = new Image();
    rover_img.onload = uploadrover;
    rover_img.src = rover_image;
  }
 
 function uploadBackground()  {
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
 }         
                                         //Draw image of background

//Create "uploadrover()" function.
function uploadrover()  {
    ctx.drawImage(rover_img, rover_x, rover_y, rover_width, rover_height);
 }   
                                        //Draw image of rover


window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Write code if keypressed is up. ASCII value of "up" arrow is 38.
		if(keyPressed == "38"){
            up();
            console.log("up");
        }
     //Write code if keypressed is down. ASCII value of "up" arrow is 40.
     if(keyPressed == "40"){
        down();
        console.log("down");
    }
    if(keyPressed == "37"){
        right();
        console.log("left");
    }
    if(keyPressed == "39"){
        right();
        console.log("right");
    }




    //Additional Activity
    //Write the code for left and right arrow pressed. 
}

function up(){

}
function down(){
	
}
function right(){
	
}
function left(){
	
}



