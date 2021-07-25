const YouTube = require("youtube-sr").default;
const ytsearch = (query) => new Promise(async (resolve, reject) => {
    YouTube.search("pewdiepe", { limit: 5, safeSearch: true })
        .then((data) => {
            const dataArrytsearch = [];
            for (let i = 0; i < data.length; i++) {
                dataArrytsearch.push({
                    channel: data[i].channel.name,
                    title: data[i].title,
                    durration: data[i].durationFormatted,
                    uploadAt: data[i].uploadedAt,
                    views: data[i].views,
                    thumb: data[i].thumbnail.url,
                    verified: data[i].channel.verified ? 'Yes' : 'No',
                    url: `https://www.youtube.com/watch?v=${data[i].id}`,
                    desc: data[i].description

                })
            }
            resolve({
                status: 200,
                data: dataArrytsearch
            })
        }).catch({
            status: 500,
            message: "gagal dalam scraping!"
        })
})

module.exports = ytsearch