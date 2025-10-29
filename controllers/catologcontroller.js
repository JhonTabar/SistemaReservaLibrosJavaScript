import { libros, reservarLibro, devolverLibro, usuarioActivo } from "../models/libro.js";

const catalogoDiv = document.getElementById("catalogoLibros");
const mensajeDiv = document.getElementById("mensajeReserva");
document.getElementById("usuarioActivo").textContent = usuarioActivo;

function mostrarLibros() {
  catalogoDiv.innerHTML = "";
  libros.forEach(libro => {
    let card = document.createElement("div");
    card.classList.add("libro-card");

    card.innerHTML = `
      <h3>${libro.titulo}</h3>
      <p><strong>Autor:</strong> ${libro.autor}</p>
      <p><strong>Lenguaje:</strong> ${libro.lenguaje}</p>
      <p><strong>Estado:</strong> ${libro.reservadoPor ? "Reservado por " + libro.reservadoPor : "Disponible"}</p>
    `;

    // 🔹 Button logic depending on reservation state
    if (!libro.reservadoPor) {
      let btnReservar = document.createElement("button");
      btnReservar.textContent = "Reservar";
      btnReservar.onclick = () => {
        mensajeDiv.textContent = reservarLibro(libro.id);
        mostrarLibros();
      };
      card.appendChild(btnReservar);
    } else if (libro.reservadoPor === usuarioActivo) {
      let btnDevolver = document.createElement("button");
      btnDevolver.textContent = "Devolver";
      btnDevolver.onclick = () => {
        mensajeDiv.textContent = devolverLibro(libro.id);
        mostrarLibros();
      };
      card.appendChild(btnDevolver);
    }

    catalogoDiv.appendChild(card);
  });
}

mostrarLibros();
