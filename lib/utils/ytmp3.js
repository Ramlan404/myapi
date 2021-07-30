const fetch = require('node-fetch');
const cheerio = require('cheerio');

async function ytmp3dl(url) {
    return new Promise((resolve, reject) => {
        fetch("https://dl1.youtubetomp3.sc/searchdl.php", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "cache-control": "no-cache",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "pragma": "no-cache",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site",
                "sec-gpc": "1"
            },
            "referrer": "https://youtubetomp3.sc/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": `url=${url}&type=mp3`,
            "method": "POST",
            "mode": "cors"
        }).then((res) => res.text())
            .then((text) => {
                const $ = cheerio.load(text)
                const title = $('div.title').text().trim();
                const thumb = $('div.y_thumb.col-lg-4.col-md-6.col-6.mx-auto.mb-4 > img').attr('src');
                const urlmp3 = $('#tab_mp3 > tbody > tr:nth-child(1) > td:nth-child(3) > a').attr('href');
                const filesize = $('#tab_mp3 > tbody > tr:nth-child(1) > td:nth-child(2)').text().trim();
                let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize))
                resolve({
                    status: 200,
                    title: title,
                    filesize: filesize,
                    mp3: urlmp3,
                    thumb: thumb
                })
            })
    })
}

const ytmp3 = (url) => new Promise((resolve, reject) => {
    ytmp3dl(url).then((res) => {
        resolve(res)
    })
})

module.exports = ytmp3