class FiguraCentral{
  
  constructor(x,y){
    this.x = x;
    this.y = y;
    
    this.graficoFigura = createGraphics(300,300);
  }

  dibujar(){
    this.graficoFigura.rectMode(CENTER);
    this.graficoFigura.background(0);
    this.graficoFigura.fill(colorFiguraCentro);
    this.graficoFigura.rect(150, 150,400,400)
    
    image(this.graficoFigura,this.x,this.y);
  }


}
