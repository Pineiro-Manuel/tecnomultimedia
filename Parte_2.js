function programa() {
  switch(estado) {
  case 0:
    background(0)
       contador++
      boton(width/5, height/1, width/1, "Toca Para Comenzar", 255, 0);
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
    if (mousePress &&
    dist(mouseX, mouseY, x, y) < tam / 2) {
    irA(texto)
  }

  circle(x-40, y- 330, tam/ 3)
    fill(colorDeTexto)
    text(texto, x-160, y-300)

    pop()
}


function irA(texto) {

  if (texto == "Toca Para Comenzar") {
    estado = 1
  }
}


function juego() {
  push()
    personaje(personajeX, 50, 50)
    fill(150)
    rect(0,680,500,20) //Plataforma 1
    rect(0,540,430,20) //Plataforma 2
    pop()
}

function personaje(personajeXParam, personajeTamX, personajeTamY) {

   if (personajeSalto) {

    logicaDeSalto()
  } else {

    if (avanzar == true) {
      print("foward")
        personajeX++
    }
    if (retroceder == true) {
      print("foward")
        personajeX--
    }
  }
  print(personajeX)
   fill(255, 0, 0); //Color de Cubo Mario
    rect(personajeXParam, personajeY, personajeTamX, personajeTamY)
}

function logicaDeSalto() {
  if (!personajeCayendo) {
    personajeY += velocidad
    velocidad += 0.5  
    if (personajeY >= piso) {
      personajeY = piso
      personajeSalto = false
      velocidad = 1
    }
  }
}
function barril() {
}
