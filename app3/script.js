// Mapa que asocia el número del mes a su nombre
const meses = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
]);

function formatearMapa() {
    let texto = "Mapa de meses:\n";
    for (const [clave, valor] of meses) {
        if (Array.isArray(valor)) {
            texto += clave + " - [ " + valor.join(", ") + " ]\n";
        } else {
            texto += clave + " - " + valor + "\n";
        }
    }
    return texto;
}

function actualizarOutput() {
    document.getElementById("output").textContent = formatearMapa();
}

function comprobarMes5() {
    if (meses.has(5)) {
        alert("El mes número 5 SÍ existe en el Map. Su valor es: " + meses.get(5));
    } else {
        alert("El mes número 5 NO existe en el Map.");
    }
}

function anadirVerano() {
    // Verificar si ya se añadió la clave "verano"
    for (const [clave] of meses) {
        if (clave === "verano") {
            alert("La clave 'verano' ya existe en el Map.");
            return;
        }
    }
    // Añadir una clave 'verano' con un array de los meses de verano
    meses.set("verano", ["Diciembre", "Enero", "Febrero"]);
    actualizarOutput();
    alert("Se añadió la clave 'verano' con los meses: Diciembre, Enero, Febrero");
}

function imprimirMapa() {
    actualizarOutput();
}
