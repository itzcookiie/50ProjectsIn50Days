const btns = document.querySelectorAll('.btn');

[...btns].map(btn => btn.addEventListener('click', e => {
        e.target.parentNode.classList.toggle('active');
    })
)