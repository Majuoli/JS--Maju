let palavra;

function setup() {
  createCanvas(400, 400);

  palavra = palavraAleatoria();
  
}

function inicializaCores() {
  
  background("977264");
  fill("#000000");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function palavraParcial(minimo, maximo) {
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function palavraAleatoria(){
  
  let palavras = ["Mexerica", "Maçã", "Mandioca"];
  return random(palavras);
  
}

function draw(){
 
  inicializaCores();
  
  let maximo = width;
  let minimo = 0;
  // mouseX, 0, width ==> 0, palavra.length
  
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  //console.log(quantidade);
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 200, 200);
  
  let texto = palavraParcial(0, width);
  text(texto, 200, 200)
  
}