const fetch = require('node-fetch');

async function mangaSearch(query) {
    return new Promise((resolve, reject) => {
        fetch(`https://myanimelist.net/search/prefix.json?type=manga&keyword=${query}&v=1`).then((res) => res.json())
            .then((json) => {
                let dataArr = [];
                for (let x = 0; x < json.categories[0].items.length; x++) {
                    dataArr.push({
                        id: json.categories[0].items[x].id,
                        type: json.categories[0].items[x].type,
                        name: json.categories[0].items[x].name,
                        image_url: json.categories[0].items[x].image_url,
                        score: json.categories[0].items[x].payload.score,
                        status: json.categories[0].items[x].payload.status,
                        media_type: json.categories[0].items[x].payload.media_type,
                        start_year: json.categories[0].items[x].payload.start_year,
                        published: json.categories[0].items[x].payload.published,

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
}

module.exports = mangaSearch