const amazonScraper = require('amazon-buddy');
const randompict = Math.floor(Math.random() * 50) + 1;

const amazonsearch = (query) => new Promise((resolve, reject) => {

    amazonScraper.products({ keyword: query, number: randompict }).then((res) => {
        resolve({
            status: 200,
            item: res.result[0].title,
            review: res.result[0].reviews.total_reviews,
            rating: res.result[0].reviews.rating,
            price: res.result[0].price.current_price,
            score: res.result[0].score,
            discounted: res.result[0].price.discounted ? 'Yes' : 'No',
            url: res.result[0].url,
            sponsored: res.result[0].sponsored ? 'Yes' : 'No',
            bestseller: res.result[0].bestSeller ? 'Yes' : 'No',
            amazonprime: res.result[0].amazonPrime ? 'Yes' : 'No'
        })
    }).catch({
        status: 500,
        message: "gagal dalam scraping!"
    })
})

module.exports = amazonsearch