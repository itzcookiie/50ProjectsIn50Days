const eventKey = document.querySelector('.event-key');
const eventCode = document.querySelector('.event-code');
const welcomeMsg = document.querySelector('.welcome-msg');
const container = document.querySelector('.container');

document.addEventListener('keydown', e => {
    if(getComputedStyle(welcomeMsg).display === 'block') {
        welcomeMsg.style.display = 'none';
        container.style.display = 'flex';
    } 
    const { key, code } = e;
    eventKey.innerText = key;
    eventCode.innerText = code;
})