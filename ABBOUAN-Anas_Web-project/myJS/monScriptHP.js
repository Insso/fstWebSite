const homeLink = document.getElementById("homeLink");

// Ajoutez un écouteur d'événement pour gérer le clic sur le lien
homeLink.addEventListener("click", function() {
  // Effectuez la redirection vers la page /myHTML/homePage.html
  window.location.href = "/myHTML/homePage.html";});

  // redirection of element to quickAdd.html 
  const quickAddLink = document.getElementById("quickAddLink");
  quickAddLink.addEventListener("click", function() {
    window.location.href = "/myHTML/quickAdd.html";});

  // redirection of element to quickAdd.html 
  const logOutLink = document.getElementById("textLogOut");
  logOutLink.addEventListener("click", function() {
    window.location.href = "/myHTML/index2.html";});