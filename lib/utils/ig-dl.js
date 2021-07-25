const fetch = require('node-fetch');
const cheerio = require('cheerio');

const igdl = (url) => new Promise((resolve, reject) => {
    fetch("https://downloadgram.org/", {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "no-cache",
            "content-type": "application/x-www-form-urlencoded",
            "pragma": "no-cache",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "sec-gpc": "1",
            "upgrade-insecure-requests": "1"
        },
        "referrer": "https://downloadgram.org/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `url=${url}&submit=`,
        "method": "POST",
        "mode": "cors"
    }).then((res) => res.text())
        .then((text) => {
            const $ = cheerio.load(text)
            const urldl = $('#downloadBox > a').attr('href');
            resolve({
                status: 200,
                linkdownload: urldl
            })
        }).catch({
            status: 500,
            message: "gagal dalam scraping!"
        })
})

module.exports = igdl