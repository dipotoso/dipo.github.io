//Set global variable that would contain the position, velocity and the html element "ball"

var ball = document.getElementsByClassName('ball');
var box = document.getElementById('box')
var velocity = 75;
var positionX = parseInt(box.style.left.replace('px',''));
var positionY = parseInt(box.style.top.replace('px',''));
//var positionX = parseInt(ball.style.left('px',''));
//var positionY = parseInt(ball.style.top('px',''));
var reverse = false;


//write a function that can change the position of the html element "ball"

no_balls = ball.length;

function moveAlotofBalls(){
    var i = 0;
    
    while(i < no_balls){

        moveBall(ball[i]);
        i++;
}

}

function moveBall(ball) {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = parseInt(box.style.left.replace('px',''));
  var Xmax = parseInt(box.style.width.replace('px',''));

  var Ymin = parseInt(box.style.top.replace('px',''));
  var Ymax = parseInt(box.style.height.replace('px',''))-5;

  if(reverse){
    positionX = -positionX - velocity;
    positionY = positionY - velocity;
    ball.style.left = positionX + 'px';
    ball.style.top = positionY + 'px';
    ball.style.background = 'red'
    
  }
  else {
    positionX = positionX + velocity;
    positionY = positionY + velocity;
    ball.style.left = positionX + 'px';
    ball.style.top = positionY + 'px';
    ball.style.background = 'green'

  }
  if (positionX > Xmax || positionX === Xmin || (positionY > Ymax || positionY === Ymin)){
    reverse = !reverse;
    positionX = Math.sqrt();
    ball.style.background = 'black'
    //positionY = Math.exp()
  }
  }

// This call the moveBall function every 100ms
setInterval(moveAlotofBalls, 200);