const Body = document.querySelector('body');

const clickMeButton = document.querySelector('.js-click-me');
const question = document.querySelector('.js-question');

const englishButton = document.querySelector('.js-english');
const spanishButton = document.querySelector('.js-spanish');

const englishSound = document.querySelector('.js-english-sound');
const spanishSound = document.querySelector('.js-spanish-sound');

const gayMusic = document.querySelector('.music-gay');

clickMeButton.addEventListener('click', ()=> {
        document.querySelector('.js-english-spanish-container')
                .classList.remove('isVisible');
        question.play();
        document.querySelector('.click-container').remove();
});

englishButton.addEventListener('click', ()=> {
    englishSound.play();
    playMusic();
});

spanishButton.addEventListener('click', ()=> {
    spanishSound.play();
    playMusic();
});

function playMusic() {
    setInterval(()=>{
        document.querySelector('.js-english-spanish-container')
                .remove();
        Body.classList.add('dog-meme');
        gayMusic.loop = true;
        gayMusic.play();
    }, 2000);
}


