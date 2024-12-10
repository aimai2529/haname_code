const fix = document.querySelector('.fix');

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