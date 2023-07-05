noseX = 0;
noseY = 0;

function preload()
{
    lip_stick = loadImage('https://i.postimg.cc/d1J8L8MD/1.png');
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-35;
        noseY = results[0].pose.nose.y+20;
    }
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(lip_stick, noseX, noseY, 60, 40);
}

function take_snapshot()
{
    save("MyfilterImage.png");
}