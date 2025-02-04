const list = document.querySelector('.season .block__list'),
    createArticle = '<article class="block__item"><div class="block__image" ><img src="./images/haname_logo.png" alt="" width="1600" height="1068" loading="lazy"></div><div class="block__content"><h3 class="block__name"></h3><p class="block__text"></p><div class="block__notation"><p class="block__price"></p><p class="block__eatBy"></p><p class="block__period"></p></div></div></article >';


const { createClient } = microcms;

const client = createClient({
    serviceDomain: 'haname',
    apiKey: 'Ckd54tBWoge86C6BFPrHzc3XRRfnHJZixDJ8',
})
client.get({ endpoint: 'products' }).then((res) => {
    // console.log(res.contents[0].image.url);
    for (let i = 0; i < res.totalCount; i++) {
        list.insertAdjacentHTML('afterbegin', createArticle);
    }
    const seasonImg = document.querySelectorAll('.season .block__image img'),
        seasonName = document.querySelectorAll('.season .block__name'),
        seasonText = document.querySelectorAll('.season .block__text'),
        seasonPrice = document.querySelectorAll('.season .block__price'),
        seasonEatby = document.querySelectorAll('.season .block__eatBy'),
        seasonPeriod = document.querySelectorAll('.season .block__period');
    for (let i = 0; i < res.totalCount; i++) {
        // console.log(seasonImg[i]);
        seasonImg[i].src = res.contents[i].image.url;
        seasonName[i].innerHTML = res.contents[i].name;
        seasonText[i].innerHTML = res.contents[i].text;
        seasonPrice[i].innerHTML = `${res.contents[i].price}円(税込)`;
        seasonEatby[i].innerHTML = `消費期限　${res.contents[i].eatBy}日`;
        seasonPeriod[i].innerHTML = `販売期間　${res.contents[i].period}`;
    }
})