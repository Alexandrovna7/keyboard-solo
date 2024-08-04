const words = ['orange', 'pear', 'lime', 'plum', 'blueberry'];
const word = document.querySelector('.word');

function getRandomValue(min, max) {
    return min + Math.floor(Math.random() * (max - min))
    }

const getWord = () => {
    const randomValue = getRandomValue(0, 5);
    word.textContent = words[randomValue];
    }

    getWord();

word.addEventListener('keydown', (event) => {
    if(event.key !== getWord) {
        getWord.classList.add('.w');
    } else {
        getWord.classList.add('.c');
    }
})



const correctOne = document.querySelector('.correct-count');
const wrongOne = document.querySelector('.wrong-count');
const mistakes = document.querySelector('.word-mistakes');

    

