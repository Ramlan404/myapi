__path = process.cwd()
const ms = require('ms');
const express = require('express');
const router = express.Router();
const fs = require('fs-extra');
const fetch = require('node-fetch');
const { spawn } = require("child_process");

const {
    Base,
    premium,
    ipgeolocation,
    brainly,
    githubstalk,
    newsline,
    amazonsearch,
    ramalanjodoh,
    tiktokstalk,
    wpsearch,
    detiknews,
    ytstalk,
    imagesearchh,
    artinama,
    igstalk,
    pinterest,
    texttoqrcode,
    stickerlinedl,
    smuledl,
    topmanga,
    topanime,
    mangasearch,
    otakulast,
    neonimeongoing,
    malanime,
    whoisip,
    ytmp4,
    playyt,
    fbdl,
    tiktokDown,
    ytsearch,
    googlesearch,
    playstore,
    searchsticker,
    ytmp3,
    shota,
    husbu,
    waifu,
    loli,
    tebakgambar,
    carigrup,
    igdl,
    openPortChecker,
    mediafiredl,
    neko,
    kemono,
    wallanime,
    anoboylast,
    subdomain,
    md5enc,
    cloudflareResolver,
    subnetLookup,
    kompasTvNews,
    mangaSearch,
    herodetails,
    ytshortdl,
    nekoNSFW,
    blowJobNSFW,
    kemonomimiNSFW,
    kitsuneNSFW,
    yuriNSFW,
    boobsNSFW,
    kuniNSFW,
    sfileSearch,
    infogempa,
    artimimpi,
    nomorhoki,
    carikatabijak,
    artikata,
    kiryuuSearch,
    dewabatchSearch,
    zodiakSearch,
    VideoDlAnySite,
    searchCodePos,
    infotsunami,
    thelazy,
    apkpure,
    jadwalbola,
    jalantikus,
    moddroid,
    antaranews,
    growstockSearch,
    konachanSearch,
    drakorSearch,
    doramaindoSearch,
    youwatchSearch,
    mangatoonSearch,
    samehadakuSearch,
    solidfilesdl,
    sfiledl,
    shopeeSearch,
    textpro
} = require('./../lib');

const { default: axios } = require('axios');
const _dbapikey = JSON.parse(fs.readFileSync('./database/premium.json'));
premium.expiredCheck(_dbapikey);

Array.prototype.random = function() {
    return this[Math.floor((Math.random() * this.length))];
}

function random(){
const array = []
const number = '1234567890'
for (let i = 0; i < 4; i++){
array.push(number.charAt(Math.floor(Math.random() * number.length)))
}
return array.join('')
}
router.get('/ucapan', async (req, res) => {
        timeZone = req.query.timeZone
    if (!timeZone) return res.json({ status : false, creator : `Aqulzz`, message : "masukan parameter timeZone"})

    try {
    let WaktuJKt = new Date().toLocaleString("en-US", {timeZone: timeZone});

		function tamHari(WaktuJKt){
            var date = new Date(WaktuJKt);
            var waktoo = date.getHours();
            switch(waktoo){
                case 0: waktoo = "Tengah Malam🌚"; break;
                case 1: waktoo = "Tengah Malam🌒"; break;
                case 2: waktoo = "Dini Hari🌒"; break;
                case 3: waktoo = "Dini Hari🌓"; break;
                case 4: waktoo = "Subuh🌔"; break;
                case 5: waktoo = "Subuh🌔"; break;
                case 6: waktoo = "Pagi🌝"; break;
                case 7: waktoo = "Pagi🌝"; break;
                case 8: waktoo = "Pagi🌝"; break;
                case 9: waktoo = "Pagi"; break;
                case 10: waktoo = "Pagi🌞"; break;
                case 11: waktoo = "Siang🌞"; break;
                case 12: waktoo = "Siang🌞"; break;
                case 13: waktoo = "Siang🌞"; break;
                case 14: waktoo = "Siang🌞"; break;
                case 15: waktoo = "Sore🌝"; break;
                case 16: waktoo = "Sore🌝"; break;
                case 17: waktoo = "Sore🌖"; break;
                case 18: waktoo = "Magrib🌘"; break;
                case 19: waktoo = "Magrib🌚"; break;
                case 20: waktoo = "Malam🌚"; break;
                case 21: waktoo = "Malam🌚"; break;
                case 22: waktoo = "Malam🌚"; break;
                case 23: waktoo = "Tengah Malam🌚"; break;
            }
            var tampilHari = "" + waktoo;
            return `${tampilHari}`
        }

    res.json({
        status: true,
        creator: `Aqulzz`,
        message: `Jangan lupa subs YT RAMLAN ID`,
        result : tamHari(WaktuJKt)
    })
    } catch (e) {
        console.log(e)
        res.json({ status : false, creator : `Aqulzz`, message : "kenapa error? karna lu wibu"})
    }

})

router.get('/hitungmundur', async (req, res) => {
        bulan = req.query.bulan
        tanggal = req.query.tanggal

    if (!bulan) return res.json({ status : false, creator : `Aqulzz`, message : "masukan parameter bulan"})
    if (!tanggal) return res.json({ status : false, creator : `Aqulzz`, message : "masukan parameter tanggal"})

    try {
    var countDownDate = new Date(`${bulan} ${tanggal}, 2021 00:00:00`).getTime();
        var now = new Date().getTime();

		function kurangwaktu(waktunya, waktuskrg){
			var distance = waktunya - waktuskrg;
			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			return days + "Hari " + hours + "Jam " + minutes + "Menit " + seconds + "Detik"
		}

    res.json({
        status: true,
        creator: `Aqulzz`,
        message: `Jangan lupa subs YT RAMLAN ID`,
        result : kurangwaktu(countDownDate, now)
    })
    } catch (e) {
        console.log(e)
        res.json({ status : false, creator : `Aqulzz`, message : "kenapa eror? karna lu wibu"})
    }

})

