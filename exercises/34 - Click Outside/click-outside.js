const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');
const modalOuter = document.querySelector(".modal-outer");


function handleCardButtonClick(event) {
    const button = event.currentTarget;

    const card = button.closest('.card'); // closest() is kinda like querySelectorAll but the opposite
    const imgSrc = card.querySelector('img').src;
    const description = card.dataset.description;
    const name = card.querySelector('h2').textContent;
    modalInner.innerHTML = `
        <img width="600" height="600" src="${imgSrc.replace('200', '600', )}" alt="${name}"/>
        <p>${description}</p>
    `;
    // show the modal
     modalOuter.classList.add('open');
};

cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick));

function closeModal() {
    modalOuter.classList.remove("open");
}

modalOuter.addEventListener('click', function(event) {
    const isOutside = !event.target.closest('.modal-inner');
    if (isOutside) {
        closeModal();
    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
})