function pantallas(){
 switch(estado) {
  case 0:
    background(0,255,0)
       text("Toca el punto para empezar",200,20)
       text("Toca R para reiniciar y T para",200,50)
       text("ver los creditos y controles",200,80)
       contador++
       if (!juegoComenzado) {
      boton(width-150, height+170, width/10, "Empezar", 255, 0)}
  break 
   case 1:
    background(0)
     juego()
      break
   case 2:
    background(0,255,0)
      text("Manuel Piñeiro",200,20)
      text("Legajo:94736/1",200,50)
      text("P1 se mueve con W y S",200,75)
      text("P2 se mueve con I y K",200,100)
      text("Para volver toca la R",200,125)
      break
}
}

function boton(x, y, tam, texto, fondo, colorDeTexto) {
  push()
    fill(fondo)
    if (mousePressed &&
    dist(mouseX, mouseY, x, y) < tam / 2) {
    }
circle(x-40, y- 330, tam/ 3)
   

    pop()
}


function juego() {
  background(3, 129, 1)
  textSize(28)

  fill(250, 181, 5)
  rect(20, Jugador1Y, JugadorWidth, JugadorHeight)
  fill(3, 95, 250)
  rect(width - 30, Jugador2Y, JugadorWidth, JugadorHeight)

  fill(254, 255, 3)
  ellipse(BolaX, BolaY, BolaSize)

  BolaX += BolaSpeedX
  BolaY += BolaSpeedY

  if (BolaY < 0 || BolaY > height) {
    BolaSpeedY *= -1
  }

  if (
    (BolaX < 30 && BolaY > Jugador1Y && BolaY < Jugador1Y + JugadorHeight) ||
    (BolaX > width - 30 && BolaY > Jugador2Y && BolaY < Jugador2Y + JugadorHeight)
  ) {
    BolaSpeedX *= -1
  }

  if (BolaX < 0) {
   
    PuntuacionJugador2++
    textSize(28)
    textAlign(CENTER, CENTER)
    fill(3, 95, 250)
    text("¡Jugador 2 gana!", width / 2, height / 2)
  } else if (BolaX > width) {
   
    PuntuacionJugador1++
    textSize(28)
    textAlign(CENTER, CENTER)
    fill(250, 181, 5)
    text("¡Jugador 1 gana!", width / 2, height / 2)
   
  }  

  if (moviendoArriba1 && Jugador1Y > 0) {
    Jugador1Y -= JugadorSpeed
  }
  if (moviendoAbajo1 && Jugador1Y < height - JugadorHeight) {
    Jugador1Y += JugadorSpeed
  }

  if (moviendoArriba2 && Jugador2Y > 0) {
    Jugador2Y -= JugadorSpeed
  }
  if (moviendoAbajo2 && Jugador2Y < height - JugadorHeight) {
    Jugador2Y += JugadorSpeed
  }
}
