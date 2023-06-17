window.addEventListener('DOMContentLoaded', (event) => {
    // Récupère la largeur de la sidebar
    const sidebarWidth = document.querySelector('.sidebarContainer').offsetWidth;
  
    // Sélectionne le logo
    const logo = document.getElementById('monLogo');
  
    // Définit la largeur du logo en fonction de la largeur de la sidebar
    logo.style.width = `${sidebarWidth}px`;
  });

  // Supposons que tu aies un objet manga avec les informations du nouveau manga
var manga = {
  id: 1,
  image: "image.png",
  title: "Mang",
  status: "In Progress",
  chapter: 10,
  progress: 5,
  link: "https://example.com/manga"
};


// Sélectionne le tbody de la table
var mangaListBody = document.getElementById("mangaListBody");

// Crée une nouvelle ligne pour le manga
var newRow = document.createElement("tr");

// Ajoute les colonnes correspondantes aux informations du manga
newRow.innerHTML = `
  <td>${manga.id}</td>
  <td><img src="${manga.image}" alt="${manga.title}" /></td>
  <td>${manga.title}</td>
  <td>${manga.status}</td>
  <td>${manga.chapter}</td>
  <td>${manga.progress}</td>
  <td><a href="${manga.link}" target="_blank">Read</a></td>
`;

// Ajoute la nouvelle ligne à la liste des mangas
mangaListBody.appendChild(newRow);
