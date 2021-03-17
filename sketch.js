var mouse,mouse_i,mouse_o,mouse_a;
var cat,cat_i,cat_o,cat_a;
var garden,garden_i;

function preload() {

    //loading the animations for the garden
    garden_i = loadImage("images/garden.png");
    
    //loading the default animations of cat and mouse
    mouse_i = loadAnimation("images/mouse4.png");
    cat_i = loadAnimation("images/cat1.png");   

    //loading the animations for the mouse and the cat when they are teasing and running respectively
    mouse_a = loadAnimation("images/mouse2.png","images/mouse3.png");
    cat_a = loadAnimation("images/cat2.png","images/cat3.png");

    //adding the animations for the mouse and the cat when they collide
    mouse_o = loadAnimation("images/mouse1.png");
    cat_o = loadAnimation("images/cat4.png");
    
}

function setup(){

    //creating the canvas
    createCanvas(1000,800);

    //creating the garden and adding the animation and scale
    garden = createSprite(500,400,width,height);
    garden.addImage(garden_i); 
    garden.scale = 1.175;  

    ////creating the mouse and adding the default animation and scale
    mouse = createSprite(250,675);
    mouse.addAnimation("mousehappy",mouse_i);
    mouse.scale = 0.125;   
    
    //creating the cat and adding the default animation and scale
    cat = createSprite(750,675);
    cat.addAnimation("catsorry",cat_i);
    cat.scale = 0.125;

   //adding the animations for the mouse and the cat when they are teasing and running respectively
    mouse.addAnimation("mouseteasing",mouse_a);
    cat.addAnimation("catrunning",cat_a);

    //adding the animations for the mouse and the cat when they collide
    mouse.addAnimation("mousesorry",mouse_o);
    cat.addAnimation("cathappy",cat_o);

}

function draw() {

    //keeping the background colour as black
    background(0);

    //drawing the sprites
    drawSprites();    

    //calling the function
    collide();
    
}


//function for what to do when the left arrow key is pressed
function keyPressed(){

    if(keyCode === LEFT_ARROW){

        cat.velocityX = -5;

        mouse.changeAnimation("mouseteasing",mouse_a);
        cat.changeAnimation("catrunning",cat_a);

    }

}

// function for what to do when the cat and the mouse collide
function collide(){

    if(cat.x - mouse.x < cat.width/2 + mouse.width/2){

        cat.velocityX = 0;
        mouse.velocityX = 0;

        mouse.changeAnimation("mousesorry",mouse_o);
        cat.changeAnimation("cathappy",cat_o);

    }


}
