const axios = require('axios');
const cheerio = require('cheerio');

async function wattpadSearch(query) {
    return new Promise((resolve, reject) => {
        axios.get('https://www.wattpad.com/search/' + query)
            .then(({ data }) => {
                var $ = cheerio.load(data)
                var title = []
                var url = []
                var id = []
                var img = []
                $('#results-stories > div > ul > li > div > a > div.cover.cover-xs.pull-left > img').get().map((rest) => {
                    title.push($(rest).attr('alt'))
                    img.push($(rest).attr('src'))
                })
                $('#results-stories > div > ul > li > div > a').get().map((rest) => {
                    url.push('https://www.wattpad.com' + $(rest).attr('href'))
                    id.push($(rest).attr('data-id'))
                })
                var results = []
                for (let i = 0; i < title.length; i++) {
                    var ress = {
                        id: id[i],
                        title: title[i],
                        thumb: img[i],
                        url: url[i],

                    }
                    results.push(ress)
                }
                resolve(results)
            }).catch(reject)
    })
}

const wpsearch = (query) => new Promise((resolve, reject) => {
    wattpadSearch(query)
        .then((hasil) => {
            resolve({
                status: 200,
                data: hasil
            })
    }).catch(reject)
})

module.exports = wpsearch