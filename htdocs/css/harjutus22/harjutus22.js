const themeButton = document.getElementById('theme');
const body = document.body;

// kontrollime, kas midagi salvestatud
const savedTheme = localStorage.getItem('theme');

//kui teema salvestatud, määrame algseks
if (savedTheme) {
  body.classList.add(savedTheme);
  themeButton.textContent = savedTheme === 'dark' ? 'Light Theme' : 'Dark Theme';
}

themeButton.addEventListener('click', () => {
  // teema muutus ja värskenud
  body.classList.toggle('dark');
  themeButton.textContent = body.classList.contains('dark') ? 'Light Theme' : 'Dark Theme';

  // salvesta local storagesse
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});