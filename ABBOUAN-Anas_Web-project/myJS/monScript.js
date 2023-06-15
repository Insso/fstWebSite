window.addEventListener('DOMContentLoaded', (event) => {
    // Récupère la largeur de la sidebar
    const sidebarWidth = document.querySelector('.sidebarContainer').offsetWidth;
  
    // Sélectionne le logo
    const logo = document.getElementById('monLogo');
  
    // Définit la largeur du logo en fonction de la largeur de la sidebar
    logo.style.width = `${sidebarWidth}px`;
  });