const axios = require('axios');
const cheerio = require('cheerio');

const smuledl = (link) => new Promise((resolve, reject) => {
    axios.get(`https://singdownloader.com/smule/${link.replace('https://www.smule.com/', '')}#result`).then((res) => {
        if (res.status == 200) {
            const $ = cheerio.load(res.data)
            const urlmp4 = $('.getting-started-info > div:nth-child(9) > a:nth-child(1)').attr('href');
            const urlmp3 = $('.getting-started-info > div:nth-child(5) > a:nth-child(1)').attr('href');
            resolve({
                status: 200,
                mp3: urlmp3.trim(),
                mp4: urlmp4.trim()
            })
        } else {
            resolve({
                status: 500,
                message: "gagal dalam scraping!"
            })
        }
    })
})

module.exports = smuledl