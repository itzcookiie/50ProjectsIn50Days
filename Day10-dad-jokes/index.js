const jokesArea = document.getElementById('jokes');
const button = document.querySelector('.button');

async function getJoke() {
    const response = await fetch('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: {
            "Accept": "application/json"
        }
    });
    const json = await response.json();
    jokesArea.innerText = json.joke;
    return json;
}

button.addEventListener('click', () => {
    getJoke();
})

getJoke();