router.get('/nuliskiri', async(req, res) => {
    var text = req.query.text
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);
    var splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
    var fixHeight = splitText.split('\n').slice(0, 31).join('\n')

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!text) {
        res.status(500).send({
            status: 500,
            message: 'masukin parameter'
        })
    } else {
                spawn('convert', [
                    __path + '/media/nulis/images/buku/sebelumkiri.jpg',
                    '-font',
                    __path + '/media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '22',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+140+153',
                    fixHeight,
                    __path + '/media/nulis/images/buku/setelahkiri.jpg'
                ])
                .on('error', () => {
                res.json({ status : false,
                creator : `Ramlan ID`,
                message : "kenapa eror? karna lu wibu"})
                })
                .on('exit', () => {
                    res.sendFile(__path +'/media/nulis/images/buku/setelahkiri.jpg')
                })
               }
            })
router.get('/nuliskanan', async(req, res) => {
    var text = req.query.text
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);
    var splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
    var fixHeight = splitText.split('\n').slice(0, 31).join('\n')

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!text) {
        res.status(500).send({
            status: 500,
            message: 'masukin parameter'
        })
    } else {
                spawn('convert', [
                    __path + '/media/nulis/images/buku/sebelumkanan.jpg',
                    '-font',
                    __path + '/media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+128+129',
                    fixHeight,
                    __path + '/media/nulis/images/buku/setelahkanan.jpg'
                ])
                .on('error', () => {
                res.json({ status : false,
                creator : `Ramlan ID`,
                message : "kenapa eror? karna lu wibu"})
                })
                .on('exit', () => {
                    res.sendFile(__path +'/media/nulis/images/buku/setelahkanan.jpg')
                })
               }
            })
router.get('/foliokiri', async(req, res) => {
    var text = req.query.text
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);
    var splitText = text.replace(/(\S+\s*){1,13}/g, '$&\n')
    var fixHeight = splitText.split('\n').slice(0, 38).join('\n')

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!text) {
        res.status(500).send({
            status: 500,
            message: 'masukin parameter'
        })
    } else {
                spawn('convert', [
                    './media/nulis/images/folio/sebelumkiri.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '1720x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '4',
                    '-annotate',
                    '+48+185',
                    fixHeight,
                    './media/nulis/images/folio/setelahkiri.jpg'
                ])
                .on('error', () => {
                res.json({ status : false,
                creator : `Ramlan ID`,
                message : "kenapa eror? karna lu wibu"})
                })
                .on('exit', () => {
                    res.sendFile(__path +'/media/nulis/images/folio/setelahkiri.jpg')
                })
               }
            })
router.get('/foliokanan', async(req, res) => {
    var text = req.query.text
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);
    var splitText = text.replace(/(\S+\s*){1,13}/g, '$&\n')
    var fixHeight = splitText.split('\n').slice(0, 38).join('\n')

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!text) {
        res.status(500).send({
            status: 500,
            message: 'masukin parameter'
        })
    } else {
                spawn('convert', [
                    './media/nulis/images/folio/sebelumkanan.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '3',
                    '-annotate',
                    '+89+190',
                    fixHeight,
                    './media/nulis/images/folio/setelahkanan.jpg'
                ])
                .on('error', () => {
                res.json({ status : false,
                creator : `Ramlan ID`,
                message : "kenapa eror? karna lu wibu"})
                })
                .on('exit', () => {
                    res.sendFile(__path +'/media/nulis/images/folio/setelahkanan.jpg')
                })
               }
            })
router.get('/other/tts', async (req, res) => {
  var codebahasa = 'id'
  var text = req.query.text
  var apikey = req.query.apikey
  
  var isPremium = await premium.checkPremiumUser(apikey);
    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!text) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
  const googleTTS = require('google-tts-api'); // CommonJS

// get audio URL
const url = googleTTS.getAudioUrl(text, {
  lang: 'id',
  slow: false,
  host: 'https://translate.google.com',
})
res.send(url)
/*            ttsGB.save(__path + '/media/sound/tts.mp3', text, function () {
            res.sendFile(__path + '/media/sound/tts.mp3')
        })*/
        }
})

router.get('/shopee-search', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        shopeeSearch(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/sfile-dl', async(req, res) => {
    var url = req.query.url
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!url) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    }
    if (!url.includes('sfile.mobi')) {
        res.status(403).send({
            code: 403,
            message: 'url tidak benar,, yang valid seperti: https://sfile.mobi/97Fjwx9hQI7'
        })
    } else {
        sfiledl(url).then(data => {
            res.send(data)
        })
    }
})

router.get('/solidfile-dl', async(req, res) => {
    var url = req.query.url
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!url) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    }
    if (!url.includes('solidfiles.com')) {
        res.status(403).send({
            code: 403,
            message: 'url tidak benar,, yang valid seperti: http://www.solidfiles.com/v/2wXw3ryLmq7NR'
        })
    } else {
        solidfilesdl(url).then(data => {
            res.send(data)
        })
    }
})

router.get('/samehadaku-search', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        samehadakuSearch(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/mangatoon-search', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        mangatoonSearch(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/youwatch-search', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        youwatchSearch(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/doramaindo-search', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        doramaindoSearch(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/drakor-search', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        drakorSearch(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/konachan-search', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        konachanSearch(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/growstock-search', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        growstockSearch(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/antara-news', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        antaranews().then(data => {
            res.send(data)
        })
    }
})

