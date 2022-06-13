function Gallery(gallery) {
    if(!gallery) {
        throw new Error('No Gallery Found');
    }
    const images = Array.from(gallery.querySelectorAll('img'));
    const modal = document.querySelector('.modal');
    const prevButton = modal.querySelector('.prev');
    const nextButton = modal.querySelector('.next');
    let currentImage;

    function openModal() {
        console.info('Opening Modal...');
        if(modal.matches('.open')) {
            console.info('Modal already open');
            return;
        }
        modal.classList.add('open');

        window.addEventListener('keyup', handleKeyUp);
        nextButton.addEventListener('click', showNextImage);
    }

    function closeModal() {
        modal.classList.remove('open');
        window.remove.eventListener('keyup', handleKeyUp);
        nextButton.remove.eventListener('click', showNextImage);
    }

    function handleClickOutside(e) {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    }

    function handleKeyUp(event) {
        if (event.key === 'Escape') closeModal();
    }

    function showNextImage() {
        showImage(currentImage.nextElementSibling);
    }

    function showImage(el) {
        if(!el) {
            console.info('no image to show');
            return;
        }
        console.log(el);
        modal.querySelector('img').src = el.src;
        modal.querySelector('h2').textContent = el.title;
        modal.querySelector('figure p').textContent = el.dataset.description;
        currentImage = el;
        openModal();
    }

    images.forEach(image => 
        image.addEventListener('click', (e) => showImage(e.currentTarget)));
        modal.addEventListener('click', handleClickOutside);
     
}

const gallery1 = Gallery(document.querySelector('.gallery1'));
const gallery2 = Gallery(document.querySelector('.gallery2'));
