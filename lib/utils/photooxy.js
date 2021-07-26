const request = require("request");
const cheerio = require("cheerio");

const tema = {
  shadow: "https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html",
  romantic: "https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html",
  smoke: "https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html",
  burnPapper: "https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html",
  naruto: "https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html",
  loveMsg: "https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html",
  msgGrass: "https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html",
  doubleHeart: "https://photooxy.com/logo-and-text-effects/love-text-effect-372.html",
  coffeCup: "https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html",
  loveText: "https://photooxy.com/logo-and-text-effects/love-text-effect-372.html",
  butterFly: "https://photooxy.com/logo-and-text-effects/butterfly-text-with-reflection-effect-183.html"
}

async function poShadow(text) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.shadow,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function poRomantic(text) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.romantic,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function poSmoke(text) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.smoke,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function poBurnPapper(text) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.burnPapper,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function poNaruto(text) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.naruto,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_2: text, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function poLoveMsg(text) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.loveMsg,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function poMsgGrass(text) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.msgGrass,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function poDoubleHeart(text) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.doubleHeart,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}

async function poCoffeCup(text) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.coffeCup,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}
async function poLoveText(text) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.loveText,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      formData: { text_1: text, login: 'OK' } };
    
    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const $ = cheerio.load(body)
      const result = {
           url: $('div.btn-group > a').attr('href')
      }
      resolve(result);
    });
  })
}
async function poButterfly(text) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST', 
      url: tema.butterFly,
      headers: { 'content-type': 'application/x-www-from-urlencoded' },
      formData: { text_1: text, login: 'OK' } };
      
    request(options, async function (error, response, body) {
    if (error) throw new Error(error);
    const $ = cheerio.load(body)
    const result = {
         url: $('div.btn-group > a').attr('href')
    }
    resolve(result);
    });
  })
}

module.exports = {
  poShadow,
  poRomantic,
  poSmoke,
  poBurnPapper,
  poNaruto,
  poLoveMsg,
  poMsgGrass,
  poDoubleHeart,
  poCoffeCup,
  poLoveText,
  poButterfly
};