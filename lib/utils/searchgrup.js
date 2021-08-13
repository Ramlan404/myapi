const axios = require("axios");
const cheerio = require('cheerio');

function carigcwa(query) {
    return new Promise((resolve, reject) => {
                axios.get(`http://ngarang.com/link-grup-wa/daftar-link-grup-wa.php?search=${q}&searchby=name`).then(x => {
                    const $ = cheerio.load(x.data);
                    let myAu = [];
                    $('div.wa-chat').each((i, el) => {
                      const _title_ = $(el).find('div > div > div > a > div > div').text().split('.')[1].replace('*', '').trim();
                      const _url_ = $(el).find('div.wa-chat-body > div.wa-chat-message > a.URLMessage').text();
                      myAu.push({
                        title: _title_,
                        url: _url_
                      })
                    })
})
})
}
const carigrup = (query) => new Promise((resolve, reject) => {
    carigcwa(query).then((data) => {
        resolve(data)
    })
})

module.exports = carigrup