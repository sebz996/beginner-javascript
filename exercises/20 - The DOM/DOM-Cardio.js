// Make a div
const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);

// make an unordered list
const ul = `<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>`;


// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
div.innerHTML = ul;
console.log(div);


// create an image
const img = document.createElement('img');

// set the source to an image
img.src = 'https://place-puppy.com/500x500'

// set the width to 250
img.width = 250;

// add a class of cute
img.classList.add('cute');

// add an alt of Cute Puppy
img.alt = 'cute puppy';

// Append that image to the wrapper
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
<div class="myDiv">
<p>Paragraph one</p>
<p>Paragraph two</p>
</div>
`;

const ulElement = div.querySelector('ul');
console.log(ulElement);

// put this div before the unordered list from above
ulElement.insertAdjacentElement('beforebegin', myHTML);


// add a class to the second paragraph called warning
const myDiv = div.querySelector('myDiv');
