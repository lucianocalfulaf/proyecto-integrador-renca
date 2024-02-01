document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.cards_item');

    searchInput.addEventListener('input', function(event) {
        const searchQuery = event.target.value.toLowerCase();
        
        cards.forEach(function(card) {
            const title = card.querySelector('.card_title').textContent.toLowerCase();
            if (title.includes(searchQuery)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
