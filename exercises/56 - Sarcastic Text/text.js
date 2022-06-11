const textArea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const filterInputs = document.querySelectorAll('[name="filter"]');

const filters = {
    sarcastic(letter, index) {
        
        if(index % 2) {
            return letter.toUpperCase();
        }
        return letter.toLowerCase();
    },
    funky() {},
    unable() {},
}

function transformText(text) {
    const filter = document.querySelector('[name="filter"]:checked').value;
    const mod = Array.from(text).map(filters.sarcastic);
    console.log(mod);
    result.textContent = mod.join('');
}

textArea.addEventListener('input', e => transformText(e.target.value));
