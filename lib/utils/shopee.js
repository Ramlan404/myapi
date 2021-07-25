const fetch = require('node-fetch');
const cheerio = require('cheerio');
const axios = require('axios');

const shopeeSearch = (query) => new Promise((resolve, reject) => {
    axios.get(`https://shopee.co.id/api/v4/search/search_items?by=relevancy&keyword=${query}&limit=50&newest=0&order=desc&page_type=search&scenario=PAGE_GLOBAL_SEARCH&version=2`).then((res) => {
        const generates = res.data.items[Math.floor(Math.random() * (res.data.items.length))]
        resolve({
            status: 200,
            name: generates.item_basic.name,
            image: 'https://cf.shopee.co.id/file/' + generates.item_basic.image,
            currency: generates.item_basic.currency,
            stock: generates.item_basic.stock,
            sold: generates.item_basic.sold,
            historical_sold: generates.item_basic.historical_sold,
            liked_count: generates.item_basic.liked_count,
            view_count: generates.item_basic.view_count,
            catid: generates.item_basic.catid,
            brand: generates.item_basic.brand,
            cmt_count: generates.item_basic.cmt_count,
            item_status: generates.item_basic.item_status,
            price: generates.item_basic.price,
            price_min: generates.item_basic.price_min,
            price_max: generates.item_basic.price_max,
            price_min_before_discount: generates.item_basic.price_min_before_discount,
            price_max_before_discount: generates.item_basic.price_max_before_discount,
            price_before_discount: generates.item_basic.price_before_discount,
            discount: generates.item_basic.discount,
            item_rating: generates.item_basic.item_rating.rating_star,
            is_adult: generates.item_basic.is_adult,
            shopee_verified: generates.item_basic.shopee_verified,
            is_official_shop: generates.item_basic.is_official_shop,
            shop_location: generates.item_basic.shop_location,
            can_use_cod: generates.item_basic.can_use_cod,
            is_on_flash_sale: generates.item_basic.is_on_flash_sale
        })
    }).catch({
        status: 500,
        message: "gagal dalam scraping!"
    })
})

module.exports = shopeeSearch