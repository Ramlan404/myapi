const QRCode = require('qrcode');
const texttoqrcode = (query) => new Promise((resolve, reject) => {

    QRCode.toDataURL(query)
        .then((hasil) => {
            resolve({
                status: 200,
                image: hasil
            })
        }).catch({
            status: 500,
            message: "gagal dalam scraping!"
        })
})

module.exports = texttoqrcode