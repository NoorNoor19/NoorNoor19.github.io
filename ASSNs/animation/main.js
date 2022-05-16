
  
  
  var speechBubble_image = new Image();
  speechBubble_image.src = 'animPic.png';
  
  var canvas_count = document.getElementById('canvas');
  var ctx = canvas_count.getContext('2d');
  
  let button = document.querySelector("button");
  
  
  
  function drawBubble(){
    ctx.drawImage(speechBubble_image, 890, 100, 239, 239);
  }
  button.onclick = function(){
    drawImg();
    button.style.visibility = "hidden";
}
  function drawText(){
    ctx.font = "18px Century Gothic";
      ctx.fillStyle= "black";
      ctx.textAlign = "center";
    ctx.fillText("Thank You Professor Goetz!!", 1010, 200);
  }
  var currentLoop = 0;
  
  function drawImg(){
      drawBubble();
      drawText();
       ctx.clearRect(300,200, 567, 567);
       drawNum(currentLoop);
       currentLoop++;
       if (currentLoop == 2){
         currentLoop = 0;
      }
      setTimeout(drawImg, 500);
  
  }