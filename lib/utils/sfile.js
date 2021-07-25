const axios = require('axios');
const cheerio = require('cheerio');

const sfileSearch = (query) => new Promise((resolve, reject) => {
    axios.get(`https://sfile.mobi/search.php?q=${query}&search=Search`).then((data) => {
        const $ = cheerio.load(data.data)
        const dataArr = [];
        $('div.list').each((i, el) => {
            const title = $(el).find('a').text().split(' ').join('')
            const filesize = $(el).text().trim();
            const url = $(el).find('a').attr('href')
            dataArr.push({
                title: title ? title : 'Tidak terbaca',
                filesize: filesize.replace(title, '').trim() ? filesize.replace($(el).find('a').text(), '').trim() : 'Tidak terbaca',
                url: url ? url : 'Tidak terbaca'
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

module.exports = sfileSearch