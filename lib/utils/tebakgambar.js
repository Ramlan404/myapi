const axios = require('axios');
const cheerio = require('cheerio');

function tebak_gambar() {
    return new Promise((resolve, reject) => {
        var url_floor = `https://jawabantebakgambar.net/id-${Math.floor(Math.random() * 2685)}.html`
        axios.get(url_floor)
            .then(({ data }) => {
                var $ = cheerio.load(data)
                var img = `https://jawabantebakgambar.net${$('#images > li > a > img').attr('src')}`
                var jawaban = $('#images > li > a > img').attr('alt').replace('Jawaban ', '')
                var result = {
                    status: 200,
                    img: img,
                    jawaban: jawaban.toLocaleLowerCase()
                }
                resolve(result)
            })
            .catch(reject)
    })
}
const tebakgambar = () => new Promise((resolve, reject) => {
    tebak_gambar()
        .then((hasil) => {
            resolve(hasil)
        })
})

module.exports = tebakgambar