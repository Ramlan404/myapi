const malScraperss = require('mal-scraper');
const search = malScraperss.search

const malanime = (query) => new Promise((resolve, reject) => {

search.search('anime', { term: query })
    .then((res) => {
        resolve({
            status: 200,
            title: res[0].title,
            score: res[0].score,
            member: res[0].members,
            url: res[0].url,
            deskripsi: res[0].shortDescription,
            thumb: res[0].thumbnail
        })
    }).catch({
        status: 500,
        message: "gagal dalam scraping!"
    })
})

module.exports = malanime