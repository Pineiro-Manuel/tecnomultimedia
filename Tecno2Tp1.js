//Video: https://www.youtube.com/watch?v=t-POA6vhlYQ
// Miembros del Grupo:
// Enzo Alcántara Zurita 94026/5
//Bruno Nicolas Orosco (85231/8)
//Juan Bautista Ruiz Arizcuren (88526/4)
//Manuel Piñeiro (94736/1)

let bgColor
let colors

let rectanguloIzquierdaAbajo
let rectanguloIzquierdaArriba
let rectanguloDerechaAbajo
let rectanguloDerechaArriba
let elipseCentral

let teclaAgrandePresionada = false
let teclaAchiquePresionada = false

function setup() {
  createCanvas(700, 650)
  rectMode(CENTER)
  ellipseMode(CENTER)
  colors = [
    color(148, 167, 193), // azul gris
    color(10, 81, 193), // azul mar
    color(75, 139, 232), // Celeste
    color(13, 59, 2), // Verde oscuro
  ]
  bgColor = colors[Math.floor(Math.random() * colors.length)]

  // Crear rectángulos y elipse
  rectanguloIzquierdaAbajo = new Rectangulo(width/4, height/4, 300, 300, color(255, 0, 0))  // Izquierda abajo
  rectanguloIzquierdaArriba = new Rectangulo(width/4 + 350, height/4, 300, 300, color(0, 255, 0))    // Derecha arriba
  rectanguloDerechaAbajo = new Rectangulo(width/4, height/4 + 330, 300, 300, color(0, 0, 255)) // Izquierda arriba
  rectanguloDerechaArriba = new Rectangulo(width/4 + 350, height/4 +330, 300, 300, color(255, 255, 0)) // Derecha abajo

  elipseCentral = new Elipse(width/2, height/2, 100, 100, color(255, 255, 100))
}

function draw() {
  background(bgColor)

  // Agrandar o achicar los rectángulos según las teclas presionadas
  if (teclaAgrandePresionada) {
    agrandarRectangulos()
    rectanguloIzquierdaAbajo.angulo +=0.2
    rectanguloIzquierdaArriba.angulo +=0.2
    rectanguloDerechaArriba.angulo +=0.2
    rectanguloDerechaAbajo.angulo +=0.2
  }
  if (teclaAchiquePresionada) {
    achicarRectangulos()
  }
  elipseCentral.dibujar()
  rectanguloIzquierdaAbajo.dibujar()
  rectanguloIzquierdaArriba.dibujar()
  rectanguloDerechaAbajo.dibujar()
  rectanguloDerechaArriba.dibujar()
}

function keyPressed() {
  // Registra las teclas presionadas
  if (key === 'a' || key === 'A') {
    teclaAgrandePresionada = true
  }
  if (key === 'z' || key === 'Z') {
    teclaAchiquePresionada = true
  }
}

function keyReleased() {
  // Borra la tecla cuando se suelta
  if (key === 'a' || key === 'A') {
    teclaAgrandePresionada = false
  }
  if (key === 'z' || key === 'Z') {
    teclaAchiquePresionada = false
  }
}

function agrandarRectangulos() {
  rectanguloIzquierdaAbajo.ancho ++
  rectanguloIzquierdaArriba.ancho ++
  rectanguloDerechaAbajo.ancho ++
  rectanguloDerechaArriba.ancho ++

  rectanguloIzquierdaAbajo.alto ++
  rectanguloIzquierdaArriba.alto ++
  rectanguloDerechaAbajo.alto ++
  rectanguloDerechaArriba.alto ++
}

function achicarRectangulos() {
  rectanguloIzquierdaAbajo.ancho -= 2
  rectanguloIzquierdaArriba.ancho -= 2
  rectanguloDerechaAbajo.ancho -= 2
  rectanguloDerechaArriba.ancho -= 2

  rectanguloIzquierdaAbajo.alto -= 2
  rectanguloIzquierdaArriba.alto -= 2
  rectanguloDerechaAbajo.alto -= 2
  rectanguloDerechaArriba.alto -= 2
}
