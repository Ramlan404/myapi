const axios = require('axios')
let cookie = require('cookie')
let FormData = require('form-data')

function gaspost(url, formdata = {}, headers = {}) {
    let e = encodeURIComponent
    let body = Object.keys(formdata).map(key => {
        let vals = formdata[key]
        let isArray = Array.isArray(vals)
        let keyq = e(key + (isArray ? '[]' : ''))
        if (!isArray) vals = [vals]
        let out = []
        for (let valq of vals) out.push(keyq + '=' + e(valq))
        return out.join('&')
    }).join('&')
    return axios(url, {
        method: 'POST',
        headers: {
            accept: '*/*',
            'accept-language': "en-US,en;q=0.9",
            'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36',
            ...headers
        },
        data: body
    })
}
async function textpro(url, texts = ['text']) {
    if (!/^https:\/\/textpro\.me\/.+\.html$/.test(url)) throw new Error('Invalid URL')
    let res = await axios.get(url, {
        method: 'POST',
        headers: {
            accept: '*/*',
            'accept-language': "en-US,en;q=0.9",
            'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
        }
    })
    let html = res.data
    const PHPSESSID = res.headers['set-cookie'][0].split('PHPSESSID=')[1].split(';')[0]
    cookies = {
        PHPSESSID,
    }
    let forms = {
        submit: 'Go',
        token: /name="token".*value="(.+?)"/.exec(html)[1],
        build_server: 'https://textpro.me',
        build_server_id: 1
    }
    let form = new FormData()
    if (typeof texts === 'string') texts = [texts]
    for (let text of texts) form.append('text[]', text)
    for (let key in forms) form.append(key, forms[key])
    cookies = Object.entries(cookies).map(([name, value]) => cookie.serialize(name, value)).join('; ')
    let res2 = await axios(url, {
        method: 'POST',
        headers: {
            accept: '*/*',
            'accept-language': "en-US,en;q=0.9",
            ...form.getHeaders(),
            cookie: cookies,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
        },
        data: form
    })
    let html2 = res2.data
    let form_value = /<div.*?id="form_value".+>(.*?)<\/div>/.exec(html2)
    if (!form_value) throw new Error('Token invalid? ' + /No token/i.test(html2))
    let res3 = await gaspost('https://textpro.me/effect/create-image', JSON.parse(form_value[1]), {
        cookie: cookies
    })
    return 'http://textpro.me' + res3.data.image
}

class textprome {

    async tpmatrix(text) {
        return textpro('https://textpro.me/matrix-style-text-effect-online-884.html', [text]).then(res => {
            return res
        })
    }
    
    async tpbp(text) {
        return textpro('https://textpro.me/create-blackpink-logo-style-online-1001.html', [text]).then(res => {
            return res
        })
    }
    
    async tpween(text) {
        return textpro('https://textpro.me/halloween-fire-text-effect-940.html', [text]).then(res => {
            return res
        })
    }
    
    async tpthunder(text) {
        return textpro('https://textpro.me/create-thunder-text-effect-online-881.html', [text]).then(res => {
            return res
        })
    }

    async tpwl(text1, text2) {
        return textpro('https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html', [text1, text2]).then(res => {
            return res
        })
    }
    async tpph(text1, text2) {
        return textpro('https://textpro.me/pornhub-style-logo-online-generator-free-977.html', [text1, text2]).then(res => {
            return res
        })
    }
    async tpglitch(text1, text2) {
        return textpro('https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html', [text1, text2]).then(res => {
            return res
        })
    }
}

module.exports = new textprome()