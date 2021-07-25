const request = require('request');
const cheerio = require('cheerio');

const topanime = () => new Promise((resolve, reject) => {
    request(`https://myanimelist.net/topanime.php`, function (err, res, html) {
        if (!err & res.statusCode == 200) {
            const $ = cheerio.load(html)
            const dataArrTopAnime = [];
            $('tr.ranking-list').each((i, el) => {
                const judultopanime = $(el).find('h3 > a').text();
                const scoretopanime = $(el).find('td > div > span').text();
                const infotopanime = $(el).find('td.title.al.va-t.word-break > div > div.information.di-ib.mt4').text().split(' ').join('');
                const linktopanime = $(el).find('h3 > a').attr('href');
                dataArrTopAnime.push({
                    Judul: judultopanime,
                    Score: scoretopanime,
                    Informasi: infotopanime,
                    Link: linktopanime
                })
            })
            resolve({
                status: 200,
                data: dataArrTopAnime
            })
        } else {
            resolve({
                status: 500,
                message: "gagal dalam scraping!"
            })
        }
    })
})

module.exports = topanime