document.getElementById('theme-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');
  
  if (document.body.classList.contains('dark-theme')) {
    this.textContent = 'Light Mode';
  } else {
    this.textContent = 'Dark Mode';
  }
});
