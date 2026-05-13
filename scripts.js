const btnWelcome = document.querySelector('.btn--welcome');
const newText = document.querySelector('.new-text')
let hasClicked = false;

const welcome = () => {
    if(!hasClicked) {
        alert('Welcome to the FullStack Bootcamp');
        newText.textContent= "I've made that change without AI";
    }
    else {
        alert('Rolling back');
        newText.textContent= "";
    }
    hasClicked = !hasClicked;
}

btnWelcome.addEventListener('click', welcome);