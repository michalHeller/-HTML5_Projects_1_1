
var canvas = document.getElementById("cnvs1");
var context = canvas.getContext("2d");

function chamsha() {
    context.beginPath();
    var x = 100, y = 150, z = 700;
    context.moveTo(x, y);
    context.lineTo(z, y);

    context.moveTo(x, y + 20);
    context.lineTo(z, y + 20);

    context.moveTo(x, y + 40);
    context.lineTo(z, y + 40);

    context.moveTo(x, y + 60);
    context.lineTo(z, y + 60);

    context.moveTo(x, y + 80);
    context.lineTo(z, y + 80);

    context.strokeStyle = "black";
    context.lineWidth = 5;
    context.lineCap = " square ";
    context.stroke();
    context.closePath();
}
chamsha();

function a(x, y) {
    context.beginPath();
    context.moveTo(x, y);
    context.bezierCurveTo(x, y - 10, x + 20, y - 15, x, y + 10);
    context.strokeStyle = "black";
    context.lineWidth = 8;
    context.lineCap = "round";
    context.stroke();
    context.closePath();
}

function b(x, y) {
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x, y + 65);
    context.strokeStyle = "black";
    context.lineWidth = 8;
    context.lineCap = "round";
    context.stroke();
    context.closePath(); 
    
}
function c() {
    context.beginPath();
    context.fillStyle = "teal";
    var x = 100, y = 100, width = 600, height = 1000;
    context.fillRect(x, y, width, height);
    context.closePath();
    chamsha();
}
var x = 200; y = 190;
function playDo() {
    c();
    document.getElementById("do").play();
    a(x, y);
    b(x, y);

}
function playRe() {
    c();
    document.getElementById("re").play();
    a(x + 45, y - 10);
    b(x + 45, y - 10);
}
function playMi() {
    c();
    document.getElementById("mi").play();
    a(x + 85, y - 20);
    b(x + 85, y - 20);
}
function playFa() {
    c();
    document.getElementById("fa").play();
    a(x + 115, y - 30);
    b(x + 115, y - 30);
}
function playSol() {
    c();
    document.getElementById("sol").play();
    a(x + 155, y - 40);
    b(x + 155, y - 40);
}
function playLa() {
    c();
    document.getElementById("la").play();
    a(x + 205, y - 50);
    b(x + 205, y - 50);
}
function playSi() {
    c();
    document.getElementById("si").play();
    a(x + 250, y - 60);
    b(x + 250, y - 60);
    context.beginPath();
    context.moveTo(x + 240, y - 60);
    context.lineTo(x + 270, y - 60);
    context.lineWidth = 4;
    context.strokeStyle = "black";
    context.lineCap = "round";
    context.stroke();
    context.closePath();
}













