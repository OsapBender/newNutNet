const btnReviews = document.querySelectorAll('.worker__button'),
    modalClose = document.querySelector('.modal__close'),
    modalActive = document.querySelector('.modal--hidden'),
    modalTitle = document.querySelector('.modal__title'),
    modalText = document.querySelector('.modal__text');

// заголовок модального окна
const titleWorker = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
];

// текст модального окна
const textWorker = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
];


btnReviews.forEach(function (element) {
    element.addEventListener('click', function () {
        for (let i = 0; i <= btnReviews.length - 1; i++) {
            if (element === btnReviews[i]) {
                modalTitle.textContent = titleWorker[i];
                modalText.textContent = textWorker[i];
            }
        }
        modalActive.classList.add('modal--active');
    });
});

modalActive.addEventListener('click', function () {
    modalActive.classList.remove('modal--active');
});
modalClose.addEventListener('click', function () {
    modalActive.classList.remove('modal--active');
});
window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
        modalActive.classList.remove('modal--active');
    }
});
