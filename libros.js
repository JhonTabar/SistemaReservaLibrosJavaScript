
let usuarioActivo = "JhonTabar";


let libros = [
    { id: 1, titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", lenguaje: "Español", reservadoPor: null },
    { id: 2, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", lenguaje: "Español", reservadoPor: null },
    { id: 3, titulo: "La Odisea", autor: "Homero", lenguaje: "Griego", reservadoPor: null }
];


let listaLibros = document.getElementById("listaLibros");
let mensajeReserva = document.getElementById("mensajeReserva");


function mostrarLibros() {
    listaLibros.innerHTML = "";

    libros.forEach(function (libro) {

        let li = document.createElement("li");
        li.textContent = libro.titulo + " - " + libro.autor + " (" + libro.lenguaje + ")";


        if (libro.reservadoPor) {
            li.textContent += " ✅ Reservado por: " + libro.reservadoPor;
        } else {

            let boton = document.createElement("button");
            boton.textContent = "Reservar";


            boton.addEventListener("click", function () {
                reservarLibro(libro);
            });

            li.appendChild(boton);
        }


        listaLibros.appendChild(li);
    });
}


function reservarLibro(libro) {
    libro.reservadoPor = usuarioActivo;


    mensajeReserva.style.color = "green";
    mensajeReserva.textContent = "📚 Has reservado: " + libro.titulo;


    console.log("El usuario \"" + usuarioActivo + "\" reservó el libro: " + libro.titulo);


    mostrarLibros();
}


mostrarLibros();