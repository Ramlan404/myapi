const fetch = require('node-fetch');
const cheerio = require('cheerio');

const VideoDlAnySite = (url) => new Promise((resolve, reject) => {
    fetch("https://ddownloader.com/process", {
        "headers": {
            "accept": "text/html, */*; q=0.01",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "sec-gpc": "1",
            "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "https://ddownloader.com/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `url=${url}`,
        "method": "POST",
        "mode": "cors"
    }).then((res) => res.text())
        .then((text) => {
            const $ = cheerio.load(text)
            const title = $('span.title').text().trim();
            const urlMp4 = $('td.txt-center > a').attr('href');
            const thumb = $('.info.col-md-4 > img').attr('src');
            resolve({
                status: 200,
                title: title,
                thumb: thumb,
                UrlMp4: urlMp4
            })
        }).catch({
            status: 500,
            message: "gagal dalam scraping!"
        })
})

module.exports = VideoDlAnySite