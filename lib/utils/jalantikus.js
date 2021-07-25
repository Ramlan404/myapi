const { default: Axios } = require('axios')
const cheerio = require('cheerio')

const jalantikus = (query) => new Promise((resolve, reject) => {
    Axios.get(`https://jalantikus.com/search/whatsapp/?q=${query}`)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            let title = []
            let url = []
            let img = []
            $('div.news-container > section > div.news-item > a').get().map((rest) => {
                url.push($(rest).attr('href'))
            })
            $('div.news-container > section > div.news-item > div.news-image > picture > img').get().map((rest) => {
                title.push($(rest).attr('alt'))
            })
            $('div.news-container > section > div.news-item > div.news-image > picture > img').get().map((rest) => {
                img.push($(rest).attr('data-src'))
            })
            let result = []
            for (let i = 0; i < url.length; i++) {
                result.push({
                    url: url[i],
                    title: title[i],
                    img: img[i]
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

module.exports = jalantikus