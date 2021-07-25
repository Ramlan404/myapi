const fetch = require('node-fetch');
const cheerio = require('cheerio');

const samehadakuSearch = (query) => new Promise((resolve, reject) => {
    fetch(`https://samehadaku.vip/?s=${query}`, {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.5",
            "Upgrade-Insecure-Requests": "1",
            "Pragma": "no-cache",
            "Cache-Control": "no-cache"
        },
        "referrer": "https://samehadaku.vip/",
        "method": "GET",
        "mode": "cors"
    }).then((res) => res.text())
        .then((text) => {
            const $ = cheerio.load(text)
            const title = $('.animposx > a:nth-child(1)').attr('title');
            const desc = $('.ttls').text();
            const image = $('.anmsa').attr('src');
            const url = $('.animposx > a:nth-child(1)').attr('href');
            resolve({
                status: 200,
                title: title,
                image: image,
                url: url,
                desc: desc
            })
        }).catch({
            status: 500,
            message: "gagal dalam scraping!"
        })
});

module.exports = samehadakuSearch