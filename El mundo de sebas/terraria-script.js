// ===== Datos generales del juego =====
const infoJuego = [
  { titulo: "Desarrollador", valor: "Re-Logic" },
  { titulo: "Creador principal", valor: "Andrew 'Redigit' Spinks" },
  { titulo: "Fecha de lanzamiento", valor: "16 de mayo de 2011" },
  { titulo: "Género", valor: "Sandbox / Acción / Aventura 2D" },
  { titulo: "Plataformas", valor: "PC, consolas, móviles" },
  { titulo: "Motor", valor: "Microsoft XNA (versión original)" },
  { titulo: "Copias vendidas", valor: "Más de 45 millones (todas las plataformas)" },
  { titulo: "Última gran actualización", valor: "1.4 'Journey's End'" },
];

// ===== Slides del carrusel automático =====
// Coloca tus imágenes en una carpeta "imagenes/" junto a este archivo,
// y reemplaza cada ruta de abajo por el nombre real de tu archivo.
const slidesDestacados = [
  {
    titulo: "Mundo generado proceduralmente",
    texto: "Cada partida crea un mundo único con biomas como bosques, desiertos, junglas, cavernas de hielo y el inframundo.",
    imagen: "imagenes/mundo-proceduralmente.jpg",
  },
  {
    titulo: "Cientos de jefes y eventos",
    texto: "Desde el Ojo de Cthulhu hasta el Moon Lord, el juego ofrece una progresión larga de desafíos cada vez más difíciles.",
    imagen: "imagenes/jefes-y-eventos.jpg",
  },
  {
    titulo: "Crafteo profundo",
    texto: "Miles de objetos craftables: armas, armaduras, accesorios, muebles y estructuras usando materiales recolectados.",
    imagen: "imagenes/crafteo.jpg",
  },
  {
    titulo: "Modo multijugador",
    texto: "Se puede jugar en cooperativo con amigos, explorando y construyendo juntos en el mismo mundo.",
    imagen: "imagenes/multijugador.jpg",
  },
  {
    titulo: "Actualización 1.4 Journey's End",
    texto: "Añadió un nuevo modo de dificultad, más jefes, biomas y opciones de creación de mundo, cerrando una etapa importante del desarrollo.",
    imagen: "imagenes/journeys-end.jpg",
  },
];

// ===== NPCs =====
const npcs = [
  { nombre: "Guía", descripcion: "El primer NPC que aparece en el mundo. Da consejos de crafteo y ayuda a identificar objetos." },
  { nombre: "Mercader", descripcion: "Vende herramientas y objetos básicos una vez que el jugador tiene suficiente oro." },
  { nombre: "Enfermera", descripcion: "Cura al jugador y elimina efectos negativos a cambio de monedas." },
  { nombre: "Vendedor de Armas", descripcion: "Ofrece armas de fuego y municiones tras derrotar al primer jefe." },
  { nombre: "Dríada", descripcion: "Vende objetos relacionados con la naturaleza y puede purificar la corrupción del mundo." },
  { nombre: "Pescador", descripcion: "Otorga misiones de pesca a cambio de recompensas y objetos exclusivos." },
  { nombre: "Comerciante de Tinturas", descripcion: "Vende tintes para personalizar la apariencia del equipo." },
  { nombre: "Zoóloga", descripcion: "Aparece tras completar el Bestiario y vende objetos relacionados con criaturas." },
];

// ===== Jefes =====
const jefes = [
  { nombre: "Ojo de Cthulhu", descripcion: "Uno de los primeros jefes; aparece de noche cuando se cumplen ciertas condiciones." },
  { nombre: "Devorador de Mundos / Cerebro de Cthulhu", descripcion: "Jefe temprano asociado a los biomas de Corrupción o Carmesí." },
  { nombre: "Reina Abeja", descripcion: "Jefe opcional que habita en las colmenas dentro de la jungla." },
  { nombre: "Skeletron", descripcion: "Guardián de la mazmorra; derrotarlo permite el acceso a esa zona." },
  { nombre: "Muro de Carne", descripcion: "Jefe del inframundo que marca la transición al modo difícil (Hardmode)." },
  { nombre: "Los Gemelos / El Destructor / Skeletron Prime", descripcion: "Trío de mecabosses del modo difícil, cada uno con mecánicas distintas." },
  { nombre: "Plantera", descripcion: "Jefe de la jungla en Hardmode; su derrota desbloquea nuevas zonas y enemigos." },
  { nombre: "Duque Fishron", descripcion: "Jefe opcional de gran dificultad que aparece en el océano." },
  { nombre: "Lord de la Luna", descripcion: "El jefe final del juego; representa la conclusión de la progresión principal." },
];

