const wordHolder = document.querySelector('.word');
const correctCountContainer = document.querySelector('.correct-count');
const wrongCountContainer = document.querySelector('.wrong-count');
const wordMistakesContainer = document.querySelector('.word-mistakes');
//const wordSpans = wordHolder.querySelectorAll('span');

let correctCount = 0; 
let wrongCount = 0;
let wordMistakes = 0;
let currentCharIndex = 0;

let randomWord = getRandomWord();


function getRandomWord() {
  const possibleWords  = ['apple', 'flowers', 'javascript', 'banana', 'innovations'];
  const idx = Math.floor(Math.random() * possibleWords.length);
  return possibleWords[idx];
  }

function renderWord(word) {
    wordHolder.innerHTML = word
    .split("")
    .map((char) => { 
      console.log(char);
    return `<span>${char}</span>`
    } )
    .join("");
    }
    
    renderWord(randomWord);

    currentCharIndex = 0;

  document.addEventListener('keydown', (event) => {
    if (event.key === randomWord[currentCharIndex]) {
     wordHolder.children[currentCharIndex].className = "c";
      currentCharIndex++;
    } else {
      wordHolder.children[currentCharIndex].className = "w";
      //currentCharIndex++;
      wrongCount++;
      wordMistakes++;
      wrongCountContainer.textContent = wrongCount;
      wordMistakesContainer.textContent = wordMistakes;
      
    }
  
    if (currentCharIndex === randomWord.length) {
       // if (correctCount === 5) {
         //   alert('Вы успешно прошли игру!');
       // } else if (wrongCount === 5) {
       //     alert('Вы проиграли!');
        //}
        correctCountContainer.textContent = ++correctCountContainer.textContent;
setTimeout(nextWord, 0);
}
});
        
       // currentCharIndex = 0;
        //wordMistakes = 0;
        //wordMistakesContainer.textContent = wordMistakes;
    //}
  //});

  function nextWord() {
    checkWordsCount();
    randomWord = getRandomWord();
    renderWord(randomWord);
    currentCharIndex = 0;
    wordMistakesContainer.textContent = 0;
    }
    
    function checkWordsCount() {
    if (wrongCountContainer.textContent >= 5) {
    alert(`Вы проиграли :( Ваше время ${timer.textContent}`);
    correctCountContainer.textContent = 0;
    wrongCountContainer.textContent = 0;
    }
    
    if (correctCountContainer.textContent >= 5) {
    alert(`Победа! Ваше время ${timer.textContent}`);
    }
    }