const axios = require('axios');
const cheerio = require('cheerio');

const dewabatchSearch = (query) => new Promise((resolve, reject) => {
    axios.get(`https://dewabatch.com/?s=${query}`).then((res) => {
        const $ = cheerio.load(res.data)
        const dataArr = [];
        $('div.dtl').each((i, el) => {
            const title = $(el).find('h2 > a').text().trim();
            const url = $(el).find('h2 > a').attr('href');
            const rating = $(el).find(' div.footer-content-post.fotdesktoppost > div.contentleft > span:nth-child(1) > rating > ratingval > ratingvalue').text().trim();
            const uploadAt = $(el).find('div.footer-content-post.fotdesktoppost > div.contentleft > span:nth-child(2) > a').text().trim();
            const desc = $(el).find('div.entry-content.synopspost').text().trim();
            dataArr.push({
                title: title,
                rating: rating,
                uploadAt: uploadAt,
                url: url,
                desc: desc
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

module.exports = dewabatchSearch