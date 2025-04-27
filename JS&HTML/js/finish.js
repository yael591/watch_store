document.addEventListener('DOMContentLoaded', function() {
    // קבלת השם מה-sessionStorage
    const name = sessionStorage.getItem('name');
    // מציאת האלמנט שבו יוצג הברכה
    const greeting = document.getElementById('greeting');
    
    // אם השם קיים, מציג את הברכה עם השם
    if (name) {
        greeting.innerText = `שלום ${name}!`;
    } else {
        // אם השם לא קיים, מציג ברכה כללית
        greeting.innerText = "שלום!";
    }


    
});
