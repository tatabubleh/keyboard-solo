const wordHolder = document.querySelector('.word');
const correctCountContainer = document.querySelector('.correct-count');
const wrongCountContainer = document.querySelector('.wrong-count');
const wordMistakesContainer = document.querySelector('.word-mistakes');
const wordSpans = wordHolder.querySelectorAll('span');

let correctCount = 0; 
let wrongCount = 0;
let wordMistakes = 0;
let currentCharIndex = 0;

const words = ['apple', 'flowers', 'javascript', 'banana', 'innovations'];
const randomWord = words[Math.floor(Math.random() * words.length)];

function renderWord(word) {
    wordHolder.innerHTML = word
    .split("")
    .map((char) => <span>${char}</span>)
    .join("");
    }
    
    renderWord(randomWord);

  document.addEventListener('keydown', (event) => {
    if (event.key === randomWord[currentCharIndex]) {
      wordSpans[currentCharIndex].className = "c";
      currentCharIndex++;
    } else {
        wordSpans[currentCharIndex].className = "w";
      currentCharIndex++;
      wrongCount++;
      wordMistakes++;
      wrongCountContainer.textContent = wrongCount;
      wordMistakesContainer.textContent = wordMistakes;
      
    }
  
    if (currentCharIndex === randomWord.length) {
        if (correctCount === 5) {
            alert('Вы успешно прошли игру!');
        } else if (wrongCount === 5) {
            alert('Вы проиграли!');
        }
        
        currentCharIndex = 0;
        wordMistakes = 0;
        wordMistakesContainer.textContent = wordMistakes;
    }
  });