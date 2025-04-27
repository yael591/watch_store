// כאשר הדף נטען, תופס את פרטי המוצר מה-localStorage ומציגם
document.addEventListener('DOMContentLoaded', () => {
    // קבלת פרטי המוצר מה-localStorage
    const product = JSON.parse(localStorage.getItem('selectedProduct'));
    
    // אם פרטי המוצר קיימים, מציגם בדף
    if (product) {
        document.getElementById('product-image').src = product.imgSrc; // מציב את התמונה של המוצר
        document.getElementById('product-name').innerText = product.name; // מציב את שם המוצר
        document.getElementById('product-price').innerText = `${product.price} ש"ח`; // מציב את מחיר המוצר
        document.getElementById('product-description').innerText = product.description; // מציב את תיאור המוצר
    }
});
