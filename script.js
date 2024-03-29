const word = document.querySelector('.word');
const correctCountSpan = document.querySelector('.correct-count');
const wrongCountSpan = document.querySelector('.wrong-count');
const wordMistakesSpan = document.querySelector('.word-mistakes');
const wordSpans = word.querySelectorAll('span');

let correctCount = 0; 
let wrongCount = 0;
let wordMistakes = 0;
let currentCharIndex = 0;

const words = ['apple', 'flowers', 'javascript', 'innovations'];
const randomWord = words[Math.floor(Math.random() * words.length)];

wordSpans.forEach((span, index) => {
    span.textContent = randomWord[index];
  });

  document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === randomWord[currentCharIndex]) {
      wordSpans[currentCharIndex].style.color = 'green';
      currentCharIndex++;
      correctCount++;
      correctCountSpan.textContent = correctCount;
    } else {
        wordSpans[currentCharIndex].style.color = 'red';
    currentCharIndex++;
      wrongCount++;
      wordMistakes++;
      wrongCountSpan.textContent = wrongCount;
      wordMistakesSpan.textContent = wordMistakes;
      
    }
  
    if (currentCharIndex === randomWord.length) {

          wordSpans.forEach((span) => {
            span.style.color = 'green';
          });
          currentCharIndex = 0;
          wordMistakes = 0;
          wordMistakesSpan.textContent = wordMistakes;
        }
  });