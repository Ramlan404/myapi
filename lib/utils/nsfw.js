const client = require('nekos.life');
const neko = new client();

const nekoNSFW = () => new Promise((resolve, reject) => {
    neko.nsfw.neko().then((res) => {
        resolve({
            status: 200,
            url: res.url
        })
    }).catch({
        status: 500,
        message: "gagal dalam scraping!"
    })
})

const blowJobNSFW = () => new Promise((resolve, reject) => {
    neko.nsfw.blowJob().then((res) => {
        resolve({
            status: 200,
            url: res.url
        })
    }).catch({
        status: 500,
        message: "gagal dalam scraping!"
    })
})

const kuniNSFW = () => new Promise((resolve, reject) => {
    neko.nsfw.kuni().then((res) => {
        resolve({
            status: 200,
            url: res.url
        })
    }).catch({
        status: 500,
        message: "gagal dalam scraping!"
    })
})

const boobsNSFW = () => new Promise((resolve, reject) => {
    neko.nsfw.boobs().then((res) => {
        resolve({
            status: 200,
            url: res.url
        })
    }).catch({
        status: 500,
        message: "gagal dalam scraping!"
    })
})

const yuriNSFW = () => new Promise((resolve, reject) => {
    neko.nsfw.yuri().then((res) => {
        resolve({
            status: 200,
            url: res.url
        })
    }).catch({
        status: 500,
        message: "gagal dalam scraping!"
    })
})

const kitsuneNSFW = () => new Promise((resolve, reject) => {
    neko.nsfw.kitsune().then((res) => {
        resolve({
            status: 200,
            url: res.url
        })
    }).catch({
        status: 500,
        message: "gagal dalam scraping!"
    })
})

const kemonomimiNSFW = () => new Promise((resolve, reject) => {
    neko.nsfw.kemonomimi().then((res) => {
        resolve({
            status: 200,
            url: res.url
        })
    }).catch({
        status: 500,
        message: "gagal dalam scraping!"
    })
})

module.exports = nekoNSFW, blowJobNSFW, kemonomimiNSFW, kitsuneNSFW, yuriNSFW, boobsNSFW, kuniNSFW