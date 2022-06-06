const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handleCardButtonClick(event) {
const button = event.currentTarget;
const card = button.closest('.card');  
// grab image source
const imgSrc = card.querySelector('img').src;
const desc = card.dataset.description;
const name = card.querySelector('h2').textContent;
// populate modal with new info
modalInner.innerHTML = `
<img src="${imgSrc.replace('200', '600')}" alt="${name}"/>
<p>${desc}</p>
`;
// show modal
modalOuter.classList.add('open');
}

cardButtons.forEach(button => button.addEventListener('click', handleCardButtonClick)
);

function closeModal() {
    modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function (event) {
    const isOutside = !event.target.closest('.modal-inner');
    if (isOutside) {
        closeModal()
    }
});

window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        closeModal();
    }
})
