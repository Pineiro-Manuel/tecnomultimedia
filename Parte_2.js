function pantallas(){
 switch(estado) {
  case 0:
    background(0,255,0)
       text("Toca el punto para empezar",200,20)
       contador++
       if (!juegoComenzado) {
      boton(width-150, height+170, width/10, "Empezar", 255, 0)}
  break 
   case 1:
    background(0)
     juego()
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


function juego(){
  background(3,129,1)
  textSize(28)
  
  fill(250,181,5)
  rect(20, Jugador1Y, JugadorWidth, JugadorHeight)
  fill(3,95,250)
  rect(width - 30, Jugador2Y, JugadorWidth, JugadorHeight)
  
  fill(254,255,3)
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
    BolaX = width / 2
    BolaY = height / 2
    BolaSpeedX = random(3, 5)
    BolaSpeedY = random(3, 5)
    Jugador2Y = height / 2 - JugadorHeight / 2
  } else if (BolaX > width) {
    BolaX = width / 2
    BolaY = height / 2
    BolaSpeedX = random(3, 5)
    BolaSpeedY = random(3, 5)
    Jugador1Y = height / 2 - JugadorHeight / 2
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
