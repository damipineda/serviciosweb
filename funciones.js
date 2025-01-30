// Base de datos simulada de proveedores
const proveedores = [
    {
        id: 1,
        nombre: "Juan Pérez",
        servicio: "Plomería",
        calificacion: 4.9,
        disponible: true,
        zona: "Centro",
        telefono: "0981-123-456"
    }
    // Más proveedores...
];

// Funcionalidad de búsqueda
const campoBusqueda = document.querySelector('.campo-busqueda');
const resultadosBusqueda = document.querySelector('.resultados-busqueda');

function filtrarProveedores(termino) {
    return proveedores.filter(proveedor => 
        proveedor.servicio.toLowerCase().includes(termino.toLowerCase()) ||
        proveedor.nombre.toLowerCase().includes(termino.toLowerCase())
    );
}

function mostrarResultados(resultados) {
    // Lógica para mostrar resultados
}

if (campoBusqueda) {
    campoBusqueda.addEventListener('input', (e) => {
        const resultados = filtrarProveedores(e.target.value);
        mostrarResultados(resultados);
    });
}

// Función para mostrar y ocultar el menú hamburguesa
document.addEventListener('DOMContentLoaded', () => {
    const botonHamburguesa = document.querySelector('.boton-hamburguesa');
    const menu = document.querySelector('.menu');

    botonHamburguesa.addEventListener('click', () => {
        menu.classList.toggle('mostrar');
        
        // Opcional: Animar el ícono de hamburguesa
        botonHamburguesa.classList.toggle('activo');
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (event) => {
        const esBotonHamburguesa = botonHamburguesa.contains(event.target);
        const esMenu = menu.contains(event.target);

        if (!esBotonHamburguesa && !esMenu && menu.classList.contains('mostrar')) {
            menu.classList.remove('mostrar');
        }
    });
});