router.get('/moddroid-search', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        moddroid(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/jalantikus-search', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey, _dbapikey);
    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        jalantikus(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/jadwal-bola', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        jadwalbola().then(data => {
            res.send(data)
        })
    }
})

router.get('/apkpure-search', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        apkpure(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/thelazy-search', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        thelazy(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/info-tsunami', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        infotsunami().then(data => {
            res.send(data)
        })
    }
})

router.get('/codepos-search', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        searchCodePos(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/video-dl', async(req, res) => {
    var url = req.query.url
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!url) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        VideoDlAnySite(url).then(data => {
            res.send(data)
        })
    }
})

router.get('/zodiak', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        zodiakSearch(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/dewabatch-search', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        dewabatchSearch(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/kiryuu-search', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        kiryuuSearch(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/arti-kata', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        artikata(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/kata-bijak', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        carikatabijak(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/nomor-hoki', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        nomorhoki(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/arti-mimpi', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        artimimpi(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/info-gempa', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        infogempa().then(data => {
            res.send(data)
        })
    }
})

router.get('/sfile-search', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        sfileSearch(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/nsfw/kuni', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        kuniNSFW().then(data => {
            res.send(data)
        })
    }
})

router.get('/nsfw/boobs', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        boobsNSFW().then(data => {
            res.send(data)
        })
    }
})

router.get('/nsfw/yuri', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        yuriNSFW().then(data => {
            res.send(data)
        })
    }
})

router.get('/nsfw/kitsune', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        kitsuneNSFW().then(data => {
            res.send(data)
        })
    }
})

router.get('/nsfw/kemonomimi', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        kemonomimiNSFW().then(data => {
            res.send(data)
        })
    }
})

router.get('/nsfw/blowjob', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        blowJobNSFW().then(data => {
            res.send(data)
        })
    }
})

router.get('/nsfw/neko', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        nekoNSFW().then(data => {
            res.send(data)
        })
    }
})
router.get('/nsfw/trap', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
  var acak = random()
  let hasil = 'https://api.lolhuman.xyz/api/random/nsfw/trap?apikey=YTRAMLANID'
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/'+acak+'.jpg', data)
  res.sendFile(__path +'/tmp/'+acak+'.jpg')
  }
 })
router.get('/nsfw/randomhentong', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
  var acak = random()
  let hasil = 'https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=YTRAMLANID'
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/'+acak+'.jpg', data)
  res.sendFile(__path +'/tmp/'+acak+'.jpg')
  }
 })
router.get('/nsfw/ahegao', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
  var acak = random()
  let hasil = 'https://api.lolhuman.xyz/api/random/nsfw/ahegao?apikey=YTRAMLANID'
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/'+acak+'.jpg', data)
  res.sendFile(__path +'/tmp/'+acak+'.jpg')
  }
 })
router.get('/nsfw/echi', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
  var acak = random()
  let hasil = 'https://api.lolhuman.xyz/api/random/nsfw/ecchi?apikey=YTRAMLANID'
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/'+acak+'.jpg', data)
  res.sendFile(__path +'/tmp/'+acak+'.jpg')
  }
 })
router.get('/nsfw/ero', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
  var acak = random()
  let hasil = 'https://api.lolhuman.xyz/api/random2/ero?apikey=YTRAMLANID'
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/'+acak+'.jpg', data)
  res.sendFile(__path +'/tmp/'+acak+'.jpg')
  }
 })
router.get('/ytshort-dl', async(req, res) => {
    var url = req.query.url
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!url) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        ytshortdl(url).then(data => {
            res.send(data)
        })
    }
})

router.get('/heroml', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        herodetails(q).then(data => {
            res.send(data)
        })
    }
})


router.get('/manga-search', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        mangaSearch(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/kompasTV-news', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        kompasTvNews().then(data => {
            res.send(data)
        })
    }
})

router.get('/tools/subnet-lookup', async(req, res) => {
    var ip = req.query.ip
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!ip) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        subnetLookup(ip).then(data => {
            res.send(data)
        })
    }
})

router.get('/tools/cloudflare-resolver', async(req, res) => {
    var domain = req.query.domain
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!domain) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        cloudflareResolver(domain).then(data => {
            res.send(data)
        })
    }
})

router.get('/tools/md5-encrypt', async(req, res) => {
    var teks = req.query.teks
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!teks) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        md5enc(teks).then(data => {
            res.send(data)
        })
    }
})

router.get('/tools/subdomain', async(req, res) => {
    var ip = req.query.ip
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!ip) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        subdomain(ip).then(data => {
            res.send(data)
        })
    }
})

router.get('/anoboy-last', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        anoboylast().then(data => {
            res.send(data)
        })
    }
})

router.get('/wallanime', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        wallanime().then(data => {
            res.send(data)
        })
    }
})

router.get('/kemono', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        kemono().then(data => {
            res.send(data)
        })
    }
})

router.get('/neko', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        neko().then(data => {
            res.send(data)
        })
    }
})

router.get('/mediafire-dl', async(req, res) => {
    var url = req.query.url
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!url || !url.includes('mediafire.com')) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter url / url tidak valid!'
        })
    } else {
        mediafiredl(url).then(data => {
            res.send(data)
        })
    }
})

router.get('/tools/openport-checker', async(req, res) => {
    var domain = req.query.domain
    var port = req.query.port
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!domain || !port) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        openPortChecker(domain, port).then(data => {
            res.send(data)
        })
    }
})

router.get('/game/tebak-gambar', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        tebakgambar().then(data => {
            res.send(data)
        })
    }
})

