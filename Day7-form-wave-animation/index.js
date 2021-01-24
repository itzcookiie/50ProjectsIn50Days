const container = document.querySelector('.container'),
email = document.getElementById('email'),
password = document.getElementById('password');

email.addEventListener('click', activate)

email.addEventListener('blur', deactivate)

password.addEventListener('click', activate)

password.addEventListener('blur', deactivate)

function activate(e) {
    container.classList.add(`${e.target.id}-active`)
}

function deactivate(e) {
    container.classList.remove(`${e.target.id}-active`)
}