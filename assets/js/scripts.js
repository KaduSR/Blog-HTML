document.addEventListener("DOMContentLoaded", () => {
  // --- FUNCIONALIDADE DE BUSCA (sem alterações) ---
  const searchForm = document.querySelector(".search-container form");
  const searchInput = document.getElementById("search-input");
  const cards = document.querySelectorAll(".card");

  const filterCards = () => {
    const searchTerm = searchInput.value.toLowerCase();
    cards.forEach((card) => {
      const title = card.querySelector("h2").textContent.toLowerCase();
      const content = card.querySelector("p").textContent.toLowerCase();
      if (title.includes(searchTerm) || content.includes(searchTerm)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  };

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
  });
  searchInput.addEventListener("keyup", filterCards);

  // --- FUNCIONALIDADE DE FAVORITAR (AJUSTADA PARA O BOTÃO) ---

  // Seleciona todos os BOTÕES de favoritar
  const favoriteButtons = document.querySelectorAll(".favorite-button");

  favoriteButtons.forEach((button) => {
    // Adiciona o evento de clique ao BOTÃO
    button.addEventListener("click", () => {
      // Encontra o ícone DENTRO do botão que foi clicado
      const icon = button.querySelector(".favorite-icon");

      // A lógica para trocar as classes permanece a mesma, aplicada ao ícone
      icon.classList.toggle("fa-heart-o");
      icon.classList.toggle("fa-heart");
      icon.classList.toggle("favorited");
    });
  });
});
