const gplay = require('google-play-scraper');
const playstore = (query) => new Promise((resolve, reject) => {
    gplay.search({
        term: query,
        num: 10
    })
        .then((hasil) => {
            resolve({
                status: 200,
                data: hasil
            })
        }).catch({
            status: 500,
            message: "gagal dalam scraping!"
        })
})

module.exports = playstore