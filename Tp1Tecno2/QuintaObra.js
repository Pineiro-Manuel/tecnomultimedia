let bgColor, colores;
let figura1;
let figura2;
let figura3;
let figura4;
let figuraCentral;
let figuraCentral2;
let colorFiguras, coloresF;
let colorFiguraCentro, coloresFC;

//CONFIGURACION AMPLITUD
let AMP_MIN = 0.02; //UMBRAL MINIMO DE SONIDO 
let AMP_MAX = 0.2; //UMBRAL MAXIMO DEL SONIDO
let AMORTIGUACION = 0.5;// factor de amortiguacion de la señal

//MICROFONO
let mic;


//AMPLITUD
let amp //variable para cargar amplitud de entrada del mic
let haySonido = false;

//GESTOR AMPLITUD
let gestorAmp;



//IMPRIMIR
let IMPRIMIR = false;



///////////////////////////////////PITCH/////////////////////////////////
let FREC_MIN = 300;
let FREC_MAX = 2000;

let pitch;
let audioContext;

let gestorPitch;

let estado = "agregar";
let rectangulos = [];
let cantidad = 0;

let elColor;
let colorInicial;
let colorFinal;

const model_url = 'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';

function setup() {
  
//MICROFONO
  mic = new p5.AudioIn();//objeto que se comunica con la entrada del mic
  mic.start(startPitch);// se inicia el flujo de audio
  userStartAudio();// desbuguear sonido
  
  //GESTOR
  gestorAmp = new GestorSenial(AMP_MIN, AMP_MAX);// inicializo el gestor con umbrales minmimo y maximo de la señal
  
  gestorAmp.f = AMORTIGUACION;
  
  /////////////////////////
  createCanvas (700, 650);
  /////////////////////////
  
 
  ///////////////////////PITCH/////////////////
  
  audioContext = getAudioContext();
  
  //GESTOR
  gestorPitch = new GestorSenial (FREC_MIN, FREC_MAX);
  
  antesHabidaSonido = false;
  elColor = color(0);
  colorInicial = color(0,0,255);
  colorFinal = color(255,255,0);
  
  
  
  ////////////COLOR FONDO/////////////////
  
  colores = [
    color(148, 167, 193), // azul clarito 
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
    color(219, 216, 111)
     
  ];
  ////////////COLOR FIGURA-CENTRO2/////////////////
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
  
  gestorAmp.actualizar(mic.getLevel());
   
  amp = gestorAmp.filtrada;
  
  
  // Actualizar tamaño de figuraCentral2 basado en la amplitud
  figuraCentral2.actualizarTamY(map(amp, AMP_MIN, AMP_MAX, 150, 200)); // Mapea la amplitud a un rango de tamaños
  
  
  //////////////////////////////pitch//////////////////
  
  let vol = mic.getLevel();
  
  haySonido = amp > AMP_MIN;
  if(haySonido){
  colorFiguras = coloresF[Math.floor(Math.random() * coloresF.length)];
  figura1.graficoFigura.clear();
  figura1.figuraSeleccionada = random(figura1.crearFiguras());
  }
  
  background(bgColor);
  figuraCentral.dibujar();
  figuraCentral2.dibujar();
  figura1.dibujar();
  figura2.dibujar();
  figura3.dibujar();
  figura4.dibujar();
  if(IMPRIMIR){
  printData();
  gestorAmp.dibujar(100,100);
  gestorPitch.dibujar(100,300);
  }

}
//////////////////amplitud//////////
function printData(){
push();
textSize(16);
fill(0);
let texto, texto2;

texto = "amplitud" + amp;
text (texto, 20,20);
//texto = "pitch" + pitch;
//text (texto, 20,60);

fill(0);
ellipse(width/2, height-amp * 300, 30,30)


pop();


}

///////////////////-----PItch detection


function startPitch() {
  pitch = ml5.pitchDetection(model_url, audioContext , mic.stream, modelLoaded);
}

function modelLoaded() {
  getPitch();
}

function getPitch() {
  pitch.getPitch(function(err, frequency) {
    if (frequency) {
      
      gestorPitch.actualizar(frequency);
      
    }
    getPitch();
  })
}