router.get('/ig-dl', async(req, res) => {
    var url = req.query.url
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!url) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        igdl(url).then(data => {
            res.send(data)
        })
    }
})

router.get('/search-grup', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        carigrup(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/game/tebak-anime', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        var xzyppp = fs.readFileSync('./database/tebakanime.json')
        var ditiin = JSON.parse(xzyppp)
        var rwscwx = Math.floor(Math.random() * ditiin.length)
        var rin421 = ditiin[rwscwx]
        var jawaban = rin421.jawaban.toLowerCase()
        res.send({
            status: 200,
            soal: rin421.soal,
            jawaban: jawaban
        })
    }
})

router.get('/game/caklontong', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        var xzyppp = fs.readFileSync('./database/caklontong.json')
        var ditiin = JSON.parse(xzyppp)
        var rwscwx = Math.floor(Math.random() * ditiin.length)
        var rin421 = ditiin[rwscwx]
        var jawaban = rin421.jawaban.toLowerCase()
        res.send({
            status: 200,
            soal: rin421.soal,
            jawaban: jawaban
        })
    }
})

router.get('/game/family100', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        var xzyppp = fs.readFileSync('./database/family100.json')
        var ditiin = JSON.parse(xzyppp)
        var rwscwx = Math.floor(Math.random() * ditiin.length)
        var rin421 = ditiin[rwscwx]
        var jawaban = rin421.jawaban.toLowerCase()
        res.send({
            status: 200,
            soal: rin421.soal,
            jawaban: jawaban
        })
    }
})

router.get('/random/darkjoke', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        var xzyppp = fs.readFileSync('./database/darkjoke.json')
        var ditiin = JSON.parse(xzyppp)
        var rwscwx = Math.floor(Math.random() * ditiin.length)
        var rin421 = ditiin[rwscwx]
        res.send({
            status: 200,
            urlimage: rin421.data
        })
    }
})


router.get('/random/memeindo', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        var xzyppp = fs.readFileSync('./database/memeindo.json')
        var ditiin = JSON.parse(xzyppp)
        var rwscwx = Math.floor(Math.random() * ditiin.length)
        var rin421 = ditiin[rwscwx]
        res.send({
            status: 200,
            urlimage: rin421
        })
    }
})
router.get('/random/memeindo2', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
  var acak = random()
  let hasil = 'https://api.xteam.xyz/randomimage/meme2?APIKEY=YTRAMLANID'
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/'+acak+'.jpg', data)
  res.sendFile(__path +'/tmp/'+acak+'.jpg')
  }
 })
router.get('/random/cehor', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        var xzyppp = fs.readFileSync('./database/cehor.json')
        var ditiin = JSON.parse(xzyppp)
        var rwscwx = Math.floor(Math.random() * ditiin.length)
        var rin421 = ditiin[rwscwx]
        res.send({
            status: 200,
            judul: rin421.judul,
            thumb: rin421.thumb,
            desc: rin421.desc,
            story: rin421.story
        })
    }
})

router.get('/random/fakta', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        var xzyppp = fs.readFileSync('./database/fakta.json')
        var ditiin = JSON.parse(xzyppp)
        var rwscwx = Math.floor(Math.random() * ditiin.length)
        var rin421 = ditiin[rwscwx]
        res.send({
            status: 200,
            fakta: rin421.fakta
        })
    }
})

router.get('/random/katabijak', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        var xzyppp = fs.readFileSync('./database/katabijak.json')
        var ditiin = JSON.parse(xzyppp)
        var rwscwx = Math.floor(Math.random() * ditiin.length)
        var rin421 = ditiin[rwscwx]
        res.send({
            status: 200,
            katabijak: rin421.katabijak
        })
    }
})

router.get('/random/motivasi', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        var xzyppp = fs.readFileSync('./database/motivasi.json')
        var ditiin = JSON.parse(xzyppp)
        var rwscwx = Math.floor(Math.random() * ditiin.length)
        var rin421 = ditiin[rwscwx]
        res.send({
            status: 200,
            motivasi: rin421.motivasi
        })
    }
})

router.get('/random/bucin', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        var xzyppp = fs.readFileSync('./database/bucin.json')
        var ditiin = JSON.parse(xzyppp)
        var rwscwx = Math.floor(Math.random() * ditiin.length)
        var rin421 = ditiin[rwscwx]
        res.send({
            status: 200,
            bucin: rin421.bucin
        })
    }
})

router.get('/random/pantun', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        var xzyppp = fs.readFileSync('./database/pantun.json')
        var ditiin = JSON.parse(xzyppp)
        var rwscwx = Math.floor(Math.random() * ditiin.length)
        var rin421 = ditiin[rwscwx]
        res.send({
            status: 200,
            pantun: rin421.Pantun
        })
    }
})

router.get('/random/quotes', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        var xzyppp = fs.readFileSync('./database/quote.json')
        var ditiin = JSON.parse(xzyppp)
        var rwscwx = Math.floor(Math.random() * ditiin.length)
        var rin421 = ditiin[rwscwx]
        res.send({
            status: 200,
            quote: rin421.quote,
            author: rin421.by
        })
    }
})

router.get('/loli', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        loli().then(data => {
            res.send(data)
        })
    }
})

router.get('/waifu', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        waifu().then(data => {
            res.send(data)
        })
    }
})

router.get('/husbu', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        husbu().then(data => {
            res.send(data)
        })
    }
})

router.get('/shota', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        shota().then(data => {
            res.send(data)
        })
    }
})
router.get('/sagiri', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
  var acak = random()
  let hasil = 'https://api.lolhuman.xyz/api/random/sagiri?apikey=YTRAMLANID'
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/'+acak+'.jpg', data)
  res.sendFile(__path +'/tmp/'+acak+'.jpg')
  }
 })
