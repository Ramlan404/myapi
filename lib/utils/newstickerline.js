const request = require('request');
const cheerio = require('cheerio');

const newsline = () => new Promise((resolve, reject) => {
    request('https://store.line.me/stickershop/showcase/new/id', function (err, res, html) {
        if (!err && res.statusCode == 200) {
            const $ = cheerio.load(html)
            const dataArrnewsline = [];
            const urlnewsline = 'https://store.line.me'
            $('li.mdCMN02Li').each((i, el) => {
                const judulnewsline = $(el).find('a > div > p').text();
                const linknewsline = $(el).find('a').attr('href');
                dataArrnewsline.push({
                    title: judulnewsline,
                    link: urlnewsline + linknewsline
                })
            })
            resolve({
                status: 200,
                data: dataArrnewsline
            })
        } else {
            resolve({
                status: 500,
                message: "gagal dalam scraping!"
            })
        }
    })
})

module.exports = newsline