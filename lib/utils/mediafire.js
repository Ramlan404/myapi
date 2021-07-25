const axios = require('axios');
const cheerio = require('cheerio');

const mediafiredl = (url) => new Promise((resolve, reject) => {
    axios.get(url).then((data) => {
        const $ = cheerio.load(data.data)
        const urldl = $('#downloadButton').attr('href');
        const title = $('div.promoDownloadName.notranslate > div').attr('title');
        const filesize = $('div.dl-info > ul > li:nth-child(1) > span').text();
        const uploaded = $('div.dl-info > ul > li:nth-child(2) > span').text();
        resolve({
            status: 200,
            title: title,
            fileSize: filesize,
            uploadAt: uploaded,
            urlDown: urldl
        })
    }).catch({
        status: 500,
        message: "gagal dalam scraping!"
    })
})

module.exports = mediafiredl