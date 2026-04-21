// Database dei prodotti in Vetrina con immagini reali
const vetrinaProductos = [
    { nombre: "Inca Kola 2L", desc: "La bebida del Perú", price: "€ 2.50", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=400&auto=format&fit=crop" },
    { nombre: "Ají Amarillo", desc: "El alma andina", price: "€ 4.00", img: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=400&auto=format&fit=crop" },
    { nombre: "Pisco Portón", desc: "Destilado Premium", price: "€ 35.00", img: "https://images.unsplash.com/photo-1530991473367-0eb5a9819fa1?q=80&w=400&auto=format&fit=crop" },
    { nombre: "Café Altomayo", desc: "Sabor de altura", price: "€ 7.50", img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=400&auto=format&fit=crop" },
    { nombre: "Chocolate Sublime", desc: "Cacao Puro", price: "€ 3.00", img: "https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=400&auto=format&fit=crop" },
    { nombre: "Quinoa Real", desc: "Súper alimento", price: "€ 6.50", img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=400&auto=format&fit=crop" },
    { nombre: "Leche Gloria", desc: "Clásico peruano", price: "€ 1.80", img: "https://images.unsplash.com/photo-1550583724-1255d14265b3?q=80&w=400&auto=format&fit=crop" },
    { nombre: "Papa Amarilla", desc: "Sabor autóctono", price: "€ 2.20", img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=400&auto=format&fit=crop" },
    { nombre: "Cerveza Cusqueña", desc: "La magia de los Andes", price: "€ 3.50", img: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=400&auto=format&fit=crop" },
    { nombre: "Maíz Cancha", desc: "El snack perfecto", price: "€ 3.00", img: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=400&auto=format&fit=crop" },
    { nombre: "Salsa Huancaína", desc: "Crema picante", price: "€ 4.50", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&auto=format&fit=crop" },
    { nombre: "Panetón D'Onofrio", desc: "Tradición Navideña", price: "€ 12.00", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400&auto=format&fit=crop" },
    { nombre: "Chicha Morada", desc: "Elixir de maíz", price: "€ 2.80", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=400&auto=format&fit=crop" },
    { nombre: "Galletas Casino", desc: "Menta y chocolate", price: "€ 1.20", img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=400&auto=format&fit=crop" },
    { nombre: "Rocoto Molido", desc: "Solo valientes", price: "€ 3.50", img: "https://images.unsplash.com/photo-1588252390740-9a4053916969?q=80&w=400&auto=format&fit=crop" },
    { nombre: "Camote Amarillo", desc: "Dulzura natural", price: "€ 2.50", img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400&auto=format&fit=crop" },
    { nombre: "Frijol Canario", desc: "Legumbre de oro", price: "€ 4.20", img: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=400&auto=format&fit=crop" },
    { nombre: "Sal de Maras", desc: "Sal rosa milenaria", price: "€ 5.50", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400&auto=format&fit=crop" }
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
