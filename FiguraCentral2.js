
class FiguraCentral2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.graficoFigura2 = createGraphics(200, 200);
    this.figuras = this.crearFiguras();

    this.figuraSeleccionada = random(this.figuras);
    this.dibujarFigura();
  }

  dibujarFigura() {
    this.graficoFigura2.clear(); // Limpiar el gráfico anterior
    this.graficoFigura2.fill(colorFiguraCentro2);
    this.figuraSeleccionada(this.graficoFigura2);
  }

  crearFiguras() {
    return [
      (grafico) => {
        grafico.beginShape();
        // Definir la forma de la figura 1
        grafico.vertex(100, 100); // Centrado horizontalmente y verticalmente
        grafico.vertex(150, 50); // Centrado horizontalmente y verticalmente
        grafico.vertex(100, 0); // Centrado horizontalmente y verticalmente
        grafico.vertex(50, 50); // Centrado horizontalmente y verticalmente
        grafico.endShape(CLOSE);
      },
      (grafico) => {
        grafico.beginShape();
        // Definir la forma de la figura 2
        grafico.vertex(100, 100); // Centrado horizontalmente y verticalmente
        grafico.bezierVertex(150, 100, 150, 0, 100, 0); // Centrado horizontalmente y verticalmente
        grafico.bezierVertex(50, 0, 50, 100, 100, 100); // Centrado horizontalmente y verticalmente
        grafico.endShape(CLOSE);
      },
      // Agregar más funciones para definir otras formas
    ];
  }

  dibujar() {
    image(this.graficoFigura2, this.x, this.y);
  }
}
