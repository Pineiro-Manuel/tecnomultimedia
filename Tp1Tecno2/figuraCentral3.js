class FiguraCentral3 {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      
      this.tamY = 100; // Tamaño inicial en Y
       
      this.graficoFigura3 = createGraphics(600, 600);
      this.figuras = this.crearFiguras();
  
      this.figuraSeleccionada = random(this.figuras);
      this.dibujarFigura();
    }
    
    actualizarTamY(tamY) {
      this.tamY = tamY;
      this.dibujarFigura(); // Redibujar la figura con el nuevo tamaño
    }
  
    dibujarFigura() {
      this.graficoFigura3.background(255);
      this.graficoFigura3.clear(); 
      this.graficoFigura3.fill(colorFiguraCentro3);
      this.graficoFigura3.rectMode(CENTER);
      this.graficoFigura3.noStroke();
      this.figuraSeleccionada(this.graficoFigura3);
      
    }
  
    crearFiguras() {
      return [
        (grafico) => {
          grafico.beginShape();
          // Óvalo
          
          grafico.ellipse(grafico.width / 2, grafico.height / 2, 490, 600); // Dibujar el óvalo en el centro
          grafico.endShape(CLOSE);
        }
      ];
    }
  
    dibujar() {
      image(this.graficoFigura3, this.x, this.y);
    }
  }
  