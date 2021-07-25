const axios = require('axios');
const cheerio = require('cheerio');

const anoboylast = () => new Promise((resolve, reject) => {
    axios.get('https://anoboy.media/').then((data) => {
        const $ = cheerio.load(data.data)
        const dataArranoboy = [];
        $('div.home_index > a > div').each((i, el) => {
            const title = $(el).find('div.amvj > h3').text();
            const waktu = $(el).find('div.jamup').text();
            dataArranoboy.push({
                title: title,
                time: waktu
            })
        })
        resolve({
            status: 200,
            data: dataArranoboy
        })
    }).catch({
        status: 500,
        message: "gagal dalam scraping!"
    })
})

module.exports = anoboylast