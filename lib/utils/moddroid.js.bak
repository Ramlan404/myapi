const { default: Axios } = require('axios')
const cheerio = require('cheerio')

const moddroid = (query) => new Promise((resolve, reject) => {
    Axios.get(`https://moddroid.com/?s=${query}`)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            let title = []
            let url = []
            let img = []
            $('div.row > div.col-12 > a').get().map((rest) => {
                url.push($(rest).attr('href'))
            })
            $('div.row > div.col-12 > a').get().map((rest) => {
                title.push($(rest).attr('title'))
            })
            $('div.row > div.col-12 > a > div.flex-shrink-0 > img').get().map((rest) => {
                img.push($(rest).attr('src'))
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

module.exports = moddroid