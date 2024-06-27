class FiguraCentral{
  
  constructor(x,y){
    this.x = x;
    this.y = y;
    
    
    this.graficoFigura= createGraphics(500,300);
    this.figuras = this.crearFiguras();
    
    this.figuraSeleccionada = random(this.figuras);
  }
  
  dibujar(){
    this.graficoFigura.background(0);
    this.graficoFigura.fill(colorFiguraCentro);
    this.figuraSeleccionada(this.graficoFigura);
    
     blend(this.graficoFigura, 0, 0, 300, 300, this.x - 150, this.y - 150, 300, 300,LIGHTEST);
  }
  
  crearFiguras(){
   return [
    function(){
      this.graficoFigura.beginShape();
  
      ////////////LADO IZQUIERDO-/////////////////
      this.graficoFigura.vertex(0, 0);
      this.graficoFigura.bezierVertex(0,150,90,270,0,300)
  
      ////////////LADO ABAJO-/////////////////
      this.graficoFigura.vertex(0,300); 
      this.graficoFigura.bezierVertex(0,300,270,290,300,300)
  
      ////////////LADO DERECHO-/////////////////
      this.graficoFigura.vertex(300,300);
      this.graficoFigura.bezierVertex(300,300,285,150,270,0)
  
      ////////////LADO ARRIBA-/////////////////
      this.graficoFigura.vertex(270,0);
      this.graficoFigura.bezierVertex(270,0,45,15,0,0)
  
      this.graficoFigura.vertex(0,0);
      this.graficoFigura.endShape();
  },
      
    ];
  }

}
