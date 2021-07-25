const axios = require('axios');
const cheerio = require('cheerio');

const infogempa = () => new Promise((resolve, reject) => {
    axios.get('https://www.bmkg.go.id/gempabumi/gempabumi-terkini.bmkg').then((data) => {
        if (data.status == 200) {
            const $ = cheerio.load(data.data)
            const dataArr = [];
            $('div.col-md-8 > div > div > table > tbody > tr').each((i, el) => {
                const waktu = $(el).find('td:nth-child(2)').text().trim();
                const lintang = $(el).find('td:nth-child(3)').text().trim();
                const bujur = $(el).find('td:nth-child(4)').text().trim();
                const magnitudo = $(el).find('td:nth-child(5)').text().trim();
                const kedalaman = $(el).find('td:nth-child(6)').text().trim();
                const wilayah = $(el).find('td:nth-child(7)').text().trim();
                dataArr.push({
                    wilayah: wilayah,
                    magnitudo: magnitudo,
                    kedalaman: kedalaman,
                    lintang: lintang,
                    bujur: bujur,
                    waktu: waktu
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

module.exports = infogempa