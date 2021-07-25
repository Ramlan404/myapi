const gis = require('g-i-s');

async function ImageSearch(query) {
    return new Promise((resolve, reject) => {
        gis(query, logResults)
        function logResults(error, results) {
            if (error) {
                reject(error)
            }
            else {
                let url = []
                for (let i = 0; i < results.length; i++) {
                    url.push(decodeURIComponent(JSON.parse(`"${results[i].url}"`)))
                }
                resolve(url)
            }
        }
    })
}

const imagesearchh = (query) => new Promise((resolve, reject) => {
ImageSearch(query)
    .then((hasil) => {
        var mathlolires = Math.floor(Math.random() * 50) + 1;
        resolve({
            status: 200,
            url: hasil[mathlolires]
        })
    }).catch({
        status: 500,
        message: "gagal dalam scraping!"
    })
})

module.exports = imagesearchh