const axios = require('axios');
const cheerio = require('cheerio');

const igstalk = (username) => new Promise((resolve, reject) => {
    axios.get(`https://www.mystalk.net/profile/${username}/`).then((res) => {
        if (res.status == 200) {
            const $ = cheerio.load(res.data)
            const username = $('span.user-name').text();
            const full_name = $('span.name').text();
            const urlimage = $('div.col-md-7 > div > figure > img').attr('src');
            const bio = $('#vueProfileController > div.user-profile-area > div > div > div.col-md-7 > div > div > p').text();
            const follower = $('#vueProfileController > div.user-profile-area > div > div > div.col-md-5 > div > span:nth-child(3) > b').text();
            const following = $('#vueProfileController > div.user-profile-area > div > div > div.col-md-5 > div > span:nth-child(2) > b').text();
            const jumlahpost = $('#vueProfileController > div.user-profile-area > div > div > div.col-md-5 > div > span:nth-child(1) > b').text();
            resolve({
                username: username,
                fullname: full_name,
                Urlprofile: urlimage,
                biography: bio,
                follower_count: follower,
                following_count: following,
                post_count: jumlahpost
            })
        } else {
            resolve({
                status: 500,
                message: "gagal dalam scraping!"
            })
        }
    })
})

module.exports = igstalk