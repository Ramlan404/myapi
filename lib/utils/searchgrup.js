const request = require('request');
const cheerio = require('cheerio');

function carigcwa(query) {
    return new Promise((resolve, reject) => {
        request.post(`https://groupsor.link/group/searchmore/${query}`, function (err, res, html) {
            if (!err && res.statusCode == 200) {
                var $ = cheerio.load(html)
                const dataArrcarigrup = [];
                $('div.maindiv').each((i, el) => {
                    var titlegc = $(el).find('div > a').attr('title').replace('Whatsapp group invite link:', '').trim();
                    var listlinkgc = $(el).find('div > a').attr('href').replace('https://groupsor.link/group/invite/', 'https://chat.whatsapp.com/').trim();
                    dataArrcarigrup.push({
                        judul: titlegc,
                        link: listlinkgc
                    })
                })
                resolve({
                    status: 200,
                    data: dataArrcarigrup
                })
            } else {
                console.log('Not found')
            }
        })
    })
}

const carigrup = (query) => new Promise((resolve, reject) => {
    carigcwa(query).then((data) => {
        resolve(data)
    })
})

module.exports = carigrup