router.get('/megumin', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
  var acak = random()
  let hasil = 'https://api.lolhuman.xyz/api/random/megumin?apikey=YTRAMLANID'
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/'+acak+'.jpg', data)
  res.sendFile(__path +'/tmp/'+acak+'.jpg')
  }
 })
router.get('/twitter-stalk', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        twtstalk(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/ytmp3', async(req, res) => {
    var url = req.query.url
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!url) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        ytmp3(url).then(data => {
            res.send(data)
        })
    }
})

router.get('/search-sticker', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        searchsticker(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/playstore', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        playstore(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/google-search', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        googlesearch(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/yt-search', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        ytsearch(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/fbdl', async(req, res) => {
    var url = req.query.url
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!url) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        fbdl(url).then(data => {
            res.send(data)
        })
    }
})
router.get('/tiktok', async(req, res) => {
    var url = req.query.url
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!url) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        tiktokDown(url).then(data => {
            res.send(data)
        })
    }
})
router.get('/play', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        playyt(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/ytmp4', async(req, res) => {
    var url = req.query.url
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!url) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        ytmp4(url).then(data => {
            data.dl_link = req.protocol + '://' + req.headers.host + '/ytmate?url=' + data.dl_link
            res.send(data)
        })
    }
})


/*router.get('/random/asupan', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    var username = ["ptl_repost", "girlsweet_id", "goodlookings.id", "penyegaranmata.idn", "xi.aoxiao59", "dailyjapanesevideos"]
    username = username.random()
    var result = await axios.get(`https://www.instagram.com/${username}/channel/?__a=1`, { headers: { cookie: "ig_did=0FCEAEE0-4EC5-4A70-8E58-014C4AE4DF4D; ig_nrcb=1; mid=YSuOOQALAAGkt2WPJrNcElOGLEtM; csrftoken=SosDB0arfALrveBISdjHWNSlFAw6a8RC; ds_user_id=44290388479; sessionid=44290388479:6MkMXJ3mmv3Q9I:23; shbid="10844\05444290388479\0541661780530:01f78f87ebcb361e01979adbed81c9c71bdb92de05f25296c481f492e1c271addcbd0e16"; shbts="1630244530\05444290388479\0541661780530:01f776247934475024cb60eb813af93360c4c62895812a9fbb2c433224eb53ce6012b5a9"; rur="VLL\05444290388479\0541661781495:01f7eb475cdc2d217cacfc4be90d79f2c26cabe6a6478a9540b81ffe033ec56cd4db672c" } })
    result = result.data["graphql"]["user"]["edge_owner_to_timeline_media"]["edges"]
    var video = []
    for (let x in result) {
        try {
            node = result[x].node
            if (node["__typename"] == "GraphVideo") video.push(node["video_url"])
        } catch {}
    }
    res.json({
        status: 200,
        creator: 'Ramlan ID',
        url: video.random()
    })
})*/

router.get('/random/gachacewek', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
  var acak = random()
  let hasil = 'https://api.xteam.xyz/randomimage/cewe?APIKEY=YTRAMLANID'
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/'+acak+'.jpg', data)
  res.sendFile(__path +'/tmp/'+acak+'.jpg')
  }
 })
router.get('/random/gachacowok', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
  var acak = random()
  let hasil = 'https://api.xteam.xyz/randomimage/cowo?APIKEY=YTRAMLANID'
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/'+acak+'.jpg', data)
  res.sendFile(__path +'/tmp/'+acak+'.jpg')
  }
 })
router.get('/tools/whois', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        whoisip(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/malanime', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        malanime(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/neonimeongoing', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        neonimeongoing().then(data => {
            res.send(data)
        })
    }
})

router.get('/otakulast', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        otakulast().then(data => {
            res.send(data)
        })
    }
})

router.get('/topanime', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        topanime().then(data => {
            res.send(data)
        })
    }
})

router.get('/mangasearch', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        mangasearch(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/topanime', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        topanime().then(data => {
            res.send(data)
        })
    }
})

router.get('/topmanga', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        topmanga().then(data => {
            res.send(data)
        })
    }
})

router.get('/smule-dl', async(req, res) => {
    var url = req.query.url
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!url) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        smuledl(url).then(data => {
            res.send(data)
        })
    }
})


router.get('/sline-dl', async(req, res) => {
    var url = req.query.url
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!url) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        stickerlinedl(url).then(data => {
            res.send(data)
        })
    }
})

router.get('/qrcode', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        texttoqrcode(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/pinterest', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        pinterest(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/igstalk', async(req, res) => {
    var username = req.query.username
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!username) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        igstalk(username).then(data => {
            res.send(data)
        })
    }
})

router.get('/artinama', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        artinama(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/google-image', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        imagesearchh(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/yt-stalk', async(req, res) => {
    var username = req.query.username
    var apikey = req.query.apikey
    var isPremium = premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!username) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        ytstalk(username).then(data => {
            res.send(data)
        })
    }
})

router.get('/detik-news', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        detiknews().then(data => {
            res.send(data)
        })
    }
})

router.get('/createapikey', async(req, res) => {
    const createapikey = req.query.apikey
    const waktuapikey = req.query.time
    const keytoaccess = req.query.key
    if (!createapikey) {
        res.send({
            code: 403,
            message: 'What?'
        })
    }
    if (keytoaccess !== '06112002') {
        res.send({
            code: 403,
            message: 'What?'
        })
    } else {
        premium.addPremiumUser(createapikey, waktuapikey)
        res.send({
            code: 200,
            message: `success create apikey ${createapikey}`
        })
    }
})

