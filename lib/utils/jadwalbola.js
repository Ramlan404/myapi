const { default: Axios } = require('axios')
const cheerio = require('cheerio')

const jadwalbola = () => new Promise((resolve, reject) => {
    Axios.get('https://gilabola.com/internasional/jadwal-bola-malam-ini/')
        .then(({ data }) => {
            const $ = cheerio.load(data)
            let waktu = []
            let kickoff = []
            let channel = []
            $('table.tablepress > tbody > tr > td.column-1').get().map((rest) => {
                waktu.push($(rest).text())
            })
            $('table.tablepress > tbody > tr > td.column-2').get().map((rest) => {
                kickoff.push($(rest).text())
            })
            $('table.tablepress > tbody > tr > td.column-3').get().map((rest) => {
                channel.push($(rest).text())
            })
            let result = []
            for (let i = 0; i < waktu.length; i++) {
                result.push({
                    waktu: waktu[i],
                    kickoff: kickoff[i],
                    channel: channel[i]
                })
            }
            resolve({
                status: 200,
                data: result
            })
        }).catch({
            status: 500,
            message: "gagal dalam scraping!"
        })
})

module.exports = jadwalbola