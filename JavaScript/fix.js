const fix = document.querySelector('.fix'),
    button = document.querySelector('.fix   button'),
    link = document.querySelectorAll('.fix a');

if (window.scrollY == 0) {
    fix.classList.add('disapper');
}

window.addEventListener('scroll', () => {
    if (window.scrollY >= window.innerHeight && fix.classList.contains('disapper')) {
        fix.classList.remove('disapper');
    } else if (window.scrollY < window.innerHeight && !fix.classList.contains('disapper')) {
        fix.classList.add('disapper');
    }
})

document.addEventListener('keydown', e => {
    if (fix.classList.contains('disapper') && e.code == 'Tab') {
        button.setAttribute('tabindex', '-1')
        for (let i = 0; i < link.length; i++) {
            link[i].setAttribute('tabindex', '-1')
        }
    } else if (!fix.classList.contains('disapper') && e.code == 'Tab') {
        button.setAttribute('tabindex', '0')
        for (let i = 0; i < link.length; i++) {
            link[i].setAttribute('tabindex', '0')
        }
    }
})
// サイドバーが出ていない時はサイドバーにフォーカスしない