// ===== Artículos informativos =====
const articulos = [
  {
    titulo: "Del lanzamiento indie al fenómeno global",
    resumen: "Terraria comenzó como un proyecto independiente de Re-Logic en 2011 y con el tiempo se convirtió en uno de los juegos indie más vendidos de la historia, superando los 45 millones de copias en distintas plataformas.",
    enlace: "https://es.wikipedia.org/wiki/Terraria",
    fuente: "Wikipedia",
  },
  {
    titulo: "Terraria: Otherworld, el spin-off cancelado",
    resumen: "En 2015 se anunció Terraria: Otherworld, un spin-off ambientado en una dimensión alternativa. El proyecto fue cancelado años después, y Re-Logic centró sus esfuerzos en seguir expandiendo el juego original.",
    enlace: "https://es.wikipedia.org/wiki/Terraria",
    fuente: "Wikipedia",
  },
  {
    titulo: "Reconocimiento de la crítica",
    resumen: "Medios especializados como IGN destacaron su jugabilidad de mundo abierto con fuerte énfasis en el combate y la exploración, ayudando a consolidar su reputación dentro del género sandbox.",
    enlace: "https://es.wikipedia.org/wiki/Terraria",
    fuente: "Wikipedia",
  },
  {
    titulo: "Disponible en Steam",
    resumen: "El juego sigue disponible y actualizado en Steam, donde mantiene reseñas mayoritariamente positivas años después de su lanzamiento original.",
    enlace: "https://store.steampowered.com/app/105600/Terraria/",
    fuente: "Steam",
  },
];

// ===== Ventas históricas (cifras públicas aproximadas, en millones de copias acumuladas) =====
const ventasHistoricas = [
  { anio: 2016, copias: 20 },
  { anio: 2020, copias: 35 },
  { anio: 2024, copias: 60.7 },
  { anio: 2026, copias: 70 },
];

// ===== Referencias DOM =====
const carrusel = document.getElementById("carrusel");
const carruselDots = document.getElementById("carruselDots");
const infoGrid = document.getElementById("infoGrid");
const personajesGrid = document.getElementById("personajesGrid");
const articulosGrid = document.getElementById("articulosGrid");
const tabBtns = document.querySelectorAll(".tab-btn");
const modoToggle = document.getElementById("modoToggle");
const ventasGraficoCanvas = document.getElementById("ventasGrafico");
const exportarExcelBtn = document.getElementById("exportarExcelBtn");

let ventasChart = null;
let slideActual = 0;
let intervaloCarrusel = null;
let tabActiva = "npcs";

// ===== Renderizar información general =====
function renderInfo() {
  infoGrid.innerHTML = "";
  infoJuego.forEach((dato) => {
    const card = document.createElement("div");
    card.classList.add("info-card");
    card.innerHTML = `<h4>${dato.titulo}</h4><p>${dato.valor}</p>`;
    infoGrid.appendChild(card);
  });
}

// ===== Renderizar carrusel automático =====
function renderCarrusel() {
  const track = document.createElement("div");
  track.classList.add("carrusel-track");
  track.id = "carruselTrack";

  slidesDestacados.forEach((slide) => {
    const div = document.createElement("div");
    div.classList.add("carrusel-slide");
    div.innerHTML = `
      <div class="carrusel-imagen">
        <img src="${slide.imagen}" alt="${slide.titulo}">
      </div>
      <div class="carrusel-info">
        <h3>${slide.titulo}</h3>
        <p>${slide.texto}</p>
      </div>
    `;
    track.appendChild(div);
  });

  carrusel.innerHTML = "";
  carrusel.appendChild(track);

  carruselDots.innerHTML = "";
  slidesDestacados.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("activo");
    dot.addEventListener("click", () => {
      irASlide(i);
      reiniciarAutoplay();
    });
    carruselDots.appendChild(dot);
  });

  slideActual = 0;
  actualizarCarrusel();
  iniciarAutoplay();
}

function actualizarCarrusel() {
  const track = document.getElementById("carruselTrack");
  if (!track) return;
  track.style.transform = `translateX(-${slideActual * 100}%)`;
  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("activo", i === slideActual);
  });
}

function irASlide(indice) {
  const total = slidesDestacados.length;
  slideActual = (indice + total) % total;
  actualizarCarrusel();
}

