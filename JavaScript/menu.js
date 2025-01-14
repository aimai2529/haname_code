const inside = document.querySelector('.inside'),
    btn = document.querySelectorAll('.fix__menu');

for (let i = 0; i < 2; i++) {
    btn[i].addEventListener('click', () => {
        inside.classList.toggle('open');
    })
}

if (this.location.pathname === '/index.html') {
    window.addEventListener('scroll', () => {
        if (window.scrollY < window.innerHeight && inside.classList.contains('open')) {
            inside.classList.remove('open');
        }
    })
}

window.addEventListener('resize', () => {
    inside.classList.add('resize');
    setTimeout(() => {
        inside.classList.remove('resize');
    }, 300)
})
