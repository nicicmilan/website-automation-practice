if (!localStorage.getItem('authenticated')) {
  // Redirect to login page if not authenticated
  window.location.href = 'index.html';
}
function authenticate(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('authenticated', true);
      window.location.href = 'content.html';
    } else {
      alert('Incorrect username or password');
    }
  }