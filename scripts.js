const greetingButton = document.querySelector('#get-in-touch');

const userName = document.querySelector('.user-name');
const userTitle = document.querySelector('.user-title');
const getInTouchSpan = document.querySelector('#get-in-touch__span');

const nameContent = userName.textContent;
const titleContent = userTitle.textContent;
const getInTouchSpanContent = getInTouchSpan.textContent;
const greetingButtonClassList = [...greetingButton.classList];

let hasClicked = true;

const greeting = () => {
  if (hasClicked) {
    userName.textContent = 'This is an...';
    userTitle.textContent = 'AI free develop';
    getInTouchSpan.textContent = 'Already contacted';
    greetingButton.classList.remove(...greetingButtonClassList);
    greetingButton.classList.add('btnGhost');
  } else {
    userName.textContent = nameContent;
    userTitle.textContent = titleContent;
    getInTouchSpan.textContent = getInTouchSpanContent;
    greetingButton.classList.remove('btnGhost');
    greetingButton.classList.add(...greetingButtonClassList);
  }
  hasClicked = !hasClicked;
};

greetingButton.addEventListener('click', greeting);
