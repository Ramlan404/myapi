//const TikTokScraper = require('tiktok-scraper');

const tiktokstalk = (username) => new Promise((resolve, reject) => {

    /*TikTokScraper.getUserProfileInfo(username)
        .then((hasil) => {*/
            resolve({
                status: 200,
                hasil: "null"
                /*username: hasil.user.nickname,
                followerCount: hasil.stats.followerCount,
                followingCount: hasil.stats.followerCount,
                isprivate: hasil.user.privateAccount ? 'Yes' : 'No',
                createtime: hasil.user.createTime,
                id: hasil.user.id,
                avatarLarger: hasil.user.avatarLarger,
                avatarThumb: hasil.user.avatarThumb,
                avatarMedium: hasil.user.avatarMedium*/
            /*})
        }).catch({
            status: 500,
            message: "gagal dalam scraping!"*/
        })
})

module.exports = tiktokstalk