const axios = require('axios');
const cheerio = require('cheerio');

const zodiakSearch = (query) => new Promise((resolve, reject) => {
    axios.get(`https://m.fimela.com/zodiak/${query}`).then((res) => {
        if (res.status == 200) {
            const $ = cheerio.load(res.data)
            const dataumum = $('div.zodiak--content__item.zodiak--content__umum > p').text().trim();
            const datalove = $('div.zodiak--content__item.zodiak--content__love > p').text().trim();
            const datakeuangan = $('div.zodiak--content__item.zodiak--content__keuangan > p').text().trim();
            resolve({
                status: 200,
                umum: dataumum,
                love: datalove,
                keuangan: datakeuangan
            })
        } else {
            resolve({
                status: 500,
                message: "gagal dalam scraping!"
            })
        }
    })
})

module.exports = zodiakSearch