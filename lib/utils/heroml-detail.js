const axios = require('axios');
const cheerio = require('cheerio');

function herodetails(name) {
    return new Promise((resolve, reject) => {
        var splitStr = name.toLowerCase().split(' ');
        for (let i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        var que = splitStr.join(' ')
        axios.get('https://mobile-legends.fandom.com/wiki/' + que)
            .then(({ data }) => {
                var $ = cheerio.load(data)
                var mw = []
                var attrib = []
                var skill = []
                var name = $('#mw-content-text > div > div > div > div > div > div > table > tbody > tr > td > table > tbody > tr > td > font > b').text()
                $('.mw-headline').get().map((res) => {
                    var mwna = $(res).text()
                    mw.push(mwna)
                })
                $('#mw-content-text > div > div > div > div > div > div > table > tbody > tr > td').get().map((rest) => {
                    var haz = $(rest).text().replace(/\n/g, '')
                    attrib.push(haz)
                })
                $('#mw-content-text > div > div > div > div > div > div > table > tbody > tr > td > div.progressbar-small.progressbar > div').get().map((rest) => {
                    skill.push($(rest).attr('style').replace('width:', ''))
                })
                axios.get('https://mobile-legends.fandom.com/wiki/' + que + '/Story')
                    .then(({ data }) => {
                        var $ = cheerio.load(data)
                        var pre = []
                        $('#mw-content-text > div > p').get().map((rest) => {
                            pre.push($(rest).text())
                        })
                        var story = pre.slice(3).join('\n')
                        var items = []
                        var character = []
                        $('#mw-content-text > div > aside > section > div').get().map((rest) => {
                            character.push($(rest).text().replace(/\n\t\n\t\t/g, '').replace(/\n\t\n\t/g, '').replace(/\n/g, ''))
                        })
                        $('#mw-content-text > div > aside > div').get().map((rest) => {
                            items.push($(rest).text().replace(/\n\t\n\t\t/g, '').replace(/\n\t\n\t/g, '').replace(/\n/g, ''))
                        })
                        var img = $('#mw-content-text > div > aside > figure > a').attr('href')
                        var chara = character.slice(0, 2)
                        var result = {
                            status: 200,
                            hero_name: name + ` ( ${mw[0].replace('CV:', ' CV:')} )`,
                            entrance_quotes: attrib[2].replace('Entrance Quotes', '').replace('\n', ''),
                            hero_feature: attrib[attrib.length - 1].replace('Hero Feature', ''),
                            image: img,
                            items: items,
                            character: {
                                chara
                            },
                            attributes: {
                                movement_speed: attrib[12].replace('● Movement Speed', ''),
                                physical_attack: attrib[13].replace('● Physical Attack', ''),
                                magic_power: attrib[14].replace('● Magic Power', ''),
                                attack_speed: attrib[15].replace('● Attack Speed', ''),
                                physical_defense: attrib[16].replace('● Physical Defense', ''),
                                magic_defense: attrib[17].replace('● Magic Defense', ''),
                                basic_atk_crit_rate: attrib[18].replace('● Basic ATK Crit Rate', ''),
                                hp: attrib[19].replace('● HP', ''),
                                mana: attrib[20].replace('● Mana', ''),
                                ability_crit_rate: attrib[21].replace('● Ability Crit Rate', ''),
                                hp_regen: attrib[22].replace('● HP Regen', ''),
                                mana_regen: attrib[23].replace('● Mana Regen', '')
                            },
                            price: {
                                battle_point: mw[1].split('|')[0].replace(/ /g, ''),
                                diamond: mw[1].split('|')[1].replace(/ /g, ''),
                                hero_fragment: mw[1].split('|')[2] ? mw[1].split('|')[2].replace(/ /g, '') : 'none'
                            },
                            role: mw[2],
                            skill: {
                                durability: skill[0],
                                offense: skill[1],
                                skill_effects: skill[2],
                                difficulty: skill[3]
                            },
                            speciality: mw[3],
                            laning_recommendation: mw[4],
                            release_date: mw[5],
                            background_story: story.trim()
                        }
                        resolve(result)
                    }).catch({
                        status: 500,
                        message: "gagal dalam scraping!"
                    })
            }).catch({
                status: 500,
                message: "gagal dalam scraping!"
            })
    })
}

module.exports = herodetails