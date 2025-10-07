document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const cards = document.querySelectorAll('.card');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalHistory = document.getElementById('modal-history');

    function openModal(card) {
        modalImg.src = card.dataset.image;
        modalImg.alt = card.dataset.title;
        modalTitle.textContent = card.dataset.title;
        modalDescription.textContent = card.dataset.description;
        modalHistory.textContent = card.dataset.history;
        modal.style.display = 'flex'; 
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    cards.forEach(card => {
        card.addEventListener('click', () => openModal(card));
    });

    closeButton.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target === modal) closeModal();
    });
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'flex') closeModal();
    });

    const searchInput = document.getElementById('search-input');
    const filterRegion = document.getElementById('filter-region');

    function populateFilterOptions() {
        const regions = new Set();
        cards.forEach(card => {
            const region = card.querySelector('.card-title p').textContent;
            regions.add(region);
        });

        regions.forEach(region => {
            const option = document.createElement('option');
            option.value = region;
            option.textContent = region;
            filterRegion.appendChild(option);
        });
    }

    function filterAndSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedRegion = filterRegion.value;

        cards.forEach(card => {
            const title = card.dataset.title.toLowerCase();
            const region = card.querySelector('.card-title p').textContent;

            const matchesSearch = title.includes(searchTerm);
            const matchesFilter = (selectedRegion === 'semua') || (region === selectedRegion);

            if (matchesSearch && matchesFilter) {
                card.style.display = 'block'; 
            } else {
                card.style.display = 'none'; 
            }
        });
    }

    populateFilterOptions();

    searchInput.addEventListener('input', filterAndSearch);
    filterRegion.addEventListener('change', filterAndSearch);
});