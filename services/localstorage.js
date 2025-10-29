
export function guardarLocalStorage(llave, valor) {
    localStorage.setItem(llave, JSON.stringify(valor));
}


export function consultarLocalStorage(llave) {
    let data = localStorage.getItem(llave);
    return data ? JSON.parse(data) : null;
}


export function eliminarLocalStorage(llave) {
    localStorage.removeItem(llave);
}


export function establecerUsuarioActivo(usuario) {
    guardarLocalStorage("usuarioActivo", usuario);
}


export function obtenerUsuarioActivo() {
    return consultarLocalStorage("usuarioActivo");
}


export function estaAutenticado() {
    return obtenerUsuarioActivo() !== null;
}