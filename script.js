// Product Data
const products = [
    {
        id: 1,
        name: "Mouse Gamer Pro X",
        price: 249.90,
        oldPrice: 399.90,
        category: "mouse",
        image: "imagens/MOUSE.png",
        dealEnds: "2024-06-10",
        maisVendido: true,
        slug: "mouse-gamer-pro-x",
        url: "produtor1.html"
    },
    {
        id: 2,
        name: "Teclado Mecânico RGB",
        price: 349.90,
        oldPrice: 499.90,
        category: "keyboard",
        image: "imagens/TECLADO.png",
        dealEnds: "2024-06-12",
        maisVendido: false,
        slug: "teclado-mecanico-rgb",
        url: "https://www.siteexterno.com/produto/2"
    },
{
        id: 3,
        name: "Headset 7.1 Surround",
        price: 199.90,
        oldPrice: 299.90,
        category: "headset",
        image: "imagens/HEADSET.png",
        dealEnds: "2024-06-15",
        maisVendido: true,
        slug: "headset-7-1-surround"
    },
    {
        id: 4,
        name: "Mouse Sem Fio Elite",
        price: 179.90,
        oldPrice: 249.90,
        category: "mouse",
        image: "imagens/MOUSE2.png",
        dealEnds: "2024-06-09",
        maisVendido: false,
        slug: "mouse-sem-fio-elite"
    },
    {
        id: 5,
        name: "Teclado Tournament Edition",
        price: 399.90,
        oldPrice: 549.90,
        category: "keyboard",
        image: "imagens/TECLADO2.png",
        dealEnds: "2024-06-20",
        maisVendido: false,
        slug: "teclado-tournament-edition"
    },
    {
        id: 6,
        name: "Headset Warrior Pro",
        price: 229.90,
        oldPrice: 349.90,
        category: "headset",
        image: "imagens/HEADSET2.png",
        dealEnds: "2024-06-18",
        maisVendido: true,
        slug: "headset-warrior-pro"
    },
    // Novos produtos MAIS VENDIDOS
    {
        id: 8,
        name: "Cadeira Ergonômica Gamer",
        price: 2000.00,
        oldPrice: 2599.99,
        category: "keyboard",
        image: "imagens/CADEIRA.png",
        dealEnds: "2024-06-22",
        maisVendido: true,
        slug: "cadeira-ergonomica-gamer"
    },
    {
        id: 9,
        name: "Headset Wireless HyperSound",
        price: 359.90,
        oldPrice: 499.90,
        category: "headset",
        image: "imagens/HEADSET4.png",
        dealEnds: "2024-06-28",
        maisVendido: true,
        slug: "headset-wireless-hypersound"
    },
    {
        id: 10,
        name: "Mouse Gamer Elite",
        price: 159.90,
        oldPrice: 194.90,
        category: "mouse",
        image: "imagens/MOUSE4.png",
        dealEnds: "2024-06-30",
        maisVendido: true,
        slug: "mouse-gamer-elite"
    },
    // Outros produtos
    {
        id: 11,
        name: "Teclado Gamer RGB Compact",
        price: 279.90,
        oldPrice: 349.90,
        category: "keyboard",
        image: "imagens/TECLADO5.png",
        dealEnds: "2024-06-27",
        maisVendido: false,
        slug: "teclado-gamer-rgb-compact"
    },
    {
        id: 12,
        name: "Mousepad Gamer Speed XL",
        price: 89.90,
        oldPrice: 114.90,
        category: "mousepad",
        image: "imagens/MOUSEPAD.png",
        dealEnds: "2024-06-18",
        maisVendido: false,
        slug: "mousepad-gamer-speed-xl"
    },
   
];

