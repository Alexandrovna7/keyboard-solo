const wordHolder = document.querySelector(".word");
const timer = document.querySelector("#timer");

let currentWord = getRandomWord();
renderWord(currentWord);

let idx = 0;
document.addEventListener("keypress", (event) => {
if (event.key === currentWord[idx]) {
symbolSuccess();
} else {
symbolFail();
}
});

function getRandomWord() {
const possibleWords = [
"apple",
"candy",
"language",
"family",
"popcorn",
"unicorn",
"smartphone",
"weather",
];

const idx = Math.floor(Math.random() * possibleWords.length);
return possibleWords[idx];
}

function renderWord(word) {
wordHolder.innerHTML = word
.split("")
.map((char) => `<span>${char}</span>`)
.join("");
}

function symbolSuccess() {
wordHolder.children[idx].className = "c";
idx++;
}

function symbolFail() {
wordHolder.children[idx].className = "w";
}
    
