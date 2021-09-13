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
    async tpneon(text) {
        return textpro('https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html', [text]).then(res => {
            return res
        })
    }
    async tpdevilwings(text) {
        return textpro('https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html', [text]).then(res => {
            return res
        })
    }
    async tpcloud(text) {
        return textpro('https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html', [text]).then(res => {
            return res
        })
    }
    async tpblood(text) {
        return textpro('https://textpro.me/blood-text-on-the-frosted-glass-941.html', [text]).then(res => {
            return res
        })
    }
    async tpblood2(text) {
        return textpro('https://textpro.me/horror-blood-text-effect-online-883.html', [text]).then(res => {
            return res
        })
    }
    async tpsteel(text) {
        return textpro('https://textpro.me/steel-text-effect-online-921.html', [text]).then(res => {
            return res
        })
    }
    async tplava(text) {
        return textpro('https://textpro.me/lava-text-effect-online-914.html', [text]).then(res => {
            return res
        })
    }
    async tptoxic(text) {
        return textpro('https://textpro.me/toxic-text-effect-online-901.html', [text]).then(res => {
            return res
        })
    }
    async tpdropwater(text) {
        return textpro('https://textpro.me/dropwater-text-effect-872.html', [text]).then(res => {
            return res
        })
    }
    async tpmetaldark(text) {
        return textpro('https://textpro.me/metal-dark-gold-text-effect-984.html', [text]).then(res => {
            return res
        })
    }
    async tpsandwrite(text) {
        return textpro('https://textpro.me/create-a-summery-sand-writing-text-effect-988.html', [text]).then(res => {
            return res
        })
    }
    async tp3dwater(text) {
        return textpro('https://textpro.me/3d-underwater-text-effect-generator-online-1013.html', [text]).then(res => {
            return res
        })
    }
    async tpg1(text) {
        return textpro('https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html', [text]).then(res => {
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
    async tpcg(text1, text2) {
        return textpro('https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html', [text1, text2]).then(res => {
            return res
        })
    }
    async tplay(text1, text2) {
        return textpro('https://textpro.me/create-layered-text-effects-online-free-1032.html', [text1, text2]).then(res => {
            return res
        })
    }
    async tpvin(text1, text2) {
        return textpro('https://textpro.me/create-realistic-vintage-style-light-bulb-1000.html', [text1, text2]).then(res => {
            return res
        })
    }
    async tpspc(text1, text2) {
        return textpro('https://textpro.me/create-space-3d-text-effect-online-985.html', [text1, text2]).then(res => {
            return res
        })
    }
    async tpstone(text1, text2) {
        return textpro('https://textpro.me/create-a-stone-text-effect-online-982.html', [text1, text2]).then(res => {
            return res
        })
    }
    async tpavg(text1, text2) {
        return textpro('https://textpro.me/create-3d-avengers-logo-online-974.html', [text1, text2]).then(res => {
            return res
        })
    }
    async tpmarvel(text1, text2) {
        return textpro('https://textpro.me/create-logo-style-marvel-studios-online-971.html', [text1, text2]).then(res => {
            return res
        })
    }
    async tp3dmetal(text1, text2) {
        return textpro('https://textpro.me/text-logo-3d-metal-silver-946.html', [text1, text2]).then(res => {
            return res
        })
    }
    async tplion(text1, text2) {
        return textpro('https://textpro.me/create-lion-logo-mascot-online-938.html', [text1, text2]).then(res => {
            return res
        })
    }
    async tpwolf(text1, text2) {
        return textpro('https://textpro.me/create-wolf-logo-galaxy-online-936.html', [text1, text2]).then(res => {
            return res
        })
    }
    async tpninja(text1, text2) {
        return textpro('https://textpro.me/create-ninja-logo-online-935.html', [text1, text2]).then(res => {
            return res
        })
    }
}

module.exports = new textprome()