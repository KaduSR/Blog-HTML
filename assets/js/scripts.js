document.addEventListener('DOMContentLoaded', () => {

    const searchInput = document.getElementById('search-input');

    const cards = document.querySelectorAll('.card');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const title = card.querySelector('h2').textContent.toLowerCase();
            const content = card.querySelector('p').textContent.toLowerCase();

            if (title.includes(searchTerm) || content.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    const favoriteIcons = document.querySelectorAll('.favorite-icon');
    favoriteIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            icon.classList.toggle('favorited');
            
            if (icon.classList.contains('fa-heart-o')) {
                icon.classList.remove('fa-heart-o');
                icon.classList.add('fa-heart');
            } else {
                icon.classList.remove('fa-heart');
                icon.classList.add('fa-heart-o');
            }
        });
    });
});