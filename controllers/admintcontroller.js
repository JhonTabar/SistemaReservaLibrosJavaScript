import { buscarReservas } from "../models/libro.js";

const input = document.getElementById("inputBusqueda");
const btn = document.getElementById("btnBuscar");
const resultado = document.getElementById("resultado");

btn.addEventListener("click", () => {
  let termino = input.value.trim();
  let resultados = buscarReservas(termino);

  if (resultados.length === 0) {
    resultado.innerHTML = `<p>No se encontraron registros.</p>`;
  } else {
    resultado.innerHTML = resultados.map(l => `
      <div class="resultado-item">
        <p><strong>Libro:</strong> ${l.titulo}</p>
        <p><strong>Reservado por:</strong> ${l.reservadoPor || "Disponible"}</p>
      </div>
    `).join("");
  }
});