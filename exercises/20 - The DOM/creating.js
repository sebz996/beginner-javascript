// const myParagraph = document.createElement('p');
// myParagraph.textContent = 'I am a paragraph';
// myParagraph.classList.add('special');
// console.log(myParagraph);

// const myImage = document.createElement('img');
// myImage.src = `https://picsum.photos/500`;
// myImage.alt = 'nice photo';
// console.log(myImage);

// const myDiv = document.createElement('div');
// myDiv.classList.add('wrapper');
// console.log(myDiv);

// const myHeader = document.createElement('h1');
// myHeader.textContent = 'This is the header I made';
// myHeader.classList.add('page-title');
// console.log(myHeader);

// document.body.appendChild(myHeader);
// myDiv.appendChild(myHeader);

const myList = document.createElement('ul');
console.log(myList);

const listItem = document.createElement('li');
listItem.textContent = 'list item 1';
myList.appendChild(listItem);

document.body.insertAdjacentElement('afterbegin', myList)
