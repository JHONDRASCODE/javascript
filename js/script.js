console.log("analisis y desarrollo de software")
/* este tipo de comentario es para trabajar en 
difrente linea de codigo */ 
// es para manejaren una sola linea

//var edad=25;

//console.log("Mi edad es: "+edad) // el simbolo "+" va ha funcionar para concatenar 
//alert("Mi edad es: "+edad )
//document.write("Mi edad es: "+edad )
//const nom="sebastian";
//let num=2.5;
//booleano=false;
/*
const nom="sebastian"
const ape="ramirez"
alert("mi nobre es "+nom+" y mi apellido es "+ape)*/
/* operadores arimeticos 
const num1=5
const num2=3
const div = num1/num2
alert("la suma es "+div)*/
//console.log(typeof booleano); es para definir el tipo de dato 

let nom=prompt("escriba el nombre")
let edad=prompt("escriba su edad")
let peso=prompt("escriba su peso")
let ciud=prompt("escriba su ciudad")
let direc=prompt("escriba su direccion")
alert("mi nombre es "+nom+", mi edad es "+edad+"años"+", yo peso "+peso+"kg"+ ", vivo en "+ciud+", mi direccion es "+direc)
/* mostrar en una alerta nombres y apellidos completos, edad, peso y ciudad de residencia y direcion wjcvwegcvjw*/

/*Una tienda ofrece un 25% de descuento por cada compra. Un cliente desea
saber cuánto deberá pagar por su compra. */
/*let compr = prompt ("introduzca el precio de su compra");
let descuento = 25/100
let compr1 = parseInt(compr*descuento)
alert ("el valor total que debera pagar por su compra es de "+compr1) */

/*Suponga que un individuo desea invertir su capital en un banco y desea saber
cuánto dinero ganara después de un mes si el banco paga a razón de 2%
mensual.*/
/*let inv = prompt ("cuanto dinero piensa en invertir")
let pgan = 2/100
let gans= (inv * pgan);
let din = parseInt(inv) + parseInt(pgan);
alert("dinero invertido")*/

/*Un alumno desea saber cuál será su calificación final en la materia de
Algoritmos. Dicha calificación se compone de los siguientes porcentajes:
a. 55% del promedio de sus tres calificaciones parciales.
b. 30% de la calificación del examen final.
c. 15% de la calificación de un trabajo final.*/

/*let cali1 = prompt("ingrsar nota de su primera calificacion");
let cali2 = prompt("ingrsar nota de su segunda calificacion");
let cali3 = prompt("ingrsar nota de su tercera calificacion");
let exfnl = prompt("ingrese la nota de su examen final ");
let tfnl = prompt("ingrese la nota de su trabajp final")
let cal = parseInt(cali1+cali2+cali3)/3
let porcali = 55/100
let porexf = 30/100
let portf = 15/100
let porcf =*/

/*El dueño de una tienda compra un artículo a un precio determinado. Obtener el
precio en que lo debe vender para obtener una ganancia del 30%.*/

/*let partlo = pront ("porfavor ingrese el precio del articulo");
 let parto = parseInt (partlo);
 let pventa = partlo + (parto * 0.30);
 console.log =("el precio de venta para obtener el 30% es: "+ pventa);*/

 /*Un taxi cobra por una carrera 15 mil pesos por kilómetro recorrido y 2 mil por
 minuto. Determine el monto a pagar por una carrera.*/

/*let km = prompt("cuantos kilometros ha recorrido? ");
let min = prompt("cuantos minutos demoro en recorrer esta distancia? ");
let dkm = 15000;
let dmin = 2000;
let dtkm = parseInt(dkm) * parseInt(km);
let dtmin = parseInt(dmin) * parseInt(min);
let vcrr = parseInt(dtkm) * parseInt(dtmin);
alert("El valor de esta carrera es de: "+vcrr);*/

/*Ejercicio 6 - Realizara un programa en el cual se van a leer tres números y determinar el
cuadrado de cada uno de ellos. */

let num1 = prompt("ingrese el primer número")
let num2 = prompt("ingrese el segundo número")
let num3 = prompt("ingrese el tercer núemro")
let cua1 = Math.pow(num1, 2);
let cua2 = Math.pow(num2, 2);
let cua3 = Math.pow(num3, 2);

alert("el cuadrado de los tres numeros es de " +cua1+ " el primer numero," +cua2+" el segundo numero y " +cua3+ " el tercer numero");

/*Ejercicio 7 - En un hospital existen tres áreas: Ginecología, Pediatría, Traumatología. El
presupuesto anual del hospital se reparte conforme a la sig. tabla:
Area          : Porcentaje del presupuesto
ginecología   : 40%
traumatología : 30% 
pediatría     : 30%
Obtener la cantidad de dinero que recibirá cada área, para cualquier monto
presupuestal.*/

let presupuesto = prompt("Ingrece el presepuesto de este año en el hospital");
let gine = 40/100;
let trau = 30/100;
let pedi = 30/100;
let resg = parseInt(presupuesto*gine);
let rest = parseInt(presupuesto*trau);
let resp = parseInt(presupuesto*pedi);

alert("el presupuesto del hopital queda dividido de la siguiente manera: $" +resg+ " en el area de ginecología,$" +rest+ " en el area de traumatología y $" +resp+ " en el area de pediatría.");

/*Ejercico 8 - El dueño de una tienda compra un artículo a un precio determinado. Obtener el
precio en que lo debe vender para obtener una ganancia del 30%. "REPETIDO"*/

/*Ejercicio 9 - Tres personas deciden invertir su dinero para fundar una empresa. Cada una de
ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte
con respecto a la cantidad total invertida. */

let pers1 = prompt("Ingrese la cantidad de dinero invertido por la primera persona");
let pers2 = prompt("Ingrese la cantidad de dinero invertido por la segunda persona");
let pers3 = prompt("Ingrese la cantidad de dinero invertido por la tercera persona");
let totalp = parseInt(pers1)+ parseInt(pers2)+ parseInt(pers3);
let tper1 = parseInt(pers1)* parseInt(100/totalp);
let tper2 = parseInt(pers2)* parseInt(100/totalp);
let tper3 = parseInt(pers3)* parseInt(100/totalp);

alert("El porcentaje que cada persona invirtio en la fundacion de la empresa es de " +tper1+ "% la primera persona, " +tper2+ "% la segunda persona y " +tper3+ "% la tercera persona.");

/*Ejercicio 10 - Realizar una calculadora con las operaciones básicas suma, división,
multiplicación y división. */

let opcion = prompt("1. suma 2. resta 3. division 4. multiplcacion");
let nume1 = prompt("digite el numero 1");
let nume2 = prompt("digite el numero 2");

if (opcion==1){
    suma=parseInt(nume1)+parseInt(nume2);
    alert(suma);
} else if(opcion==2){
    resta=parseInt(nume1)-parseInt(nume2);
    alert(resta);
} else if(opcion==3){
    division=parseInt(nume1)/parseInt(nume2);
    alert(division);
} else {
    multiplicacion=parseInt(nume1)*parseInt(nume2);
    alert(multiplicacion);
}



