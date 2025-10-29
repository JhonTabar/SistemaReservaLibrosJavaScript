
let storedUsers = JSON.parse(localStorage.getItem("usuarios"));

export let usuarios = storedUsers || [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "JhonTabar", password: "user123", role: "user" }
];


export function guardarUsuarios() {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}


export function autenticar(username, password) {
  return usuarios.find(user => user.username === username && user.password === password);
}


export function setUsuarioActivo(usuario) {
  localStorage.setItem("usuarioActivo", JSON.stringify(usuario));
}

export function getUsuarioActivo() {
  return JSON.parse(localStorage.getItem("usuarioActivo"));
}


guardarUsuarios();
