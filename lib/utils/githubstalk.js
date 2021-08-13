const axios = require("axios");

const githubstalk = (username) => new Promise((resolve, reject) => {
                axios.get(`https://api.github.com/users/${username}`)
                .then((res) => res.data)
                .then((res) =>{
                    let { login, type, name, followers, following, created_at, updated_at, public_gists, public_repos, twitter_username, bio, hireable, email, location, blog, company, avatar_url, html_url } = res
            resolve({
            status: 200,
            username: login,
            name: name,
            followers: followers,
            following: following,
            created_at: created_at,
            updated_at: updated_at,
            public_gists: public_gists,
            public_repos: public_repos,
            twitter_username: twitter_username,
            bio: bio,
            hireable: hireable,
            email: email,
            location: location,
            blog: blog,
            company: company,
            avatar: avatar_url,
            html_url: html_url
            })
    })
})

module.exports = githubstalk