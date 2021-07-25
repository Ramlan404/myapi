const fetch = require('node-fetch');
const cheerio = require('cheerio');

async function fbdls(url) {
    return new Promise((resolve, reject) => {
        fetch("https://www.getfvid.com/downloader", {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "en-US,en;q=0.9",
                "cache-control": "no-cache",
                "content-type": "application/x-www-form-urlencoded",
                "pragma": "no-cache",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "sec-gpc": "1",
                "upgrade-insecure-requests": "1"
            },
            "referrer": "https://www.getfvid.com/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": `url=${url}`,
            "method": "POST",
            "mode": "cors"
        }).then((res) => res.text())
            .then((text) => {
                const $ = cheerio.load(text)
                const title = $('h5.card-title > a').text().trim();
                const urlmp4 = $('body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(1) > a').attr('href');
                const urlmp3 = $('body > div.page-content > div > div > div.col-lg-10.col-md-10.col-centered > div > div:nth-child(3) > div > div.col-md-4.btns-download > p:nth-child(3) > a').attr('href');
                resolve({
                    status: 200,
                    title: title,
                    urlmp3: urlmp3,
                    urlmp4: urlmp4
                })
            }).catch({
                status: 500,
                message: "gagal dalam scraping!"
            })
    })
}

const fbdl = (url) => new Promise((resolve, reject) => {
    fbdls(url).then((data) => {
        resolve(data)
    }).catch({
        status: 500,
        message: "gagal dalam scraping!"
    })
})

module.exports = fbdl