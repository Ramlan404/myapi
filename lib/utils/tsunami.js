const cheerio = require('cheerio')
const axios = require('axios')

const infotsunami = () => new Promise((resolve, reject) => {
    axios.get('https://www.bmkg.go.id/tsunami/').then((response) => {
        const $ = cheerio.load(response.data)

        const urlElems = $('table.table-hover.table-striped')

        for (let i = 0; i < urlElems.length; i++) {
            const urlSpan = $(urlElems[i]).find('tbody')[0]

            if (urlSpan) {
                const urlData = $(urlSpan).find('tr')[0]
                var Kapan = $(urlSpan).find('tbody > tr > td')[0]
                var koordinat = $(urlSpan).find('tbody > tr > td')[1]
                var Kedalaman = $(urlData).find('td')[3]
                var Wilayah = $(urlData).find('td')[4]
                var magnitudo = $(urlSpan).find('td')[2]
                var hasil = {
                    status: 200,
                    waktu: $(Kapan).text(),
                    magnitude: $(magnitudo).text(),
                    Kedalaman: $(Kedalaman).text().replace(/\t/g, '').replace(/I/g, ''),
                    Wilayah: $(Wilayah).text().replace(/\t/g, '').replace(/I/g, '').replace('-', '').replace(/\r/g, '').split('\n')[0],
                    koordinat: $(koordinat).text()
                }
                resolve(hasil)
            }
        }
    }).catch({
        status: 500,
        message: "gagal dalam scraping!"
    })
})

module.exports = infotsunami