const cheerio = require('cheerio');
const axios = require('axios');

const ytshortdl = (url) => new Promise((resolve, reject) => {
    axios.get(`https://ripdownloader.com/?url=${url}`).then((res) => {
        const $ = cheerio.load(res.data)
        const title = $('#videos > div.coll-right > div.table-responsive.m-b-30 > table > tbody > tr:nth-child(2) > td:nth-child(4) > a').attr('download');
        const filesize = $('#videos > div.coll-right > div.table-responsive.m-b-30 > table > tbody > tr:nth-child(2) > td:nth-child(4) > a').attr('data-size');
        const UrlMp4 = $('#videos > div.coll-right > div.table-responsive.m-b-30 > table > tbody > tr:nth-child(2) > td:nth-child(4) > a').attr('href');
        var TinyURL = require('tinyurl');
        TinyURL.shorten(UrlMp4, function (res, err) {
            if (!err) {
                resolve({
                    status: 200,
                    title: title,
                    filesize: filesize,
                    UrlDownload: res
                })
            } else {
                resolve({
                    status: 500,
                    message: "gagal dalam scraping!"
                })
            }
        })
    })
})

module.exports = ytshortdl