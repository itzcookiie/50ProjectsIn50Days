const boards = document.querySelectorAll('.board');

[...boards].forEach(board => {
    board.addEventListener('click', e => {
        clearAudio();
        board.querySelector('audio').play();
    })
})

function clearAudio() {
    [...boards].forEach(board => {
        board.querySelector('audio').load();
    })
}