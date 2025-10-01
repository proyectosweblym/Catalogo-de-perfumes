// Array con la información de todos los perfumes
let perfumes = [
    {
        nombre: "Lattafa Khamrah EDP 100 ml",
        descripcion: "Lattafa Khamrah es una fragancia unisex intensa y amaderada, con notas de oud y especiadas que transmiten sofisticación y elegancia. Ideal para la noche y especialmente recomendable en otoño e invierno, pertenece a la prestigiosa casa árabe Lattafa.",
        precio: "$33.990",
        imagenes: [
            "img/lattafa khamra.webp",
            "img/Lattafa Khamrah EDP 100 ml notas.png"
        ]
    },
    {
        nombre: "Lattafa Asad EDP 100 ml",
        descripcion: "Lattafa Asad es una fragancia masculina amaderada y especiada, con una intensidad que refleja fuerza y distinción. Ideal para la noche y especialmente recomendada en otoño e invierno, es una creación única de la casa árabe Lattafa.",
        precio: "$29.990",
        imagenes: [
            "img/Lattafa Asad EDP 100 ml.webp",
            "img/Lattafa Asad EDP 100 ml notas.png"
        ]
    },
    {
        nombre: "Lattafa Badee Al Oud For Glory EDP 100 ml",
        descripcion: "Lattafa Badee Al Oud For Glory Edp 100 ml es una fragancia intensa y lujosa que combina notas principales de azafrán, nuez moscada, lavanda, oud y pachulí, generando un aroma amaderado, especiado y profundamente envolvente. Ideal para el uso nocturno en otoño e invierno, esta fragancia majestuosa proviene de Lattafa, una destacada casa de perfumería árabe.",
        precio: "$27.990",
        imagenes: [
            "img/Lattafa Badee Al Oud For Glory EDP 100 ml (1).webp",
            "img/Lattafa Badee Al Oud For Glory EDP 100 ml notas.png"
        ]
    },
    {
        nombre: "Lattafa Hayaati Al Maleky EDP 100 ml",
        descripcion: "Lattafa Hayaati Al Maleky es una fragancia masculina intensa y especiada, con notas amaderadas y aromáticas que transmiten poder y sofisticación. Ideal para la noche y especialmente recomendable en otoño e invierno, pertenece a la prestigiosa casa árabe Lattafa.",
        precio: "$20.990",
        imagenes: [
            "img/Lattafa Hayaati Al Maleky EDP 100 ml (1).webp",
            "img/Lattafa Hayaati Al Maleky notas.jpg"
        ]
    },
    {
        nombre: "Armaf Club De Nuit Urban Man Elixir EDP 105 ml",
        descripcion: "Club De Nuit Urban Man Elixir de Armaf es una fragancia masculina intensa y moderna que combina notas cítricas y especiadas con lavanda, geranio y un fondo amaderado profundo, creando un aroma vibrante, sofisticado y duradero. Ideal para la noche y climas frescos, su estilo elegante y audaz la hace destacar. Esta fragancia proviene de la casa árabe Armaf, reconocida por su interpretación de perfumes de lujo con inspiración contemporánea.",
        precio: "$39.990",
        imagenes: [
            "img/Armaf Club De Nuit Urban Man Elixir (1).webp",
            "img/Armaf Club De Nuit Urban Man Elixir notas.webp"
        ]
    },
    {
        nombre: "Lattafa Emaan EDP 100 ml",
        descripcion: "Lattafa Emaan es una fragancia femenina intensa y dulce, con notas florales y gourmand que transmiten elegancia y sofisticación. Ideal para uso de día y noche en todas las temporadas, pertenece a la prestigiosa casa árabe Lattafa.",
        precio: "$27.990",
        imagenes: [
            "img/Lattafa Emaan EDP 100 ml (1).webp",
            "img/Lattafa Emaan EDP 100 ml notas.png"
        ]
    },
    {
        nombre: "Lattafa Qaed Al Fursan Unlimited EDP 90 ml",
        descripcion: "Lattafa Qaed Al Fursan Unlimited es una fragancia masculina intensa y especiada, con notas amaderadas y aromáticas que transmiten fuerza y sofisticación. Ideal para la noche y especialmente recomendable en otoño e invierno, pertenece a la prestigiosa casa árabe Lattafa.",
        precio: "$20.990",
        imagenes: [
            "img/Lattafa Qaed Al Fursan Unlimited EDP 90 ml.png",
            "img/Lattafa Qaed Al Fursan Unlimited notas.png"
        ]
    },
    {
        nombre: "Lattafa Ramz Silver EDP 100 ml",
        descripcion: "Lattafa Ramz Silver es una fragancia masculina intensa y especiada, con notas amaderadas y aromáticas que transmiten poder y sofisticación. Ideal para la noche y especialmente recomendable en otoño e invierno, pertenece a la reconocida casa árabe Lattafa.",
        precio: "$19.990",
        imagenes: [
            "img/Lattafa Ramz Silver EDP 100 ml (1).webp",
            "img/Lattafa Ramz Silver notas.webp"
        ]
    },
    {
        nombre: "Bharara King EDP 100 ml",
        descripcion: "King de Bharara es una fragancia masculina intensa y moderna que combina notas cítricas, especiadas y amaderadas, creando un aroma fresco, potente y sofisticado. Ideal para el uso diario o nocturno en climas templados o fríos, esta fragancia ofrece una excelente proyección y duración. Proviene de la casa árabe Bharara, reconocida por su estilo audaz e inspirado en la perfumería oriental contemporánea.",
        precio: "$58.990",
        imagenes: [
            "img/Bharara King EDP 100 ml.webp",
            "img/Bharara King notas.png"
        ]
    },
    {
        nombre: "Afnan 9am Dive EDP 100 ml",
        descripcion: "Afnan 9am Dive es una fragancia vibrante y acuática que combina notas cítricas frescas con acordes marinos y un fondo amaderado suave, evocando la sensación de una brisa costera revitalizante. Ideal para el uso diario en primavera y verano, transmite frescura, dinamismo y libertad. Esta fragancia es una creación moderna de la casa árabe Afnan.",
        precio: "$33.990",
        imagenes: [
            "img/Afnan 9am Dive EDP 100 ml.webp",
            "img/Afnan 9am Dive notas.png"
        ]
    }
];

