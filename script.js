const input = document.querySelector('input');
const games = document.querySelectorAll('#games img');
function setNationalGeographicFavicon() {
  var linkElement = document.querySelector("link[rel*='icon']") || document.createElement('link');
  linkElement.type = 'image/x-icon';
  linkElement.rel = 'shortcut icon';
  linkElement.href = 'https://www.nationalgeographic.com/favicon.ico';

  var head = document.getElementsByTagName('head')[0];
  head.appendChild(linkElement);

  document.title = 'National Geographic';
}

input.addEventListener('input', () => {
  const searchTerm = input.value.toLowerCase();
  games.forEach(game => {
    if (game.alt.toLowerCase().includes(searchTerm)) {
      game.style.display = 'block';
    } else {
      game.style.display = 'none';
    }
  });
});

document.addEventListener('keyup', (event) => {
  if (event.keyCode === 119) {
    window.open("https://www.google.com");
    setNationalGeographicFavicon();
  }
});

try {
  console.log("Website started")
}
catch(err) {
  console.log("Website started with an error.")
}

document.addEventListener("DOMContentLoaded", function() {
  const tabForm = document.getElementById('tabForm');
  const faviconInput = document.getElementById('favicon');
  const titleInput = document.getElementById('title');

  tabForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const faviconUrl = faviconInput.value;
      const pageTitle = titleInput.value;

      document.querySelector('link[rel="icon"]').href = faviconUrl;
      document.title = pageTitle;

      localStorage.setItem('customFavicon', faviconUrl);
      localStorage.setItem('customTitle', pageTitle);
  });

  const storedFavicon = localStorage.getItem('customFavicon');
  const storedTitle = localStorage.getItem('customTitle');

  if (storedFavicon && storedTitle) {
      document.querySelector('link[rel="icon"]').href = storedFavicon;
      document.title = storedTitle;
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const storedFavicon = localStorage.getItem('customFavicon');
  const storedTitle = localStorage.getItem('customTitle');

  if (storedFavicon && storedTitle) {
      document.querySelector('link[rel="icon"]').href = storedFavicon;
      document.title = storedTitle;
  }
});
