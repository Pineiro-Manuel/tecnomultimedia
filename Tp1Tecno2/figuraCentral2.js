class FiguraCentral2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    
    this.tamY = 100; // Tamaño inicial en Y
     
    this.graficoFigura2 = createGraphics(300, 300);
    this.figuras = this.crearFiguras();

    this.figuraSeleccionada = random(this.figuras);
    this.dibujarFigura();
  }
  
  actualizarTamY(tamY) {
    this.tamY = tamY;
    this.dibujarFigura(); // Redibujar la figura con el nuevo tamaño
  }

  dibujarFigura() {
    this.graficoFigura2.background(255);
    this.graficoFigura2.clear(); 
    this.graficoFigura2.fill(colorFiguraCentro2);
    this.graficoFigura2.rectMode(CENTER);
    this.graficoFigura2.noStroke();
    this.figuraSeleccionada(this.graficoFigura2);
  }

  crearFiguras() {
    return [
      
      
      (grafico) => {
        grafico.beginShape();
        // Óvalo
        grafico.ellipse(150, 150, 200, this.tamY); // Cambia los tamaños para hacer un óvalo
        grafico.endShape(CLOSE);
      }
    ];
  }

  dibujar() {
    image(this.graficoFigura2, this.x, this.y);
  }
}
