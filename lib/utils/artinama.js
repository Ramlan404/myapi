const axios = require('axios');
const cheerio = require('cheerio');

const artinama = (query) => new Promise((resolve, reject) => {
axios.get(`https://www.primbon.com/arti_nama.php?nama1=${query}&proses=+Submit%21+`)
    .then(({ data }) => {
        var $ = cheerio.load(data)
        var result = $('#body').text().split('Nama:')[0]
        resolve({
            status: 200,
            data: result.trim()
        })
    }).catch({
        status: 500,
        message: "gagal dalam scraping!"
    })
})

module.exports = artinama