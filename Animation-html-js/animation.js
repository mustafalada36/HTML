
let canvas = document.getElementById('mycanvas');
let context = canvas.getContext('2d');

const speed = 4;
let position = 0;
let moveSpeed = speed;
let radius = 40;

function moveBall() {
    if (position + radius >300) {
        moveSpeed = -speed;
    } else if (position - radius <0){
        moveSpeed = speed
    }
}