router.get('/checkapikey', async(req, res) => {
    const apikeynyaaa = req.query.apikey
    if (!apikeynyaaa) {
        res.send({
            code: 403,
            message: 'Input your apikey'
        })
    } else {
        try {
            const expired = (await premium.getPremiumExpired(apikeynyaaa)).expired
            const cekvip = ms(expired - Date.now())
            res.send({
                code: 200,
                message: `Apikey Expire at: ${cekvip}`
            })
        } catch {
            __dirname = process.cwd();
            return res.status(403).sendFile(__dirname + '/views/403.html');
        }
    }
})

router.get('/delapikey', async(req, res) => {
    const delapikey = req.query.apikey
    const keytoaccesss = req.query.key
    if (!delapikey) {
        res.send({
            code: 403,
            message: 'What?'
        })
    }
    if (keytoaccesss !== '06112002') {
        res.send({
            code: 403,
            message: 'What?'
        })
    } else {
        premium.deleteApikey(delapikey)
        res.send({
            code: 200,
            message: `success delete apikey ${delapikey}`
        })
    }
})

router.get('/listapikey', async(req, res) => {
    const keytoacces = req.query.key
    if (keytoacces !== '06112002') {
        res.send({
            code: 403,
            message: 'What?'
        })
    } else {
        const deret = await premium.getAllPremiumUser()
        res.send({
            status: 200,
            data: deret
        })
    }
})

router.get('/tools/base64', async(req, res) => {
    const encode = req.query.encode
    const decode = req.query.decode
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }

    if (!encode && !decode) {
        res.status(400).send({
            code: 400,
            message: 'Failed, pliese input parameter.'
        })
    } else if (encode) {
        Base('b64enc', encode)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    } else if (decode) {
        Base('b64dec', decode)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }
})

router.get('/tools/ipgeolocation', async(req, res) => {
    const ip = req.query.ip
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!ip) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter ip'
        })
    } else {
        ipgeolocation(ip).then(data => {
            res.send(data)
        })
    }
})

router.get('/wattpad', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        wpsearch(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/tiktok-stalk', async(req, res) => {
    var username = req.query.username
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!username) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        tiktokstalk(username).then(data => {
            res.send(data)
        })
    }
})

router.get('/ramal-jodoh', async(req, res) => {
    var nama1 = req.query.nama1
    var nama2 = req.query.nama2
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!nama1 && !nama2) {
        res.send({
            status: 500,
            message: 'masukan parameter'
        })
    } else {
        ramalanjodoh(nama1, nama2).then(data => {
            res.send(data)
        })
    }
})

router.get('/amazon', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.send({
            status: 500,
            message: 'masukan parameter'
        })
    } else {
        amazonsearch(q).then(data => {
            res.send(data)
        })
    }
})

router.get('/newsline', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    } else {
        newsline().then(data => {
            res.send(data)
        })
    }
})

router.get('/github-stalk', async(req, res) => {
    var username = req.query.username
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!username) {
        res.status(500).send({
            status: 500,
            message: 'masukin parameter username'
        })
    } else {
        githubstalk(username).then(data => {
            res.send(data)
        })
    }
})

router.get('/brainly', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            status: 500,
            message: 'masukin parameter'
        })
    } else {
        brainly(q).then(data => {
            res.send(data)
        })
    }
})
router.get('/textpro/:id', async(req, res) => {
    var id = req.params.id
    var text = req.query.text
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!text) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        var image = ""
        if (id == 'matrix') {
            image = await textpro.tpmatrix(text)
        }
        if (id == 'blackpink') {
            image = await textpro.tpbp(text)
        }
        if (id == 'halloween') {
            image = await textpro.tpween(text)
        }
        if (id == 'thundername') {
            image = await textpro.tpthunder(text)
        }
        if (id == 'neon') {
            image = await textpro.tpneon(text)
        }
        if (id == 'devilwings') {
            image = await textpro.tpdevilwings(text)
        }
        if (id == 'cloudtext') {
            image = await textpro.tpcloud(text)
        }
        if (id == 'bloodtext') {
            image = await textpro.tpblood(text)
        }
        if (id == 'bloodtext2') {
            image = await textpro.tpblood2(text)
        }
        if (id == 'steeltext') {
            image = await textpro.tpsteel(text)
        }
        if (id == 'lavatext') {
            image = await textpro.tplava(text)
        }
        if (id == 'toxiclogo') {
            image = await textpro.tptoxic(text)
        }
        if (id == 'dropwater') {
            image = await textpro.tpdropwater(text)
        }
        if (id == 'metaldark') {
            image = await textpro.tpmetaldark(text)
        }
        if (id == 'sandwrite') {
            image = await textpro.tpsandwrite(text)
        }
        if (id == '3dwater') {
            image = await textpro.tp3dwater(text)
        }
        if (id == 'graffiti') {
            image = await textpro.tpg1(text)
        }
        var buffer = await axios.get(image, {
            responseType: 'arraybuffer',
            headers: {
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
            }
        })
        res.end(buffer.data)
    }
})

