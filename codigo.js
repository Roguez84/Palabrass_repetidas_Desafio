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

// codigo para iterar object viene de https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
for (const [key, value] of Object.entries(contador_letras)) {
  //console.log(`${key}: ${value}`);
  var nuevo_tag = document.createElement("p");
  var texto_del_tag = document.createTextNode(`${key}: ${value}`);
  nuevo_tag.appendChild(texto_del_tag);
  document.getElementById("resultados").appendChild(nuevo_tag);
}