// Función para inicializar perfumes (cargar del localStorage o usar datos por defecto)
function inicializarPerfumes() {
    const perfumesGuardados = localStorage.getItem('perfumes');
    if (perfumesGuardados) {
        perfumes = JSON.parse(perfumesGuardados);
    } else {
        // Guardar los perfumes por defecto en localStorage
        guardarPerfumes();
    }
}

// Función para guardar perfumes en localStorage
function guardarPerfumes() {
    localStorage.setItem('perfumes', JSON.stringify(perfumes));
}



// Función para buscar perfumes
function buscarPerfumes(termino) {
    const resultados = perfumes.filter(perfume =>
        perfume.nombre.toLowerCase().includes(termino.toLowerCase()) ||
        perfume.descripcion.toLowerCase().includes(termino.toLowerCase())
    );
    return resultados;
}

// Función para mostrar resultados de búsqueda
function mostrarResultados(resultados) {
    const contenedor = document.querySelector('.perfume-catalog');
    const resultadosHTML = resultados.map(perfume => crearTarjetaPerfume(perfume)).join('');
    contenedor.innerHTML = resultadosHTML;
}

// Función para crear una tarjeta de perfume
function crearTarjetaPerfume(perfume) {
    const carouselId = perfume.nombre.toLowerCase().replace(/[^a-z0-9]/g, '');

    return `
        <div class="perfume-card">
            <div id="carousel${carouselId}" class="carousel slide" data-bs-ride="carousel" data-bs-touch="true">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="${perfume.imagenes[0]}" class="d-block w-100" alt="${perfume.nombre}">
                    </div>
                    ${perfume.imagenes.slice(1).map((imagen, index) =>
                        `<div class="carousel-item">
                            <img src="${imagen}" class="d-block w-100" alt="${perfume.nombre} imagen ${index + 2}">
                        </div>`
                    ).join('')}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel${carouselId}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Anterior</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel${carouselId}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Siguiente</span>
                </button>
            </div>
            <h3>${perfume.nombre}</h3>
            <p class="description">${perfume.descripcion}</p>
            <p class="price">${perfume.precio}</p>
        </div>
    `;
}

