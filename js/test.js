
//Definición de variables
var saludo_1 = "Hola Bienvenido";
let saludo_2 = "Hola Bienvenido";
const saludo_3 = "Hola Bienvenido";

let edad = 25;
let es_noche = true;

let computadora = {
  ram: 64,
  cpu: "Ryzen 9 S90XXX",
  ssd: 2048,
  activo: true,
  precioVenta: function(){
    let precioByRam = this.ram * 50;
    let precioBySSD = this.ssd >= 1024 ? 1000 : 500; //Operador Ternario
    return precioByRam + precioBySSD + 1500;
  }
};

let alumno = { 
  nombre: "Carlos", 
  apellido:"Ramirez",
  edad: 20
};
let alumno_2 = { 
  nombre: "Juan", 
  apellido:"Chavez",
  edad: 25
};
let alumno_3 = { 
  nombre: "Eduardo", 
  apellido:"Lopez",
  edad: 30
};

let arreglo = [1,2,3,4,5,6,4,7,8,8,8,9];
let arreglo_v2 = ["Ovejita", "Vaquita", "Perrito", "Gatito"];
let arreglo_v3 = [alumno, computadora, arreglo, 123, "Holi"];

let arreglo_v4 = [alumno, alumno_2, alumno_3];



//Definición de una función
function saludar() {
  let mensaje = "Hola Bienvenidos";
  console.log(mensaje);
}

function saludarDos(mensaje) {
  console.log(mensaje);
}

function saludarTres(nombre, edad) {
  return "Hola " + nombre + ", tienes " + edad + " años";
}