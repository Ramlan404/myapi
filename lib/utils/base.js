const base64  = require('base-64')

const Base = (type, text) => new Promise((resolve, reject) => {
    switch (type) {
        case 'b64enc':
            const data1 = base64.encode(text)
            resolve({
                code: 200,
                message: 'success',
                result: {
                   string: text,
                   encode: data1
                }
            }).catch({
                status: 500,
                message: "gagal dalam scraping!"
            })
            break
        case 'b64dec':
            const data2 = base64.decode(text)
            resolve({
                code: 200,
                message: 'success',
                result: {
                   enc: text,
                   encode: data2
                }
            }).catch({
                status: 500,
                message: "gagal dalam scraping!"
            })
            break
        default:
            break
    }
})

module.exports = Base
