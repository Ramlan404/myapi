const { default: Axios } = require('axios')
const cheerio = require('cheerio')

const antaranews = () => new Promise((resolve, reject) => {
    Axios.get('https://www.antaranews.com/')
        .then(({ data }) => {
            const $ = cheerio.load(data)
            let title = []
            let url = []
            let img = []
            $('article.simple-post > div > a').get().map((rest) => {
                url.push($(rest).attr('href'))
            })
            $('article.simple-post > div > a').get().map((rest) => {
                title.push($(rest).attr('title'))
            })
            $('article.simple-post > div > a > picture > img').get().map((rest) => {
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

module.exports = antaranews