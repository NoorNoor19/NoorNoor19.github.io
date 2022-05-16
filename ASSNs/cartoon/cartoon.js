function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
  
      // flip the coordinate frame
      ctx.save();
      backDrop(ctx, 0, 0);
      CloudAt(ctx,500, 100,40);
      SunAt(ctx,20,20,75);
      TreeAt(ctx,200,425,90,20,30);
      GroundAt(ctx, 0, 500, 800, 100);
      HouseAt(ctx,350,390);
      GrassAt(ctx,225,500);
      ctx.font = "30px Arial";
      
      ctx.restore();
    }
  }
  
  
  function GrassAt(ctx, x, y) {
    for (var i = 0; i < 45; i++) {
      ctx.beginPath();
      ctx.moveTo(x,y);
      ctx.lineTo(x+10,y);
      ctx.lineTo(x+5,y-10);
      ctx.fillStyle = "green";
      ctx.fill();
      x = x+10;
    }
  }
  
  function CloudAt(ctx, x, y, radius) {
     ctx.beginPath();
     ctx.arc(x+10, y, radius, 0, 2 * Math.PI);
     ctx.arc(x-50, y, radius+5, 0, 2 * Math.PI);
     ctx.arc(x+70, y, radius+5, 0, 2 * Math.PI);
     ctx.fillStyle = "white";
     ctx.fill();
  }
  
  function backDrop(ctx, x, y) {
    ctx.fillStyle = "lightpink";
    ctx.fillRect(x, y, 800, 600);
  }
  function HouseAt(ctx, x, y) {
    ctx.fillStyle = "maroon";
    ctx.fillRect(x, y, 100, 110);
  

  
    ctx.fillStyle = "black";
    ctx.fillRect(x+20, y+70, 20, 40);
  
    ctx.fillStyle = "white";
    ctx.fillRect(x+60, y+40, 20, 20);
  }
  function SunAt(ctx,x,y,radius){
    ctx.beginPath();
    ctx.arc(x,y, radius,0,Math.PI*2);
    ctx.fillStyle = "orange";
    ctx.fill();
  }
  
  
  function TreeAt(ctx,x,y,height,width,radius) {
     ctx.fillStyle= "brown";
     ctx.fillRect(x, y, width,height);
     ctx.beginPath();
     ctx.arc(x+10, y, radius, 0, 2 * Math.PI);
     ctx.fillStyle = "green";
     ctx.fill();
  }
  
  function GroundAt(ctx, x, y, height, width) {
    ctx.fillStyle = "rgb(104,155,45)" ;
    ctx.fillRect(x, y, height, width) ;
  }
  
