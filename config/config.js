require('dotenv').config()

module.exports = {

    port: process.env.PORT,

    cashbackPercent: process.env.CASHBACK_PERCENT,

    aiMode: process.env.AI_MODE

}
