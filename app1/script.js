// Array inicial con cinco animales
let animales = ["Perro", "Gato", "Elefante", "León", "Tigre"];

function actualizarOutput() {
    document.getElementById("output").textContent =
        "Array: [ " + animales.join(", ") + " ]";
}

function agregarInicio() {
    const input = document.getElementById("animalInput");
    const nombre = input.value.trim();
    if (nombre === "") {
        alert("Por favor, escribe el nombre de un animal.");
        return;
    }
    animales.unshift(nombre);
    input.value = "";
    actualizarOutput();
}

function agregarFinal() {
    const input = document.getElementById("animalInput");
    const nombre = input.value.trim();
    if (nombre === "") {
        alert("Por favor, escribe el nombre de un animal.");
        return;
    }
    animales.push(nombre);
    input.value = "";
    actualizarOutput();
}

function eliminarTercero() {
    if (animales.length < 3) {
        alert("El array tiene menos de 3 elementos. No se puede eliminar la tercera posición.");
        return;
    }
    const eliminado = animales.splice(2, 1);
    actualizarOutput();
    alert("Se eliminó: " + eliminado[0]);
}

function imprimirArray() {
    actualizarOutput();
}
