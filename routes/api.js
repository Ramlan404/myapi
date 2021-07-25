const ms = require('ms');
const express = require('express');
const router = express.Router();
const fs = require('fs-extra');

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

router.get('/kuni-nsfw', async(req, res) => {
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

router.get('/boobs-nsfw', async(req, res) => {
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

router.get('/yuri-nsfw', async(req, res) => {
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

router.get('/kitsune-nsfw', async(req, res) => {
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

router.get('/kemonomimi-nsfw', async(req, res) => {
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

router.get('/blowjob-nsfw', async(req, res) => {
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

router.get('/neko-nsfw', async(req, res) => {
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

router.get('/subnet-lookup', async(req, res) => {
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

router.get('/cloudflare-resolver', async(req, res) => {
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

router.get('/md5-encrypt', async(req, res) => {
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

router.get('/subdomain', async(req, res) => {
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

router.get('/random-wallanime', async(req, res) => {
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

router.get('/random-kemono', async(req, res) => {
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

router.get('/random-neko', async(req, res) => {
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

router.get('/openport-checker', async(req, res) => {
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

router.get('/tebak-gambar', async(req, res) => {
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

router.get('/tebak-anime', async(req, res) => {
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

router.get('/caklontong', async(req, res) => {
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

router.get('/family100', async(req, res) => {
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

router.get('/random-darkjoke', async(req, res) => {
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


router.get('/random-memeindo', async(req, res) => {
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

router.get('/random-cehor', async(req, res) => {
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

router.get('/random-fakta', async(req, res) => {
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

router.get('/random-katabijak', async(req, res) => {
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

router.get('/random-motivasi', async(req, res) => {
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

router.get('/random-bucin', async(req, res) => {
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

router.get('/random-pantun', async(req, res) => {
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

router.get('/random-quotes', async(req, res) => {
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

router.get('/random-loli', async(req, res) => {
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

router.get('/random-waifu', async(req, res) => {
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

router.get('/random-husbu', async(req, res) => {
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

router.get('/random-shota', async(req, res) => {
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


router.get('/asupan', async(req, res) => {
    var apikey = req.query.apikey
    var isPremium = await premium.checkPremiumUser(apikey);

    if (!isPremium) {
        __dirname = process.cwd();
        return res.status(403).sendFile(__dirname + '/views/403.html');
    }
    var username = ["ptl_repost", "girlsweet_id", "goodlookings.id", "penyegaranmata.idn", "xi.aoxiao59", "dailyjapanesevideos"]
    username = username.random()
    var result = await axios.get(`https://www.instagram.com/${username}/channel/?__a=1`, { headers: { cookie: "ig_nrcb=1; mid=YMTE3wAEAAGuO-VaU9KUBDQFHeuB; ig_did=75827AA1-F366-4BB4-87B7-800F44C90E0C; csrftoken=5RxmS54LXAr57p8enfG2cw9oZ9FyvoUt; ds_user_id=48544354370; sessionid=48544354370%3AlqSxQekK40eOFU%3A16; rur=\"ATN\\05448544354370\\0541658635689:01f7b64bea46a6d32a9b8914573063423b50a303e6c1f6bb5bdc37ea132488c64e2c4171\"" } })
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
        url: video.random()
    })
})


router.get('/whois', async(req, res) => {
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
        const expired = (await premium.getPremiumExpired(apikeynyaaa)).expired
        const cekvip = ms(expired - Date.now())
        res.send({
            code: 200,
            message: `Apikey Expire at: ${cekvip}`
        })
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

router.get('/base64', async(req, res) => {
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

router.get('/ipgeolocation', async(req, res) => {
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
        if (id == 'wallgraffiti') {
            image = await textpro.tpwl(text1, text2)
        }
        if (id == 'phlogo') {
            image = await textpro.tpph(text1, text2)
        }
        if (id == 'glitch') {
            image = await textpro.tpglitch(text1, text2)
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

module.exports = router