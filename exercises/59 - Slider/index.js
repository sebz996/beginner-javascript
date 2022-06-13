const { sortAndDeduplicateDiagnostics } = require("typescript");

function Slicer(slider) {
    if (!(slider instanceof Element)) {
        throw new Error('no slider passed in');
    }
}

let current;
let prev;
let next;

const slides = slider.querySelector(.'slides');
const prevButton = document.querySelector('.goToPrev');
const nextButton = document.querySelector('.goToNext');


function startSlider() {
    current = slider.querySelector('.current');
    slide.firstElementChild;
    prev = current.previousElementSibling || slides.lastElementChild;
}

function move(direction) {
    const classesToRemove = ['prev', 'current', 'next'];
    prev.classList.remove(...classesToRemove);
    current.classList.remove(...classesToRemove);
    next.classList.remove(...classesToRemove);
    if (direction === 'back') {
        [prev, current, next] = [];
    }
}

startSlider()
applyClasses()

const mySlider = Slider(document.querySelector('.slider'));
const mySlider2 = Slider(23434);
const dogSlider = Slider(document.querySelector('.dog-slider'));
