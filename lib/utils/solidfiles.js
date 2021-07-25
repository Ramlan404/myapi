const fetch = require('node-fetch');
const cheerio = require('cheerio');

const solidfilesdl = (url) => new Promise((resolve, reject) => {
    fetch(`${url}/dl`, {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.5",
            "Content-Type": "application/x-www-form-urlencoded",
            "Upgrade-Insecure-Requests": "1",
            "Pragma": "no-cache",
            "Cache-Control": "no-cache"
        },
        "referrer": `${url}`,
        "method": "POST",
        "mode": "cors"
    }).then((res) => res.text())
        .then((text) => {
            const $ = cheerio.load(text)
            const url_ = $('article.box:nth-child(1) > section:nth-child(1) > p:nth-child(2) > a:nth-child(1)').attr('href');
            resolve({
                status: 200,
                url: url_
            })
        }).catch({
            status: 500,
            message: "gagal dalam scraping!"
        })
});

module.exports = solidfilesdl