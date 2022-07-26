var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

pincel.lineWidth = "2";
pincel.lineCap = "round";

 function limpiar(){
    pincel.clearRect(0,0,600,400);
    pincel.fillStyle = "#10121d";
    pincel.fillRect(0,0,600,400);
}

 function dibujarBaseHorca() { 
    pincel.fillStyle = "white";
    pincel.fillRect(150, 365, 200, 10);
    pincel.fillStyle = "white";
    pincel.fillRect(190, 345, 10, 20);  
}

function dibujarHorca(){
    pincel.beginPath();
    pincel.moveTo(195, 345);
    pincel.lineTo(195, 20);
    pincel.strokeStyle = "white";
    pincel.stroke();
    
    pincel.beginPath();
    pincel.moveTo(195, 20);
    pincel.lineTo(300, 20);
    pincel.strokeStyle = "white";
    pincel.stroke();

    pincel.beginPath();
    pincel.moveTo(300, 20);
    pincel.lineTo(300, 50);
    pincel.strokeStyle = "white";
    pincel.stroke()         
}

function dibujarCabeza(){
    pincel.beginPath();
    pincel.arc(300, 85, 35, 0, 2*3.14);
    pincel.strokeStyle = "white";
    pincel.stroke();
}

function dibujarCuerpo() {
    pincel.beginPath();
    pincel.moveTo(300, 120);
    pincel.lineTo(300, 240);
    pincel.strokeStyle = "white";
    pincel.stroke();
}

function dibujarBrazoIzquierdo() {
    pincel.beginPath();
    pincel.moveTo(300, 120);
    pincel.lineTo(260, 180);
    pincel.strokeStyle = "white";
    pincel.stroke();
}
function dibujarBrazoDerecho() {
    pincel.beginPath();
    pincel.moveTo(300, 120);
    pincel.lineTo(340, 180);
    pincel.strokeStyle = "white";
    pincel.stroke();
}

function dibujarPiernaIzquierda() {
    pincel.beginPath();
    pincel.moveTo(300, 240);
    pincel.lineTo(260, 300);
    pincel.strokeStyle = "white";
    pincel.stroke();
}

function dibujarPiernaDerecha() {
    pincel.beginPath();
    pincel.moveTo(300, 240);
    pincel.lineTo(340, 300);
    pincel.strokeStyle = "white";
    pincel.stroke();
}

function drawX(x, y) {
    pincel.beginPath();
    pincel.strokeStyle = "white";

    pincel.moveTo(x - 5, y - 5);
    pincel.lineTo(x + 5, y + 5);

    pincel.moveTo(x + 5, y - 5);
    pincel.lineTo(x - 5, y + 5);
    pincel.stroke();
}

function curva(x1, y1){
    let start = {x: x1, y: y1};
    let controlPoint1 = {x: x1, y: y1-15};
    let controlPoint2 = {x: x1-15, y: y1-15};
    let endPoint = {x: x1-15, y: y1};
    pincel.strokeStyle = "white";        
    pincel.moveTo(start.x, start.y); //Move to start point
    pincel.bezierCurveTo(controlPoint1.x, controlPoint1.y, controlPoint2.x, controlPoint2.y, endPoint.x, endPoint.y); //Draw curve
    pincel.stroke(); //Draw outline
}

function dibujarAhorcado(){
    limpiar();
    dibujarBaseHorca();
    dibujarHorca();
    dibujarCabeza();
    dibujarBrazoIzquierdo();
    dibujarBrazoDerecho();
    dibujarPiernaIzquierda();
    dibujarPiernaDerecha();
    drawX(285, 75);
    drawX(315, 75);
    curva(310, 105);
}


 function dibujoJuego(intentos){
    switch(intentos){
        
        case 7:
        dibujarHorca();
        break;

        case 6:
        dibujarCabeza();
        break;

        case 5:
        dibujarCuerpo();
        break;

        case 4:
        dibujarBrazoIzquierdo();
        break;

        case 3:
        dibujarBrazoDerecho();
        break;

        case 2:
        dibujarPiernaIzquierda();
        break;

        case 1: 
        dibujarPiernaDerecha();
        break;

        case 0:
        dibujarAhorcado();
        dibujarCuerpo();
        break;
    }
}

