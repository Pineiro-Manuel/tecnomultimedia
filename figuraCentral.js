class FiguraCentral {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tam = 300; // Tamaño inicial

    this.graficoFigura = createGraphics(800, 300);
    this.figuras = this.crearFiguras();
    this.figuraSeleccionada = random(this.figuras);
  }

  actualizarTamY(nuevoTam) {
    this.tam = nuevoTam;
  }

  dibujar() {
    this.graficoFigura.clear();
    this.graficoFigura.fill(colorFiguraCentro);
    this.figuraSeleccionada(this.graficoFigura, this.tam);
    blend(this.graficoFigura, 0, 0, this.tam, this.tam, this.x - this.tam / 2, this.y - this.tam / 2, this.tam, this.tam, LIGHTEST);
  }

  crearFiguras() {
    return [
      (grafico, tam) => {
        grafico.beginShape();
        grafico.vertex(tam * 0.13, 0);
        grafico.bezierVertex(tam * 0.13, 0, tam * 0.17, tam * 0.9, tam * 0.13, tam);
        grafico.vertex(tam * 0.13, tam);
        grafico.bezierVertex(tam * 0.13, tam, tam * 0.9, tam * 0.97, tam * 0.9, tam);
        grafico.vertex(tam * 0.9, tam);
        grafico.bezierVertex(tam * 0.9, tam, tam * 0.83, tam * 0.5, tam * 0.9, 0);
        grafico.vertex(tam * 0.9, 0);
        grafico.bezierVertex(tam * 0.9, 0, tam * 0.5, tam * 0.05, tam * 0.13, 0);
        grafico.vertex(tam * 0.13, 0);
        grafico.endShape();
      },
      (grafico, tam) => {
        grafico.beginShape();
        grafico.vertex(0, 0);
        grafico.bezierVertex(0, 0, tam * 0.05, tam * 0.5, 0, tam);
        grafico.vertex(0, tam);
        grafico.bezierVertex(0, tam, tam * 0.5, tam * 0.95, tam, tam);
        grafico.vertex(tam, tam);
        grafico.bezierVertex(tam, tam, tam * 0.95, tam * 0.5, tam, 0);
        grafico.vertex(tam, 0);
        grafico.bezierVertex(tam, 0, tam * 0.5, tam * 0.05, 0, 0);
        grafico.vertex(0, 0);
        grafico.endShape();
      },
      (grafico, tam) => {
        grafico.beginShape();
        grafico.vertex(tam * 0.17, 0);
        grafico.bezierVertex(tam * 0.17, 0, tam * 0.17, tam * 0.9, 0, tam);
        grafico.vertex(0, tam);
        grafico.bezierVertex(0, tam, tam * 0.9, tam * 0.97, tam, tam);
        grafico.vertex(tam, tam);
        grafico.bezierVertex(tam, tam, tam * 0.83, tam * 0.5, tam * 0.87, 0);
        grafico.vertex(tam * 0.87, 0);
        grafico.bezierVertex(tam * 0.87, 0, tam * 0.5, tam * 0.08, tam * 0.17, 0);
        grafico.vertex(tam * 0.17, 0);
        grafico.endShape();
      }
    ];
  }
}
