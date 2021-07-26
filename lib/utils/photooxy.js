const request = require("request");
const cheerio = require("cheerio");

const tema = {
  shadow: "https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html",
  smoke: "https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html",
  kopi: "https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html",
  kopi2: "https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html",
  glown: "https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html",
  wcube: "https://photooxy.com/logo-and-text-effects/3d-text-effect-under-white-cube-217.html",
  nigsky: "https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html",
  fur: "https://photooxy.com/logo-and-text-effects/fur-text-effect-generator-198.html",
  flam: "https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html",
  neon: "https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
  scary: "https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html",
  wood: "https://photooxy.com/logo-and-text-effects/carved-wood-effect-online-171.html",
  silk: "https://photooxy.com/logo-and-text-effects/simple-text-on-the-silk-167.html",
  flower: "https://photooxy.com/art-effects/flower-typography-text-effect-164.html",
  party: "https://photooxy.com/logo-and-text-effects/create-party-neon-text-effect-161.html",
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

async function poCoffe(text) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.kopi,
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

async function poCoffe2(text) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.kopi2,
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

async function poGlowneon(text) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.glown,
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

async function poWcube(text) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.wcube,
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

async function poNightsky(text) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.nigsky,
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

async function poFur(text) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.fur,
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

async function poFlaming(text) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.flam,
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

async function poNeon(text) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.neon,
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

async function poScary(text) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.scary,
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

async function poWood(text) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.wood,
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

async function poSilk(text) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.silk,
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

async function poFlower(text) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.flower,
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

async function poParty(text) {
  return new Promise((resolve, reject) => {
    const options = { method: 'POST',
      url: tema.party,
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

module.exports = {
  poShadow,
  poSmoke,
  poCoffe,
  poCoffe2,
  poGlowneon,
  poWcube,
  poNightsky,
  poFur,
  poFlaming,
  poNeon,
  poScary,
  poWood,
  poSilk,
  poFlower,
  poParty
};