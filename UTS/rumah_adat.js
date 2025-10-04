const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalHistory = document.getElementById('modal-history');
const closeButton = document.querySelector('.close-button');


const cards = document.querySelectorAll('.card');


cards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.getAttribute('data-title');
        const image = card.getAttribute('data-image');
        const description = card.getAttribute('data-description');
        const history = card.getAttribute('data-history');

        modalTitle.textContent = title;
        modalImg.src = image;
        modalDescription.textContent = description;
        modalHistory.textContent = history;

        modal.style.display = 'flex';
    });
});


closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});


window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
