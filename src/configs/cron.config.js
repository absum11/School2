// constants
const { timeZones } = require('../constants/cron.constants')

const cronOptions = {
	scheduled: true,
	timezone: timeZones.KOLKATA
}

module.exports = cronOptions
