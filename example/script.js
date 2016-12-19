var canvas = document.getElementById("sandbox"),
context = canvas.getContext("2d");

var secondsAngle, minutesAngle, hoursAngle;

function round(R) {
    var R;
    var clock = new Path2D();
    clock.arc(150, 150, R, 0, 2 * Math.PI);
    context.strokeStyle = "black";
    context.stroke(clock);
}




function dels() {
    var R = 300/2;
    var d, angle, pX, pY, qX, qY;
    for(d = 0; d < 60; ++d){
        angle = (d/60) * (2*Math.PI);
        pX = Math.cos(angle) * R;
        pY = -Math.sin(angle) * R;
        qX = 0.95 * pX;
        qY = 0.95 * pY;
        pX += R; pY += R;
        qX += R; qY += R;

        var del = new Path2D();
        del.moveTo(pX, pY);
        del.lineTo(qX, qY);
        context.strokeStyle = "black";
        context.stroke(del);
    }
    var pXc, pYc;
    for(var i = 1; i <= 12; i++) {
        angle = (i/12) * (2 * Math.PI);
        pXc = R + R * 0.8 * Math.sin(angle);
        pYc = R - (R * 0.8 * Math.cos(angle));

        context.fillText(i, pXc, pYc);
    }

}




function Arrows() {
    var Radius = 300/2;
    var date = new Date();
    var hours, minutes, seconds;
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();


    secondsAngle = (seconds / 60) * (2 * Math.PI);
    minutesAngle = (minutes / 60) * (2 * Math.PI);
    hoursAngle = ((hours % 12) /  12) * (2 * Math.PI);

    /*secondsAngle = Math.PI / 2 - secondsAngle;
    minutesAngle = Math.PI / 2 - minutesAngle;
    hoursAngle = Math.PI / 2 - hoursAngle;*/

    var secArrow = new Path2D();
    secArrow.moveTo(Radius, Radius);
    secArrow.lineTo(Radius + Radius * 0.7 * Math.sin(secondsAngle), Radius - (Radius * 0.9 * Math.cos(secondsAngle)) );
    context.strokeStyle = "red";
    context.stroke(secArrow);

    var minArrow = new Path2D();
    minArrow.moveTo(Radius, Radius);
    minArrow.lineTo(Radius + Radius * 0.5 * Math.sin(minutesAngle), Radius - (Radius * 0.8 * Math.cos(minutesAngle)) );
    context.lineWidth = 3;
    context.strokeStyle = "black";
    context.stroke(minArrow);

    var houArrow = new Path2D();
    houArrow.moveTo(Radius, Radius);
    houArrow.lineTo(Radius + Radius * 0.4 * Math.sin(hoursAngle), Radius - (Radius * 0.6 * Math.cos(hoursAngle)) );
    context.lineWidth = 5;
    context.strokeStyle = "black";
    context.stroke(houArrow);

}

function drawWatch() {
    context.clearRect(0, 0, 300, 300);

    context.lineWidth = 1;
    round(150);
    dels();
    Arrows();
    round(3);

    setTimeout(drawWatch, 1000);
}

drawWatch();
