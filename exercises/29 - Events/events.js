// const butts = document.querySelector('.butts');
// const coolButton = document.querySelector('.cool');

// function handleClick() {
//     console.log('it got clicked');
// }

// // get sth, listen for sth, do sth
// butts.addEventListener('click', handleClick);
// coolButton.addEventListener('click', handleClick);

// butts.removeEventListener('click', handleClick);

// listen for events on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
    console.log("You're buying it!");
    console.log(event.target.dataset.price);
}

buyButtons.forEach(function(buyButton){
    buyButton.addEventListener('click', handleBuyButtonClick);
})
