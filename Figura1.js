////////////FIGURA ARRIBA-IZQUIERDA/////////////////

class Figura1 {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.graficoFigura = createGraphics(300, 300);
    this.figuras = this.crearFiguras();

    this.figuraSeleccionada = random(this.figuras);
  }

  dibujar() {
    this.graficoFigura.clear(); // Limpia el gráfico anterior
    this.graficoFigura.fill(colorFiguras);
    this.figuraSeleccionada(this.graficoFigura);

    blend(this.graficoFigura, 0, 0, 300, 300, this.x - 150, this.y - 150, 300, 300, LIGHTEST);
  }

  crearFiguras() {
    return [
      (grafico) => {
        grafico.beginShape();
        grafico.vertex(0, 0);
        grafico.bezierVertex(0, 0, 10, 10, 0, 300);
        grafico.vertex(0, 300);
        grafico.bezierVertex(0, 300, 230, 230, 300, 300);
        grafico.vertex(300, 300);
        grafico.bezierVertex(300, 300, 230, 100, 300, 0);
        grafico.vertex(300, 0);
        grafico.bezierVertex(300, 0, 30, 10, 0, 0);
        grafico.vertex(0, 0);
        grafico.endShape();
      },
      (grafico) => {
        grafico.beginShape();
        grafico.vertex(0, 0);
        grafico.bezierVertex(0, 0, 10, 10, 0, 300);
        grafico.vertex(0, 300);
        grafico.bezierVertex(0, 300, 230, 230, 300, 270);
        grafico.vertex(300, 270);
        grafico.bezierVertex(300, 270, 160, 50, 300, 0);
        grafico.vertex(300, 0);
        grafico.bezierVertex(300, 0, 30, 0, 0, 0);
        grafico.vertex(0, 0);
        grafico.endShape();
      },
      (grafico) => {
        grafico.beginShape();
        grafico.vertex(0, 0);
        grafico.bezierVertex(0, 0, 10, 10, 0, 300);
        grafico.vertex(0, 300);
        grafico.bezierVertex(0, 300, 210, 260, 300, 300);
        grafico.vertex(300, 300);
        grafico.bezierVertex(300, 300, 280, 280, 300, 0);
        grafico.vertex(300, 0);
        grafico.bezierVertex(300, 0, 30, 10, 0, 0);
        grafico.vertex(0, 0);
        grafico.endShape();
      }
    ];
  }
}
