const request = require('request');
const cheerio = require('cheerio');

const searchsticker = (query) => new Promise((resolve, reject) => {
    request.get(`https://getstickerpack.com/stickers?query=${query}`, function (err, res, html) {
        if (!err && res.statusCode == 200) {
            var $ = cheerio.load(html)
            const dataArrsticker = [];
            $('div.sticker-pack-block.text-center').each((i, el) => {
                const liststikel = $(el).find('img').attr('data-cfsrc');
                dataArrsticker.push({
                    url: liststikel
                })
            })
            resolve({
                status: 200,
                data: dataArrsticker
            })
        } else {
            resolve({
                status: 500,
                message: "gagal dalam scraping!"
            })
        }
    })
})

module.exports = searchsticker