document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const cartTableBody = document.querySelector('#cart-table tbody');
    const totalAmountElement = document.getElementById('total-amount');

    // פונקציה לעדכון סה"כ לתשלום
    function updateTotalAmount() {
        let totalAmount = 0;
        cart.forEach(product => {
            totalAmount += product.price * product.quantity;
        });
        totalAmountElement.innerText = `סה"כ לתשלום: ${totalAmount} ש"ח`;
    }

    // פונקציה לעדכון שורות המוצרים בטבלה
    function updateCartTable() {
        cartTableBody.innerHTML = '';
        cart.forEach(product => {
            const row = document.createElement('tr');

            const imgCell = document.createElement('td');
            const img = document.createElement('img');
            img.src = product.imgSrc;
            img.style.width = '50px';
            imgCell.appendChild(img);
            row.appendChild(imgCell);

            const nameCell = document.createElement('td');
            nameCell.innerText = product.name;
            row.appendChild(nameCell);

            const priceCell = document.createElement('td');
            priceCell.innerText = `${product.price} ש"ח`;
            row.appendChild(priceCell);

            const quantityCell = document.createElement('td');
            const quantitySpan = document.createElement('span');
            quantitySpan.innerText = product.quantity;
            const increaseButton = document.createElement('button');
            increaseButton.innerText = '+';
            increaseButton.addEventListener('click', () => {
                product.quantity++;
                sessionStorage.setItem('cart', JSON.stringify(cart));
                updateCartTable();
                updateTotalAmount();
            });
            const decreaseButton = document.createElement('button');
            decreaseButton.innerText = '-';
            decreaseButton.addEventListener('click', () => {
                if (product.quantity > 1) {
                    product.quantity--;
                } else {
                    const index = cart.indexOf(product);
                    cart.splice(index, 1);
                }
                sessionStorage.setItem('cart', JSON.stringify(cart));
                updateCartTable();
                updateTotalAmount();
            });
            quantityCell.appendChild(decreaseButton);
            quantityCell.appendChild(quantitySpan);
            quantityCell.appendChild(increaseButton);
            row.appendChild(quantityCell);

            const totalCell = document.createElement('td');
            totalCell.innerText = `${product.price * product.quantity} ש"ח`;
            row.appendChild(totalCell);

            cartTableBody.appendChild(row);
        });
        updateTotalAmount();
    }

    updateCartTable();

    document.getElementById('complete-purchase').addEventListener('click', () => {
        const isLoggedIn = sessionStorage.getItem('password') !== null;
        if (!isLoggedIn) {
            alert("עליך להירשם תחילה.");
            window.location.href = './login.html';
            return;
        } else {
            alert('להתראות בקניה הבאה!');
            window.location.href = './finish.html';
            sessionStorage.removeItem('cart');
            updateCartTable();
        }
    });
});
