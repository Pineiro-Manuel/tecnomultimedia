//Manuel Piñeiro de la comisión 5
//Legajo:94736/1
//Link:
// Jugador 1 se mueve con W y S
// Jugador 2 se mueve con I y K

let Jugador1Y
let Jugador2Y
let PuntuacionJugador1 = 0
let PuntuacionJugador2 = 0
let JugadorWidth = 10
let JugadorHeight = 80
let JugadorSpeed = 5
let BolaX
let BolaY
let BolaSize = 10
let BolaSpeedX
let BolaSpeedY
let moviendoArriba1 = false
let moviendoAbajo1 = false
let moviendoArriba2 = false
let moviendoAbajo2 = false
let estado = 0
let contador = 0
let pressed = false
let juegoComenzado = false


function setup() {
createCanvas(400, 300)

textSize(28)
textAlign(CENTER, CENTER)
    
Jugador1Y = height / 2 - JugadorHeight / 2
Jugador2Y = height / 2 - JugadorHeight / 2

BolaX = width / 2
BolaY = height / 2

BolaSpeedX = random(3, 5)
BolaSpeedY = random(3, 5)

if (random(1) < 0.5) {
    BolaSpeedX *= -1
  }
}

function draw() {
pantallas()
}
function keyPressed() {
  if (key === 'w' || key === 'W') {
    moviendoArriba1 = true
  }
  if (key === 's' || key === 'S') {
    moviendoAbajo1 = true
  }
  if (key === 'i' || key === 'I') {
    moviendoArriba2 = true
  }
  if (key === 'k' || key === 'K') {
    moviendoAbajo2 = true
  }
  if (key === 'r' || key === 'R') {
    estado = 0
    pantallas()
}
}

function keyReleased() {
  if (key === 'w' || key === 'W') {
    moviendoArriba1 = false
  }
  if (key === 's' || key === 'S') {
    moviendoAbajo1 = false
  }
  if (key === 'i' || key === 'I') {
    moviendoArriba2 = false
  }
  if (key === 'k' || key === 'K') {
    moviendoAbajo2 = false
  }
  if (key === 'r' || key === 'R') {
    estado = 0
    pantallas()
  }
  if (key === 't' || key === 'T') {
    estado = 2
  }
}

function mousePressed() {
  if (!juegoComenzado && dist(mouseX, mouseY, width / 2, height / 2) < 50 / 2) {
    juegoComenzado = true
    estado = 1
  }
}
