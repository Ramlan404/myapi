const axios = require('axios');

const mangasearch = (query) => new Promise((resolve, reject) => {
axios.get(`https://myanimelist.net/search/prefix.json?type=manga&keyword=${query}&v=1`)
    .then(({ data }) => {
        resolve({
            status: 200,
            judul: data.categories[0].items[0].name,
            id: data.categories[0].items[0].id,
            link: data.categories[0].items[0].url,
            type: data.categories[0].items[0].type,
            published: data.categories[0].items[0].payload.published,
            score: data.categories[0].items[0].payload.score,
            startYear: data.categories[0].items[0].payload.start_year,
            statusManga: data.categories[0].items[0].payload.status
        })
    }).catch({
        status: 500,
        message: "gagal dalam scraping!"
    })
})

module.exports = mangasearch