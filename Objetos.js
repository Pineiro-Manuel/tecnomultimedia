class Elipse {
  constructor(x, y, ancho, alto, color) {
    this.x = x
    this.y = y
    this.ancho = ancho
    this.alto = alto
    this.color = color
  }

  dibujar() {
    fill(this.color)
    ellipse(this.x, this.y, this.ancho, this.alto)
  }
}

class Rectangulo {
  constructor(x, y, ancho, alto, color) {
    this.x = x
    this.y = y
    this.ancho = ancho
    this.alto = alto
    this.color = color
    this.angulo = 0
  }

  dibujar() {
    push() // Guardar la configuración de dibujo actual
    translate(this.x, this.y) // Mover el origen a la posición del rectángulo
    rotate(this.angulo) // Rotar el rectángulo
    fill(this.color)
    rect(0, 0, this.ancho, this.alto) // Dibujar el rectángulo en el origen
    pop() // Restaurar la configuración de dibujo anterior
  }
}
