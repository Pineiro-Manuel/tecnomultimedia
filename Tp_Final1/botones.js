class Boton {

  constructor(x, y, tamX, tamY, texto, direccion) {

    this.x = x
      this.y = y
      this.tamX = tamX
      this.tamY = tamY
      this.direccion = direccion
      this.texto = texto
  }
  actualizar() {
  }
  dibujar() {
    push()
fill(255,255,100)
rect(this.x, this.y, this.tamX, this.tamY)
textAlign(CENTER, CENTER)
textSize(12) 
fill(0)
text(this.texto, this.x + this.tamX / 2, this.y + this.tamY / 2)
      pop()
  }
  
  
  mouseClicked(){
    if(mouseX > this.x && mouseX < this.x + this.tamX 
     &&  mouseY > this.y && mouseY < this.y + this.tamY){
 
    aventura.cambiarPantalla(this.direccion)
    }
  }
}
