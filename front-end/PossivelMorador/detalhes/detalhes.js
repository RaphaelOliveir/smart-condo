const id = params.get('id');
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    if (card.id !== id) {
        card.style.display = 'none';
    }
});