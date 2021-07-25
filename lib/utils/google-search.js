const google = require('google-it');
const googlesearch = (query) => new Promise((resolve, reject) => {
    google({ 'query': query, 'disableConsole': true })
        .then((res) => {
            const dataArrgoogle = [];
            for (let i = 0; i < res.length; i++) {
                dataArrgoogle.push({
                    title: res[i].title,
                    link: res[i].link,
                    desc: res[i].snippet.trim()
                })
            }
            resolve({
                status: 200,
                data: dataArrgoogle
            })
        }).catch({
            status: 500,
            message: "gagal dalam scraping!"
        })
})

module.exports = googlesearch