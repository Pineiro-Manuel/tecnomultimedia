class Personaje  {
  constructor(x, y, tam) {
    this.x = x
      this.y = y
      this.tam = tam
      this.colorA = color(120)
      this.colision = false
      this.imagen = loadImage("assets/0.png")
  }
  actualizar() {
  }

  dibujar() {
    fill(this.colorA)
      circle(this.x, this.y, this.tam)
      image(this.imagen, this.x-this.tam/2, this.y-this.tam/2, this.tam, this.tam)
  }

  mover(param1, param2) {
  

    this.x =  this.x+param1
      this.y =  this.y+param2
  }

  keyPressed() {
      if (key == 'a' || key == 'A'){
      this.mover(-20, 0)
    } else if (key == 'd' || key == 'D') {
      this.mover(20, 0)
    }
    print(keyCode)
       if (key == 's' || key == 'S') {
      this.mover(0, 20)
    } else if (key == 'w' || key == 'W') {
      this.mover(0, -20)
    }
    if (key === 'r' || key === 'R') {
    window.location.reload()
}
  }
  keyReleased(){
    if (key == 'a' || key == 'A'){
      this.mover(-20, 0)
    } else if (key == 'd' || key == 'D') {
      this.mover(20, 0)
    }
    print(keyCode)
       if (key == 's' || key == 'S') {
      this.mover(0, 20)
    } else if (key == 'w' || key == 'W') {
      this.mover(0, -20)
    } 
  }
}
