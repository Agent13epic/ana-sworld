document.addEventListener('DOMContentLoaded', function() {
  const correctUsername = 'Timmie';
  const correctPassword = 'mybaby2008';
  const loginBtn = document.getElementById('login-btn');
  
  loginBtn.addEventListener('click', function() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const error = document.getElementById('error');

    if (user === correctUsername && pass === correctPassword) {
      window.location.href = 'home.html';
    } else {
      error.style.display = 'block';
      setTimeout(() => {
        error.style.display = 'none';
      }, 2000);
    }
  });
});
