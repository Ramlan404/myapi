const { default: Axios } = require('axios')
const cheerio = require('cheerio')

const happymod = (query) => new Promise((resolve, reject) => {
    Axios.get(`https://www.happymod.com/search.html?q=${query}`)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            let title = []
            let url = []
            let img = []
            $('section.section-page-white > div.pdt-app-box > a').get().map((rest) => {
                url.push($(rest).attr('href'))
            })
            $('section.section-page-white > div.pdt-app-box > a').get().map((rest) => {
                title.push($(rest).attr('title'))
            })
            $('section.section-page-white > div.pdt-app-box > a > img').get().map((rest) => {
                img.push($(rest).attr('data-original'))
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
                author: 'Ramlan ID'
                data: result
            })
        }).catch({
            status: 500,
            message: "gagal dalam scraping!"
        })
})

module.exports = happymod