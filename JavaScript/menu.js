const inside = document.querySelector('.inside'),
    btn = document.querySelectorAll('.fix__menu');

for (let i = 0; i < 2; i++) {
    btn[i].addEventListener('click', () => {
        inside.classList.toggle('open');
    })
}

window.addEventListener('resize', () => {
    inside.classList.add('resize');
    setTimeout(() => {
        inside.classList.remove('resize');
    }, 300)
})
