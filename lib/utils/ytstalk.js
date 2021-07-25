const scrapeYt = require("scrape-yt");
const ytch = require('yt-channel-info');

function convertBalanceToString(angka) {
    var balancenyeini = '';
    var angkarev = angka.toString().split('').reverse().join('');
    for (var i = 0; i < angkarev.length; i++) if (i % 3 == 0) balancenyeini += angkarev.substr(i, 3) + '.';
    return '' + balancenyeini.split('', balancenyeini.length - 1).reverse().join('');
}

async function ytSearch(username) {
    var ytss = await scrapeYt.search(username)
    return ytss;
}

const ytstalk = (query) => new Promise((resolve, reject) => {
    ytSearch(query)
        .then((res) => {
            ytch.getChannelInfo(res[0].id, 0).then((ress) => {
                resolve({
                    status: 200,
                    channel: ress.author,
                    subscriberCount: convertBalanceToString(ress.subscriberCount),
                    isVerified: res.isVerified ? 'Yes' : 'No',
                    isFamilyFriendly: res.isFamilyFriendly ? 'Yes' : 'No',
                    link: ress.authorUrl,
                    thumb: ress.authorThumbnails[2].url,
                    description: ress.description
                })
            }).catch({
                status: 500,
                message: "gagal dalam scraping!"
            })
        })
})

module.exports = ytstalk