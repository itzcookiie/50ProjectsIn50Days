const xbox = document.querySelector('.xbox'),
playstation = document.querySelector('.playstation');

[xbox, playstation].forEach(gameConsole => {
    gameConsole.addEventListener('mouseenter', handleHover);
    gameConsole.addEventListener('mouseleave', handleOnLeave);
})

function handleHover(e) {
    e.target.classList.add('show-console');
}

function handleOnLeave(e) {
    e.target.classList.remove('show-console');
}