const fetch = require('node-fetch');
const cheerio = require('cheerio');

const drakorSearch = (query) => new Promise((resolve, reject) => {
    fetch(`https://drakorindo.life/?s=${query}`, {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.5",
            "Upgrade-Insecure-Requests": "1",
            "Pragma": "no-cache",
            "Cache-Control": "no-cache"
        },
        "referrer": "https://drakorindo.life/",
        "method": "GET",
        "mode": "cors"
    }).then((res) => res.text())
        .then((text) => {
            const $ = cheerio.load(text)
            const dataArr = [];
            $('article.mh-loop-item').each((i, el) => {
                const title = $(el).find('div > header > h3 > a').text().trim();
                const updateAt = $(el).find('div > header > div > span:nth-child(1)').text().trim();
                const commentCOunt = $(el).find('div > header > div > span:nth-child(3) > a').text().trim();
                const image = $(el).find('figure > a > img').attr('src');
                const url = $(el).find('div > header > h3 > a').attr('href')
                const description = $(el).find('div > div > div > p:nth-child(1)').text().trim();
                dataArr.push({
                    title: title,
                    updateAt: updateAt,
                    commentCOunt: commentCOunt,
                    image: image,
                    source: url,
                    description: description
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

module.exports = drakorSearch