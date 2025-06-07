$(".a-c").on("click", function () {
  //direccionar a otra pagina
  window.location.href = "./pages/bandeja.html";
});

//Definición de variables
var saludo_1 = "Hola Bienvenido";
let saludo_2 = "Hola Bienvenido";
const saludo_3 = "Hola Bienvenido";

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