router.get('/textpro2/:id', async(req, res) => {
    var id = req.params.id
    var text1 = req.query.text1
    var text2 = req.query.text2
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!text1) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else if (!text2) {
        res.status(500).send({
            code: 500,
            message: 'masukan parameter'
        })
    } else {
        var image = ""
        if (id == 'graffiti2') {
            image = await textpro.tpwl(text1, text2)
        }
        if (id == 'phlogo') {
            image = await textpro.tpph(text1, text2)
        }
        if (id == 'glitch') {
            image = await textpro.tpglitch(text1, text2)
        }
        if (id == 'graffiti3') {
            image = await textpro.tpcg(text1, text2)
        }
        if (id == 'layeredtext') {
            image = await textpro.tplay(text1, text2)
        }
        if (id == 'vintage') {
            image = await textpro.tpvin(text1, text2)
        }
        if (id == '3dspace') {
            image = await textpro.tpspc(text1, text2)
        }
        if (id == 'stonetext') {
            image = await textpro.tpstone(text1, text2)
        }
        if (id == 'avengers') {
            image = await textpro.tpavg(text1, text2)
        }
        if (id == 'marvellogo') {
            image = await textpro.tpmarvel(text1, text2)
        }
        if (id == '3dmetal') {
            image = await textpro.tp3dmetal(text1, text2)
        }
        if (id == 'lionlogo') {
            image = await textpro.tplion(text1, text2)
        }
        if (id == 'wolflogo') {
            image = await textpro.tpwolf(text1, text2)
        }
        if (id == 'ninjalogo') {
            image = await textpro.tpninja(text1, text2)
        }                                

        var buffer = await axios.get(image, {
            responseType: 'arraybuffer',
            headers: {
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36'
            }
        })
        res.end(buffer.data)
    }
})
// PHOTO OXY LOLHUMAN
router.get('/photooxy/shadowtext', async(req, res) => {
    var text = req.query.text
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!text) {
        res.status(500).send({
            status: 500,
            message: 'masukin parameter'
        })
    } else {
  var acak = random()
  let hasil = 'https://api.lolhuman.xyz/api/photooxy1/shadow?apikey=YTRAMLANID&text='+ text +''
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/'+acak+'.jpg', data)
  res.sendFile(__path +'/tmp/'+acak+'.jpg')
  }
 })
router.get('/photooxy/romancetext', async(req, res) => {
    var text = req.query.text
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!text) {
        res.status(500).send({
            status: 500,
            message: 'masukin parameter'
        })
    } else {
  var acak = random()
  let hasil = 'https://api.lolhuman.xyz/api/photooxy1/romance?apikey=YTRAMLANID&text='+ text +''
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/'+acak+'.jpg', data)
  res.sendFile(__path +'/tmp/'+acak+'.jpg')
  }
 })
router.get('/photooxy/smoketext', async(req, res) => {
    var text = req.query.text
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!text) {
        res.status(500).send({
            status: 500,
            message: 'masukin parameter'
        })
    } else {
  var acak = random()
  let hasil = 'https://api.lolhuman.xyz/api/photooxy1/smoke?apikey=YTRAMLANID&text='+ text +''
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/'+acak+'.jpg', data)
  res.sendFile(__path +'/tmp/'+acak+'.jpg')
  }
 })
router.get('/photooxy/burnpaper', async(req, res) => {
    var text = req.query.text
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!text) {
        res.status(500).send({
            status: 500,
            message: 'masukin parameter'
        })
    } else {
  var acak = random()
  let hasil = 'https://api.lolhuman.xyz/api/photooxy1/burnpaper?apikey=YTRAMLANID&text='+ text +''
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/'+acak+'.jpg', data)
  res.sendFile(__path +'/tmp/'+acak+'.jpg')
  }
 })
router.get('/photooxy/lovemessage', async(req, res) => {
    var text = req.query.text
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!text) {
        res.status(500).send({
            status: 500,
            message: 'masukin parameter'
        })
    } else {
  var acak = random()
  let hasil = 'https://api.lolhuman.xyz/api/photooxy1/lovemessage?apikey=YTRAMLANID&text='+ text +''
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/'+acak+'.jpg', data)
  res.sendFile(__path +'/tmp/'+acak+'.jpg')
  }
 })
router.get('/photooxy/undergrass', async(req, res) => {
    var text = req.query.text
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!text) {
        res.status(500).send({
            status: 500,
            message: 'masukin parameter'
        })
    } else {
  var acak = random()
  let hasil = 'https://api.lolhuman.xyz/api/photooxy1/undergrass?apikey=YTRAMLANID&text='+ text +''
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/'+acak+'.jpg', data)
  res.sendFile(__path +'/tmp/'+acak+'.jpg')
  }
 })
router.get('/photooxy/lovetext', async(req, res) => {
    var text = req.query.text
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!text) {
        res.status(500).send({
            status: 500,
            message: 'masukin parameter'
        })
    } else {
  var acak = random()
  let hasil = 'https://api.lolhuman.xyz/api/photooxy1/love?apikey=YTRAMLANID&text='+ text +''
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/'+acak+'.jpg', data)
  res.sendFile(__path +'/tmp/'+acak+'.jpg')
  }
 })
router.get('/photooxy/coffetext', async(req, res) => {
    var text = req.query.text
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!text) {
        res.status(500).send({
            status: 500,
            message: 'masukin parameter'
        })
    } else {
  var acak = random()
  let hasil = 'https://api.lolhuman.xyz/api/photooxy1/coffe?apikey=YTRAMLANID&text='+ text +''
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/'+acak+'.jpg', data)
  res.sendFile(__path +'/tmp/'+acak+'.jpg')
  }
 })
router.get('/photooxy/woodheart', async(req, res) => {
    var text = req.query.text
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!text) {
        res.status(500).send({
            status: 500,
            message: 'masukin parameter'
        })
    } else {
  var acak = random()
  let hasil = 'https://api.lolhuman.xyz/api/photooxy1/woodheart?apikey=YTRAMLANID&text='+ text +''
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/'+acak+'.jpg', data)
  res.sendFile(__path +'/tmp/'+acak+'.jpg')
  }
 })
