const fetch = require('node-fetch');
const cheerio = require('cheerio');

async function kompasTvNews() {
    return new Promise((resolve, reject) => {
        fetch("https://www.kompas.tv/", {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "en-US,en;q=0.9",
                "cache-control": "max-age=0",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "none",
                "sec-fetch-user": "?1",
                "sec-gpc": "1",
                "upgrade-insecure-requests": "1"
            },
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors"
        }).then((res) => res.text())
        .then((text) => {
            const $ = cheerio.load(text)
            const dataArrdetik = [];
            $('section > div > div.col-70').each((i, el) => {
                const title = $(el).find('h2 > a').text();
                const waktu = $(el).find('span.time-news.p10').text();
                const url = $(el).find('h2 > a').attr('href');
                dataArrdetik.push({
                    title: title ? title : '',
                    waktu: waktu ? waktu : '',
                    url: url ? url : ''
                })
            })
            resolve({
                status: 200,
                data: dataArrdetik
            })
        }).catch({
            status: 500,
            message: "gagal dalam scraping!"
        })
    })
}

module.exports = kompasTvNews