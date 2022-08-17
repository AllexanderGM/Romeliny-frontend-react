let btnActivarAside = document.querySelector("#abrirAside");
let btnDesactivarAside = document.querySelector("#cerrarAside");
let asideLeft = document.querySelector(".aside-left-cerrado");

// Logica para aside left

btnActivarAside.addEventListener("click", abrirAside);
btnDesactivarAside.addEventListener("click", cerrarAside);

function abrirAside() {
  asideLeft.className = "aside-left-abierto";
}

function cerrarAside() {
  asideLeft.className = "aside-left-cerrado";
}

// Logica para aside login/registrer

let btnActivarLogin = document.querySelector(".abrirLogin");
let btnDesactivarLogin = document.querySelector(".cerrarLogin");
let login = document.querySelector(".login-registrer-oculto");

btnActivarLogin.addEventListener("click", abrirLogin);
btnDesactivarLogin.addEventListener("click", cerrarLogin);

function abrirLogin() {
  login.className = "login-registrer-visible";
}

function cerrarLogin() {
  login.className = "login-registrer-oculto";
}
