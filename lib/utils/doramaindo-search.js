const cheerio = require('cheerio');
const axios = require('axios');

const doramaindoSearch = (query) => new Promise((resolve, reject) => {
    axios.get(`https://doramaindo.id/?s=${query}&post_type=series`).then(data => {
        const $ = cheerio.load(data.data)
        const dataArr = [];
        $('div.resultnime').each((i, el) => {
            const title = $(el).find('div > h2 > a').text().trim();
            const status = $(el).find('div > div:nth-child(2) > p > a:nth-child(2)').text().trim();
            const genre = $(el).find('div > div:nth-child(3) > p').text().replace('Genre : ', '').trim();
            const image = $(el).find('div > img').attr('src');
            const url = $(el).find('div > h2 > a').attr('href')
            dataArr.push({
                title: title,
                status: status,
                genre: genre,
                image: image,
                source: url
            })
        })
        resolve({
            status: 200,
            data: dataArr
        })
    }).catch({
        status: 500,
        message: "gagal dalam scraping!"
    })
})

module.exports = doramaindoSearch