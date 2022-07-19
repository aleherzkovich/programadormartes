var texto = document.getElementById("areadetexto"); //creo la variable donde se colocó el texto a contar
var cantidad = document.getElementById('boton');//var del boton para luego dar funcion

texto.addEventListener("keypress", function(e) {
  inputLength = texto.value.length;
})//funcion para que tome el texto como valor numerico

cantidad.addEventListener('click', function(e) { 
  alert('la cantidad de caracteres es '+ [inputLength+ 1])
}) //funcion de un alerta con la cantidad
  