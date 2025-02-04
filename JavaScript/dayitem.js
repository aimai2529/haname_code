// const { createClient } = microcms;
const createList = '<div class="dayItems__column"><dt class="dayItems__item"></dt><dd class="dayItems__status"></dd></div>';

const client2 = createClient({
    serviceDomain: 'haname',
    apiKey: 'Ckd54tBWoge86C6BFPrHzc3XRRfnHJZixDJ8',
})
client2.get({ endpoint: 'dayitem' }).then((res) => {
    // console.log(res.contents[0].name);
    for (let i = 0; i < res.totalCount; i++) {
        document.querySelector('.dayItems dl').insertAdjacentHTML('afterbegin', createList);
    }
    const itemName = document.querySelectorAll('.dayItems__item'),
        itemStatus = document.querySelectorAll('.dayItems__status');
    for (let i = 0; i < res.totalCount; i++) {
        itemName[i].innerHTML = res.contents[i].name;
        itemStatus[i].innerHTML = res.contents[i].status;
    }
})