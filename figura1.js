////////////FIGURA ARRIBA-IZQUIERDA/////////////////

class Figura1{

  constructor(x,y){
    this.x = x;
    this.y = y;
    
    
    this.graficoFigura = createGraphics(500,500);
    this.figuras = this.crearFiguras();
    
    this.figuraSeleccionada = random(this.figuras);
  }
  
  dibujar(){
    //this.graficoFigura.background(255);
    this.graficoFigura.noStroke();
    this.graficoFigura.fill(colorFiguras);
    this.figuraSeleccionada(this.graficoFigura);
    
    blend(this.graficoFigura, 0, 0, 300, 300, this.x - 150, this.y - 150, 300, 300, HARD_LIGHT);
  }
  
  crearFiguras(){
    
    
   return [
      function(){
        
        this.graficoFigura.beginShape(); 
        ////////////LADO IZQUIERDO-/////////////////
        this.graficoFigura.vertex(0, 0);
        this.graficoFigura.bezierVertex(0,0,10,10,0,300)
        ////////////LADO ABAJO-/////////////////
        this.graficoFigura.vertex(0,300);
        this.graficoFigura.bezierVertex(0,300,20,200,250,250)
        ////////////LADO DERECHA-/////////////////
        this.graficoFigura.vertex(250,250);
        this.graficoFigura.bezierVertex(300,300,200,100,300,0)
        ////////////LADO ARRIBA-/////////////////
        this.graficoFigura.vertex(300,0);
        this.graficoFigura.bezierVertex(300,0,30,10,0,0)
        this.graficoFigura.vertex(0,0);
        this.graficoFigura.endShape();
      },
      function() {
        
        this.graficoFigura.beginShape();
        ////////////LADO IZQUIERDO-/////////////////
        this.graficoFigura.vertex(0, 5);
        this.graficoFigura.bezierVertex(0,5,10,10,0,300)
        ////////////LADO ABAJO-/////////////////
        this.graficoFigura.vertex(0,300); 
        this.graficoFigura.bezierVertex(0,300,230,230,300,300)
        ////////////LADO DERECHO-/////////////////
        this.graficoFigura.vertex(300,300);
        this.graficoFigura.bezierVertex(300,300,160,50,250,30)
        ////////////LADO ARRIBA-/////////////////
        this.graficoFigura.vertex(250,30);
        this.graficoFigura.bezierVertex(250,30,30,10,0,0)
        this.graficoFigura.vertex(0,0);
        this.graficoFigura.endShape();
      },
      function() {
        
        this.graficoFigura.beginShape(); 
        ////////////LADO IZQUIERDO-/////////////////
        this.graficoFigura.vertex(0, 0);
        this.graficoFigura.bezierVertex(0,0,10,10,0,250)
        ////////////LADO ABAJO-/////////////////
        this.graficoFigura.vertex(0,250); 
        this.graficoFigura.bezierVertex(0,250,20,260,230,200)
        ////////////LADO DERECHO-/////////////////
        this.graficoFigura.vertex(230,200);
        this.graficoFigura.bezierVertex(230,200,170,80,260,0)
        ////////////LADO ARRIBA-/////////////////
        this.graficoFigura.vertex(260,0);
        this.graficoFigura.bezierVertex(260,0,30,10,0,0)
        this.graficoFigura.vertex(0,0);
        this.graficoFigura.endShape();
      
      }
    ];
  }
  

}