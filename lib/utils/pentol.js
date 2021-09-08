const fetch = require('node-fetch');
const pentol = () => new Promise((resolve, reject) => {
    const Arr = ["pentol", "pentol sticker whatsapp", "pentol sticker cute"];
    const random = Arr[Math.floor(Math.random() * (Arr.length))]
    fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${random}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${random}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`, {
        "headers": {
            "accept": "application/json, text/javascript, */*, q=0.01",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "sec-gpc": "1",
            "x-app-version": "9a236a4",
            "x-pinterest-appstate": "active",
            "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "https://www.pinterest.com/",
        "referrerPolicy": "origin",
        "body": null,
        "method": "GET",
        "mode": "cors"
    }).then((res) => res.json())
        .then((json) => {
            const generatepin = json.resource_response.data.results[Math.floor(Math.random() * (json.resource_response.data.results.length))]
            resolve({
                status: 200,
                creator: '@iamramlan_'
                link: generatepin.images.orig.url
            })
        }).catch({
            status: 500,
            message: "gagal dalam scraping!"
        })
})

module.exports = pentol