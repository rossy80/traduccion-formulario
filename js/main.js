function translate(){
  var title = document.getElementById("form-signin-heading");
  var email = document.getElementById("inputEmail");
  var password = document.getElementById("inputPassword");
  var remember = document.getElementsByTagName("span")[0];
  var button = document.getElementsByClassName("btn")[0];

  title.innerHTML = "Por favor inicia sesión";
  email.placeholder = "Correo Electrónico";
  password.placeholder = "Contraseña";
  remember.innerHTML = "Recordar datos";
  button.innerHTML = "Iniciar Sesión";
}

translate();

function mostrarDatosIngresados(){
  var email = document.getElementById("inputEmail").value;
  var password = document.getElementById("inputPassword").value;
  var mostrarDatos = document.getElementById("muestraDatos");
  var guardaDatos = document.getElementById("guardaDatos");

  mostrarDatos.innerHTML = "DATOS INGRESADOS";
  guardaDatos.innerHTML = "El correo electronico ingresado es:<br>" + email +"<br>"+
  "La clave ingresada es:<br>" + password;

}
