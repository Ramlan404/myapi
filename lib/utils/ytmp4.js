const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');
const ytIdRegex = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/

function post(url, formdata) {
    return fetch(url, {
        method: 'POST',
        headers: {
            accept: "*/*",
            'accept-language': "en-US,en;q=0.9",
            'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: Object.keys(formdata).map(key => `${key}=${encodeURIComponent(formdata[key])}`).join('&')
    })
}

(async(url) => {
    var url = url
    await post('https://www.y2mate.com/mates/en60/analyze/ajax', {
        url,
        q_auto: 0,
        ajax: 1
    }).then((data) => {
        var mine = data.json()
        mine.then(console.log)
    })
});

function ytv(url) {
    return new Promise((resolve, reject) => {
        if (ytIdRegex.test(url)) {
            let ytId = ytIdRegex.exec(url)
            url = 'https://youtu.be/' + ytId[1]
            post('https://www.y2mate.com/mates/en60/analyze/ajax', {
                    url,
                    q_auto: 0,
                    ajax: 1
                })
                .then(res => res.json())
                .then(res => {
                    var document = (new JSDOM(res.result)).window.document
                    var yaha = document.querySelectorAll('td')
                    var filesize = yaha[yaha.length - 23].innerHTML
                    var id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ['', '']
                    var thumb = document.querySelector('img').src
                    var title = document.querySelector('b').innerHTML

                    post('https://www.y2mate.com/mates/en60/convert', {
                            type: 'youtube',
                            _id: id[1],
                            v_id: ytId[1],
                            ajax: '1',
                            token: '',
                            ftype: 'mp4',
                            fquality: 360
                        })
                        .then(res => res.json())
                        .then(res => {
                            let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize))
                            resolve({
                                status: 200,
                                thumb,
                                title,
                                filesize: filesize,
                                dl_link: /<a.+?href="(.+?)"/.exec(res.result)[1],
                            })
                        }).catch(reject)
                }).catch(reject)
        } else reject('URL INVALID')
    })
}

const ytmp4 = (url) => new Promise((resolve, reject) => {

    ytv(url)
        .then((hasil) => {
            resolve(hasil)
        })
})

module.exports = ytmp4