const fetch = require('node-fetch');
const cheerio = require('cheerio');
const axios = require('axios');

const konachanSearch = (query) => new Promise((resolve, reject) => {
    fetch(`https://konachan.net/post?tags=${query}`, {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.5",
            "Upgrade-Insecure-Requests": "1",
            "Pragma": "no-cache",
            "Cache-Control": "no-cache"
        },
        "referrer": "https://konachan.net/",
        "method": "GET",
        "mode": "cors"
    }).then((res) => res.text())
        .then((text) => {
            const $ = cheerio.load(text)
            const dataArr = [];
            $('li.creator-id-181250').each((i, el) => {
                const allgraburl = $(el).find('div.inner > a').attr('href');
                dataArr.push(`https://konachan.net${allgraburl}`)
            })
            const randomPict = dataArr[Math.floor(Math.random() * dataArr.length)];
            axios.get(randomPict).then(data => {
                const $$ = cheerio.load(data.data)
                const id = $$('#stats > ul:nth-child(2) > li:nth-child(2)').text().replace('Id: ', '').trim();
                const postAt = $$('#stats > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1)').text().trim();
                const size = $$('#stats > ul:nth-child(2) > li:nth-child(4)').text().replace('Size: ', '').trim();
                const rating = $$('#stats > ul:nth-child(2) > li:nth-child(6)').text().replace('Rating: ', '').trim();
                const score = $$('#stats > ul:nth-child(2) > li:nth-child(7)').text().replace('Score: ', '').trim();
                const source = $$('#stats > ul:nth-child(2) > li:nth-child(5) > a:nth-child(1)').attr('href');
                const image = $$('#image').attr('src');
                resolve({
                    status: 200,
                    id: id,
                    postAt: postAt,
                    size: size,
                    rating: rating,
                    score: score,
                    source: source,
                    image: image
                })
            }).catch({
                status: 500,
                message: "gagal dalam scraping!"
            })
        }).catch({
            status: 500,
            message: "gagal dalam scraping!"
        })
})

module.exports = konachanSearch