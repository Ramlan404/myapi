const axios = require('axios');
const cheerio = require('cheerio');

const detiknews = (query) => new Promise((resolve, reject) => {
    axios.get('https://news.detik.com/ajax/mostpopular')
        .then(({ data }) => {
            const $ = cheerio.load(data.html)
            const title = []
            const url = []
            $('div > h3 > a').get().map((rest) => {
                title.push($(rest).text())
            })

            $('div > h3 > a').get().map((rest) => {
                url.push($(rest).attr('href'))
            })
            const result = []
            for (let i = 0; i < title.length; i++) {
                result.push({
                    title: title[i],
                    url: url[i]
                })
            }
            resolve({
                status: 200,
                data: result
            })
        }).catch({
            status: 500,
            message: "gagal dalam scraping!"
        })
})

module.exports = detiknews