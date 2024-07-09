////////////FIGURA ABAJO-IZQUIERDA/////////////////

class Figura3{

  constructor(x,y){
    this.x = x;
    this.y = y;
    
    
    this.graficoFigura= createGraphics(300,300);
    this.figuras = this.crearFiguras();
    
    this.figuraSeleccionada = random(this.figuras);
  }
  
  dibujar(){
    //this.graficoFigura.background(255);
    this.graficoFigura.noStroke();
    this.graficoFigura.fill(colorFiguras);
    this.figuraSeleccionada(this.graficoFigura);
    
    blend(this.graficoFigura, 0, 0, 300, 300, this.x - 150, this.y - 150, 300, 300,HARD_LIGHT);
  }
  
  crearFiguras(){
   return [
      function(){
        
        this.graficoFigura.beginShape();
        ////////////LADO IZQUIERDO-/////////////////
        //this.graficoFigura.fill(255,0,0);
        this.graficoFigura.vertex(0, 0);
        this.graficoFigura.bezierVertex(0,0,0,0,0,300)
        ////////////LADO ABAJO-/////////////////
        this.graficoFigura.vertex(0,300); 
        this.graficoFigura.bezierVertex(0,300,250,280,300,300)
        ////////////LADO DERECHO-/////////////////
        this.graficoFigura.vertex(300,300);
        this.graficoFigura.bezierVertex(300,300,230,100,300,0)
        ////////////LADO ARRIBA-/////////////////
        this.graficoFigura.vertex(300,0);
        this.graficoFigura.bezierVertex(300,0,30,10,0,0)
        this.graficoFigura.vertex(0,0);
        this.graficoFigura.endShape();
      },
      function() {
        
        this.graficoFigura.beginShape(); 
        ////////////LADO IZQUIERDO-/////////////////
        //this.graficoFigura.fill(0,255,0);
        this.graficoFigura.vertex(0, 0);
        this.graficoFigura.bezierVertex(0,0,10,10,0,300)
        ////////////LADO ABAJO-/////////////////
        this.graficoFigura.vertex(0,300); 
        this.graficoFigura.bezierVertex(0,300,230,260,300,270)
        ////////////LADO DERECHO-/////////////////
        this.graficoFigura.vertex(300,270);
        this.graficoFigura.bezierVertex(300,270,250,50,260,30)
        ////////////LADO ARRIBA-/////////////////
        this.graficoFigura.vertex(260,30);
        this.graficoFigura.bezierVertex(260,30,30,20,0,0)
        this.graficoFigura.vertex(0,0);
        this.graficoFigura.endShape();
      },
      function() {
        
        this.graficoFigura.beginShape(); 
        ////////////LADO IZQUIERDO-/////////////////
        //this.graficoFigura.fill(0,0,250);
        this.graficoFigura.vertex(0, 0);
        this.graficoFigura.bezierVertex(0,0,10,10,50,270)
        ////////////LADO ABAJO-/////////////////
        this.graficoFigura.vertex(50,270); 
        this.graficoFigura.bezierVertex(50,270,210,290,300,300)
        ////////////LADO DERECHO-/////////////////
        this.graficoFigura.vertex(300,300);
        this.graficoFigura.bezierVertex(300,300,280,280,300,0)
        ////////////LADO ARRIBA-/////////////////
        this.graficoFigura.vertex(300,0);
        this.graficoFigura.bezierVertex(300,0,295,80,0,0)
        this.graficoFigura.vertex(0,0);
        this.graficoFigura.endShape();
      }
      
    ];
  }
  

}