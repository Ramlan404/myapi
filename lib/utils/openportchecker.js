const fetch = require('node-fetch');

const openPortChecker = (domain, port) => new Promise((resolve, reject) => {
    fetch("https://codebeautify.org/iptools/openPortChecker", {
        "headers": {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "no-cache",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "pragma": "no-cache",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "sec-gpc": "1",
            "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "https://codebeautify.org/open-port-checker",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `domain=${domain}&port=${port}`,
        "method": "POST",
        "mode": "cors"
    }).then((res) => res.json())
        .then((json) => {
            resolve({
                status: 200,
                data: json[0]
            })
        }).catch({
            status: 500,
            message: "gagal dalam scraping!"
        })
})

module.exports = openPortChecker