// Adicionar produtos do MonteTeclado ao array products
(function(){
    const now = new Date();
    function addDays(date, days) {
        const d = new Date(date);
        d.setDate(d.getDate() + days);
        return d.toISOString().slice(0,10);
    }
    const tecladoProdutos = [
        // Bases
        {
            name: 'Base de Teclado Akko DIY ACR Pro 68 Kit, 68 Teclas, White',
            price: 549.90,
            oldPrice: 549.90,
            category: 'keyboard',
            image: 'imagens/aaa1.png',
        },
        {
            name: 'Base de Teclado Monsgeek M1, Aluminio, Hot-Swappable, RGB, Purple',
            price: 899.90,
            oldPrice: 899.90,
            category: 'keyboard',
            image: 'imagens/aaa2.png',
        },
        {
            name: 'Base de Teclado Akko MOD007S V2 Kit, Very Peri, Blue',
            price: 699.90,
            oldPrice: 699.90,
            category: 'keyboard',
            image: 'imagens/aaa3.png',
        },
        // Switches
        {
            name: 'Switch Akko Rose Red, Linear',
            price: 149.90,
            oldPrice: 149.90,
            category: 'switch',
            image: 'imagens/sasa.png',
        },
        {
            name: 'Switch Akko Lavender Purple, Tactile',
            price: 159.90,
            oldPrice: 159.90,
            category: 'switch',
            image: 'imagens/aiai.png',
        },
        // Keycaps
        {
            name: 'Keycaps Akko Macaw, ASA Profile, 158 Teclas',
            price: 299.90,
            oldPrice: 299.90,
            category: 'keycaps',
            image: 'imagens/susu.png',
        },
        {
            name: 'Keycaps Akko Black Pink, ASA Profile, 158 Teclas',
            price: 319.90,
            oldPrice: 319.90,
            category: 'keycaps',
            image: 'imagens/tat.png',
        },
    ];
    let maxId = products.reduce((max, p) => Math.max(max, p.id||0), 0);
    tecladoProdutos.forEach((prod, i) => {
        const slug = prod.name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
        products.push({
            id: ++maxId,
            name: prod.name,
            price: prod.price,
            oldPrice: prod.oldPrice,
            category: prod.category,
            image: prod.image,
            dealEnds: addDays(now, 30),
            maisVendido: false,
            slug: slug
        });
    });
})();

// DOM Elements
const productsGrid = document.querySelector('.products-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const faqItems = document.querySelectorAll('.faq-item');
const headerSearchInput = document.querySelector('.header-search-input');
const suggestionsBox = document.querySelector('.header-search-suggestions');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
    renderFeaturedCards();
    startSlider();
    setupFAQ();
    updateCartCount();
    const cartIcon = document.querySelector('.fa-shopping-cart');
    if (cartIcon) {
        cartIcon.parentElement.addEventListener('click', openMiniCart);
    }
    document.getElementById('mini-cart-close').addEventListener('click', closeMiniCart);
    document.getElementById('mini-cart-overlay').addEventListener('click', closeMiniCart);
    createCarouselCards();
    // Scroll suave para o botão DESTAQUES
    const destaquesLink = document.querySelector('a[href="#featured-products"]');
    if (destaquesLink) {
        destaquesLink.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.getElementById('featured-products');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    // Scroll suave para o botão PROMOÇÕES
    const promocoesLink = document.querySelector('a[href="#PROMOÇÕES"]');
    if (promocoesLink) {
        promocoesLink.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.getElementById('PROMOÇÕES');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    initHeaderSearchBar(products);
    // Permitir adicionar produtos sugeridos do carrinho.html ao carrinho
    document.querySelectorAll('.products-grid .add-to-cart').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            if (id) {
                addToCart(id);
                // Feedback visual temporário
                this.textContent = 'Adicionado!';
                this.disabled = true;
                setTimeout(() => {
                    this.textContent = 'Adicionar ao carrinho';
                    this.disabled = false;
                }, 2000);
            }
        });
    });
});

