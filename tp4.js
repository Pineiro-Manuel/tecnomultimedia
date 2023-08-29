//Manuel Piñeinero
//Legajo: 94736/1
//Link:
//Juego en base donkey kong
  let Plataformas
  let estado = 0
  let contador = 0
  let pressed = false
  let personajeSalto = false
  let personajeCayendo = false
  let personajeY, personajeX
  let velocidad = 1
  let width = window.innerWidth
  let height = window.innerHeight
  let mousePress
  let piso
  let techo
  let avanzar = false
  let retroceder = false

  function setup() {
  createCanvas(500, 690)
    textSize(28)
    textAlign(500, 600)
    personajeY = height - 50
    personajeX = width/10
    piso = height - 50
    techo = height - 150
   
}

function draw () {
  programa()
 
}

function keyPressed() {
  if (((key == 'w') || (key == 'W')) && estado == 1 && !personajeSalto) {
    personajeSalto = true
    personajeCayendo = false
    velocidad = -12
  }

  if ((key == 'a' || key == 'A') && estado == 1) {
    retroceder = true
  
  }
  if ((key == 'd' || key == 'D') && estado == 1) {
    avanzar = true
    
  }
}

function keyReleased() { //Soltar Controles 
  if (key == 'a' || key == 'A') {
    retroceder=false
  }
  if (key == 'd' || key == 'D') {
    avanzar=false
  }
}


function mousePressed() {
  mousePress = !mousePress
}
