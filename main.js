var ing = "";

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();

}


function draw()
{
image(ing, 0, 0, 640, 420);
fill("#FF0000");
text("dog",45, 75);
noFill();
stroke(255,0,0);
rect(30, 60, 450,350);

}