// Display products in grid
function displayProducts(productsToShow) {
    productsGrid.innerHTML = '';
    // Agrupar por categoria e limitar a 4 por categoria
    const grouped = {};
    productsToShow.forEach(product => {
        if (!grouped[product.category]) grouped[product.category] = [];
        if (grouped[product.category].length < 4) grouped[product.category].push(product);
    });
    let finalList = [];
    if (productsToShow.length === products.length) {
        // 'Todos': até 4 de cada categoria
        Object.values(grouped).forEach(arr => finalList = finalList.concat(arr));
    } else {
        // Categoria específica: só os 4 primeiros
        finalList = productsToShow.slice(0, 4);
    }
    finalList.forEach(product => {
        // Calcular porcentagem de desconto
        const hasDiscount = product.oldPrice && product.oldPrice > product.price;
        const discount = hasDiscount ? Math.round(100 - (product.price / product.oldPrice) * 100) : 0;
        // Badge de mais vendidos para id 1 e 3
        const isMaisVendido = product.id === 1 || product.id === 3;
        const badgeMaisVendido = isMaisVendido ? `<span class='badge-mais-vendido'>MAIS VENDIDOS</span>` : '';
        const badgeDesconto = hasDiscount ? `<span class='badge-desconto'>-${discount}%</span>` : '';
        const oldPriceHtml = hasDiscount ? `<span class=\"old-price\">R$ ${product.oldPrice.toFixed(2)}</span>` : '';
        // Avaliação visual
        const ratingData = getProductAverageRating(product.id);
        let ratingHtml = '';
        if (ratingData) {
            const avg = ratingData.avg;
            const count = ratingData.count;
            const fullStars = Math.floor(avg);
            const halfStar = avg % 1 >= 0.5;
            let starsHtml = '';
            for (let i = 0; i < fullStars; i++) starsHtml += '<i class="fas fa-star" style="color:#ffe600"></i>';
            if (halfStar) starsHtml += '<i class="fas fa-star-half-alt" style="color:#ffe600"></i>';
            for (let i = fullStars + halfStar; i < 5; i++) starsHtml += '<i class="far fa-star" style="color:#ffe600"></i>';
            ratingHtml = `<div class=\"product-rating\">${starsHtml} <span style=\"color:#ffe600;font-weight:bold;\">${avg.toFixed(1)}</span> <span style=\"color:#aaa;font-size:0.95em;\">(${count})</span></div>`;
        }
        // Usa url se existir, senão slug
        const link = product.url ? product.url : `produto.html?produto=${product.slug}`;
        const target = product.url && product.url.startsWith('http') ? ' target="_blank" rel="noopener"' : '';
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        let cart = getCart();
        const isInCart = cart.some(item => item.id === product.id);
        productCard.innerHTML = `
            <a href="${link}" class="product-link" style="text-decoration:none;color:inherit;display:block;"${target}>
                <div class="card-badges">${badgeMaisVendido}${badgeDesconto}</div>
                <div class="deal-timer"><i class="fas fa-clock"></i> <span>${getDaysLeft(product.dealEnds)} dias restantes</span></div>
                <img src="${product.image}" alt="${product.name}" class="product-img">
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    ${ratingHtml}
                    <p class="product-price">R$ ${product.price.toFixed(2)} 
                        ${oldPriceHtml}
                    </p>
                    <p class="installments">12x de R$ ${(product.price / 12).toFixed(2)} sem juros</p>
                </div>
            </a>
            <button class="add-to-cart" data-id="${product.id}" ${isInCart ? 'disabled' : ''}>
                ${isInCart ? 'Adicionado!' : 'ADICIONAR AO CARRINHO'}
            </button>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Filter products by category
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const category = button.dataset.category;
        
        if (category === 'all') {
            displayProducts(products);
        } else {
            const filteredProducts = products.filter(product => product.category === category);
            displayProducts(filteredProducts);
        }
    });
});

// Slider functionality
let currentSlide = 0;

function startSlider() {
    setInterval(() => {
        changeSlide(1);
    }, 5000);
}

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

prevBtn.addEventListener('click', () => {
    changeSlide(-1);
});

nextBtn.addEventListener('click', () => {
    changeSlide(1);
});

// Adicionar produtos MAIS VENDIDOS ao slider de destaques
function populateFeaturedSlider() {
    const featuredProducts = products.filter(p => p.maisVendido);
    const slider = document.querySelector('.product-slider');
    if (!slider) return;
    // Limpa slides antigos, exceto os botões
    slider.querySelectorAll('.slide').forEach(s => s.remove());
    featuredProducts.forEach((product, idx) => {
        const slide = document.createElement('div');
        slide.className = 'slide' + (idx === 0 ? ' active' : '');
        slide.innerHTML = `<img src="${product.image}" alt="${product.name}" style="height:180px;max-width:100%;object-fit:contain;display:block;margin:0 auto;">`;
        slider.insertBefore(slide, slider.querySelector('.slider-btn.prev'));
    });
}

// FAQ functionality
function setupFAQ() {
    faqItems.forEach(item => {
        const question = item.querySelector('.question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

// Carrinho de compras funcional
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}
function setCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}
function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    let cartIcon = document.querySelector('.header-icon .cart-count');
    const icon = document.querySelector('.fa-shopping-cart');
    if (count > 0) {
        if (!cartIcon && icon) {
            cartIcon = document.createElement('span');
            cartIcon.className = 'cart-count';
            cartIcon.style.cssText = 'background:#00ffb3;color:#18182a;font-size:0.9em;font-weight:bold;border-radius:50%;padding:2px 7px;position:absolute;top:-8px;right:-10px;';
            icon.parentElement.style.position = 'relative';
            icon.parentElement.appendChild(cartIcon);
        }
        if (cartIcon) cartIcon.textContent = count;
    } else {
        // Remove a bolinha se o carrinho estiver vazio
        if (cartIcon) {
            cartIcon.remove();
        }
    }
}
function addToCart(productId) {
    console.log('addToCart chamado com id:', productId);
    const product = products.find(p => p.id == productId);
    if (!product) {
        console.log('Produto não encontrado para id:', productId);
        return;
    }
    let cart = getCart();
    const idx = cart.findIndex(item => item.id == productId);
    if (idx >= 0) {
        cart[idx].qty += 1;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, oldPrice: product.oldPrice, image: product.image, qty: 1 });
    }
    setCart(cart);
    updateCartCount();
    // Feedback visual apenas no botão clicado
    const btn = document.querySelector(`.add-to-cart[data-id='${productId}']`);
    if (btn) {
        btn.textContent = 'Adicionado!';
        btn.disabled = true;
        setTimeout(() => {
            btn.textContent = 'ADICIONAR AO CARRINHO';
            btn.disabled = false;
        }, 2000);
    }
}
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
        console.log('Botão clicado!', e.target, e.target.dataset.id);
        const id = e.target.dataset.id;
        if (id) addToCart(id);
    }
});

// --- Carrossel Contínuo de Produtos ---
function createCarouselCards() {
    const continuousCarousel = document.querySelector('.continuous-carousel');
    if (!continuousCarousel) return;
    let html = '';
    // Duplicar produtos para efeito infinito
    for (let i = 0; i < 2; i++) {
        products.forEach(product => {
            const hasDiscount = product.oldPrice && product.oldPrice > product.price;
            const discount = hasDiscount ? Math.round(100 - (product.price / product.oldPrice) * 100) : 0;
            const isMaisVendido = product.id === 1 || product.id === 3;
            const badgeMaisVendido = isMaisVendido ? `<span class='badge-mais-vendido'>MAIS VENDIDOS</span>` : '';
            const badgeDesconto = hasDiscount ? `<span class='badge-desconto'>-${discount}%</span>` : '';
            const oldPriceHtml = hasDiscount ? `<span class=\"old-price\">R$ ${product.oldPrice.toFixed(2)}</span>` : '';
            // Avaliação visual
            const ratingData = getProductAverageRating(product.id);
            let ratingHtml = '';
            if (ratingData) {
                const avg = ratingData.avg;
                const count = ratingData.count;
                const fullStars = Math.floor(avg);
                const halfStar = avg % 1 >= 0.5;
                let starsHtml = '';
                for (let i = 0; i < fullStars; i++) starsHtml += '<i class=\"fas fa-star\" style=\"color:#ffe600\"></i>';
                if (halfStar) starsHtml += '<i class=\"fas fa-star-half-alt\" style=\"color:#ffe600\"></i>';
                for (let i = fullStars + halfStar; i < 5; i++) starsHtml += '<i class=\"far fa-star\" style=\"color:#ffe600\"></i>';
                ratingHtml = `<div class=\"product-rating\">${starsHtml} <span style=\"color:#ffe600;font-weight:bold;\">${avg.toFixed(1)}</span> <span style=\"color:#aaa;font-size:0.95em;\">(${count})</span></div>`;
            }
            const link = product.url ? product.url : `produto.html?produto=${product.slug}`;
            const target = product.url && product.url.startsWith('http') ? ' target=\"_blank\" rel=\"noopener\"' : '';
            html += `
            <div class="product-card">
                <a href="${link}" class="product-link" style="text-decoration:none;color:inherit;display:block;"${target}>
                    <div class="card-badges">${badgeMaisVendido}${badgeDesconto}</div>
                    <div class="deal-timer"><i class="fas fa-clock"></i> <span>${getDaysLeft(product.dealEnds)} dias restantes</span></div>
                    <img src="${product.image}" alt="${product.name}" class="product-img">
                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        ${ratingHtml}
                        <p class="product-price">R$ ${product.price.toFixed(2)}
                            ${oldPriceHtml}
                        </p>
                        <p class="installments">12x de R$ ${(product.price / 12).toFixed(2)} sem juros</p>
                    </div>
                </a>
                <button class="add-to-cart" data-id="${product.id}">ADICIONAR AO CARRINHO</button>
            </div>
            `;
        });
    }
    continuousCarousel.innerHTML = html;
}

