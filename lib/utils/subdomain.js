const fetch = require('node-fetch');
const cheerio = require('cheerio');

const subdomain = (domain) => new Promise((resolve, reject) => {
    fetch("https://shadowcrypt.net/tools/toollist/subdomain", {
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
        "referrer": "https://shadowcrypt.net/tools/subdomain",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `data_type=subdomain&data_input=${domain}&data_submit=`,
        "method": "POST",
        "mode": "cors"
    }).then((data) => data.text())
        .then((text) => {
            const $ = cheerio.load(text)
            const dataArrsubdomain = [];
            $('div.card-body > table > tbody > tr').each((i, el) => {
                const subdomainss = $(el).find('td:nth-child(1)').text();
                const ipsubdomain = $(el).find('td:nth-child(2)').text();
                dataArrsubdomain.push({
                    subdomain: subdomainss,
                    ip: ipsubdomain
                })
            })
            resolve({
                status: 200,
                data: dataArrsubdomain
            })
        }).catch({
            status: 500,
            message: "gagal dalam scraping!"
        })
})

module.exports = subdomain