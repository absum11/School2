// utils
const logger = require('../../utils/logger.utils')

const greet = () => {
	logger.info(__filename, 'Hello from Cron', 'xyz')
}

module.exports = { greet }