// Función para mostrar todos los perfumes
function mostrarTodosLosPerfumes() {
    mostrarResultados(perfumes);
}

// Función para manejar el comportamiento sticky del buscador
function handleStickySearch() {
    const searchSection = document.querySelector('.search-section');
    const main = document.querySelector('main');
    const stickyPoint = 100; // Punto en el que se activa el sticky

    function checkScrollPosition() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > stickyPoint) {
            searchSection.classList.add('sticky');
            main.classList.add('sticky-search-active');
        } else {
            searchSection.classList.remove('sticky');
            main.classList.remove('sticky-search-active');
        }
    }

    // Verificar posición del scroll al cargar la página
    checkScrollPosition();

    // Verificar posición del scroll al hacer scroll
    window.addEventListener('scroll', checkScrollPosition);
}

// Event listener para el campo de búsqueda (mejorado para el modo sticky)
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar perfumes desde localStorage
    inicializarPerfumes();

    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchInputCompact = document.getElementById('searchInputCompact');
    const searchButtonCompact = document.getElementById('searchButtonCompact');
    const clearSearchButton = document.getElementById('clearSearchButton');
    const clearSearchButtonCompact = document.getElementById('clearSearchButtonCompact');

    // Inicializar el comportamiento sticky
    handleStickySearch();

    // Función para realizar la búsqueda
    function performSearch() {
        const termino = searchInput ? searchInput.value.trim() :
                       (searchInputCompact ? searchInputCompact.value.trim() : '');

        if (termino) {
            const resultados = buscarPerfumes(termino);
            mostrarResultados(resultados);

            // Mostrar mensaje si no hay resultados
            if (resultados.length === 0) {
                const contenedor = document.querySelector('.perfume-catalog');
                contenedor.innerHTML = '<p class="no-results">No se encontraron perfumes que coincidan con tu búsqueda.</p>';
            }
        } else {
            mostrarTodosLosPerfumes();
        }
    }

    // Configurar event listeners para el buscador principal
    if (searchInput && searchButton) {
        searchButton.addEventListener('click', performSearch);

        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });

        searchInput.addEventListener('input', function() {
            const termino = searchInput.value.trim();
            if (termino.length >= 2) {
                performSearch();
            } else if (termino.length === 0) {
                mostrarTodosLosPerfumes();
            }
        });
    }

    // Configurar event listeners para el buscador compacto
    if (searchInputCompact && searchButtonCompact) {
        searchButtonCompact.addEventListener('click', performSearch);

        searchInputCompact.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });

        searchInputCompact.addEventListener('input', function() {
            const termino = searchInputCompact.value.trim();
            if (termino.length >= 2) {
                performSearch();
            } else if (termino.length === 0) {
                mostrarTodosLosPerfumes();
            }
        });
    }

    // Configurar botones de limpiar búsqueda
    if (clearSearchButton) {
        clearSearchButton.addEventListener('click', function() {
            if (searchInput) searchInput.value = '';
            mostrarTodosLosPerfumes();
        });
    }

    if (clearSearchButtonCompact) {
        clearSearchButtonCompact.addEventListener('click', function() {
            if (searchInputCompact) searchInputCompact.value = '';
            mostrarTodosLosPerfumes();
        });
    }

});
