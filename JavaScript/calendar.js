const calendarImg = document.querySelector('.calendar__image img');

const { createClient } = microcms;

const client = createClient({
    serviceDomain: 'haname',
    apiKey: 'Ckd54tBWoge86C6BFPrHzc3XRRfnHJZixDJ8',
})
client.get({ endpoint: 'calendar' }).then((res) => {
    console.log(res.contents[0].alt);
    calendarImg.src = res.contents[0].calendar.url;
    calendarImg.height = res.contents[0].calendar.height;
    calendarImg.widht = res.contents[0].calendar.width;
    calendarImg.alt = res.contents[0].alt;
})