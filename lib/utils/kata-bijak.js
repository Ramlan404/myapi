const axios = require('axios');
const cheerio = require('cheerio');

const carikatabijak = (query) => new Promise((resolve, reject) => {
    axios.get(`https://jagokata.com/kata-bijak/kata-${query}.html`).then((data) => {
        if (data.status = 200) {
            const $ = cheerio.load(data.data)
            const dataArr = [];
            $('#citatenrijen > li').each((i, el) => {
                const katabijak = $(el).find('q.fbquote').text();
                const author = $(el).find('div.citatenlijst-auteur-container > div.citatenlijst-auteur > a').text();
                const voteCount = $(el).find('div.votes-content > span').text();
                dataArr.push({
                    author: author ? author : 'Tidak terbaca',
                    katabijak: katabijak ? katabijak : 'Tidak terbaca',
                    voteCount: voteCount ? voteCount : 'Tidak terbaca'
                })
            })
            resolve({
                status: 200,
                data: dataArr
            })
        } else {
            resolve({
                status: 500,
                message: "gagal dalam scraping!"
            })
        }
    })
})

module.exports = carikatabijak