function iniciarAutoplay() {
  intervaloCarrusel = setInterval(() => {
    irASlide(slideActual + 1);
  }, 4000);
}

function reiniciarAutoplay() {
  clearInterval(intervaloCarrusel);
  iniciarAutoplay();
}

// Pausar el autoplay cuando el mouse está sobre el carrusel
carrusel.addEventListener("mouseenter", () => clearInterval(intervaloCarrusel));
carrusel.addEventListener("mouseleave", () => iniciarAutoplay());

// ===== Renderizar NPCs / Jefes =====
function renderPersonajes() {
  personajesGrid.innerHTML = "";
  const lista = tabActiva === "npcs" ? npcs : jefes;

  lista.forEach((p) => {
    const card = document.createElement("div");
    card.classList.add("personaje-card");
    card.innerHTML = `
      <h4>${p.nombre}</h4>
      <p>${p.descripcion}</p>
      ${tabActiva === "jefes" ? `<span class="etiqueta-jefe">Jefe</span>` : ""}
    `;
    personajesGrid.appendChild(card);
  });
}

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((b) => b.classList.remove("activo"));
    btn.classList.add("activo");
    tabActiva = btn.dataset.tab;
    renderPersonajes();
  });
});

// ===== Renderizar artículos =====
function renderArticulos() {
  articulosGrid.innerHTML = "";
  articulos.forEach((art) => {
    const card = document.createElement("div");
    card.classList.add("articulo-card");
    card.innerHTML = `
      <h4>${art.titulo}</h4>
      <p>${art.resumen}</p>
      <a href="${art.enlace}" target="_blank" rel="noopener noreferrer">Leer más en ${art.fuente} ↗</a>
    `;
    articulosGrid.appendChild(card);
  });
}

// ===== Gráfico de ventas históricas =====
function renderVentasChart() {
  const etiquetas = ventasHistoricas.map((v) => v.anio);
  const datos = ventasHistoricas.map((v) => v.copias);

  const estilos = getComputedStyle(document.body);
  const colorTexto = estilos.getPropertyValue("--texto-secundario").trim();
  const colorBorde = estilos.getPropertyValue("--borde").trim();
  const colorAcento = estilos.getPropertyValue("--acento").trim();

  if (ventasChart) {
    ventasChart.destroy();
  }

  ventasChart = new Chart(ventasGraficoCanvas, {
    type: "line",
    data: {
      labels: etiquetas,
      datasets: [
        {
          label: "Copias vendidas acumuladas (millones)",
          data: datos,
          borderColor: colorAcento,
          backgroundColor: colorAcento,
          tension: 0.3,
          fill: false,
          pointRadius: 5,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { labels: { color: colorTexto } },
      },
      scales: {
        x: { ticks: { color: colorTexto }, grid: { color: colorBorde } },
        y: { ticks: { color: colorTexto }, grid: { color: colorBorde }, beginAtZero: true },
      },
    },
  });
}

// ===== Exportar datos de ventas a Excel =====
function exportarVentasAExcel() {
  const filas = ventasHistoricas.map((v) => ({
    Año: v.anio,
    "Copias vendidas acumuladas (millones)": v.copias,
  }));

  const hoja = XLSX.utils.json_to_sheet(filas);
  const libro = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(libro, hoja, "Ventas Terraria");
  XLSX.writeFile(libro, "terraria_ventas.xlsx");
}

exportarExcelBtn.addEventListener("click", exportarVentasAExcel);

// ===== Modo claro / oscuro =====
function aplicarModoGuardado() {
  const modoGuardado = window.__terrariaModo || "oscuro";
  if (modoGuardado === "claro") {
    document.body.classList.add("modo-claro");
    modoToggle.textContent = "☀️";
  } else {
    document.body.classList.remove("modo-claro");
    modoToggle.textContent = "🌙";
  }
}

modoToggle.addEventListener("click", () => {
  document.body.classList.toggle("modo-claro");
  const esClaro = document.body.classList.contains("modo-claro");
  modoToggle.textContent = esClaro ? "☀️" : "🌙";
  window.__terrariaModo = esClaro ? "claro" : "oscuro";
  renderVentasChart(); // Redibuja el gráfico con los nuevos colores del tema
});

// ===== Inicializar =====
document.addEventListener("DOMContentLoaded", () => {
  aplicarModoGuardado();
  renderInfo();
  renderCarrusel();
  renderPersonajes();
  renderArticulos();
  renderVentasChart();
});
