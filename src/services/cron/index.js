const cron = require('node-cron')
// config
const cronOptions = require('../../configs/cron.config')
// services
const { greet } = require('./query.service')
// constants
const { cronExpressions } = require('../../constants/cron.constants')

const initCron = () => {
	cron.schedule(cronExpressions.EVERY_MINUTE, greet, cronOptions)
}

module.exports = initCron
