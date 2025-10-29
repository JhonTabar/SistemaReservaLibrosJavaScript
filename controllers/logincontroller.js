
import { consultarLocalStorage, guardarLocalStorage, establecerUsuarioActivo } from "../services/localstorage.js";
import { Usuarios } from "../models/usuarios.js"; 

const btnLogin = document.getElementById("btnLogin");
const msg = document.getElementById("mensaje");




let usuariosLS = consultarLocalStorage("usuarios");


let usuarios; 
if (usuariosLS && usuariosLS.length > 0) {
    usuarios = usuariosLS;
} else if (Usuarios && Usuarios.length > 0) {
    usuarios = Usuarios;
    guardarLocalStorage("usuarios", usuarios); 
};

console.log("Usuarios cargados:", usuarios); 
