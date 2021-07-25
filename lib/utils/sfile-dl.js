const fetch = require('node-fetch');
const cheerio = require('cheerio');

const sfiledl = (url) => new Promise((resolve, reject) => {
    fetch(`${url}`, {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.5",
            "Upgrade-Insecure-Requests": "1",
            "Pragma": "no-cache",
            "Cache-Control": "no-cache"
        },
        "referrer": "https://sfile.mobi/uploads.php",
        "method": "GET",
        "mode": "cors"
    }).then((res) => res.text())
        .then((text) => {
            const $ = cheerio.load(text);
            const title = $('div.w3-container:nth-child(2) > b:nth-child(1)').text().trim();
            const typeFile = $('div.list:nth-child(3)').text().trim();
            const uploadBy = $('div.list:nth-child(4) > a:nth-child(2)').text().trim();
            const uploadAt = $('div.list:nth-child(5)').text().trim();
            const downloadCount = $('div.list:nth-child(6)').text().trim();
            const Filesize = $('#download').text().trim();
            const url = $('#download').attr('href');
            resolve({
                status: true,
                code: 200,
                title: title.replace('      ', ''),
                typeFile: typeFile,
                uploadAt: uploadAt.replace('- Uploaded: ', ''),
                uploadBy: uploadBy,
                downloadCount: downloadCount.replace('- Downloads: ', ''),
                Filesize: Filesize.replace('Download File ', ''),
                url: url
            });
        }).catch({
            status: 500,
            message: "gagal dalam scraping!"
        });
});

module.exports = sfiledl