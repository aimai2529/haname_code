const toTop = document.querySelector('#toTop');

window.addEventListener('scroll', function () {
    if (window.scrollY > window.innerHeight && !toTop.classList.contains("active")) {
        toTop.classList.add('active');
    } else if (window.scrollY <= 300 && toTop.classList.contains("active")) {
        toTop.classList.remove('active');
    }
})

toTop.addEventListener('click', function () {
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
})
