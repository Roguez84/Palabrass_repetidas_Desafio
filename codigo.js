var p1 = document.querySelector("#texto-entrada");
//console.log(typeof(p1.textContent));
var texto = p1.textContent;

var contador_letras = {
};

for(var i = 1; i < 12; i++) {
  console.log(texto.charAt(i));

  if (!contador_letras[texto.charAt(i)]) {
  contador_letras[texto.charAt(i)] = 1;
  }
  else {
    contador_letras[texto.charAt(i)] += 1;
  }
}

console.log(contador_letras);

// var contador_letras = {
//     llave1: "valor1",
//     llave2: 2
// }
