$(".a-c").on("click", function () {
  //direccionar a otra pagina
  window.location.href = "./pages/bandeja.html";
});


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
