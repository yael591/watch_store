document.addEventListener('DOMContentLoaded', () => {
    // מציאת טופס ההתחברות ואלמנט הצגת ההודעות
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    // האזנה לאירוע שליחת הטופס
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // קבלת הערכים מהטופס
        const username = loginForm.username.value;
        const password = loginForm.password.value;

        // קבלת פרטי המשתמש ששמרנו ב-Session Storage
        const savedUsername = sessionStorage.getItem('name'); // שימוש בשם 'name' כפי שנשמר קודם
        const savedPassword = sessionStorage.getItem('password');

        // בדיקת אם הפרטים תואמים
        if (username === savedUsername && password === savedPassword) {
            // התחברות הצליחה, מעבר לדף הבית
            alert("התחברת בהצלחה!")
            window.location.href = './progect.html';
        } else {
            // התחברות נכשלה, הצגת הודעה מתאימה
            messageDiv.innerText = 'שם המשתמש או הסיסמא אינם נכונים. אנא נסה שוב.';
            messageDiv.style.color = 'red';
        }
    });
});
