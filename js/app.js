// Nova branch criada com sucessos

(() => {
    'use strict'; // deixa mais seguro

    const WHATSAPP_NUMBER = '5584999671972';
    const STORAGE_KEY = 'casa-do-vinho-cart-v2';

    //------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // base de dados/array de objetos interna
    const products = [
        { id: 'torre-oria-tempranillo-750ml', name: 'VINHO TINTO TORRE ORIA TEMPRANILLO 750ML', price: 101.00, category: 'Tinto', image: '' },
        { id: 'cabernet-sauvignon-750ml', name: 'VINHO TINTO CABERNET SAUVIGNON 750ML', price: 90.00, category: 'Tinto', image: '' },
        { id: 'syrah-750ml', name: 'VINHO TINTO SYRAH 750ML', price: 68.00, category: 'Tinto', image: '' },
        { id: 'carmenere-750ml', name: 'VINHO TINTO CARMENERE 750ML', price: 68.00, category: 'Tinto', image: '' },
        { id: 'chardonnay-branco-750ml', name: 'VINHO BRANCO CHARDONNAY 750ML', price: 68.00, category: 'Branco', image: '' },
        { id: 'camino-de-chile-pinot-noir-rose-750ml', name: 'VINHO ROSÉ CAMINO DE CHILE PINOT NOIR 750ML', price: 95.50, category: 'Rosé', image: '' },
        { id: 'san-jose-apalta-classico-cabernet-750ml', name: 'VINHO TINTO SAN JOSE DE APALTA CLASICO CABERNET SAUVIGNON 750ML', price: 93.00, category: 'Tinto', image: '' },
        { id: 'crotta-malbec-750ml', name: 'VINHO TINTO CROTTA MALBEC 750ML', price: 74.00, category: 'Tinto', image: '' },
        { id: 'sin-escala-malbec-750ml', name: 'VINHO TINTO SIN ESCALA MALBEC 750ML', price: 95.00, category: 'Tinto', image: '' },
        { id: 'escadas-infinitas-branco-750ml', name: 'VINHO BRANCO ESCADAS INFINITAS 750ML', price: 151.00, category: 'Branco', image: '' },
        { id: 'escadas-infinitas-tinto-750ml', name: 'VINHO TINTO ESCADAS INFINITAS 750ML', price: 151.00, category: 'Tinto', image: '' },
        { id: 'quinta-da-espiga-tinto-750ml', name: 'VINHO TINTO QUINTA DA ESPIGA 750ML', price: 101.50, category: 'Tinto', image: '' },
        { id: 'quinta-da-espiga-branco-750ml', name: 'VINHO BRANCO QUINTA DA ESPIGA 750ML', price: 95.00, category: 'Branco', image: '' },
        { id: 'solouro-vinho-verde-750ml', name: 'VINHO VERDE SOLOURO 750ML', price: 99.00, category: 'Branco', image: '' },
        { id: 'coli-rosso-750ml', name: 'VINHO TINTO COLI ROSSO 750ML', price: 103.00, category: 'Tinto', image: '' },
        { id: 'esperanto-puglia-igt', name: 'VINHO TINTO ESPERANTO PUGLIA IGT', price: 128.00, category: 'Tinto', image: '' },
        { id: 'santa-colina-chardonnay-750ml', name: 'VINHO BRANCO SANTA COLINA CHARDONNAY 750ML', price: 64.00, category: 'Branco', image: '' },
        { id: 'santa-colina-cabernet-750ml', name: 'VINHO TINTO SANTA COLINA CABERNET SAUVIGNON 750ML', price: 67.00, category: 'Tinto', image: '' },
        { id: 'castellamare-merlot-750ml', name: 'VINHO TINTO CASTELLAMARE MERLOT 750ML', price: 101.00, category: 'Tinto', image: '' },
        { id: 'castellamare-chardonnay-750ml', name: 'VINHO BRANCO CASTELLAMARE CHARDONNAY 750ML', price: 102.00, category: 'Branco', image: '' },
        { id: 'mayos-laranja-750ml', name: 'VINHO LARANJA MAYOS 750ML', price: 103.00, category: 'Laranja', image: '' },
        { id: 'santa-colina-sem-alcool-750ml', name: 'ESPUMANTE SANTA COLINA SEM ÁLCOOL 750ML', price: 82.90, category: 'Espumante', image: '' },
        { id: 'santa-colina-moscatel-750ml', name: 'ESPUMANTE SANTA COLINA MOSCATEL 750ML', price: 82.90, category: 'Espumante', image: '' },
        { id: 'les-chais-de-magellan-bordeaux-750ml', name: 'VINHO TINTO LES CHAIS DE MAGELLAN BORDEAUX AOP 750ML', price: 128.00, category: 'Tinto', image: '' },
        { id: 'creme-de-cassis-perrault-dabot-700ml', name: 'LICOR CREME DE CASSIS PERRAULT DABOT AOP DE DIJON 700ML', price: 199.00, category: 'Licor', image: '' },
        { id: 'casi-hermano-chardonnay-750ml', name: 'VINHO BRANCO CASI HERMANO CHARDONNAY 750ML', price: 82.90, category: 'Branco', image: '' },
        { id: 'casi-hermano-cabernet-750ml', name: 'VINHO TINTO CASI HERMANO CABERNET SAUVIGNON 750ML', price: 82.90, category: 'Tinto', image: '' },
        { id: 'quinta-da-espiga-rose-750ml', name: 'VINHO ROSÉ QUINTA DA ESPIGA 750ML', price: 94.00, category: 'Rosé', image: '' },
        { id: 'castellamare-tannat-750ml', name: 'VINHO TINTO CASTELLAMARE TANNAT 750ML', price: 92.00, category: 'Tinto', image: '' },
        { id: 'arrivo-31-750ml', name: 'VINHO TINTO ARRIVO 31 750ML', price: 82.00, category: 'Tinto', image: '' },
        { id: 'santa-colina-brut-750ml', name: 'ESPUMANTE SANTA COLINA BRUT 750ML', price: 75.00, category: 'Espumante', image: '' },
        { id: 'quinta-do-morgado-750ml', name: 'QUINTA DO MORGADO 750ML', price: 26.00, category: 'Tinto', image: '' } // vinho teste
    ];

    //------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    const state = {
        cart: loadCart(),
        favorites: new Set(),
        expanded: false,
        query: '',
        category: ''
    };

    const $ = (selector, root = document) => root.querySelector(selector);
    const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

    const productsGrid = $('#productsGrid');
    const productsWindow = $('#productsWindow');
    const productsFade = $('#productsFade');
    const seeMoreButton = $('#seeMoreButton');
    const emptySearch = $('#emptySearch');
    const cartDrawer = $('#cartDrawer');
    const sideMenu = $('#sideMenu');
    const backdrop = $('#drawerBackdrop');
    const cartItems = $('#cartItems');
    const cartEmpty = $('#cartEmpty');
    const checkoutForm = $('#checkoutForm');
    const cartSubtotal = $('#cartSubtotal');
    const menuCartCount = $('#menuCartCount');
    const toast = $('#toast');

    function money(value) {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    function compactMoney(value) {
        const number = value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        return `<span class="product-price__currency">R$</span><strong>${number}</strong>`;
    }

    function loadCart() {
        try {
            const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
            return Array.isArray(saved) ? saved : [];
        } catch (_) {
            return [];
        }
    }

    function saveCart() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cart));
        } catch (_) {
            // O carrinho continua funcionando na sessão mesmo se o armazenamento estiver bloqueado por guia anônima ou extensão de navegador
        }
    }

    function filteredProducts() {
        const normalizedQuery = state.query.trim().toLocaleLowerCase('pt-BR'); // normaliza a query para evitar problemas com acentos e maiúsculas/minúsculas
        return products.filter((product) => {
            const matchesQuery = !normalizedQuery || product.name.toLocaleLowerCase('pt-BR').includes(normalizedQuery);
            const matchesCategory = !state.category || product.category === state.category;
            return matchesQuery && matchesCategory;
        });
    }

    function iconHeart() {
        return '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 20.2S4.2 15.8 4.2 9.7A4.2 4.2 0 0 1 12 7.5a4.2 4.2 0 0 1 7.8 2.2C19.8 15.8 12 20.2 12 20.2Z"/></svg>';
    }

    function iconCart() {
        return '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5.2 6.8h1.6l1.1 7.4h8.7l1.5-5.4H8.2" fill="none"/><circle cx="9.2" cy="17.8" r="1.4"/><circle cx="16" cy="17.8" r="1.4"/></svg>';
    }

    function iconWinePlaceholder() {
        return `
      <span class="product-image-placeholder" aria-hidden="true">
        <svg viewBox="0 0 64 96">
          <path d="M25 4h14v10c0 4 2 7 5 10 4 4 6 9 6 15v43c0 6-5 10-10 10H24c-6 0-10-4-10-10V39c0-6 2-11 6-15 3-3 5-6 5-10V4Z"/>
          <path d="M25 14h14"/>
          <path d="M20 44h24v27H20Z"/>
          <path d="M25 4h14"/>
        </svg>
      </span>`;
    }

    function renderProducts() {
        const list = filteredProducts();
        productsGrid.innerHTML = '';

        list.forEach((product) => {
            const card = document.createElement('article');
            card.className = 'product-card';
            card.dataset.productId = product.id;
            const imageHtml = product.image
                ? `<img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy">` // escape html para evitar ataques xss, deixa mais seguro
                : iconWinePlaceholder();
            card.innerHTML = `
        <h3 class="product-title">${escapeHtml(product.name)}</h3>
        <button class="card-action card-action--heart${state.favorites.has(product.id) ? ' is-active' : ''}" type="button" aria-label="Favoritar ${escapeHtml(product.name)}" data-favorite="${product.id}">${iconHeart()}</button>
        <div class="product-image-slot" data-image-slot="${product.id}">${imageHtml}</div>
        <span class="product-price">${compactMoney(product.price)}</span>
        <button class="card-action card-action--cart" type="button" aria-label="Adicionar ${escapeHtml(product.name)} ao carrinho" data-add-cart="${product.id}">${iconCart()}</button>
      `;
            productsGrid.appendChild(card);
        });

        const hasResults = list.length > 0;
        productsWindow.hidden = !hasResults;
        emptySearch.hidden = hasResults;
        const needsMore = list.length > (window.innerWidth >= 900 ? 8 : 4);
        seeMoreButton.hidden = !needsMore;
        productsFade.hidden = !needsMore || state.expanded;
        productsWindow.classList.toggle('is-expanded', state.expanded);
    }

    function escapeHtml(value) {
        return String(value).replace(/[&<>'"]/g, (char) => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
        })[char]);
    }

    function addToCart(productId) {
        const product = products.find((item) => item.id === productId);
        if (!product) return;
        const existing = state.cart.find((item) => item.id === productId);
        if (existing) existing.quantity += 1;
        else state.cart.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
        saveCart();
        renderCart();
        showToast('Produto adicionado ao carrinho');
        openCart();
    }

    function updateQuantity(productId, delta) {
        const item = state.cart.find((entry) => entry.id === productId);
        if (!item) return;
        item.quantity += delta;
        if (item.quantity <= 0) state.cart = state.cart.filter((entry) => entry.id !== productId);
        saveCart();
        renderCart();
    }

    function removeFromCart(productId) {
        state.cart = state.cart.filter((entry) => entry.id !== productId);
        saveCart();
        renderCart();
    }

    function renderCart() {
        cartItems.innerHTML = '';
        state.cart.forEach((item) => {
            const node = document.createElement('div');
            node.className = 'cart-item';
            node.innerHTML = `
        <div>
          <h3>${escapeHtml(item.name)}</h3>
          <div class="cart-item__price">${money(item.price)}</div>
          <button class="cart-item__remove" type="button" data-remove="${item.id}">Remover</button>
        </div>
        <div class="cart-item__controls" aria-label="Quantidade de ${escapeHtml(item.name)}">
          <button type="button" data-qty="-1" data-id="${item.id}" aria-label="Diminuir quantidade">−</button>
          <strong>${item.quantity}</strong>
          <button type="button" data-qty="1" data-id="${item.id}" aria-label="Aumentar quantidade">+</button>
        </div>
      `;
            cartItems.appendChild(node);
        });

        const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
        const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        menuCartCount.textContent = String(count);
        cartSubtotal.textContent = money(subtotal);
        cartEmpty.hidden = state.cart.length > 0;
        checkoutForm.hidden = state.cart.length === 0;
    }

    function openLayer(layer) {
        backdrop.hidden = false;
        document.body.style.overflow = 'hidden';
        requestAnimationFrame(() => layer.classList.add('is-open'));
        layer.setAttribute('aria-hidden', 'false');
    }

    function closeLayer(layer) {
        layer.classList.remove('is-open');
        layer.setAttribute('aria-hidden', 'true');
        if (layer === sideMenu) $('#menuButton').setAttribute('aria-expanded', 'false');
        window.setTimeout(() => {
            if (!sideMenu.classList.contains('is-open') && !cartDrawer.classList.contains('is-open')) {
                backdrop.hidden = true;
                document.body.style.overflow = '';
            }
        }, 290);
    }

    function openMenu() {
        closeLayer(cartDrawer);
        $('#menuButton').setAttribute('aria-expanded', 'true');
        openLayer(sideMenu);
    }

    function openCart() {
        closeLayer(sideMenu);
        renderCart();
        openLayer(cartDrawer);
    }

    function closeAllLayers() {
        closeLayer(sideMenu);
        closeLayer(cartDrawer);
    }

    function showToast(message) {
        toast.textContent = message;
        toast.hidden = false;
        clearTimeout(showToast.timeout);
        showToast.timeout = setTimeout(() => { toast.hidden = true; }, 1800);
    }

    function buildWhatsappMessage(form) {
        const data = new FormData(form);
        const deliveryMode = data.get('deliveryMode') || 'Entrega';
        const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const lines = [
            '*PEDIDO - CASA DO VINHO*',
            '',
            `*Cliente:* ${data.get('customerName') || ''}`,
            `*Telefone:* ${data.get('customerPhone') || ''}`,
            `*Recebimento:* ${deliveryMode}`
        ];

        if (deliveryMode === 'Entrega') {
            lines.push(`*Endereço:* ${data.get('customerAddress') || ''}`);
            if (data.get('customerReference')) lines.push(`*Referência:* ${data.get('customerReference')}`);
        }

        lines.push(`*Pagamento:* ${data.get('paymentMethod') || ''}`, '', '*ITENS DO PEDIDO*');
        state.cart.forEach((item, index) => {
            lines.push(`${index + 1}. ${item.quantity}x ${item.name}`);
            lines.push(`   ${money(item.price * item.quantity)}`);
        });
        lines.push('', `*Subtotal:* ${money(subtotal)}`);
        if (data.get('orderNotes')) lines.push('', `*Observações:* ${data.get('orderNotes')}`);
        lines.push('', 'Olá! Gostaria de confirmar este pedido.');
        return lines.join('\n');
    }

    function validateCheckout(form) {
        const deliveryMode = new FormData(form).get('deliveryMode');
        const address = $('#customerAddress');
        address.required = deliveryMode === 'Entrega';
        return form.reportValidity();
    }

    productsGrid.addEventListener('click', (event) => {
        const favorite = event.target.closest('[data-favorite]');
        if (favorite) {
            const id = favorite.dataset.favorite;
            state.favorites.has(id) ? state.favorites.delete(id) : state.favorites.add(id);
            favorite.classList.toggle('is-active');
            return;
        }
        const add = event.target.closest('[data-add-cart]');
        if (add) addToCart(add.dataset.addCart);
    });

    cartItems.addEventListener('click', (event) => {
        const qty = event.target.closest('[data-qty]');
        if (qty) return updateQuantity(qty.dataset.id, Number(qty.dataset.qty));
        const remove = event.target.closest('[data-remove]');
        if (remove) removeFromCart(remove.dataset.remove);
    });

    seeMoreButton.addEventListener('click', () => {
        state.expanded = !state.expanded;
        productsWindow.classList.toggle('is-expanded', state.expanded);
        productsFade.hidden = state.expanded;
        seeMoreButton.textContent = state.expanded ? 'VER MENOS' : 'VER MAIS';
        seeMoreButton.setAttribute('aria-expanded', String(state.expanded));
    });

    $('#menuButton').addEventListener('click', openMenu);
    $('#menuClose').addEventListener('click', () => closeLayer(sideMenu));
    $('#cartClose').addEventListener('click', () => closeLayer(cartDrawer));
    $('#openCartFromMenu').addEventListener('click', openCart);
    backdrop.addEventListener('click', closeAllLayers);
    $$('.side-menu nav a').forEach((link) => link.addEventListener('click', () => closeLayer(sideMenu)));

    $('#searchButton').addEventListener('click', () => {
        const panel = $('#searchPanel');
        panel.hidden = !panel.hidden;
        $('#searchButton').setAttribute('aria-expanded', String(!panel.hidden));
        if (!panel.hidden) setTimeout(() => $('#searchInput').focus(), 0);
    });
    $('#searchClose').addEventListener('click', () => {
        $('#searchPanel').hidden = true;
        $('#searchButton').setAttribute('aria-expanded', 'false');
    });
    $('#searchInput').addEventListener('input', (event) => {
        state.query = event.target.value;
        state.expanded = true;
        renderProducts();
    });

    $$('.category-item').forEach((button) => {
        button.addEventListener('click', () => {
            const selected = button.dataset.category;
            state.category = state.category === selected ? '' : selected;
            $$('.category-item').forEach((item) => item.classList.toggle('is-active', item.dataset.category === state.category));
            state.expanded = true;
            renderProducts();
            document.querySelector('#produtos').scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
    $('#categoryNext').addEventListener('click', () => {
        $('#categoryRow').scrollBy({ left: 160, behavior: 'smooth' });
    });

    $$('input[name="deliveryMode"]').forEach((radio) => {
        radio.addEventListener('change', () => {
            const delivery = $('input[name="deliveryMode"]:checked').value === 'Entrega';
            $('#deliveryFields').hidden = !delivery;
            $('#customerAddress').required = delivery;
        });
    });

    checkoutForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!state.cart.length) return;
        if (!validateCheckout(checkoutForm)) return;
        const message = buildWhatsappMessage(checkoutForm);
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeAllLayers();
            $('#searchPanel').hidden = true;
            $('#searchButton').setAttribute('aria-expanded', 'false');
        }
    });

    window.addEventListener('resize', () => renderProducts());

    renderProducts();
    renderCart();
})();