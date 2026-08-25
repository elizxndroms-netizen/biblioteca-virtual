const libros = [
  {
    titulo: "Programación Interactiva con Pygame",
    autor: "Departamento de TIC",
    categoria: "Tecnología",
    portada: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80",
    archivo: "https://drive.google.com/file/d/1_ejemplo/view?usp=sharing"
  },
  {
    titulo: "Didáctica Aplicada a la Educación Virtual",
    autor: "FAHUSAC",
    categoria: "Pedagogía",
    portada: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=400&q=80",
    archivo: "https://drive.google.com/file/d/2_ejemplo/view?usp=sharing"
  },
  {
    titulo: "Recurso Educativo TeraBox",
    autor: "Profesorado en TIC",
    categoria: "Tecnología",
    portada: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&q=80",
    archivo: "https://1024terabox.com/s/15vBVjRHzZkLg1jMe-T9XFw"
  }
];

const contenedorLibros = document.getElementById('contenedor-libros');
const buscador = document.getElementById('buscador');
const botonesCategoria = document.querySelectorAll('.btn-categoria');

function mostrarLibros(lista) {
  if (!contenedorLibros) return;
  
  contenedorLibros.innerHTML = '';
  
  if (lista.length === 0) {
    contenedorLibros.innerHTML = '<p class="sin-resultados">No se encontraron libros en esta categoría.</p>';
    return;
  }

  lista.forEach(libro => {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta-libro');
    tarjeta.innerHTML = `
      <img src="${libro.portada}" alt="${libro.titulo}" class="portada-libro" />
      <div class="contenido-libro">
        <span class="tag-categoria">${libro.categoria}</span>
        <h3>${libro.titulo}</h3>
        <p class="autor">${libro.autor}</p>
        <a href="${libro.archivo}" target="_blank" rel="noopener noreferrer" class="btn-descarga">Ver / Descargar</a>
      </div>
    `;
    contenedorLibros.appendChild(tarjeta);
  });
}

function filtrarLibros() {
  const textoBuscado = buscador ? buscador.value.toLowerCase() : '';
  const botonActivo = document.querySelector('.btn-categoria.activo');
  const categoriaSeleccionada = botonActivo ? botonActivo.dataset.categoria : 'todos';

  const librosFiltrados = libros.filter(libro => {
    const coincideTexto = libro.titulo.toLowerCase().includes(textoBuscado) || 
                          libro.autor.toLowerCase().includes(textoBuscado);
    const coincideCategoria = categoriaSeleccionada === 'todos' || libro.categoria === categoriaSeleccionada;
    
    return coincideTexto && coincideCategoria;
  });

  mostrarLibros(librosFiltrados);
}

if (buscador) {
  buscador.addEventListener('input', filtrarLibros);
}

botonesCategoria.forEach(boton => {
  boton.addEventListener('click', () => {
    botonesCategoria.forEach(b => b.classList.remove('activo'));
    boton.classList.add('activo');
    filtrarLibros();
  });
});

// Cargar libros al iniciar
mostrarLibros(libros);
