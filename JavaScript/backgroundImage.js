const images = [
    "./images/background/eatin_background.png",
    "./images/background/inside_background.png",
    "./images/background/set_background.png",
    "./images/background/shopcard_background.png",
    "./images/background/tempo_background.png",
    "./images/background/yaki_background.png",
    "./images/background/yukiusa_background.png",
],
    header = document.querySelector('.header');

console.log(this.location.pathname);

switch (this.location.pathname) {
    case '/haname/index.html':
        let count = Math.floor(Math.random() * images.length),
            second = 7000;
        header.style.backgroundImage = `url(${images[count]})`;
        const slide = () => {
            count++;
            if (count === images.length) {
                count = 0;
            }
            header.style.backgroundImage = `url(${images[count]})`;
            setTimeout(slide, second);
        }
        setTimeout(slide, second);
        break
    case '/haname/about.html':
        header.style.backgroundImage = `url(${images[1]})`;
        break;
    case '/haname/contact.html':
        header.style.backgroundImage = `url(${images[3]})`;
        break;
    case '/haname/news.html':
        header.style.backgroundImage = `url(${images[0]})`;
        break;
    case '/haname/product.html':
        header.style.backgroundImage = `url(${images[5]})`;
        break;
    case '/haname/store.html':
        header.style.backgroundImage = `url(${images[4]})`;
        break;
    default:
        header.style.backgroundImage = `url(${images[4]})`;
        break;
}
