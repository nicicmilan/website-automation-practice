function authenticate(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'admin' && password === 'admin') {
      window.location.href = 'content.html';
    } else {
      alert('Incorrect username or password');
    }
  }