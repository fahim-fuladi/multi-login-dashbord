const form = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    usernameInput.classList.remove('is-invalid');
    passwordInput.classList.remove('is-invalid');
    passwordError.style.display = 'none';
    passwordError.textContent = '';

    let hasError = false;

    if (usernameInput.value.trim() === '') {
        usernameInput.classList.add('is-invalid');
        hasError = true;
    }

    if (passwordInput.value.trim() === '') {
        passwordInput.classList.add('is-invalid');
        hasError = true;
    }

    if (passwordInput.value.length < 4) {
        passwordError.textContent = 'Password must be at least 4 characters';
        passwordError.style.display = 'block';
        passwordInput.classList.add('is-invalid');
        hasError = true;
    }

    if (!hasError) {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === 'admin' && password === '1234') {
            window.location.href = './dashbord/admin/dashbord-admin.html';
        } else if (username === 'user' && password === '1234') {
            window.location.href = './dashbord/user/dashbord-user.html';
        } else {
            alert('The username or password is incorrect!');
        }
    }
});
