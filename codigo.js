var p1 = document.querySelector("#texto-entrada");
//console.log(typeof(p1.textContent));
var texto = p1.textContent;


// Parte 1: Contando letras
var contador_letras = {
};

for(var i = 0; i < texto.length; i++) {
  console.log(texto.charAt(i));

  if (!contador_letras[texto.charAt(i)]) {
  contador_letras[texto.charAt(i)] = 1;
  }
  else {
    contador_letras[texto.charAt(i)] += 1;
  }
}

//console.log(contador_letras);

// codigo para iterar object viene de https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
for (const [key, value] of Object.entries(contador_letras)) {
  //console.log(`${key}: ${value}`);
  var nuevo_tag = document.createElement("p");
  var texto_del_tag = document.createTextNode(`${key}: ${value}`);
  nuevo_tag.appendChild(texto_del_tag);
  document.getElementById("resultados").appendChild(nuevo_tag);
}


// Parte 2: Contando palabras
var texto_limpio_de_puntos = texto.replaceAll(".", "");
var texto_limpio_de_puntos_y_comas = texto_limpio_de_puntos.replaceAll(",", "");
var array_palabras = texto_limpio_de_puntos_y_comas.split(" ");
//console.log(array_palabras);
var contador_palabras = {
};


for(var i = 0; i < array_palabras.length; i++) {
  //console.log(texto.charAt(i));

  if (!contador_palabras[array_palabras[i]]) {
  contador_palabras[array_palabras[i]] = 1;
  }
  else {
    contador_palabras[array_palabras[i]] += 1;
  }
}
//console.log(contador_palabras);


for (const [key, value] of Object.entries(contador_palabras)) {
  //console.log(`${key}: ${value}`);
  var nuevo_tag = document.createElement("p");
  var texto_del_tag = document.createTextNode(`${key}: ${value}`);
  nuevo_tag.appendChild(texto_del_tag);
  document.getElementById("resultados").appendChild(nuevo_tag);
}