const continuousCarousel = document.querySelector('.continuous-carousel');
if (continuousCarousel) {
    createCarouselCards();
    // Carrossel: escurecer fundo ao passar mouse em qualquer card
    continuousCarousel.addEventListener('mouseover', (e) => {
        if (e.target.closest('.product-card')) {
            continuousCarousel.classList.add('faded');
        }
    });
    continuousCarousel.addEventListener('mouseout', (e) => {
        if (e.target.closest('.product-card')) {
            continuousCarousel.classList.remove('faded');
        }
    });
}

function getDaysLeft(dealEnds) {
    const now = new Date();
    const end = new Date(dealEnds);
    const diff = end - now;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days > 0 ? days : 0;
}

// Mini-carrinho (dropdown/modal)
function renderMiniCart() {
    // Pega produtos normais
    let cart = getCart();
    // Adiciona produtos customizados do teclado, se houver
    const custom = JSON.parse(localStorage.getItem('cartCustomKeyboard'));
    if (custom) {
        ['base', 'switch', 'keycaps'].forEach(tipo => {
            const prod = custom[tipo];
            if (prod) {
                // Evitar duplicidade se já estiver no carrinho
                if (!cart.some(item => item.name === prod.name)) {
                    cart.push({
                        name: prod.name,
                        price: prod.price,
                        oldPrice: prod.price,
                        image: prod.img,
                        qty: prod.qty || 1,
                        options: tipo.toUpperCase(),
                        isCustomKeyboard: true,
                        customType: tipo
                    });
                }
            }
        });
    }
    const list = document.getElementById('mini-cart-list');
    const totalSpan = document.getElementById('mini-cart-total');
    list.innerHTML = '';
    let total = 0;
    if (cart.length === 0) {
        list.innerHTML = '<div style="color:#aaa;text-align:center;padding:24px 0;">Seu carrinho está vazio.</div>';
        totalSpan.textContent = 'R$ 0,00';
        return;
    }
    cart.forEach((item, idx) => {
        total += item.price * item.qty;
        const div = document.createElement('div');
        div.className = 'mini-cart-item';
        div.innerHTML = `
            <img src="${item.image}" class="mini-cart-thumb" alt="${item.name}">
            <div class="mini-cart-info">
                <div class="mini-cart-title">${item.name}</div>
                <div class="mini-cart-qty">
                    <button class="mini-cart-qty-btn" data-idx="${idx}" data-action="-">-</button>
                    <span>${item.qty}</span>
                    <button class="mini-cart-qty-btn" data-idx="${idx}" data-action="+">+</button>
                    <button class="mini-cart-remove-btn" data-idx="${idx}" title="Remover"><i class="fas fa-trash-alt"></i></button>
                </div>
                <div class="mini-cart-price">R$ ${(item.price * item.qty).toFixed(2)}</div>
            </div>
        `;
        list.appendChild(div);
    });
    totalSpan.textContent = `R$ ${total.toFixed(2)}`;
}

