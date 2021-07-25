const whois = require('whois-json');

const whoisip = (query) => new Promise((resolve, reject) => {
whois(query)
    .then((res) => {
        resolve(res)
    }).catch({
        status: 500,
        message: "gagal dalam scraping!"
    })
})

module.exports = whoisip