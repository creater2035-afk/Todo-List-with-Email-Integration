// Authentication state management
const usersKey = 'agalya_users';
const sessionKey = 'agalya_session';

function switchTab(type) {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const subtitle = document.getElementById('auth-subtitle');
    const footer = document.getElementById('toggle-footer');
    const tabs = document.querySelectorAll('.tab');

    if (type === 'login') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        loginForm.classList.add('fade-in');
        subtitle.innerText = 'Welcome back! Please login to continue.';
        footer.innerHTML = `Don't have an account? <a href="#" onclick="switchTab('signup')">Create one now</a>`;
        tabs[0].classList.add('active');
        tabs[1].classList.remove('active');
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        signupForm.classList.add('fade-in');
        subtitle.innerText = 'Start your journey with us today.';
        footer.innerHTML = `Already have an account? <a href="#" onclick="switchTab('login')">Sign in here</a>`;
        tabs[1].classList.add('active');
        tabs[0].classList.remove('active');
    }
}

function handleAuth(event, type) {
    event.preventDefault();

    if (type === 'signup') {
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        const users = JSON.parse(localStorage.getItem(usersKey) || '[]');
        if (users.some(u => u.email === email)) {
            alert('User with this email already exists!');
            return;
        }

        const newUser = { name, email, password };
        users.push(newUser);
        localStorage.setItem(usersKey, JSON.stringify(users));

        // Auto login
        login(newUser);
    } else {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const users = JSON.parse(localStorage.getItem(usersKey) || '[]');
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            login(user);
        } else {
            alert('Invalid email or password!');
        }
    }
}

function handleGoogleSignIn(response) {
    // Decode the JWT (base64)
    const payload = JSON.parse(atob(response.credential.split('.')[1]));

    const user = {
        name: payload.name,
        email: payload.email,
        picture: payload.picture,
        isGoogle: true
    };

    // Upsert user in "database"
    const users = JSON.parse(localStorage.getItem(usersKey) || '[]');
    if (!users.some(u => u.email === user.email)) {
        users.push(user);
        localStorage.setItem(usersKey, JSON.stringify(users));
    }

    login(user);
}

function login(user) {
    localStorage.setItem(sessionKey, JSON.stringify(user));
    window.location.href = 'index.html';
}

// Check if already logged in
if (localStorage.getItem(sessionKey)) {
    window.location.href = 'index.html';
}
