const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const giftMessage = document.getElementById('giftMessage');
const surpriseButton = document.getElementById('surpriseButton');
const pathSelection = document.getElementById('pathSelection');
const lovePath = document.getElementById('lovePath');
const riddlePath = document.getElementById('riddlePath');

// Перемешивание кнопки "Нет"
noButton.addEventListener('click', () => {
    const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';

    // Добавляем анимацию "шатания" для кнопки
    noButton.classList.add('shake');
    setTimeout(() => noButton.classList.remove('shake'), 500);
});

// При нажатии на "Да" показать подарок
yesButton.addEventListener('click', () => {
    giftMessage.style.display = 'block';
    setTimeout(() => giftMessage.style.opacity = '1', 50); // Плавное появление
});

// При нажатии на "Угадай, что дальше!" показать выбор пути
surpriseButton.addEventListener('click', () => {
    giftMessage.style.display = 'none';  // Скрываем подарок
    pathSelection.style.display = 'block';  // Показываем выбор пути
});

// Путь "Любви"
lovePath.addEventListener('click', () => {
    alert("Ты выбрал Путь Любви! Счастье и радость всегда с тобой! ❤️");
    endGame();
});

// Путь "Загадок"
riddlePath.addEventListener('click', () => {
    const answer = prompt("Ответь на загадку: Что всегда впереди, но его никогда не увидишь?");
    if (answer.toLowerCase() === "будущее") {
        alert("Правильно! Ты открыл секрет! 🌟");
        alert("Теперь ты на Путе Любви!");
        endGame();
    } else {
        alert("Попробуй ещё раз!");
    }
});

// Завершение игры
function endGame() {
    const choice = confirm("Поздравляю! Ты завершил игру. Хочешь начать заново?");
    if (choice) {
        window.location.reload();
    } else {
        alert("Спасибо за игру! До скорого!");
    }
}
