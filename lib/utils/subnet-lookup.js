const fetch = require('node-fetch');
const cheerio = require('cheerio');

const subnetLookup = (data) => new Promise((resolve, reject) => {
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
        "referrer": "https://shadowcrypt.net/tools/subnet-lookup",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `data_type=subnet-lookup&data_input=${data}&data_submit=`,
        "method": "POST",
        "mode": "cors"
    }).then((res) => res.text())
        .then((text) => {
            const $ = cheerio.load(text)
            const ressubnet = $('div.card-body > pre').text().trim();
            resolve({
                status: 200,
                resultSubnet: ressubnet
            })
        }).catch({
            status: 500,
            message: "gagal dalam scraping!"
        })
})

module.exports = subnetLookup