const fetch = require('node-fetch');
const cheerio = require('cheerio');

const mangatoonSearch = (query) => new Promise((resolve, reject) => {
    fetch(`https://mangatoon.mobi/en/search?word=${query}`, {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.5",
            "Upgrade-Insecure-Requests": "1",
            "Pragma": "no-cache",
            "Cache-Control": "no-cache"
        },
        "referrer": "https://mangatoon.mobi/",
        "method": "GET",
        "mode": "cors"
    }).then((res) => res.text())
        .then((text) => {
            const $ = cheerio.load(text)
            const dataArr = [];
            $('div.recommend-item').each((i, el) => {
                const title = $(el).find('div.recommend-comics-title > span').text().trim();
                const image = $(el).find('a > div.comics-image > img').attr('src');
                const url = $(el).find('a').attr('href');
                const type = $(el).find('div.comics-type > span').text().trim();
                dataArr.push({
                    title: title,
                    type: type,
                    url: url,
                    image: image
                })
            })
            resolve({
                status: 200,
                data: dataArr
            })
        }).catch({
            status: 500,
            message: "gagal dalam scraping!"
        })
})

module.exports = mangatoonSearch