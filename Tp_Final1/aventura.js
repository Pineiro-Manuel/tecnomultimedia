class miAventura {
  constructor() {
    this.pantalla = 0
    this.cantidadDePantallas = 8
     this.imagenes = [
      this.fondo0 = loadImage('assets/0.png'), //"pag0"
      this.fondo1 = loadImage('assets/1.png'), //"pag1"
      this.fondo2 = loadImage('assets/2.png'), //"pag2"
      this.fondo3 = loadImage('assets/3.png'), //"pag3"
      this.fondo4 = loadImage('assets/4.png'), //"pag4"
      this.fondo5 = loadImage('assets/5.png'), //"pag5"
      this.fondo6 = loadImage('assets/6.png'), //"pag6"
      this.fondo7 = loadImage('assets/7.png'), //"pag7"
      this.fondo8 = loadImage('assets/8.png'), //"pag8"
      this.fondo9 = loadImage('assets/9.png'), //"pag9" Final 2
      this.fondo10 = loadImage('assets/10.png'), //"pag10" final 1
      //loadImage('assets/8.png'), //"pag8"
    ]
      this.botonSIGUIENTE = new Boton(190, 520, 100, 50, "SIGUIENTE", "SIGUIENTE") //importante ultimo parametro
      this.botonVOLVER = new Boton(50, 520, 100, 50, "VOLVER", "VOLVER") //importante ultimo parametro
      this.FINAL1 = new Boton(320, 520, 100, 50, "HUIR", 10) //importante ultimo parametro que es el que manda a la pagina 
      this.FINAL2 = new Boton(190, 520, 100, 50, "ENGAÑAR", 7)
      this.botonIniciarJuego = new Boton(450, 520, 100, 50, "HABLAR", "JUEGO")
  }

  dibujar() {
    if (this.pantalla == 0) {
      background(0)
      image(this.fondo0, 0, 0, width, height)
      text("El pescador y el Genio", 500, 50)
      fill(255)
      textSize(30)
      this.botonSIGUIENTE.dibujar()
    }
    if (this.pantalla == 1) {
      background(55)
      image(this.fondo1, 0, 0, width, height)
      text("Había una vez un pescador pobre, que solo buscaba alimentar a su familia", 200, 50)
      fill(255)
      textSize(30)
        this.botonVOLVER.dibujar()
        this.botonSIGUIENTE.dibujar()
    
    }
    if (this.pantalla == 2) {
      background(100)
      image(this.fondo2, 0, 0, width, height)
      text("Entonces se fue a pescar, pero se encontró con una lampara extraña", 200, 50)
      fill(255)
      textSize(30)
        this.botonVOLVER.dibujar()
        this.botonSIGUIENTE.dibujar()
    }
    if (this.pantalla == 3) {
      background(155)
      image(this.fondo3, 0, 0, width, height)
      text("Al abrírla salio un genio con una apariencia extraña y dijo\nGenio:POR FIN SOY LIBRE", 300, 50)
      fill(255)
      textSize(30)
        this.botonVOLVER.dibujar()
        this.botonSIGUIENTE.dibujar()
    }
    if (this.pantalla == 4) {
      background(200)
      image(this.fondo4, 0, 0, width, height)
      text("Genio:Gracias por liberarme y como agradecimiento te concederé el deseo de\n cómo vas a morir\nPescado:¿Por qué si fui yo quien te libero???\nGenio: es que tardaste mucho en liberarme", 200, 50)
      fill(255)
      textSize(30)
        this.botonVOLVER.dibujar()
        this.botonSIGUIENTE.dibujar()
        
    }
    if (this.pantalla == 5) {
      background(255)
      image(this.fondo5, 0, 0, width, height)
      text("Pescador:(¿Qué tengo que hacer para no mori?)", 350, 50)
      fill(255)
      textSize(30)
        this.botonVOLVER.dibujar()
        this.FINAL1.dibujar()
        this.FINAL2.dibujar()
        this.botonIniciarJuego.dibujar()
    }
    if (this.pantalla == 6) {
      background(200)
      image(this.fondo6, 0, 0, width, height)
      text("Pescador: Me cuesta creer que un ser tan grande pueda entrar en esa botella\nGenio:No es la gran cosa, déjame que te lo enseñe", 200, 50)
      fill(255)
      textSize(30)
      this.botonVOLVER.dibujar()
        this.botonSIGUIENTE.dibujar()
    }
    if (this.pantalla == 7) {
      background(200)
      image(this.fondo7, 0, 0, width, height)
      text("El genio procedió a volver a entrar en la botella\nlo cual el pescador aprobechó para cerrarla", 300, 50)
      fill(255)
      textSize(30)
      this.botonVOLVER.dibujar()
        this.botonSIGUIENTE.dibujar()
       
    }
    if (this.pantalla == 8) {
      background(200)
      image(this.fondo8, 0, 0, width, height)
      text("Genio:QUÉ HACES SÁCAME DE ACÁ\nPescador:No lo pienzo hacer\nY el malvado genio fue vencido por la inteligencia", 300, 50)
      fill(255)
      textSize(30)
      this.botonVOLVER.dibujar()
       
    }
     if (this.pantalla == 10) {
      background(200)
      image(this.fondo10, 0, 0, width, height) 
      text("El pescador intentó huír, pero el Genio se rió y lo convirtió en un pescado", 200, 50)
      fill(255)
      textSize(30)

    }
    if (this.pantalla == 11) {
      background(0,172,255)
      this.juego.dibujar()
    }
  }

  actualizar() {
  }

  mouseClicked() {
    this.botonSIGUIENTE.mouseClicked()
    this.botonVOLVER.mouseClicked()
    this.botonIniciarJuego.mouseClicked()   
      this.FINAL1.mouseClicked()
      this.botonREINTENTAR.mouseClicked()
      this.botonIniciarJuego.mouseClicked()
    
  }

  cambiarPantalla(param) {
    console.log(this.pantalla)
          console.log(param)

    if (param == "SIGUIENTE" && this.pantalla < this.cantidadDePantallas) {

      this.pantalla++
    } else if (param == "VOLVER" && this.pantalla > 0) {
      this.pantalla--
    } else if (param != "VOLVER" && param != "SIGUIENTE"){
        this.pantalla=param
    }
     if (param == "JUEGO") {
    this.pantalla = 11
    this.juego = new Juego()
  }
  }
}
