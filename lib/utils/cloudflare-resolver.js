const fetch = require('node-fetch');
const cheerio = require('cheerio');

const cloudflareResolver = (url) => new Promise((resolve, reject) => {
    fetch("https://shadowcrypt.net/tools/tools", {
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
        "referrer": "https://shadowcrypt.net/tools/cloudflare",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `data_type=cloudflare&data_input=${url}&data_submit=`,
        "method": "POST",
        "mode": "cors"
    }).then((res) => res.text())
        .then((text) => {
            const $ = cheerio.load(text)
            const dataArrcloudflare = [];
            $('div.card-body > table > tbody > tr').each((i, el) => {
                const domain = $(el).find('td:nth-child(1)').text();
                const ip = $(el).find('td:nth-child(2)').text();
                const cloudlfare = $(el).find('td:nth-child(3) > font').text();
                dataArrcloudflare.push({
                    domain: domain,
                    ip: ip,
                    isCloudlfare: cloudlfare
                })
            })
            resolve({
                status: 200,
                data: dataArrcloudflare
            })
        }).catch({
            status: 500,
            message: "gagal dalam scraping!"
        })
})

module.exports = cloudflareResolver