// Event delegation global para os botões +, -, e remover do mini-carrinho
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('mini-cart-qty-btn')) {
        const idx = parseInt(e.target.getAttribute('data-idx'));
        const action = e.target.getAttribute('data-action');
        let cart = getCart();
        // Adiciona produtos customizados do teclado, se houver
        const custom = JSON.parse(localStorage.getItem('cartCustomKeyboard'));
        let isCustom = false;
        if (custom) {
            let customIdx = -1;
            let tipoFound = null;
            // Monta lista de todos os produtos (cart + custom)
            let all = [...cart];
            ['base', 'switch', 'keycaps'].forEach(tipo => {
                const prod = custom[tipo];
                if (prod) {
                    if (!all.some(item => item.name === prod.name)) {
                        all.push({
                            name: prod.name,
                            price: prod.price,
                            oldPrice: prod.price,
                            image: prod.img,
                            qty: prod.qty || 1,
                            options: tipo.toUpperCase(),
                            isCustomKeyboard: true,
                            customType: tipo
                        });
                    }
                }
            });
            // Descobre se o idx é de um custom
            const item = all[idx];
            if (item && item.isCustomKeyboard) {
                isCustom = true;
                tipoFound = item.customType;
                // Atualiza qty no objeto customizado
                let prod = custom[tipoFound];
                if (!prod.qty) prod.qty = 1;
                if (action === '+') prod.qty += 1;
                else if (action === '-') prod.qty -= 1;
                if (prod.qty < 1) prod.qty = 1;
                // Atualiza localStorage
                custom[tipoFound] = prod;
                localStorage.setItem('cartCustomKeyboard', JSON.stringify(custom));
            }
        }
        if (!isCustom) {
            if (action === '+') {
                cart[idx].qty += 1;
            } else if (action === '-') {
                cart[idx].qty -= 1;
                if (cart[idx].qty < 1) cart[idx].qty = 1;
            }
            setCart(cart);
        }
        renderMiniCart();
        updateCartCount();
    } else if (
        e.target.classList.contains('mini-cart-remove-btn') ||
        (e.target.closest('.mini-cart-remove-btn'))
    ) {
        // Botão de lixeira
        const btn = e.target.closest('.mini-cart-remove-btn');
        const idx = parseInt(btn.getAttribute('data-idx'));
        let cart = getCart();
        // Adiciona produtos customizados do teclado, se houver
        const custom = JSON.parse(localStorage.getItem('cartCustomKeyboard'));
        let isCustom = false;
        if (custom) {
            let all = [...cart];
            ['base', 'switch', 'keycaps'].forEach(tipo => {
                const prod = custom[tipo];
                if (prod) {
                    if (!all.some(item => item.name === prod.name)) {
                        all.push({
                            name: prod.name,
                            price: prod.price,
                            oldPrice: prod.price,
                            image: prod.img,
                            qty: prod.qty || 1,
                            options: tipo.toUpperCase(),
                            isCustomKeyboard: true,
                            customType: tipo
                        });
                    }
                }
            });
            const item = all[idx];
            if (item && item.isCustomKeyboard) {
                isCustom = true;
                // Remove do custom
                custom[item.customType] = null;
                localStorage.setItem('cartCustomKeyboard', JSON.stringify(custom));
            }
        }
        if (!isCustom) {
            cart.splice(idx, 1);
            setCart(cart);
        }
        renderMiniCart();
        updateCartCount();
    }
});

