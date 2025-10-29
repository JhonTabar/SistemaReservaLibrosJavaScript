
let storedLibros = JSON.parse(localStorage.getItem("libros"));
import { getUsuarioActivo } from "./usuarios.js";

export let libros = storedLibros || [
  { id: 1, titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", lenguaje: "Español", reservadoPor: null },
  { id: 2, titulo: "Don Quijote", autor: "Miguel de Cervantes", lenguaje: "Español", reservadoPor: null },
  { id: 3, titulo: "La Odisea", autor: "Homero", lenguaje: "Griego", reservadoPor: null }
];



export let usuarioActivo = getUsuarioActivo()?.username || null;

function guardarEnLocalStorage() {
  localStorage.setItem("libros", JSON.stringify(libros));
}

export function reservarLibro(idLibro) {
  let libro = libros.find(l => l.id === idLibro);
  if (!libro) return "Libro no encontrado";

  if (libro.reservadoPor) {
    return `❌ El libro ya está reservado por ${libro.reservadoPor}`;
  }

  libro.reservadoPor = usuarioActivo;
  guardarEnLocalStorage();
  return `✅ Has reservado "${libro.titulo}"`;
}

export function devolverLibro(idLibro) {
  let libro = libros.find(l => l.id === idLibro);
  if (!libro) return "Libro no encontrado";

  if (libro.reservadoPor !== usuarioActivo) {
    return `⚠️ No puedes devolver este libro porque no lo reservaste tú.`;
  }

  libro.reservadoPor = null;
  guardarEnLocalStorage();
  return `🔄 Has devuelto "${libro.titulo}" correctamente.`;
}

export function buscarReservas(termino) {
  return libros.filter(l => l.id == termino || l.reservadoPor == termino);
}
