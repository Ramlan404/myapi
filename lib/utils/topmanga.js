const request = require('request');
const cheerio = require('cheerio');

const topmanga = () => new Promise((resolve, reject) => {
    request(`https://myanimelist.net/topmanga.php`, function (err, res, html) {
        if (!err & res.statusCode == 200) {
            const $ = cheerio.load(html)
            const dataArrTopmanga = [];
            $('tr.ranking-list').each((i, el) => {
                const judultopmanga = $(el).find('h3 > a').text();
                const scoretopmanga = $(el).find('td > div > span').text();
                const infotopmanga = $(el).find('td.title.al.va-t.clearfix.word-break > div > div.information.di-ib.mt4').text().split(' ').join('').replace('\n', '');
                const linktopmanga = $(el).find('h3 > a').attr('href');
                dataArrTopmanga.push({
                    Judul: judultopmanga,
                    Score: scoretopmanga,
                    Informasi: infotopmanga,
                    Link: linktopmanga
                })
            })
            resolve({
                status: 200,
                data: dataArrTopmanga
            })
        } else {
            resolve({
                status: 500,
                message: "gagal dalam scraping!"
            })
        }
    })
})

module.exports = topmanga