const fetch = require('node-fetch');
const cheerio = require('cheerio');

const artikata = (query) => new Promise((resolve, reject) => {
    fetch("https://www.artikata.com/translate.php", {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "max-age=0",
            "content-type": "application/x-www-form-urlencoded",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "sec-gpc": "1",
            "upgrade-insecure-requests": "1"
        },
        "referrer": "https://www.artikata.com/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `input=${query}&submit.x=0&submit.y=0`,
        "method": "POST",
        "mode": "cors",
        "credentials": "omit"
    }).then((res) => res.text())
        .then((text) => {
            const $ = cheerio.load(text)
            $('div.contents9 > table > tbody > tr').each((i, el) => {
                const artikata = $(el).find('td:nth-child(2)').text();
                resolve({
                    status: 200,
                    artikata: artikata
                })
            })
        }).catch({
            status: 500,
            message: "gagal dalam scraping!"
        })
})

module.exports = artikata