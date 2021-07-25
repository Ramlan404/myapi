const request = require('request');
const cheerio = require('cheerio');

const otakulast = () => new Promise((resolve, reject) => {
    request(`https://otakudesu.moe/ongoing-anime/`, function (err, res, html) {
        if (!err && res.statusCode == 200) {
            var $ = cheerio.load(html)
            const dataArrotakuon = [];
            $('div.detpost').each((i, el) => {
                const judulotakuon = $(el).find('div > a > div > h2').text().trim();
                const epsotakuon = $(el).find('div.epz').text().trim();
                const rilisdayotaku = $(el).find('div.epztipe').text().trim();
                const tanggalotaku = $(el).find('div.newnime').text().trim();
                const urlotakuon = $(el).find('div.thumb > a').attr('href');
                dataArrotakuon.push({
                    judul: judulotakuon,
                    episode: epsotakuon,
                    rilis: rilisdayotaku + ' ' + tanggalotaku,
                    link: urlotakuon
                })
            })
            resolve({
                status: 200,
                data: dataArrotakuon
            })
        } else {
            resolve({
                status: 500,
                message: "gagal dalam scraping!"
            })
        }
    })
})

module.exports = otakulast