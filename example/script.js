var canvas = document.getElementById("sandbox"),
context = canvas.getContext("2d"),
clock = new Path2D();
clock.arc(150, 150, 150, 0, 2 * Math.PI);
context.stroke(clock);

var R = 300/2;
var d, angle, pX, pY, qX, qY;
for(d = 0; d < 60; ++d){
    angle = (d/60) * (2*Math.PI);
    pX = Math.cos(angle) * R;
    pY = -Math.sin(angle) * R;
    qX = 0.9 * pX;
    qY = 0.9 * pY;
    pX += R; pY += R;
    qX += R; qY += R;

    var del = new Path2D();
    del.moveTo(pX, pY);
    del.lineTo(qX, qY);
    context.stroke(del);
}
