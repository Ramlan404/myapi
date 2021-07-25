const request = require('request');
const cheerio = require('cheerio');

const githubstalk = (username) => new Promise((resolve, reject) => {
    request(`https://github.com/${username}`, function (err, res, html) {
        if (!err & res.statusCode == 200) {
            var $ = cheerio.load(html)
            var usernamegithub = $('#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-3.mb-4.mb-md-0 > div > div.clearfix.d-flex.d-md-block.flex-items-center.mb-4.mb-md-0 > div.vcard-names-container.float-left.col-12.py-3.js-sticky.js-user-profile-sticky-fields > h1 > span.p-nickname.vcard-username.d-block').text().trim();
            var fullnamegithub = $('#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-3.mb-4.mb-md-0 > div > div.clearfix.d-flex.d-md-block.flex-items-center.mb-4.mb-md-0 > div.vcard-names-container.float-left.col-12.py-3.js-sticky.js-user-profile-sticky-fields > h1 > span.p-name.vcard-fullname.d-block.overflow-hidden').text().trim();
            var biogithub = $('#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-3.mb-4.mb-md-0 > div > div.d-flex.flex-column > div.js-profile-editable-area.d-flex.flex-column.d-md-block > div.p-note.user-profile-bio.mb-3.js-user-profile-bio.f4 > div').text().trim();
            var followergithub = $('#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-3.mb-4.mb-md-0 > div > div.d-flex.flex-column > div.js-profile-editable-area.d-flex.flex-column.d-md-block > div.flex-order-1.flex-md-order-none.mt-2.mt-md-0 > div > a:nth-child(1) > span').text().trim();
            var followinggithub = $('#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-3.mb-4.mb-md-0 > div > div.d-flex.flex-column > div.js-profile-editable-area.d-flex.flex-column.d-md-block > div.flex-order-1.flex-md-order-none.mt-2.mt-md-0 > div > a:nth-child(2) > span').text().trim();
            var jumlahrepo = $('#js-pjax-container > div.mt-4.position-sticky.top-0.d-none.d-md-block.color-bg-primary.width-full.border-bottom.color-border-secondary > div > div > div.flex-shrink-0.col-12.col-md-9.mb-4.mb-md-0 > div > nav > a:nth-child(2) > span').text().trim();
            var imagegithub = $('#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-3.mb-4.mb-md-0 > div > div.clearfix.d-flex.d-md-block.flex-items-center.mb-4.mb-md-0 > div.position-relative.d-inline-block.col-2.col-md-12.mr-3.mr-md-0.flex-shrink-0 > a > img').attr('src');
            var stargithub = $('#js-pjax-container > div.container-xl.px-3.px-md-4.px-lg-5 > div > div.flex-shrink-0.col-12.col-md-3.mb-4.mb-md-0 > div > div.d-flex.flex-column > div.js-profile-editable-area.d-flex.flex-column.d-md-block > div.flex-order-1.flex-md-order-none.mt-2.mt-md-0 > div > a:nth-child(3) > span').text().trim();
            resolve({
                status: 200,
                username: usernamegithub,
                fullname: fullnamegithub,
                bio: biogithub,
                follower: followergithub,
                following: followinggithub,
                star: stargithub,
                countrepo: jumlahrepo,
                avatar: imagegithub
            })
        } else {
            resovle({
                status: 500,
                message: "gagal dalam scraping!"
            })
        }
    })
})

module.exports = githubstalk