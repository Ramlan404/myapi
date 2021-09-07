const { default: Axios } = require('axios');
const sesid = '48990729851%3AiXPDrZMUSmbukW%3A16'
const qs = require('querystring');
const cheerio = require('cheerio');

function getUser(username) {
    return new Promise((resolve, reject) => {
        try {
            Axios.get('https://www.instagram.com/' + username + '/?__a=1', {
                headers: {
                    Cookie: `sessionid=${sesid}`
                }
            }).then(({ data }) => {
                const user = data.graphql.user
                // console.log(data)
                // console.log(user.biography)
                resolve({
                    code: 200,
                    creator: '@iamramlan_',
                    result: {
                        // link: URL.replace('/?__a=1', ''),
                        id: user.id,
                        biography: user.biography,
                        subscribersCount: user.edge_followed_by.count,
                        subscribtions: user.edge_follow.count,
                        fullName: user.full_name,
                        highlightCount: user.highlight_reel_count,
                        isBusinessAccount: user.is_business_account,
                        isRecentUser: user.is_joined_recently,
                        accountCategory: user.business_category_name,
                        linkedFacebookPage: user.connected_fb_page,
                        isPrivate: user.is_private,
                        isVerified: user.is_verified,
                        profilePic: user.profile_pic_url,
                        profilePicHD: user.profile_pic_url_hd,
                        username: user.username,
                        postsCount: user.edge_owner_to_timeline_media.count,
                        posts: user.edge_owner_to_timeline_media.edges.map(edge => {
                            let hasCaption = edge.node.edge_media_to_caption.edges[0];
                            return {
                                id: edge.node.id,
                                shortCode: edge.node.shortcode,
                                url: `https://www.instagram.com/p/${edge.node.shortcode}/`,
                                dimensions: edge.node.dimensions,
                                imageUrl: edge.node.display_url,
                                isVideo: edge.node.is_video,
                                caption: hasCaption ? hasCaption.node.text : '',
                                commentsCount: edge.node.edge_media_to_comment.count,
                                commentsDisabled: edge.node.comments_disabled,
                                timestamp: edge.node.taken_at_timestamp,
                                likesCount: edge.node.edge_liked_by.count,
                                location: edge.node.location,
                                children: edge.node.edge_sidecar_to_children ? edge.node.edge_sidecar_to_children.edges.map(edge => {
                                    return {
                                        id: edge.node.id,
                                        shortCode: edge.node.shortcode,
                                        dimensions: edge.node.dimensions,
                                        imageUrl: edge.node.display_url,
                                        isVideo: edge.node.is_video,
                                    }
                                }) : []
                            }
                        }) || []
                    }
                });
            })
                .catch(reject)
        } catch (e) {
            reject(e)
        }
    })
}




function getPost(code) {
    return new Promise(function (resolve, reject) {
        if (!code) return reject(new Error('Argument "code" must be specified'));

        Axios.get('https://www.instagram.com/p/' + code + '/?__a=1', {
            headers: {
                Cookie: `sessionid=${sesid}`
            }
        }).then(({ data }) => {
            const post = data.graphql.shortcode_media
            const tipe = post.__typename
            anu = [];
            if (tipe === 'GraphImage') {
                anu.push({
                    type: 'image',
                    url: data.graphql.shortcode_media.display_url
                });
            } else if (tipe === 'GraphVideo') {
                anu.push({
                    type: 'video',
                    thumbnail: data.graphql.shortcode_media.display_url,
                    url: data.graphql.shortcode_media.video_url
                });
            } else if (tipe === 'GraphSidecar') {
                type = 'campuran'
                data.graphql.shortcode_media.edge_sidecar_to_children.edges.map((item) => {
                    if (item.node.__typename == 'GraphImage') {
                        anu.push({
                            type: 'image',
                            url: item.node.display_url
                        });
                    }
                    if (item.node.__typename == 'GraphVideo') {
                        anu.push({
                            type: 'video',
                            thumbnail: item.node.display_url,
                            url: item.node.video_url
                        });
                    }
                });
            };
            resolve({
                code: 200,
                creator: '@iamramlan_',
                result: {
                    media_id: post.id,
                    shortcode: post.shortcode,
                    text: post.accessibility_caption,
                    capt: post.edge_media_to_caption.edges[0] ? post.edge_media_to_caption.edges[0].node.text : '',
                    post: anu,
                    owner_user: post.owner.username,
                    date: post.taken_at_timestamp,
                }
            })
                .catch(reject)
        });
    });
}

function searchUser(query) {
    return new Promise((resolve, reject) => {
        Axios.get('https://www.instagram.com/web/search/topsearch/?query=' + query, {
            headers: {
                Cookie: `sessionid=${sesid}`
            }
        }).then(({ data }) => {
            const all = data.users
            const result = []
            for (let i = 0; i < all.length; i++) {
                result.push({
                    number: all[i].position + 1,
                    pk_id: all[i].user.pk,
                    username: all[i].user.username,
                    name: all[i].user.full_name,
                    latest_reel: all[i].user.latest_reel_media,
                    is_private: all[i].user.is_private,
                    is_verified: all[i].user.is_verified,
                    pic: all[i].user.profile_pic_url
                })
            }
            resolve({
                code: 200,
                creator: '@iamramlan_',
                result: result
            })
        }).catch(reject)
    })
}

function igstory(user) {
    return new Promise(async (resolve, reject) => {
        Axios.request({
            url: 'https://www.instagramsave.com/instagram-story-downloader.php',
            method: 'GET',
            headers: {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg"
            }
        })
            .then(({ data }) => {
                const $ = cheerio.load(data)
                const token = $('#token').attr('value')
                let config = {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        "sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
                        "cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg",
                        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                    },
                    data: {
                        'url': 'https://www.instagram.com/' + user,
                        'action': 'story',
                        'token': token
                    }
                }
                Axios.post('https://www.instagramsave.com/system/action.php', qs.stringify(config.data), { headers: config.headers })
                    .then(({ data }) => {
                        resolve(data.medias)
                    })
            })
            .catch(reject)
    })
}

module.exports = getUser
module.exports = getPost
module.exports = searchUser
module.exports = igstory