// Database dei prodotti in Vetrina (Integrazione della lista originale)
const vetrinaProductos = [
    { nombre: "Inca Kola 2L", desc: "La bebida del Perú", price: "€ 2.50", emoji: "🟡" },
    { nombre: "Ají Amarillo 1kg", desc: "El alma andina", price: "€ 4.00", emoji: "🌶️" },
    { nombre: "Pisco Portón", desc: "Destilado Premium", price: "€ 35.00", emoji: "🍸" },
    { nombre: "Café Altomayo", desc: "Sabor de altura", price: "€ 7.50", emoji: "☕" },
    { nombre: "Chocolate Sublime", desc: "Cacao Puro", price: "€ 3.00", emoji: "🍫" },
    { nombre: "Quinoa Real 1kg", desc: "Súper alimento", price: "€ 6.50", emoji: "🌾" },
    { nombre: "Leche Gloria", desc: "Clásico peruano", price: "€ 1.80", emoji: "🥛" },
    { nombre: "Papa Amarilla", desc: "Sabor autóctono", price: "€ 2.20", emoji: "🥔" }
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

// Avvia tutto quando il DOM è pronto
document.addEventListener('DOMContentLoaded', initModernSite);