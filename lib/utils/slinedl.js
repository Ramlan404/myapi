const request = require('request');
const cheerio = require('cheerio');

const stickerlinedl = (url) => new Promise((resolve, reject) => {
    request(url, function (err, res, html) {
        if (!err && res.statusCode == 200) {
            const $ = cheerio.load(html)
            const resultslinedownload = [];
            $('li.FnStickerPreviewItem').each((i, el) => {
                var linksline = $(el).find('div > span').attr('style').split('background-image:url(').join('').replace(';compress=true);', '');
                resultslinedownload.push({
                    link: linksline
                })
            })
            resolve({
                status: 200,
                data: resultslinedownload
            })
        } else {
            resolve({
                status: 500,
                message: "gagal dalam scraping!"
            })
        }
    })
})

module.exports = stickerlinedl