// document.addEventListener("DOMContentLoaded", function() {
//     const relojes = [
//         { id: 1, nombre: "Reloj Clásico", precio: 50, imagen: "gshock1.webp" },
//         { id: 2, nombre: "Reloj Deportivo", precio: 70, imagen: "gshock2.webp" },
//         { id: 3, nombre: "Reloj Elegante", precio: 100, imagen: "gshock3.webp" }
//     ];

//     // Función para cargar los relojes disponibles
//     function cargarRelojes() {
//         const relojesContainer = document.getElementById('relojes');
//         relojes.forEach(reloj => {
//             const relojElemento = document.createElement('div');
//             relojElemento.classList.add('reloj');
//             relojElemento.innerHTML = `
//                 <img src="img/${reloj.imagen}" alt="${reloj.nombre}">
//                 <h3>${reloj.nombre}</h3>
//                 <p>Precio: $${reloj.precio}</p>
//                 <button class="agregar-carrito" data-id="${reloj.id}">Agregar al carrito</button>
//             `;
//             relojesContainer.appendChild(relojElemento);
//         });
//     }

//     // Función para agregar un reloj al carrito
//     function agregarAlCarrito(event) {
//         const relojId = parseInt(event.target.dataset.id);
//         const relojSeleccionado = relojes.find(reloj => reloj.id === relojId);
//         if (relojSeleccionado) {
//             const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
//             carrito.push(relojSeleccionado);
//             localStorage.setItem('carrito', JSON.stringify(carrito));
//             mostrarCarrito();
//         }
//     }

//     // Función para mostrar los relojes en el carrito
//     function mostrarCarrito() {
//         const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
//         const carritoElemento = document.getElementById('carrito');
//         carritoElemento.innerHTML = '';
//         carrito.forEach(reloj => {
//             const relojCarrito = document.createElement('li');
//             relojCarrito.textContent = `${reloj.nombre} - $${reloj.precio}`;
//             carritoElemento.appendChild(relojCarrito);
//         });
//     }

//     // Función para vaciar el carrito
//     function vaciarCarrito() {
//         localStorage.removeItem('carrito');
//         mostrarCarrito();
//     }

//     // Evento click para agregar reloj al carrito
//     document.addEventListener('click', function(event) {
//         if (event.target.classList.contains('agregar-carrito')) {
//             agregarAlCarrito(event);
//         }
//     });

//     // Evento click para vaciar carrito
//     document.getElementById('vaciar-carrito').addEventListener('click', vaciarCarrito);

//     // Cargar los relojes al cargar la página
//     cargarRelojes();
//     mostrarCarrito();
// });

document.addEventListener("DOMContentLoaded", function() {
    const relojes = [
        { id: 1, nombre: "Reloj Clásico", precio: 50, imagen: "gshock1.webp" },
        { id: 2, nombre: "Reloj Deportivo", precio: 70, imagen: "gshock2.webp" },
        { id: 3, nombre: "Reloj Elegante", precio: 100, imagen: "gshock3.webp" }
    ];

    // Función para cargar los relojes disponibles
    function cargarRelojes() {
        const relojesContainer = document.getElementById('relojes');
        relojes.forEach(reloj => {
            const relojElemento = document.createElement('div');
            relojElemento.classList.add('reloj');
            relojElemento.innerHTML = `
                <img src="img/${reloj.imagen}" alt="${reloj.nombre}">
                <h3>${reloj.nombre}</h3>
                <p>Precio: $${reloj.precio}</p>
                <button class="agregar-carrito" data-id="${reloj.id}">Agregar al carrito</button>
            `;
            relojesContainer.appendChild(relojElemento);
        });
    }

    // Función para agregar un reloj al carrito
    function agregarAlCarrito(event) {
        const relojId = parseInt(event.target.dataset.id);
        const relojSeleccionado = relojes.find(reloj => reloj.id === relojId);
        if (relojSeleccionado) {
            const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            carrito.push(relojSeleccionado);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            mostrarCarrito();
            mostrarTotal();
        }
    }

    // Función para mostrar los relojes en el carrito
    function mostrarCarrito() {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        const carritoElemento = document.getElementById('carrito');
        carritoElemento.innerHTML = '';
        carrito.forEach(reloj => {
            const relojCarrito = document.createElement('li');
            relojCarrito.textContent = `${reloj.nombre} - $${reloj.precio}`;
            carritoElemento.appendChild(relojCarrito);
        });
    }

    // Función para mostrar el total en el carrito
    function mostrarTotal() {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        const totalElemento = document.getElementById('total');
        let total = 0;
        carrito.forEach(reloj => {
            total += reloj.precio;
        });
        totalElemento.textContent = `Total: $${total}`;
    }

    // Función para vaciar el carrito
    function vaciarCarrito() {
        localStorage.removeItem('carrito');
        mostrarCarrito();
        mostrarTotal();
    }

    // Evento click para agregar reloj al carrito
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('agregar-carrito')) {
            agregarAlCarrito(event);
        }
    });

    // Evento click para vaciar carrito
    document.getElementById('vaciar-carrito').addEventListener('click', vaciarCarrito);

    // Cargar los relojes al cargar la página
    cargarRelojes();
    mostrarCarrito();
    mostrarTotal();
});