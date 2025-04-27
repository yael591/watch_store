const products = [
    {
        id: "11022-363-1",
        name: "שעון מותג יוקרתי",
        price: 500,
        oldPrice: 590,
        imgSrc: "../pic/שעון מותג יוקרתי.jpg",
        description: "שעון מותג בצבעים קסומים",
        kategory:"נשים ונערות",
        detailsPage:'./product-details.html'
    },
    {
        id: "11022-363-2",
        name: "שעון משובץ יהלומים",
        price: 12000,
        oldPrice:12500,
        imgSrc: "../pic/שעון משובץ יהלומים יוקרתי.jpg",
        description: "דגם זהב עם רצועת רשת משובץ",
        kategory:"נשים ונערות",
        detailsPage:'./product-details.html'
    },
    {
        id: "11022-363-3",
        name: "שעון רצועת עור חומה",
        price: 400,
        oldPrice: 500,
        imgSrc: "../pic/שעון נשי עם רצועת עור חומה.jpg",
        description:"דגם עתיק של שעון מהעבר",
        kategory:"נשים ונערות",
        detailsPage:'./product-details.html'
    },
    {
        id: "11022-363-4",
        name: "שעון רצועה שחורה",
        price: 350,
        oldPrice: 500,
        imgSrc: "../pic/שעון עם רצועה דקה לנשים.jpg",
        description: "שעון עדין ואצילי ",
        kategory:"נשים ונערות",
        detailsPage:'./product-details.html'
    },
    {
        id: "11022-363-5",
        name: "סט 2 שעונים זהב וכסף",
        price: 600,
        oldPrice: 700,
        imgSrc: "../pic/סט 2 שעונים.jpg",
        description: "זוג שעונים יוקרתיים במבצע-שלם על אחד וקבל 2 !",
        kategory:"נשים ונערות",
        detailsPage:'./product-details.html'
    },
    {
        id: "11022-363-6",
        name:"שעון מותג POEADAGAR",
        price: 700,
        oldPrice: 850,
        imgSrc: "../pic/שעון וורוד עתיק.jpg",
        description: "שעון בגווני ורוד עתיק יוקרתי וחדשני",
        kategory:"נשים ונערות",
        detailsPage:'./product-details.html'
    },
    {
        id: "11022-363-7",
        name:"שעון כסוף בסגנון עדין",
        price: 400,
        oldPrice: 450,
        imgSrc: "../pic/שעון מכסף עם רצועה דקה לנשים.jpg",
        description: "שעון בצבע כסף קלאסי ועדין",
        kategory:"נשים ונערות",
        detailsPage:'./product-details.html'
    },
    {
        id: "11022-363-8",
        name: "שעון קלאסי לגברים",
        price: 550,
        oldPrice: 500,
        imgSrc: "../pic/שעון כסוף לגברים.jpg",
        description: "שעון כסוף לגברים",
        detailsPage:'./product-details.html'
    },
    {
        id: "11022-363-9",
        name: "שעון גברי חדשני",
        price: 650,
        oldPrice: 700,
        imgSrc: "../pic/שעון רצועת עור לגברים.jpg",
        description: "שעון חדשני לגברים בגווני כחול וחום",
        kategory:"נשים ונערות",
        detailsPage:'./product-details.html'
    },
    {
        id: "11022-363-10",
        name: "שעון מותג LIGE לגברים",
        price: 850,
        oldPrice: 900,
        imgSrc: "../pic/שעוןגברי אופנתי.jpg",
        description: "שעון מותג לגברים בגווני כסף וחום",
        kategory:"נשים ונערות",
        detailsPage:'./product-details.html'
    }
];


// מערך הסל (cart) בו יישמרו המוצרים שנבחרו
const cart = [];

// פונקציה להוספת מוצר לסל
function addToCart(product) {
    const productIndex = cart.findIndex(item => item.name === product.name);
    if (productIndex === -1) {
        product.quantity = 1;
        cart.push(product);
    } else {
        cart[productIndex].quantity++;
    }
    saveCartToLocalStorage();
    renderCart();
}

// פונקציה לשמירת הסל ב-localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// מאתחל את דף ה-HTML לאחר טעינה
document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products-container');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const img = document.createElement('img');
        img.src = product.imgSrc;
        img.alt = product.name;
        img.width = 50;
        img.height = 50;

        const title = document.createElement('h3');
        title.textContent = `${product.name}`;

        const price = document.createElement('p');
        price.classList.add('price');
        price.innerHTML = `${product.price} ₪ <span class="old-price">${product.oldPrice} ₪</span>`;

        const detailsButton = document.createElement('button');
        detailsButton.classList.add('details-button');
        detailsButton.textContent = 'פרטי השעון';
        detailsButton.addEventListener('click', () => {
            localStorage.setItem('selectedProduct', JSON.stringify(product));
            window.location.href = product.detailsPage;
        });

        const cartButton = document.createElement('button');
        cartButton.classList.add('cart-button');
        cartButton.textContent = 'הוסף לסל';
        cartButton.addEventListener('click', () => {
            addToCart(product);
        });

        productCard.appendChild(img);
        productCard.style.display = 'inline-block';
        productCard.appendChild(title);
        productCard.appendChild(price);
        productCard.appendChild(detailsButton);
        productCard.appendChild(cartButton);

        productsContainer.appendChild(productCard);
    });
});

// פונקציה נוספת להוספת מוצר לסל תוך שימוש ב-sessionStorage
function addToCart(product) {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];

    const existingProduct = cart.find(item => item.name === product.name);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    sessionStorage.setItem('cart', JSON.stringify(cart));
}

// אתחול הדף לאחר טעינה וסידור המוצרים
document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-container');
    const sortBySelect = document.getElementById('sort-by');

    sortBySelect.addEventListener('change', () => {
        const sortBy = sortBySelect.value;
        let sortedProducts = [];

        if (sortBy === 'price') {
            sortedProducts = products.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'name') {
            sortedProducts = products.sort((a, b) => a.name.localeCompare(b.name));
        }

        displayProducts(sortedProducts);
    });

    const displayProducts = (products) => {
        productContainer.innerHTML = '';
        products.forEach(product => {
            const productCar = document.createElement('div');
            productCar.classList.add('product-card');

            const img = document.createElement('img');
            img.src = product.imgSrc;
            img.alt = product.name;
            img.width = 50;
            img.height = 50;

            const title = document.createElement('h3');
            title.textContent = `${product.name}`;

            const price = document.createElement('p');
            price.classList.add('price');
            price.innerHTML = `${product.price} ₪ <span class="old-price">${product.oldPrice} ₪</span>`;

            const detailsButton = document.createElement('button');
            detailsButton.classList.add('details-button');
            detailsButton.textContent = 'פרטי השעון';
            detailsButton.addEventListener('click', () => {
                localStorage.setItem('selectedProduct', JSON.stringify(product));
                window.location.href = product.detailsPage;
            });

            const cartButton = document.createElement('button');
            cartButton.classList.add('cart-button');
            cartButton.textContent = 'הוסף לסל';
            cartButton.addEventListener('click', () => {
                addToCart(product);
            });

            productCar.appendChild(img);
            productCar.style.display = 'inline-block';
            productCar.appendChild(title);
            productCar.appendChild(price);
            productCar.appendChild(detailsButton);
            productCar.appendChild(cartButton);

            productContainer.appendChild(productCar);
        });
    };

    const viewDetails = (productId) => {
        const product = products.find(p => p.id === productId);
        localStorage.setItem('selectedProduct', JSON.stringify(product));
        window.location.href = './product-details.html';
    };

    displayProducts(products);
});