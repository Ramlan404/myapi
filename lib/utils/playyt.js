const yts = require('yt-search');
const ytdl = require('ytdl-core');

const playyt = (query) => new Promise(async (resolve, reject) => {
    const nyari = await yts(query)
    const pe = nyari.all
    const randm = pe[Math.floor(Math.random() * pe.length)];
    const playpid = await ytdl.getInfo(randm.videoId)
    const audio = ytdl.filterFormats(playpid.formats, 'audioonly')
    const video = ytdl.filterFormats(playpid.formats, 'audioandvideo')
    const thumbnails = playpid.videoDetails.thumbnails
    const thumb = thumbnails[thumbnails.length - 1].url
    resolve({
        status: 200,
        title: playpid.videoDetails.title,
        upload: playpid.videoDetails.uploadDate,
        views: playpid.videoDetails.viewCount,
        image: thumb,
        time: playpid.videoDetails.lengthSeconds,
        mp3: audio[0].url,
        mp4: video[0].url
    })
})

module.exports = playyt