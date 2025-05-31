// Product Data
const products = [
    {
        id: 1,
        name: "Mouse Gamer Pro X",
        price: 249.90,
        oldPrice: 399.90,
        category: "mouse",
        image: "https://images.tcdn.com.br/img/img_prod/1192199/fone_de_ouvido_bluetooth_elg_max_5_com_microfone_epb_max5_289_1_6844c29a8acea9dbdc824e5681f8bd44.jpeg",
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
        image: "https://via.placeholder.com/300x200?text=Teclado+RGB",
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
        image: "https://via.placeholder.com/300x200?text=Headset+7.1",
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
        image: "https://via.placeholder.com/300x200?text=Mouse+Elite",
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
        image: "https://via.placeholder.com/300x200?text=Teclado+Tournament",
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
        image: "https://via.placeholder.com/300x200?text=Headset+Warrior",
        dealEnds: "2024-06-18",
        maisVendido: true,
        slug: "headset-warrior-pro"
    },
    // Novos produtos MAIS VENDIDOS
    {
        id: 8,
        name: "Teclado Gamer Ultra",
        price: 299.90,
        oldPrice: 399.90,
        category: "keyboard",
        image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80",
        dealEnds: "2024-06-22",
        maisVendido: true,
        slug: "teclado-gamer-ultra"
    },
    {
        id: 9,
        name: "Headset Wireless HyperSound",
        price: 359.90,
        oldPrice: 499.90,
        category: "headset",
        image: "https://images.unsplash.com/photo-1512257752821-0a9115c56856?auto=format&fit=crop&w=400&q=80",
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
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
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
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        dealEnds: "2024-06-27",
        maisVendido: false,
        slug: "teclado-gamer-rgb-compact"
    },
    {
        id: 12,
        name: "Mousepad Gamer Speed XL",
        price: 89.90,
        oldPrice: 114.90,
        dealEnds: "2024-06-18",
        slug: "mousepad-gamer-speed-xl"
    }
];

// DOM Elements
const productsGrid = document.querySelector('.products-grid');
const filterButtons = document.querySelectorAll('.filter-btn');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const faqItems = document.querySelectorAll('.faq-item');

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
        const rating = product.rating || 0;
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        let starsHtml = '';
        for (let i = 0; i < fullStars; i++) starsHtml += '<i class="fas fa-star" style="color:#ffe600"></i>';
        if (halfStar) starsHtml += '<i class="fas fa-star-half-alt" style="color:#ffe600"></i>';
        for (let i = fullStars + halfStar; i < 5; i++) starsHtml += '<i class="far fa-star" style="color:#ffe600"></i>';
        const ratingHtml = `<div class=\"product-rating\">${starsHtml} <span style=\"color:#ffe600;font-weight:bold;\">${rating.toFixed(1)}</span></div>`;
        // Usa url se existir, senão slug
        const link = product.url ? product.url : `produto.html?produto=${product.slug}`;
        const target = product.url && product.url.startsWith('http') ? ' target="_blank" rel="noopener"' : '';
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
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
            <button class="add-to-cart" data-id="${product.id}">ADICIONAR AO CARRINHO</button>
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
    if (!cartIcon) {
        const icon = document.querySelector('.fa-shopping-cart');
        if (icon) {
            cartIcon = document.createElement('span');
            cartIcon.className = 'cart-count';
            cartIcon.style.cssText = 'background:#00ffb3;color:#18182a;font-size:0.9em;font-weight:bold;border-radius:50%;padding:2px 7px;position:absolute;top:-8px;right:-10px;';
            icon.parentElement.style.position = 'relative';
            icon.parentElement.appendChild(cartIcon);
        }
    }
    if (cartIcon) cartIcon.textContent = count > 0 ? count : '';
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
    // Feedback visual
    const btn = document.querySelector(`.add-to-cart[data-id='${productId}']`);
    if (btn) {
        btn.textContent = 'Adicionado!';
        btn.disabled = true;
        setTimeout(() => { btn.textContent = 'ADICIONAR AO CARRINHO'; btn.disabled = false; }, 1200);
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
            const rating = product.rating || 0;
            const fullStars = Math.floor(rating);
            const halfStar = rating % 1 >= 0.5;
            let starsHtml = '';
            for (let i = 0; i < fullStars; i++) starsHtml += '<i class="fas fa-star" style="color:#ffe600"></i>';
            if (halfStar) starsHtml += '<i class="fas fa-star-half-alt" style="color:#ffe600"></i>';
            for (let i = fullStars + halfStar; i < 5; i++) starsHtml += '<i class="far fa-star" style="color:#ffe600"></i>';
            const ratingHtml = `<div class=\"product-rating\">${starsHtml} <span style=\"color:#ffe600;font-weight:bold;\">${rating.toFixed(1)}</span></div>`;
            // Usa url se existir, senão slug
            const link = product.url ? product.url : `produto.html?produto=${product.slug}`;
            const target = product.url && product.url.startsWith('http') ? ' target="_blank" rel="noopener"' : '';
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
    const cart = getCart();
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
                </div>
                <div class="mini-cart-price">R$ ${(item.price * item.qty).toFixed(2)}</div>
            </div>
        `;
        list.appendChild(div);
    });
    totalSpan.textContent = `R$ ${total.toFixed(2)}`;
}

// Event delegation para os botões + e - do mini-carrinho
const miniCartList = document.getElementById('mini-cart-list');
if (miniCartList) {
    miniCartList.addEventListener('click', function(e) {
        if (e.target.classList.contains('mini-cart-qty-btn')) {
            const idx = parseInt(e.target.getAttribute('data-idx'));
            const action = e.target.getAttribute('data-action');
            let cart = getCart();
            if (action === '+') {
                cart[idx].qty += 1;
            } else if (action === '-') {
                cart[idx].qty -= 1;
                if (cart[idx].qty < 1) cart[idx].qty = 1;
            }
            setCart(cart);
            renderMiniCart();
            updateCartCount();
        }
    });
}

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
        const rating = product.rating || 0;
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        let starsHtml = '';
        for (let i = 0; i < fullStars; i++) starsHtml += '<i class="fas fa-star" style="color:#ffe600"></i>';
        if (halfStar) starsHtml += '<i class="fas fa-star-half-alt" style="color:#ffe600"></i>';
        for (let i = fullStars + halfStar; i < 5; i++) starsHtml += '<i class="far fa-star" style="color:#ffe600"></i>';
        const ratingHtml = `<div class=\"product-rating\">${starsHtml} <span style=\"color:#ffe600;font-weight:bold;\">${rating.toFixed(1)}</span></div>`;
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

