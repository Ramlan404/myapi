const axios = require('axios');
const cheerio = require('cheerio');

const artimimpi = (query) => new Promise((resolve, reject) => {
    axios.get(`https://www.primbon.com/tafsir_mimpi.php?mimpi=${query}&submit=+Submit+`).then((data) => {
        const $ = cheerio.load(data.data)
        $('#body').each((i, el) => {
            const isiresult = $(el).text().trim();
            resolve({
                status: 200,
                result: isiresult
            })
        })
    }).catch({
        status: 500,
        message: "gagal dalam scraping!"
    })
})

module.exports = artimimpi