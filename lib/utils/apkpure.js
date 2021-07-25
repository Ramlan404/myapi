const { default: Axios } = require('axios')
const cheerio = require('cheerio')

const apkpure = (query) => new Promise((resolve, reject) => {
    Axios.get(`https://apkpure.com/id/search?q=${query}`)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            let title = []
            let url = []
            let img = []
            $('dl.search-dl > dt > a').get().map((rest) => {
                url.push($(rest).attr('href'))
            })
            $('dl.search-dl > dt > a').get().map((rest) => {
                title.push($(rest).attr('title'))
            })
            $('dl.search-dl > dt > a > img').get().map((rest) => {
                img.push($(rest).attr('src'))
            })
            let result = []
            for (let i = 0; i < url.length; i++) {
                result.push({
                    url: `https://apkpure.com${url[i]}`,
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

module.exports = apkpure