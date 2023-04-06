song_1 = "";
song_2 = "";

left_score = 0;
right_score = 0;

left_x = 0;
left_y = 0;

right_x = 0;
right_y = 0;

song_1_status = "";
song_2_status = "";
function preload()
{
    song_1 = loadSound("music.mp3")
    song_2 = loadSound("music2.mp3")
}
function setup()
{
    canvas = createCanvas(600  ,500)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video, modelloaded)
    poseNet.on('pose' , gotposes)
}
function modelloaded()
{
    console.log("model is loaded ! ")
}
function gotposes(results)
{
if (results.length > 0)
  {
    console.log(results)
    left_score = results[0].pose.keypoints[10].score
    right_score = results[0].pose.keypoints[9].score


    left_x = results[0].pose.leftWrist.x
    left_y = results[0].pose.leftWrist.y

    right_x = results[0].pose.leftWrist.x  
    right_y = results[0].pose.leftWrist.y
  }  
}
function draw()
{
    image(video , 0  , 0 , 600 , 500)

    fill("#FF0000")
    stroke("#FF0000")

    song_1_status = song_1.isPlaying()
    song_2_status = song_2.isPlaying()
    if (right_score>0.2)
    {
      circle(right_x,right_y,20)
      song2.stop();
      
      if(song_1_status == false)
      {
        song1.play();
        document.getElementById("song").innerHTML = "Playing - Harry Potter Theme Song"
      }
    }
    
    if(left_score > 0.2)
    {
      circle(left_x,left_y,20)
      song_1.stop()
      if(song_2_status = false)
      {
        song_2.play()
        document.getElementById("song").innerHTML = "playing-peter pan song"
      }
    }

}