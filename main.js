img = "";
status = "";
object = [];


function preload()
{
    img = loadImage('dog_cat.jpg')
}

function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture (VIDEO);
    video.hide();
    video.size(380,380);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(video, gotResult);
}

function gotResult(error, results)
{
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw()
{


    if(status != "")
    {
r = random(255);
g = random(255);
b = random(255);
    for (i=0; i < objects.length; i++)
    {
        document.getElementById("status").innerHTML = "Status : Object Detected";
document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+objects.length;

        fill(r,g,b);
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
        noFill();
        stroke(r,g,b)
        rect(object[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
    }
    
    image(video, 0, 0, 380, 380);
   rect(300, 90, 150, 312);

}





