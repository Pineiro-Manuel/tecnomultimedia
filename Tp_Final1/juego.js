class Juego {
  constructor() {
      this.estado = "Iniciar"
      this.personaje = new Personaje(width/2, height, 100)
      this.enemigos = []
      this.cantidadDeEnemigos  = 10
      for (let i = 0; i < this.cantidadDeEnemigos; i++) {
      this.enemigos[i] = new Enemigo(random(-width/2, width,100), random(height/2), random(100, 50))
    }
    this.Fondo = loadImage("assets/12.png")
    this.Fondo2 = loadImage("assets/12.png") 
    this.Fondo3 = loadImage("assets/9.png")
    this.Fondo4 = loadImage("assets/14.png") 
  }

  actualizar() {
    stroke(255, 255, 0)
      strokeWeight(3)

      for (let i = 0; i < this.cantidadDeEnemigos; i++) {
      this.enemigos[i].mover()
    }
    for (let i = 0; i < this.cantidadDeEnemigos; i++) {
        if (dist(
        this.personaje.x,
        this.personaje.y,
        this.enemigos[i].x,
        this.enemigos[i].y) < this.personaje.tam/2 + this.enemigos[i].tam/2) {
        this.personaje.colision = true
        this.personaje.tam--
      }
    }

    if (this.personaje.tam <= 60) {
      this.estado = "Perdiste"
    }

    if (this.personaje.y <= 0) {
      this.estado = "Ganaste"
    }
  }

  dibujar() {
    if (this.estado == "Iniciar") {
      image(this.Fondo2, 0, 0, width, height)
      text("El genio emepezo a contar de su pasado y de como hizo para salir del mar\nLos controles son:\nW es arriba\nS es abajo\nD es la derechar\nA es la izquierda\n(Toca cualquier tecla para comenzar)", 220, 50)
      fill(255)
      textSize(30)
    } else if (this.estado == "Juego") {
      image(this.Fondo, 0, 0, width, height)
        this.actualizar()
        this.personaje.actualizar()
        this.personaje.dibujar()
        for (let i = 0; i < this.cantidadDeEnemigos; i++) {
        this.enemigos[i].dibujar()
      }
    } else if (this.estado == "Ganaste" ) { 
     background(255,255,0)
    image(this.Fondo3, 0, 0, width, height)
    text("Tras recordar su pasado, genio decidio hacer que el pescador \nmuera de la forma mas asombrosa con explotando", 300, 50)
      fill(255)
      textSize(30)
    }
    else if (this.estado == "Perdiste"){
      background(222,2,2)
      image(this.Fondo4, 0, 0, width, height)
    }
  }

  keyPressed() {
    if (this.estado == "Iniciar") {
      this.estado = "Juego"
    }
    this.personaje.keyPressed()
  }
  keyReleased(){
    if (this.estado == "Iniciar") {
      this.estado = "Juego"
    }
  this.personaje.keyReleased()
}
}
