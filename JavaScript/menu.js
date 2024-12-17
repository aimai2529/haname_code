const inside = document.querySelector('.inside'),
    btn = document.querySelectorAll('.fix__menu');

for (let i = 0; i < 2; i++) {
    btn[i].addEventListener('click', () => {
        inside.classList.toggle('open');
    })
}