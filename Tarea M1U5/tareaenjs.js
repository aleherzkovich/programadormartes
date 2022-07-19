var cambio11 = document.getElementById('caja1');
var cambio22 = document.getElementById('caja2');
var cambio33 = document.getElementById('caja3');
//creo las variables del cambio

cambio11.addEventListener("click", backrojo);
cambio22.addEventListener("click", backazul);
cambio33.addEventListener("click", backamarillo);
//agrego funcion al click

function backrojo() {
  document.getElementById("fondo").style.backgroundColor= "red";
} 
function backazul() {
    document.getElementById("fondo").style.backgroundColor= "blue";
  } 
  function backamarillo() {
    document.getElementById("fondo").style.backgroundColor= "yellow";
  } 
  //doy orden del click = cambio de color