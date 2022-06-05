const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
    console.log('it got clicked');
}

// get sth, listen for sth, do sth
butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', handleClick);

butts.removeEventListener('click', handleClick);

// listen for events on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function buyItem() {
    console.log('buying item');
}

buyButtons.forEach(function(buyButton) {
    console.log('Binding the buy botton');
})
