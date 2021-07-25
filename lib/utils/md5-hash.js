const fetch = require('node-fetch');
const cheerio = require('cheerio');

const md5enc = (teks) => new Promise((resolve, reject) => {
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
        "referrer": "https://shadowcrypt.net/tools/md5-hash",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `data_type=md5-hash&data_input=${teks}&data_submit=`,
        "method": "POST",
        "mode": "cors"
    }).then((data) => data.text())
    .then((text) => {
        const $ = cheerio.load(text)
        const resultmd5 = $('div.card-body').text().trim();
        resolve({
            status: 200,
            results: resultmd5
        })
    }).catch({
        status: 500,
        message: "gagal dalam scraping!"
    })
})

module.exports = md5enc