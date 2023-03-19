if (!localStorage.getItem('authenticated')) {
    window.location.href = 'index.html';
  } else {
    localStorage.removeItem('authenticated');
  }