const {
    default: Axios
} = require("axios");

function tiktokDown(url) {
    return new Promise((resolve, reject) => {
        Axios.get(`https://api.snaptik.site/video-key?video_url=${url}`)
            .then(({
                data
            }) => {
                Axios.get(`https://api.snaptik.site/video-details-by-key?key=${data.data.key}`)
                    .then(({
                        data
                    }) => {
                        resolve({
                            status: 200,
                            creator: "@iamramlan_",
                            result: {
                                username: data.data.author.unique_id,
                                nickname: data.data.author.nickname,
                                avatar: data.data.author.avatar,
                                description: data.data.description,
                                watermark: `https://api.snaptik.site/download?key=${data.data.video.with_watermark}&type=video`,
                                nowatermark: data.data.video.no_watermark_raw,
                                audio: `https://api.snaptik.site/download?key=${data.data.music}&type=music`
                            }
                        })
                    })
            })
            .catch(reject)
    })
}
module.exports = tiktokDown