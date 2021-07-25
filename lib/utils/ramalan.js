const axios = require('axios');
const cheerio = require('cheerio');

const ramalanjodoh = (query1, query2) => new Promise((resolve, reject) => {
    axios.get(`https://www.primbon.com/kecocokan_nama_pasangan.php?nama1=${query1}&nama2=${query2}&proses=+Submit%21+`)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const progress = 'https://www.primbon.com/' + $('#body > img').attr('src')
            const isi = $('#body').text().split(query2)[1].replace('< Hitung Kembali', '').split('\n')[0]
            const posi = isi.split('Sisi Negatif Anda: ')[0].replace('Sisi Positif Anda: ', '')
            const nega = isi.split('Sisi Negatif Anda: ')[1]
            const res = {
                status: 200,
                nama1: query1,
                nama2: query2,
                thumb: progress,
                positif: posi,
                negatif: nega
            }
            resolve(res)
        }).catch({
            status: 500,
            message: "gagal dalam scraping!"
        })
})

module.exports = ramalanjodoh