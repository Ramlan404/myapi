const fs = require('fs-extra')
const toMs = require('ms')

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '47.250.52.121',
        user: 'ramlangans',
        password: 'KokWhyGituh',
        database: 'ramlangans'
    }
});

const getVisitor = async() => {
    return await knex('counter').where({ name: 'visitor' }).first()
}

const addVisitor = async() => {
    return await knex('counter').where({ name: 'visitor' }).increment('counter', 1).returning('visitor')
}

/**
 * Add premium user.
 * @param {String} userId 
 * @param {String} expired 
 * @param {Object} _dir 
 */
const addPremiumUser = async(apikey, expired) => {
    try {
        await knex('users').insert({ apikey, expired: Date.now() + toMs(expired) })
    } catch {}
}

/**
 * Get premium user position.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Number}
 */
const deleteApikey = async(apikey) => {
    await knex('users').where({ apikey }).del()
}

/**
 * Get premium user expire.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Number}
 */
const getPremiumExpired = async(apikey) => {
    return await knex("users").where({ apikey }).first()
}

/**
 * Check user is premium.
 * @param {String} userId 
 * @param {Object} _dir 
 * @returns {Boolean}
 */
const checkPremiumUser = async(apikey) => {
    api = await knex("users").where({ apikey }).first()
    if (typeof api == "undefined") return false
    return true
}

/**
 * Constantly checking premium.
 * @param {Object} _dir 
 */
const expiredCheck = () => {
    setInterval(async() => {
        const user = await getAllPremiumUser()
        for (var x of user) {
            if (Date.now() >= x.expired) {
                deleteApikey(x.apikey)
            }
        }
    }, 10000)
}

/**
 * Get all premium user ID.
 * @param {Object} _dir 
 * @returns {String[]}
 */
const getAllPremiumUser = async() => {
    return await knex('users')
}

module.exports = {
    addPremiumUser,
    getPremiumExpired,
    deleteApikey,
    expiredCheck,
    checkPremiumUser,
    getAllPremiumUser,
    getVisitor,
    addVisitor
}