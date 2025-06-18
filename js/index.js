$(".a-c").on("click", function () {
  //direccionar a otra pagina
  window.location.href = "./pages/bandeja.html";
});

<<<<<<< Updated upstream
=======
//Definición de variables
var saludo_1 = "Hola Bienvenido";
let saludo_2 = "Hola Bienvenido";
const saludo_3 = "Hola Bienvenido";

let edad = 25
let es_noche = true;

let computadora = {
  ram: 64;
  cpu "Rysen 9 s98xx"
  sdd: 2048;
  activo: true
  precioventa: function(){
    let precioparcial = this.ram * 50; 3200
    let precioparcial = this.ssd >= 1024 ? 1000 : 500 ; 

    return precioByRam + precioBySSD + 1500;
  }
}
//Definición de una función
var saludo_1 = "hola bienvenido"
let saludo_2 = "hola bienvenido"
const saludo_3 = "hola bienvenido"




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
>>>>>>> Stashed changes

let nroIntentos = 0;
function login(usuario, contrasenia) {
  let user = "admin";
  let pass = "123456";

  if (usuario == user && contrasenia == pass) {
    console.log("Acceso autorizado");
  } else {
    nroIntentos = nroIntentos + 1;

    if (nroIntentos >= 3) {
      console.log("Superó el número de intentos permitidos");
    } else {
      console.log("Usuario o contraseña incorrectos");
    }
  }
}
