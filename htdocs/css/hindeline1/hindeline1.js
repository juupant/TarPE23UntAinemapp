function kustuta() {
    var t = document.getElementById("louend").getContext("2d");
    t.clearRect(0, 0, 200, 200);
}

function every() {
    body();
    head();
    ears();
    eyes();
    nose();
    mouth();
    tail();
    legs();
    collar();
}

function keha() {  
    var t = document.getElementById("louend").getContext("2d");
    t.fillStyle = "#8B4513";
    t.beginPath();
    t.arc(100, 120, 40, 0, Math.PI * 2); 
    t.closePath();
    t.fill();
}

function pea() {  
    var t = document.getElementById("louend").getContext("2d");
    t.fillStyle = "#8B4513"; 
    t.beginPath();
    t.arc(100, 60, 30, 0, Math.PI * 2);
    t.closePath();
    t.fill();
}

function ears() {
    var t = document.getElementById("louend").getContext("2d");
    t.fillStyle = "#654321"; 

    
    t.beginPath();
    t.arc(75, 40, 10, 0, Math.PI * 2);
    t.closePath();
    t.fill();

    
    t.beginPath();
    t.arc(125, 40, 10, 0, Math.PI * 2);
    t.closePath();
    t.fill();
}

function eyes() {
    var t = document.getElementById("louend").getContext("2d");
    t.fillStyle = "#FFFFFF"; 

    
    t.beginPath();
    t.arc(90, 55, 5, 0, Math.PI * 2);
    t.closePath();
    t.fill();

    
    t.beginPath();
    t.arc(110, 55, 5, 0, Math.PI * 2);
    t.closePath();
    t.fill();

    t.fillStyle = "#000000"; 

    
    t.beginPath();
    t.arc(90, 55, 2, 0, Math.PI * 2);
    t.closePath();
    t.fill();

    
    t.beginPath();
    t.arc(110, 55, 2, 0, Math.PI * 2);
    t.closePath();
    t.fill();
}

function nose() {
    var t = document.getElementById("louend").getContext("2d");
    t.fillStyle = "#000000"; 
    t.beginPath();
    t.arc(100, 70, 5, 0, Math.PI * 2);
    t.closePath();
    t.fill();
}

function mouth() {
    var t = document.getElementById("louend").getContext("2d");
    t.strokeStyle = "#000000"; 
    t.beginPath();
    t.arc(100, 75, 10, 0, Math.PI, false);
    t.stroke();
}

function tail() {
    var t = document.getElementById("louend").getContext("2d");
    t.strokeStyle = "#8B4513"; 
    t.lineWidth = 4;
    t.beginPath();
    t.moveTo(140, 130);
    t.quadraticCurveTo(170, 110, 150, 90); 
    t.stroke();
}

function legs() {
    var t = document.getElementById("louend").getContext("2d");
    t.fillStyle = "#8B4513"; 

    
    t.fillRect(70, 150, 10, 20);
    
    
    t.fillRect(120, 150, 10, 20);

    
    t.fillRect(80, 150, 10, 20);
    
    
    t.fillRect(110, 150, 10, 20);
}

