// Database dei prodotti in Vetrina (Integrazione della lista originale)
const vetrinaProductos = [
    { nombre: "Inca Kola 2L", desc: "La bebida del Perú", price: "€ 2.50", emoji: "🟡" },
    { nombre: "Ají Amarillo 1kg", desc: "El alma andina", price: "€ 4.00", emoji: "🌶️" },
    { nombre: "Pisco Portón", desc: "Destilado Premium", price: "€ 35.00", emoji: "🍸" },
    { nombre: "Café Altomayo", desc: "Sabor de altura", price: "€ 7.50", emoji: "☕" },
    { nombre: "Chocolate Sublime", desc: "Cacao Puro", price: "€ 3.00", emoji: "🍫" },
    { nombre: "Quinoa Real 1kg", desc: "Súper alimento", price: "€ 6.50", emoji: "🌾" },
    { nombre: "Leche Gloria", desc: "Clásico peruano", price: "€ 1.80", emoji: "🥛" },
    { nombre: "Papa Amarilla", desc: "Sabor autóctono", price: "€ 2.20", emoji: "🥔" },
    { nombre: "Cerveza Cusqueña", desc: "La magia de los Andes", price: "€ 3.50", emoji: "🍺" },
    { nombre: "Maíz Cancha", desc: "El snack perfecto", price: "€ 3.00", emoji: "🌽" },
    { nombre: "Huancaína Salsa", desc: "Crema cremosa y picante", price: "€ 4.50", emoji: "🥣" },
    { nombre: "Panetón D'Onofrio", desc: "Tradición en Navidad", price: "€ 12.00", emoji: "🍞" },
    { nombre: "Chicha Morada", desc: "Elixir de maíz morado", price: "€ 2.80", emoji: "🥤" },
    { nombre: "Galletas Casino", desc: "Sabor a menta y chocolate", price: "€ 1.20", emoji: "🍪" },
    { nombre: "Rocoto Molido", desc: "Solo para valientes", price: "€ 3.50", emoji: "🔥" },
    { nombre: "Camote Amarillo", desc: "Dulzura natural", price: "€ 2.50", emoji: "🍠" },
    { nombre: "Frijol Canario", desc: "Legumbre de oro", price: "€ 4.20", emoji: "🍲" },
    { nombre: "Sal de Maras", desc: "Sal rosa milenaria", price: "€ 5.50", emoji: "🧂" }
    
];

// Funzione principale per inizializzare il sito
function initModernSite() {
    const grid = document.getElementById('product-grid');
    if(!grid) return;
    
    // Iniezione dinamica dei prodotti
    vetrinaProductos.forEach(p => {
        const card = document.createElement('div');
        card.className = 'modern-card reveal'; // Aggiungi classe 'reveal' per l'animazione
        
        card.innerHTML = `
            <span class="emoji">${p.emoji}</span>
            <h3>${p.nombre}</h3>
            <p style="opacity:0.6; color:red; font-size:0.9rem; margin-bottom:15px">${p.desc}</p>
            <p class="price">${p.price}</p>
        `;
        
        grid.appendChild(card);
    });

    // CONFIGURAZIONE DELLE ANIMAZIONI AL SCROLL (Effetto Innovazione)
    // Usiamo ScrollReveal.js (importato nell'HTML)
    ScrollReveal().reveal('.reveal', {
        distance: '60px', // Distanza del movimento
        duration: 1200,    // Durata dell'animazione
        easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)', // Transizione morbida
        interval: 150,     // Tempo tra un elemento e l'altro in griglia
        origin: 'bottom',  // Da dove partono
        opacity: 0,        // Partono invisibili
        scale: 0.95        // Piccola variazione di scala
    });
}
// Lista dedicada a Ofertas
const ofertasProductos = [
    { nombre: "Pack Inca Kola (4 x 2L)", desc: "Ahorro familiar", price: "€ 8.00", oldPrice: "€ 10.00", emoji: "📦" },
    { nombre: "Combo Ceviche", desc: "Ají + Limones + Sal", price: "€ 7.50", oldPrice: "€ 9.00", emoji: "🍋" },
    { nombre: "Panetón + Chocolate", desc: "Pack Navideño", price: "€ 13.50", oldPrice: "€ 15.00", emoji: "🎁" }
];

// Modificamos la función init para cargar ambas listas
function initModernSite() {
    const mainGrid = document.getElementById('product-grid');
    const offersGrid = document.getElementById('offers-grid');

    // Cargar productos normales
    vetrinaProductos.forEach(p => {
        const card = createCard(p, "modern-card");
        mainGrid.appendChild(card);
    });

    // Cargar ofertas
    ofertasProductos.forEach(p => {
        const card = createCard(p, "modern-card offer-card");
        // Añadimos el precio antiguo si existe
        if(p.oldPrice) {
            const priceContainer = card.querySelector('.price');
            priceContainer.innerHTML = `<span class="old-price">${p.oldPrice}</span> ${p.price}`;
        }
        offersGrid.appendChild(card);
    });

    // Reiniciar ScrollReveal para que detecte los nuevos elementos
    ScrollReveal().reveal('.reveal', {
        distance: '60px',
        duration: 1200,
        easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        interval: 150,
        origin: 'bottom'
    });
}

// Función auxiliar para crear la estructura de la tarjeta
function createCard(p, className) {
    const div = document.createElement('div');
    div.className = className + " reveal";
    div.innerHTML = `
        <span class="emoji">${p.emoji}</span>
        <h3>${p.nombre}</h3>
        <p style="opacity:0.6; color:#64748b; font-size:0.9rem; margin-bottom:15px">${p.desc}</p>
        <p class="price">${p.price}</p>
    `;
    return div;
}

// Avvia tutto quando il DOM è pronto
document.addEventListener('DOMContentLoaded', initModernSite);
