var canvas = document.getElementById("sandbox"),
context = canvas.getContext("2d"),
line = new Path2D();
line.moveTo(0,0);
line.lineTo(300, 300);

context.lineWidth = 5;
context.stroke(line);

context.fillStyle = "red";
context.fillRect(0,0,200,200);

context.fillStyle = "rgba(0, 255, 0, 0.5)";
context.fillRect(100, 100, 300, 300);