function openMiniCart() {
    document.getElementById('mini-cart').style.display = 'flex';
    renderMiniCart();
}
function closeMiniCart() {
    document.getElementById('mini-cart').style.display = 'none';
}

// Remover o slider dos destaques da semana e criar cards
function renderFeaturedCards() {
    const featuredProducts = products.filter(p => p.maisVendido);
    const grid = document.querySelector('.featured-cards-grid');
    if (!grid) return;
    grid.innerHTML = '';
    featuredProducts.forEach(product => {
        const hasDiscount = product.oldPrice && product.oldPrice > product.price;
        const discount = hasDiscount ? Math.round(100 - (product.price / product.oldPrice) * 100) : 0;
        const badgeMaisVendido = `<span class='badge-mais-vendido'>MAIS VENDIDOS</span>`;
        const badgeDesconto = hasDiscount ? `<span class='badge-desconto'>-${discount}%</span>` : '';
        const oldPriceHtml = hasDiscount ? `<span class=\"old-price\">R$ ${product.oldPrice.toFixed(2)}</span>` : '';
        // Avaliação visual
        const ratingData = getProductAverageRating(product.id);
        let ratingHtml = '';
        if (ratingData) {
            const avg = ratingData.avg;
            const count = ratingData.count;
            const fullStars = Math.floor(avg);
            const halfStar = avg % 1 >= 0.5;
            let starsHtml = '';
            for (let i = 0; i < fullStars; i++) starsHtml += '<i class="fas fa-star" style="color:#ffe600"></i>';
            if (halfStar) starsHtml += '<i class="fas fa-star-half-alt" style="color:#ffe600"></i>';
            for (let i = fullStars + halfStar; i < 5; i++) starsHtml += '<i class="far fa-star" style="color:#ffe600"></i>';
            ratingHtml = `<div class=\"product-rating\">${starsHtml} <span style=\"color:#ffe600;font-weight:bold;\">${avg.toFixed(1)}</span> <span style=\"color:#aaa;font-size:0.95em;\">(${count})</span></div>`;
        }
        const link = product.url ? product.url : `produto.html?produto=${product.slug}`;
        const target = product.url && product.url.startsWith('http') ? ' target="_blank" rel="noopener"' : '';
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <a href="${link}" class="product-link" style="text-decoration:none;color:inherit;display:block;"${target}>
                <div class="card-badges">${badgeMaisVendido}${badgeDesconto}</div>
                <div class="deal-timer"><i class="fas fa-clock"></i> <span>${getDaysLeft(product.dealEnds)} dias restantes</span></div>
                <img src="${product.image}" alt="${product.name}" class="product-img">
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    ${ratingHtml}
                    <p class="product-price">R$ ${product.price.toFixed(2)}
                        ${oldPriceHtml}
                    </p>
                    <p class="installments">12x de R$ ${(product.price / 12).toFixed(2)} sem juros</p>
                </div>
            </a>
            <button class="add-to-cart" data-id="${product.id}">ADICIONAR AO CARRINHO</button>
        `;
        grid.appendChild(card);
    });
}

// --- Carrossel Contínuo 100% JS: auto-scroll + drag ---
function enableContinuousCarouselJS() {
    const carousel = document.querySelector('.continuous-carousel');
    if (!carousel) return;

    // Remove animação CSS
    carousel.style.animation = 'none';
    carousel.style.animationPlayState = 'paused';

    // Parâmetros
    let speed = 0.7; // px por frame
    let isDragging = false;
    let startX = 0;
    let scrollX = 0;
    let lastX = 0;
    let rafId = null;
    let pauseAuto = false;

    // Duplicar conteúdo para efeito infinito
    if (carousel.children.length > 0 && !carousel.classList.contains('js-infinite')) {
        carousel.innerHTML += carousel.innerHTML;
        carousel.classList.add('js-infinite');
    }

    // Tamanho total do conteúdo (metade é o loop)
    function getContentWidth() {
        let w = 0;
        for (let i = 0; i < carousel.children.length / 2; i++) {
            w += carousel.children[i].offsetWidth + parseInt(getComputedStyle(carousel.children[i]).marginRight || 0);
        }
        return w;
    }
    let contentWidth = getContentWidth();

    // Movimento automático
    function autoScroll() {
        if (!pauseAuto && !isDragging) {
            scrollX -= speed;
            if (Math.abs(scrollX) >= contentWidth) {
                scrollX = 0;
            }
            carousel.style.transform = `translateX(${scrollX}px)`;
        }
        rafId = requestAnimationFrame(autoScroll);
    }
    autoScroll();

    // Drag com mouse
    carousel.addEventListener('mousedown', (e) => {
        isDragging = true;
        pauseAuto = true;
        startX = e.pageX;
        lastX = scrollX;
        carousel.style.cursor = 'grabbing';
        e.preventDefault();
    });
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const dx = e.pageX - startX;
        scrollX = lastX + dx;
        // Loop infinito
        if (scrollX > 0) scrollX = -contentWidth + (scrollX % contentWidth);
        if (Math.abs(scrollX) >= contentWidth) scrollX = 0;
        carousel.style.transform = `translateX(${scrollX}px)`;
    });
    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            pauseAuto = false;
            carousel.style.cursor = '';
        }
    });

    // Drag com touch
    carousel.addEventListener('touchstart', (e) => {
        isDragging = true;
        pauseAuto = true;
        startX = e.touches[0].pageX;
        lastX = scrollX;
    });
    carousel.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const dx = e.touches[0].pageX - startX;
        scrollX = lastX + dx;
        if (scrollX > 0) scrollX = -contentWidth + (scrollX % contentWidth);
        if (Math.abs(scrollX) >= contentWidth) scrollX = 0;
        carousel.style.transform = `translateX(${scrollX}px)`;
    });
    carousel.addEventListener('touchend', () => {
        isDragging = false;
        pauseAuto = false;
    });

    // Atualizar contentWidth ao redimensionar
    window.addEventListener('resize', () => {
        contentWidth = getContentWidth();
    });
}

function initHeaderSearchBar(products) {
    const headerSearchInput = document.querySelector('.search-input');
    const suggestionsBox = document.querySelector('.header-search-suggestions');
    if (!headerSearchInput || !suggestionsBox) return;

    // Sugestões fixas
    const searchSuggestions = [
        "Monitor Gamer Gigabyte",
        "Monitor Dr.Office",
        "Placa de vídeo",
        "Monitor Gamer",
        "Superframe",
        "Gigabyte",
        "Notebook",
        "PC Gamer Plataforma AMD",
        "Processador AMD",
        "Kingston"
    ];

    function renderFixedSuggestions() {
        let html = `<div class="suggestion-title">Pesquisa sugerida</div>`;
        html += searchSuggestions.map(s => `
            <div class="suggestion-item"><i class="fas fa-search"></i> <span>${s}</span></div>
        `).join('');
        suggestionsBox.innerHTML = html;
        suggestionsBox.style.display = 'block';
    }

    headerSearchInput.addEventListener('focus', function() {
        if (!headerSearchInput.value.trim()) {
            renderFixedSuggestions();
        } else {
            headerSearchInput.dispatchEvent(new Event('input'));
        }
    });

    headerSearchInput.addEventListener('input', function() {
        const term = headerSearchInput.value.trim().toLowerCase();
        if (!term) {
            renderFixedSuggestions();
            return;
        }
        const filtered = products.filter(p => p.name.toLowerCase().includes(term));
        if (filtered.length === 0) {
            suggestionsBox.innerHTML = `<div class="suggestion-empty">Nenhum produto encontrado.</div>`;
        } else {
            suggestionsBox.innerHTML = filtered.map(prod => `
                <div class="suggestion-product" data-id="${prod.id}">
                    <img src="${prod.image}" class="suggestion-product-img" alt="${prod.name}">
                    <div class="suggestion-product-info">
                        <div class="suggestion-product-title">${prod.name}</div>
                        <div class="suggestion-product-price">R$ ${prod.price.toFixed(2)}</div>
                    </div>
                    <span class="suggestion-product-add"><i class="fas fa-cart-plus"></i></span>
                </div>
            `).join('');
        }
        suggestionsBox.style.display = 'block';
    });

    headerSearchInput.addEventListener('blur', function() {
        setTimeout(() => { suggestionsBox.style.display = 'none'; }, 150);
    });

    // Clique em sugestão fixa: preenche o campo e faz a busca
    suggestionsBox.addEventListener('mousedown', function(e) {
        const item = e.target.closest('.suggestion-item');
        if (item) {
            const text = item.querySelector('span').textContent;
            headerSearchInput.value = text;
            suggestionsBox.style.display = 'none';
            headerSearchInput.dispatchEvent(new Event('input'));
            return;
        }
        const prodDiv = e.target.closest('.suggestion-product');
        if (prodDiv) {
            const id = prodDiv.getAttribute('data-id');
            window.location.href = `produto.html?produto=${id}`;
        }
    });
}

function getProductAverageRating(productId) {
    const comments = JSON.parse(localStorage.getItem('comments_' + productId)) || [];
    if (comments.length === 0) return null;
    const avg = comments.reduce((sum, c) => sum + c.nota, 0) / comments.length;
    return { avg, count: comments.length };
}

function updateSetupPreview() {
    const stack = document.getElementById('setup-preview-stack');
    const labels = document.getElementById('preview-labels');
    if (!stack || !labels) return;
    stack.innerHTML = '';
    let labelText = '';
    // Ordem de exibição visual (de cima para baixo)
    const order = ['cadeira','mesa','monitor','teclado','mousepad','mouse','fone'];
    stack.style.display = 'flex';
    stack.style.flexDirection = 'column';
    stack.style.alignItems = 'center';
    stack.style.justifyContent = 'center';
    stack.style.height = '340px';
    stack.style.gap = '18px'; // Mais espaçamento entre partes
    order.forEach(tipo => {
        if (selectedParts[tipo]) {
            let width = 120, height = 60;
            switch(tipo) {
                case 'cadeira': width = 80; height = 100; break;
                case 'mesa': width = 180; height = 40; break;
                case 'monitor': width = 120; height = 60; break;
                case 'teclado': width = 100; height = 40; break;
                case 'mousepad': width = 100; height = 20; break;
                case 'mouse': width = 50; height = 30; break;
                case 'fone': width = 60; height = 60; break;
            }
            stack.innerHTML += `
                <div style='display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;'>
                    <div style='width:${width}px;height:${height}px;display:flex;align-items:center;justify-content:center;'>
                        <img src='${selectedParts[tipo].img}' alt='${selectedParts[tipo].name}' style='max-width:100%;max-height:100%;object-fit:contain;filter:drop-shadow(0 4px 8px #00ffb3cc);'>
                    </div>
                    <div style='color:#fff;font-size:1.01rem;text-align:center;margin-top:2px;'>${selectedParts[tipo].name}</div>
                </div>
            `;
            labelText += `<span style='color:#00ffb3;font-weight:bold;'>${tipo.charAt(0).toUpperCase()+tipo.slice(1)}: </span>${selectedParts[tipo].name}<br>`;
        }
    });
    if (!Object.values(selectedParts).some(Boolean)) {
        stack.innerHTML = `<div style='color:#aaa;text-align:center;width:100%;font-size:1.15rem;'>Selecione as partes<br>para visualizar aqui</div>`;
        labelText = '';
    }
    labels.innerHTML = labelText;
}

aa