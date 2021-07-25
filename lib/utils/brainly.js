const fetch = require('node-fetch');
const axios = require('axios');
const cheerio = require('cheerio');

async function brainlySearch(query) {
    return new Promise((resolve, reject) => {
        fetch("https://brainly.co.id/graphql/id", {
            "headers": {
                "accept": "application/json",
                "accept-language": "en-US,en;q=0.9",
                "batch": "true",
                "cache-control": "no-cache",
                "content-type": "application/json",
                "pragma": "no-cache",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "sec-gpc": "1"
            },
            "referrer": `https://brainly.co.id/app/ask?entry=hero&q=${query}`,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": `[{\"operationName\":\"SearchQuery\",\"variables\":{\"query\":\"${query}\",\"after\":null,\"first\":10},\"query\":\"query SearchQuery($query: String!, $first: Int!, $after: ID) {\\n  questionSearch(query: $query, first: $first, after: $after) {\\n    count\\n    edges {\\n      node {\\n        id\\n        databaseId\\n        author {\\n          id\\n          databaseId\\n          isDeleted\\n          nick\\n          avatar {\\n            thumbnailUrl\\n            __typename\\n          }\\n          rank {\\n            name\\n            __typename\\n          }\\n          __typename\\n        }\\n        content\\n        answers {\\n          nodes {\\n            thanksCount\\n            ratesCount\\n            rating\\n            __typename\\n          }\\n          hasVerified\\n          __typename\\n        }\\n        __typename\\n      }\\n      highlight {\\n        contentFragments\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\"}]`,
            "method": "POST",
            "mode": "cors"
        }).then((res) => res.json())
            .then((json) => {
                const randombrenli = json[0].data.questionSearch.edges[Math.floor(Math.random() * (json[0].data.questionSearch.edges.length))]
                axios.get('https://brainly.co.id/tugas/' + randombrenli.node.databaseId).then((data) => {
                    var $ = cheerio.load(data.data)
                    const jawabanbrenli = $('div.brn-qpage-next-answer-box__content > div > div > div > p').text();
                    const soalbrenli = $('div.brn-qpage-next-question-box__content > div > div > h1 > span').text();
                    if (!jawabanbrenli) {
                        resolve({
                            status: 500,
                            message: 'jawaban tidak ditemukan'
                        })
                    } else {
                        resolve({
                            status: 200,
                            soal: soalbrenli,
                            jawaban: jawabanbrenli.replace('Jawaban:', '')
                        })
                    }
                })
            })
    })
}

const brainly = (teks) => new Promise((resolve, reject) => {
    brainlySearch(teks).then(data => {
        resolve(data)
    }).catch(reject)
})

module.exports = brainly