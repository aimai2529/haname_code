const images = [
    "../images/background/eatin_background.png",
    "../images/background/inside_background.png",
    "../images/background/set_background.png",
    "../images/background/shopcard_background.png",
    "../images/background/tempo_background.png",
    "../images/background/yaki_background.png",
    "../images/background/yukiusa_background.png",
],
    header = document.querySelector('.header');

if (this.location.pathname === '/index.html') {
    let count = 0,
        second = 7000;
    const slide = () => {
        header.style.backgroundImage = `url(${images[count]})`;
        count++;
        if (count === images.length) {
            count = 0;
        }
        setTimeout(slide, second);
    }
    setTimeout(slide, second);

}

switch (this.location.pathname) {
    case '/about.html':
        header.style.backgroundImage = `url(${images[1]})`;
        break;
    case '/contact.html':
        header.style.backgroundImage = `url(${images[3]})`;
        break;
    case '/news.html':
        header.style.backgroundImage = `url(${images[0]})`;
        break;
    case '/product.html':
        header.style.backgroundImage = `url(${images[5]})`;
        break;
    case '/store.html':
        header.style.backgroundImage = `url(${images[4]})`;
        break;
    default:
        header.style.backgroundImage = `url(${images[4]})`;
        break;
}
