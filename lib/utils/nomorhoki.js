const fetch = require('node-fetch');
const cheerio = require('cheerio');

const nomorhoki = (no) => new Promise((resolve, reject) => {
    fetch("https://www.primbon.com/no_hoki_bagua_shuzi.php", {
        "headers": {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "max-age=0",
            "content-type": "application/x-www-form-urlencoded",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "sec-gpc": "1",
            "upgrade-insecure-requests": "1"
        },
        "referrer": "https://www.primbon.com/no_hoki_bagua_shuzi.htm",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `nomer=${no}&submit=+Submit%21+`,
        "method": "POST",
        "mode": "cors",
        "credentials": "omit"
    }).then((res) => res.text())
        .then((text) => {
            const $ = cheerio.load(text)
            $('#body').each((i, el) => {
                const energipositif = $(el).find('table:nth-child(9) > tbody > tr:nth-child(1) > td:nth-child(1)').text().replace('ENERGI POSITIF', '');
                const energinegatif = $(el).find('table:nth-child(9) > tbody > tr:nth-child(1) > td:nth-child(3)').text().replace('ENERGI NEGATIF', '');
                const ratenomer = $(el).find('b:nth-child(6)').text().replace('% Angka Bagua Shuzi : ', '')
                resolve({
                    status: 200,
                    energipositif: energipositif,
                    energinegatif: energinegatif,
                    rate: ratenomer
                })
            })
        }).catch({
            status: 500,
            message: "gagal dalam scraping!"
        })
})

module.exports = nomorhoki