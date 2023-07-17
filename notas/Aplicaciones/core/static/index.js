function temaOscuro() {
  const body = document.querySelector('body');
  const moonIcon = document.querySelector('#dl-icon');

  if (body.getAttribute('data-bs-theme') === 'light') {
    body.setAttribute('data-bs-theme', 'dark');
    moonIcon.classList.remove('bi-moon-fill');
    moonIcon.classList.add('bi-sun-fill');
  } else {
    body.setAttribute('data-bs-theme', 'light');
    moonIcon.classList.remove('bi-sun-fill');
    moonIcon.classList.add('bi-moon-fill');
  }
}

