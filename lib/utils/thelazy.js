const { default: Axios } = require('axios')
const cheerio = require('cheerio')

const thelazy = (query) => new Promise((resolve, reject) => {
    Axios.get(`https://thelazy.media/?s=${query}`)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            let title = []
            let url = []
            let img = []
            let type = []
            let author = []
            let upload = []
            let comment = []
            $('div.td_module_16 > div.td-module-thumb > a').get().map((rest) => {
                url.push($(rest).attr('href'))
            })
            $('div.td_module_16 > div.td-module-thumb > a').get().map((rest) => {
                title.push($(rest).attr('title'))
            })
            $('div.td_module_16 > div.td-module-thumb > a > img').get().map((rest) => {
                img.push($(rest).attr('src'))
            })
            $('div.td_module_16 > div.item-details > div.td-module-meta-info > a').get().map((rest) => {
                type.push($(rest).text())
            })
            $('div.td_module_16 > div.item-details > div.td-module-meta-info > span > a').get().map((rest) => {
                author.push($(rest).text())
            })
            $('div.td_module_16 > div.item-details > div.td-module-meta-info > span > time').get().map((rest) => {
                upload.push($(rest).text())
            })
            $('div.td_module_16 > div.item-details > div.td-module-meta-info > div > a').get().map((rest) => {
                comment.push($(rest).text())
            })
            let result = []
            for (let i = 0; i < url.length; i++) {
                result.push({
                    url: url[i],
                    title: title[i],
                    img: img[i],
                    category: type[i],
                    author: author[i],
                    post_date: upload[i],
                    comments: comment[i]
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

module.exports = thelazy