router.get('/photooxy/woodboard', async(req, res) => {
    var text = req.query.text
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!text) {
        res.status(500).send({
            status: 500,
            message: 'masukin parameter'
        })
    } else {
  var acak = random()
  let hasil = 'https://api.lolhuman.xyz/api/photooxy1/woodenboard?apikey=YTRAMLANID&text='+ text +''
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/'+acak+'.jpg', data)
  res.sendFile(__path +'/tmp/'+acak+'.jpg')
  }
 })
router.get('/photooxy/wolfmetal', async(req, res) => {
    var text = req.query.text
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!text) {
        res.status(500).send({
            status: 500,
            message: 'masukin parameter'
        })
    } else {
  var acak = random()
  let hasil = 'https://api.lolhuman.xyz/api/photooxy1/wolfmetal?apikey=YTRAMLANID&text='+ text +''
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/'+acak+'.jpg', data)
  res.sendFile(__path +'/tmp/'+acak+'.jpg')
  }
 })
router.get('/photooxy/underwater', async(req, res) => {
    var text = req.query.text
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!text) {
        res.status(500).send({
            status: 500,
            message: 'masukin parameter'
        })
    } else {
  var acak = random()
  let hasil = 'https://api.lolhuman.xyz/api/photooxy1/underwater?apikey=YTRAMLANID&text='+ text +''
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/'+acak+'.jpg', data)
  res.sendFile(__path +'/tmp/'+acak+'.jpg')
  }
 })
router.get('/photooxy/falleaves', async(req, res) => {
    var text = req.query.text
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!text) {
        res.status(500).send({
            status: 500,
            message: 'masukin parameter'
        })
    } else {
  var acak = random()
  let hasil = 'https://api.lolhuman.xyz/api/photooxy1/fallleaves?apikey=YTRAMLANID&text='+ text +''
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/'+acak+'.jpg', data)
  res.sendFile(__path +'/tmp/'+acak+'.jpg')
  }
 })
router.get('/photooxy/flamingtext', async(req, res) => {
    var text = req.query.text
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!text) {
        res.status(500).send({
            status: 500,
            message: 'masukin parameter'
        })
    } else {
  var acak = random()
  let hasil = 'https://api.lolhuman.xyz/api/photooxy1/flamming?apikey=YTRAMLANID&text='+ text +''
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/'+acak+'.jpg', data)
  res.sendFile(__path +'/tmp/'+acak+'.jpg')
  }
 })
router.get('/photooxy/harrypotter', async(req, res) => {
    var text = req.query.text
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!text) {
        res.status(500).send({
            status: 500,
            message: 'masukin parameter'
        })
    } else {
  var acak = random()
  let hasil = 'https://api.lolhuman.xyz/api/photooxy1/harrypotter?apikey=YTRAMLANID&text='+ text +''
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/'+acak+'.jpg', data)
  res.sendFile(__path +'/tmp/'+acak+'.jpg')
  }
 })
router.get('/photooxy/carvedwood', async(req, res) => {
    var text = req.query.text
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!text) {
        res.status(500).send({
            status: 500,
            message: 'masukin parameter'
        })
    } else {
  var acak = random()
  let hasil = 'https://api.lolhuman.xyz/api/photooxy1/carvedwood?apikey=YTRAMLANID&text='+ text +''
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/'+acak+'.jpg', data)
  res.sendFile(__path +'/tmp/'+acak+'.jpg')
  }
 })
router.get('/photooxy/pubglogo', async(req, res) => {
    var text1 = req.query.text1
    var text2 = req.query.text2
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!text1 || !text2) {
        res.status(500).send({
            status: 500,
            message: 'masukin parameter'
        })
    } else {
  var acak = random()
  let hasil = 'https://api.lolhuman.xyz/api/photooxy2/pubg?apikey=YTRAMLANID&text1='+ text1 +'&text2='+ text2 +''
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/'+acak+'.jpg', data)
  res.sendFile(__path +'/tmp/'+acak+'.jpg')
  }
 })
// END PHOTO OXY
router.get('/other/tahta', async(req, res) => {
    var q = req.query.q
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!q) {
        res.status(500).send({
            status: 500,
            message: 'masukin parameter'
        })
    } else {
  var acak = random()
  let hasil = 'https://api.zeks.xyz/api/hartatahta?apikey=YTRAMLANID&text='+ q +''
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/'+acak+'.jpg', data)
  res.sendFile(__path +'/tmp/'+acak+'.jpg')
  }
 })

router.get('/nulis', async(req, res) => {
    var text = req.query.text
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!text) {
        res.status(500).send({
            status: 500,
            message: 'masukin parameter'
        })
    } else {
  var acak = random()
  let hasil = 'https://api.zeks.xyz/api/nulis?apikey=YTRAMLANID&text='+ text +''
  data = await fetch(hasil).then(v => v.buffer())
  await fs.writeFileSync(__path +'/tmp/'+acak+'.jpg', data)
  res.sendFile(__path +'/tmp/'+acak+'.jpg')
  }
 })
router.get('/other/ttp', async(req, res) => {
/*    var text = req.query.text
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    if (!text) {
        res.status(500).send({
            status: 500,
            message: 'masukin parameter'
        })
    } else {
  var acak = random()
await fs.writeFileSync(__path +'/tmp/'+acak+'ttp.png', text2png(text, {
                    color: 'white',
                    font: '200px futura',
                    padding: 20,
                    lineSpacing: 60,
                    textAlign: 'center',
                    strokeWidth: 15
                }))
  res.sendFile(__path +'/tmp/'+acak+'ttp.png')
  }*/
 })
module.exports = router