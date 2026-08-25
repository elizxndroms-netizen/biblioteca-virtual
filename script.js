// Base de Datos de Libros
// Puedes agregar o modificar libros según la bibliografía de la carrera
const libros = [
  {
    titulo: "Programación Interactiva con Pygame",
    autor: "Departamento de TIC",
    categoria: "Tecnología",
    portada: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80",
    archivo: "libros/manual-pygame.pdf"
  },
  {
    titulo: "Metodología de la Investigación Educativa",
    autor: "FAHUSAC",
    categoria: "Investigación",
    portada: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=400&q=80",
    archivo: "libros/metodologia-investigacion.pdf"
  },
  {
    titulo: "Diseño de Entornos Virtuales de Aprendizaje",
    autor: "Educación Virtual",
    categoria: "Pedagogía",
    portada: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=400&q=80",
    archivo: "libros/entornos-virtuales.pdf"
  },
  {
    titulo: "Sílabo didáctica General",
    autor: "Grety Coronado",
    categoria: "Tecnología",
    portada: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80",
    archivo: "https://1024terabox.com/s/15vBVjRHzZkLg1jMe-T9XFw"
  },
  {
    titulo: "Didáctica Aplicada a la Educación Virtual",
    autor: "FAHUSAC",
    categoria: "Pedagogía",
    portada: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=400&q=80",
    archivo: "https://drive.google.com/file/d/EJEMPLO_2/view?usp=sharing"
  }
];
];

// Función para renderizar los libros en el HTML
function cargarLibros(lista) {
  const contenedor = document.getElementById('contenedor-libros');
  contenedor.innerHTML = '';

  if (lista.length === 0) {
    contenedor.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #7f8c8d;">No se encontraron materiales que coincidan con la búsqueda.</p>';
    return;
  }

  lista.forEach(libro => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <div class="card-img-container">
        <img src="${libro.portada}" alt="${libro.titulo}">
      </div>
      <div class="card-content">
        <span class="tag">${libro.categoria}</span>
        <h3>${libro.titulo}</h3>
        <p>Por: <strong>${libro.autor}</strong></p>
        <a href="${libro.archivo}" target="_blank" class="btn-leer">Ver / Descargar PDF</a>
      </div>
    `;
    contenedor.appendChild(card);
  });
}

// Función de filtro combinado (Buscador por texto + Selección de categoría)
function filtrarLibros() {
  const textoBuscado = document.getElementById('buscador').value.toLowerCase();
  const categoriaSeleccionada = document.getElementById('filtro-categoria').value;

  const resultados = libros.filter(libro => {
    const coincideTexto = libro.titulo.toLowerCase().includes(textoBuscado) ||
                          libro.autor.toLowerCase().includes(textoBuscado) ||
                          libro.categoria.toLowerCase().includes(textoBuscado);

    const coincideCategoria = categoriaSeleccionada === 'todas' || libro.categoria === categoriaSeleccionada;

    return coincideTexto && coincideCategoria;
  });

  cargarLibros(resultados);
}

// Cargar la biblioteca al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
  cargarLibros(libros);
});
