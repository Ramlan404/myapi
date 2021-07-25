const cheerio = require('cheerio');
const axios = require('axios');
const fetch = require('node-fetch');

const youwatchSearch = (query) => new Promise((resolve, reject) => {
    fetch(`https://youwatch.casa/?s=${query}&post_type%5B%5D=post&post_type%5B%5D=tv`, {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.5",
            "Upgrade-Insecure-Requests": "1",
            "Pragma": "no-cache",
            "Cache-Control": "no-cache"
        },
        "referrer": "https://youwatch.casa/",
        "method": "GET",
        "mode": "cors"
    }).then((res) => res.text())
        .then((text) => {
            const $ = cheerio.load(text)
            const dataArr = [];
            $('article.col-md-20.item.has-post-thumbnail').each((i, el) => {
                const title = $(el).find('div > div > header > h2 > a').text().trim();
                const category = $(el).find('div > div > header > div').text().replace('\n\t\t\t\t\tTonton', '').trim();
                const image = $(el).find('div > div > a > img').attr('src');
                const source = $(el).find('div > div > header > div > a').attr('href');
                dataArr.push({
                    title: title,
                    category: category,
                    image: image,
                    source: source
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

module.exports = youwatchSearch