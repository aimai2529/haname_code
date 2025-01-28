const inside = document.querySelector('.inside'),
    btn = document.querySelectorAll('.fix__menu'),
    intext = document.querySelectorAll('.fix__menuText');

for (let i = 0; i < 2; i++) {
    btn[i].addEventListener('click', () => {
        inside.classList.toggle('open');
        for (let i = 0; i < 2; i++) {
            btn[i].classList.toggle('open');
            intext[i].textContent = intext[i].textContent == 'メニュー' ? '閉じる' : 'メニュー';
        }
    })
}

if (this.location.pathname === '/index.html') {
    window.addEventListener('scroll', () => {
        if (window.scrollY < window.innerHeight && inside.classList.contains('open')) {
            inside.classList.remove('open');
            for (let i = 0; i < 2; i++) {
                btn[i].classList.remove('open');
                intext[i].textContent = 'メニュー';
            }
        }
    })
}

window.addEventListener('resize', () => {
    inside.classList.add('resize');
    setTimeout(() => {
        inside.classList.remove('resize');
    }, 300)
})
