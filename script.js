// Database dei prodotti in Vetrina con immagini reali
const vetrinaProductos = [
    { nombre: "Coca Cola 2L", desc: "La bebida del Perú", price: "€ 2.50", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=400&auto=format&fit=crop" },
    { nombre: "Ají Amarillo", desc: "El alma andina", price: "€ 4.00", img: "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=400&auto=format&fit=crop" },
    { nombre: "Pisco Portón", desc: "Destilado Premium", price: "€ 35.00", img: "https://www.bernabei.it/ARTICOLI/L_11386.png=crop" },
    { nombre: "Café Altomayo", desc: "Sabor de altura", price: "€ 7.50", img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=400&auto=format&fit=crop" },
    { nombre: "Chocolate Sublime", desc: "Cacao Puro", price: "€ 3.00", img: "https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=400&auto=format&fit=crop" },
    { nombre: "Arroz Real", desc: "Súper alimento", price: "€ 6.50", img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=400&auto=format&fit=crop" },
    { nombre: "Leche Gloria", desc: "Clásico peruano", price: "€ 1.80", img: "https://vegaperu.vtexassets.com/arquivos/ids/166687-1200-auto?v=638532033956770000&width=1200&height=auto&aspect=true=crop" },
    { nombre: "Papa Amarilla", desc: "Sabor autóctono", price: "€ 2.20", img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=400&auto=format&fit=crop" },
    { nombre: "Cerveza Cusqueña", desc: "La magia de los Andes", price: "€ 3.50", img: "https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=400&auto=format&fit=crop" },
    { nombre: "Maíz Cancha", desc: "El snack perfecto", price: "€ 3.00", img: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=400&auto=format&fit=crop" },
    { nombre: "Verduras", desc: "frescas", price: "€ 4.50", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400&auto=format&fit=crop" },
    { nombre: "Palta", desc: "Tradición Navideña", price: "€ 12.00", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400&auto=format&fit=crop" },
    { nombre: "Menta", desc: "Elixir de planta", price: "€ 2.80", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=400&auto=format&fit=crop" },
    { nombre: "Galletas Casino", desc: "Menta y chocolate", price: "€ 1.20", img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=400&auto=format&fit=crop" },
    { nombre: "Rocoto Fresco", desc: "Solo valientes", price: "€ 3.50", img: "https://www.lastranieraweb.it/779-thickbox_default/rocoto-fresco.jpg=crop" },
    { nombre: "Camote Amarillo", desc: "Dulzura natural", price: "€ 2.50", img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400&auto=format&fit=crop" },
    { nombre: "Tallarines", desc: "Legumbre de oro", price: "€ 4.20", img: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?q=80&w=400&auto=format&fit=crop" },
    { nombre: "Sal de Maras", desc: "Sal rosa milenaria", price: "€ 5.50", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=400&auto=format&fit=crop" }
];
// 1. LISTA OFFERTE (Assicurati che sia definita prima della funzione init)
const ofertasProductos = [
    { nombre: "Pack Coca Cola (4 x 2L)", desc: "Ahorro familiar", price: "€ 8.00", oldPrice: "€ 10.00", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=400" },
    { nombre: "Combo Ceviche", desc: "Ají + Lime + kion", price: "€ 7.50", oldPrice: "€ 9.00", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=400" },
    { nombre: "Palta + verduras+ carne", desc: "Pack proteico", price: "€ 13.50", oldPrice: "€ 15.00", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400" }
];

// 2. FUNZIONE AUSILIARIA PER CREARE LE CARD (Modificata per usare immagini)
function createCard(p, className) {
    const div = document.createElement('div');
    div.className = className + " reveal";
    
    // Gestione del prezzo: se c'è oldPrice, lo aggiungiamo barrato
    const priceHTML = p.oldPrice 
        ? `<span class="old-price" style="text-decoration: line-through; opacity: 0.5; font-size: 0.8em; margin-right: 5px;">${p.oldPrice}</span> ${p.price}`
        : p.price;

    div.innerHTML = `
        <div class="product-img-container">
            <img src="${p.img}" alt="${p.nombre}" class="prod-img">
        </div>
        <h3>${p.nombre}</h3>
        <p style="opacity:0.6; color:#64748b; font-size:0.85rem; margin-bottom:15px">${p.desc}</p>
        <p class="price">${priceHTML}</p>
    `;
    return div;
}

// 3. FUNZIONE PRINCIPALE DI INIZIALIZZAZIONE
function initModernSite() {
    const mainGrid = document.getElementById('product-grid');
    const offersGrid = document.getElementById('offers-grid');

    // Caricamento Prodotti Normali
    if (mainGrid) {
        mainGrid.innerHTML = ''; // Pulizia
        vetrinaProductos.forEach(p => {
            const card = createCard(p, "modern-card");
            mainGrid.appendChild(card);
        });
    }

    // Caricamento Offerte
    if (offersGrid && typeof ofertasProductos !== 'undefined') {
        offersGrid.innerHTML = ''; // Pulizia
        ofertasProductos.forEach(p => {
            // Se all'offerta manca l'immagine, ne mettiamo una generica
            if(!p.img) p.img = "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=400";
            
            const card = createCard(p, "modern-card offer-card");
            offersGrid.appendChild(card);
        });
    }

    // CONFIGURAZIONE ANIMAZIONI (ScrollReveal)
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal().reveal('.reveal', {
            distance: '50px',
            duration: 1000,
            easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
            interval: 80, // Più veloce per smartphone
            origin: 'bottom',
            opacity: 0,
            scale: 0.98
        });
    }
}

// 4. AVVIO AL CARICAMENTO
document.addEventListener('DOMContentLoaded', initModernSite);
