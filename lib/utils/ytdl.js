const search = require("yt-search");
const { yt } = require("./y2mate");

exports.getDataV = async(link) => {
    return new Promise(async(resolve, reject) => {
        await yt(link, '360p', 'mp4', '360', 'en68')
        .then(resolve)
        .catch(() => {
            yt(link, '360p', 'mp4', '360', 'en61')
            .then(resolve)
            .catch(() => {
                yt(link, '360p', 'mp4', '360', 'en60')
                .then(resolve)
                .catch(() => {
                    yt(link, '360p', 'mp4', '360', 'id4')
                    .then(resolve)
                    .catch(reject)
                })
            })
        })
    })
}

exports.getDataA = async(link) => {
    return new Promise(async(resolve, reject) => {
        await yt(link, '128kbps', 'mp3', '128', 'en68')
        .then(resolve)
        .catch(() => {
            yt(link, '128kbps', 'mp3', '128', 'en61')
            .then(resolve)
            .catch(() => {
                yt(link, '128kbps', 'mp3', '128', 'en60')
                .then(resolve)
                .catch(() => {
                    yt(link, '128kbps', 'mp3', '128', 'id4')
                    .then(resolve)
                    .catch(reject)
                })
            })
        })
    })
}

exports.yta = async(url) => {
    return new Promise(async(resolve, reject) => {
        try {
            let meta = await search(url)
            let metaData = meta.all[0]
            let data = await exports.getDataA(url)
            let result = {
                code: 200,
                creator: '@iamramlan_',
                result: data
            }
            resolve(result)
        } catch(err) {
            reject
        }
        
    })
}

exports.ytv = async(url) => {
    return new Promise(async(resolve, reject) => {
        try {
            let meta = await search(url)
            let metaData = meta.all[0]
            let data = await exports.getDataV(url)
            let result = {
                code: 200,
                creator: '@iamramlan_',
                result: data
            }
            resolve(result)
        } catch(err) {
            reject
        }
        
    })
}