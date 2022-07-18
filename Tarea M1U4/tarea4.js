var nombre;
var distancia;

nombre = prompt('Ingrese su nombre', '')
distancia = prompt  ('Hola '+ nombre+ ' soy un bot hecho por JavaScript y necesito hacerte una simple pregunta ¿Cuántos metros crees que hay entre el Obelisco de Buenos Aires y tu vivienda?', '')

 
distancia=parseInt(distancia)
//if(distancia<100 >=1) {document.write ('hola soy un intento mas')}

if(distancia<1000){document.write(distancia + ' metros no es una gran distancia,si deseas visitar el Obelisco te recomiendo ir a pie, eso es todo, haz click en "aceptar" para continuar        ');}
if(distancia>1000){document.write(distancia + ' metros es mucho, te recomiendo ir en bici      ');}

var num = ['2','1','4','15','3','9','5','12','10','6','14','8','11','13','7','17','16']
num=parseInt(num)

while(num<=17){
    document.write(num);
    document.write('<br>');
    num=num+1;
  }
//if(distancia<5000 >=1000){document.write (distancia+ ' funciona');}

//un ejemplo if (nota>=4){document.write(nombre+' esta aprobado con un '+ nota);}else{document.write(nombre+' esta desaprobado con un '+ nota);}

//if (distancia <=1 >1000) {document.write (distancia+ ' etc')} else {distancia >=1000 <5000} {document.write (distancia+ ' etc')}
