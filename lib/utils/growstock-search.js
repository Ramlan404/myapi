const fetch = require('node-fetch');
const cheerio = require('cheerio');

const growstockSearch = (query) => new Promise((resolve, reject) => {
    fetch(`https://growstocks.xyz/search?item=${query}`, {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.5",
            "Upgrade-Insecure-Requests": "1",
            "Pragma": "no-cache",
            "Cache-Control": "no-cache"
        },
        "referrer": "https://growstocks.xyz/",
        "method": "GET",
        "mode": "cors"
    }).then((res) => res.text())
        .then((text) => {
            const $ = cheerio.load(text)
            const dataArr = [];
            $('div.searchRes').each((i, el) => {
                const title = $(el).find('div > div > h2 > a').text().trim();
                const price = $(el).find('div > div > p:nth-child(3) > b:nth-child(1)').text().trim();
                const editedAt = $(el).find('div > div > p:nth-child(5) > b:nth-child(1)').text().trim();
                dataArr.push({
                    title: title,
                    price: price ? price : 'Data tidak terbaca',
                    editedAt: editedAt ? editedAt : 'Data tidak terbaca',
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

module.exports = growstockSearch