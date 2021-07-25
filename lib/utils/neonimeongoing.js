const request = require('request');
const cheerio = require('cheerio');

const neonimeongoing = () => new Promise((resolve, reject) => {
request('https://nekonime.vip/ongoing-list/', function (err, res, html) {
    if (!err & res.statusCode == 200) {
        const $ = cheerio.load(html)
        const resultnekonime = []
        $('div.article-body').each((i, el) => {
            const judulnekonime = $(el).find('a').text();
            const linknekonime = $(el).find('a').attr('href');
            const resultnekopush = {
                Judul: judulnekonime,
                Link: linknekonime
            }
            resultnekonime.push(resultnekopush)
        })
        resolve({
            status: 200,
            data: resultnekonime
        })
    } else {
        resolve({
            status: 500,
            message: "gagal dalam scraping!"
        })
    }
})
})
module.exports = neonimeongoing