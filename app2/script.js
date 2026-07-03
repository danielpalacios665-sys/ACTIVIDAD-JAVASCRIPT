// Set inicial con cinco libros
const libros = new Set([
    "Cien años de soledad",
    "Don Quijote",
    "Rayuela",
    "El principito",
    "1984"
]);

function actualizarOutput() {
    const texto = "Set { " +
        [...libros].map(l => '"' + l + '"').join(", ") +
        " }";
    document.getElementById("output").textContent = texto;
}

function agregarLibro() {
    const input = document.getElementById("libroInput");
    const nombre = input.value.trim();
    if (nombre === "") {
        alert("Por favor, escribe el nombre de un libro.");
        return;
    }
    libros.add(nombre);
    input.value = "";
    actualizarOutput();
    alert("Libro añadido correctamente.");
}

function eliminarLibro() {
    const input = document.getElementById("libroInput");
    const nombre = input.value.trim();
    if (nombre === "") {
        alert("Por favor, escribe el nombre del libro que deseas eliminar.");
        return;
    }
    if (!libros.has(nombre)) {
        alert('El libro "' + nombre + '" no existe en el Set.');
        return;
    }
    libros.delete(nombre);
    input.value = "";
    actualizarOutput();
    alert('Se eliminó: "' + nombre + '"');
}

function imprimirSet() {
    actualizarOutput();
}
