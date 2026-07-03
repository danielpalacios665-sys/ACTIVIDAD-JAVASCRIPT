// Array inicial (con duplicado a propósito)
let datosArray = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Lunes", "Sábado"];
let datosSet = null;
let datosMap = null;

let estado = "array"; // 'array' | 'set' | 'map'

function actualizarEstado(estadoActual) {
    estado = estadoActual;
    const statusBar = document.getElementById("statusBar");
    if (estado === "array") {
        statusBar.innerHTML = '<span class="status-item" style="background:#d4edda;color:#155724;">Array activo</span>';
    } else if (estado === "set") {
        statusBar.innerHTML = '<span class="status-item" style="background:#fff3cd;color:#856404;">Set activo</span>';
    } else if (estado === "map") {
        statusBar.innerHTML = '<span class="status-item" style="background:#cce5ff;color:#004085;">Map activo</span>';
    }
}

function actualizarOutput() {
    const output = document.getElementById("output");
    if (estado === "array") {
        output.textContent = "Array: [ " + datosArray.join(", ") + " ]";
    } else if (estado === "set") {
        output.textContent = "Set: { " + [...datosSet].join(", ") + " }";
    } else if (estado === "map") {
        let texto = "Map:\n";
        for (const [clave, valor] of datosMap) {
            texto += "  " + clave + " -> " + valor + "\n";
        }
        output.textContent = texto;
    }
}

function transformarASet() {
    // Transformar el Array a un Set (elimina duplicados automáticamente)
    datosSet = new Set(datosArray);
    actualizarEstado("set");
    actualizarOutput();
    alert("Array transformado a Set. Los duplicados fueron eliminados.");
}

function transformarAMap() {
    if (estado !== "set" || datosSet === null) {
        alert("Primero debes transformar el Array a Set (boton 'Array -> Set').");
        return;
    }
    // Transformar el Set a un Map: cada valor del Set es clave y su longitud es el valor
    datosMap = new Map();
    for (const item of datosSet) {
        datosMap.set(item, item.length);
    }
    actualizarEstado("map");
    actualizarOutput();
    alert("Set transformado a Map. Clave -> longitud de la palabra.");
}

function imprimirMap() {
    if (estado !== "map" || datosMap === null) {
        alert("Primero debes transformar a Map (boton 'Set -> Map').");
        return;
    }
    actualizarOutput();
}
