const ip2location = require('ip-to-location');

const ipgeolocation = (ip) => new Promise((resolve, reject) => {
    ip2location.fetch(ip)
        .then(res => {
            resolve(res)
        }).catch({
            status: 500,
            message: "gagal dalam scraping!"
        })
})

module.exports = ipgeolocation