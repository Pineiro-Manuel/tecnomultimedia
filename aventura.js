class Aventura {
  constructor() {
    this.estados = ["pag0", "pag1","pag2","pag3","pag4","pag5"]
    this.estadoActual = 0
    this.imagenes = [
      loadImage('assets/0.png'), // "pag0"
      loadImage('assets/1.png'),  // "pag1"
      loadImage('assets/2.png'), //"pag2"
      loadImage('assets/3.png'), //"pag3"
      loadImage('assets/4.png'), //"pag4"
      loadImage('assets/5.png'), //"pag5"
    ]
    this.textos = [
      "El Pescador y el Genio",
      "Había una vez un pescador, el todos los días se iba a pescar a playa\n que estaba cerca de su casa.\nPescador: Otro buen día con un hermoso sol, espero tener suerte en \nla pesca de hoy. Para que mi familia no pase hambre.",
      "El pescador intento lanzar su red 3 veces al mar para ver si pescaba\n algo, pero no había resultados.\nEstaba por rendirse, pero vio en el mar una botella misteriosa y\n sin dudarlo la agarro.",
      "texto de prueba",
      "Texto de prueba2",
    ]
  }

  dibujar() {
    image(this.imagenes[this.estadoActual], 0, 0, width, height)
    textSize(32)
    fill(255)
    textAlign(CENTER, CENTER)
    text(this.textos[this.estadoActual], width / 2, height / 20)
  }

  cambiarEstado() {
    this.estadoActual++
     if (this.estadoActual >= this.estados.length) {
      this.estadoActual = this.estados.length 
    }
  }
}
