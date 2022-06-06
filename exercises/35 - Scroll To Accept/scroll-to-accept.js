const terms = document.querySelector('.terms-and-conditions');
const terms = document.querySelector('.watch');
const button = document.querySelector('.accept');

function onCallback(payload) {
    if(payload[0].intersectionRatio === 1) {
        button.disabled = false;
    // stop observing button
    ob.unobserve(terms.lastElementChild);
    }
}

const ob = new IntersectionObserver(onCallback, {
    root: terms,
    threshold: 1,
});

ob.observer(terms.lastElementChild);
