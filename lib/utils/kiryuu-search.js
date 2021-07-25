const fetch = require('node-fetch');
const kiryuuSearch = (query) => new Promise((resolve, reject) => {
    fetch("https://kiryuu.co/wp-admin/admin-ajax.php", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "sec-gpc": "1",
            "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "https://kiryuu.co/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `action=ts_ac_do_search&ts_ac_query=${query}`,
        "method": "POST",
        "mode": "cors"
    }).then((res) => res.json())
        .then((json) => {
            let dataArr = [];
            for (let x = 0; x < json.series[0].all.length; x++) {
                dataArr.push({
                    ID: json.series[0].all[x].ID,
                    title: json.series[0].all[x].post_title,
                    status: json.series[0].all[x].post_status,
                    type: json.series[0].all[x].post_type,
                    genre: json.series[0].all[x].post_genres,
                    latest: json.series[0].all[x].post_latest,
                    url: json.series[0].all[x].post_link
                })
            }
            resolve({
                status: 200,
                data: dataArr
            })
        }).catch({
            status: 500,
            message: "gagal dalam scraping!"
        })
})

module.exports = kiryuuSearch