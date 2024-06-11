let bgColor, colores;
let figura1;
let figura2;
let figura3;
let figura4;
let figuraCentral;
let figuraCentral2;
let colorFiguras, coloresF;
let colorFiguraCentro, coloresFC;

function setup() {
  createCanvas (700, 650);
  ////////////COLOR FONDO/////////////////
  
  colores = [
    color(148, 127, 193), // azul clarito al que hay que cambiar
    color(42, 54, 72), // azul oscuro
    color(71, 68, 113), //Viola
    color(50, 82, 50), // Verde oscuro
  ];
  
 
  ////////////COLOR FIGURAS/////////////////
  coloresF = [
    color(125, 152, 193), 
    color(137, 211, 181), 
    color(194, 156, 209), 
    color(222, 229, 144), 
  ];
  ////////////COLOR FIGURA-CENTRO1/////////////////
  coloresFC = [
    color(214,99,99), 
    color(252, 233, 48)
     
  ];
  
  coloresFC2= [
    color(224,180,0),
    color(106,136,250)
  ]
  
  bgColor = colores[Math.floor(Math.random() * colores.length)];
  colorFiguras = coloresF[Math.floor(Math.random() * coloresF.length)];
  colorFiguraCentro = coloresFC[Math.floor(Math.random() * coloresFC.length)];
  colorFiguraCentro2 = coloresFC2[Math.floor(Math.random() * coloresFC.length)];
  imageMode(CENTER);
  
  figuraCentral = new FiguraCentral(width/2,height/2)
  figuraCentral2 = new FiguraCentral2(width/2,height/2)
  figura1 = new Figura1(width/4, height/4, 300, 300)
  figura2 = new Figura2(width/4 + 350, height/4, 300, 300)
  figura3 = new Figura3(width/4, height/4 + 330, 300, 300)
  figura4 = new Figura4(width/4 + 350, height/4 +330, 300, 300)
  
  
}


function draw() {
  background(bgColor);
 
  figuraCentral.dibujar();
  figuraCentral2.dibujar();
  figura1.dibujar();
  figura2.dibujar();
  figura3.dibujar();
  figura4.dibujar();
  

}

// Función para crear un color con transparencia
function colorConTransparencia(r, g, b, a) {
  return color(r, g, b, a);
}

// Definir colores con transparencia
coloresF = [
  colorConTransparencia(125, 152, 193, 128),
  colorConTransparencia(137, 211, 181, 128),
  colorConTransparencia(194, 156, 209, 128),
  colorConTransparencia(222, 229, 144, 128),
];
