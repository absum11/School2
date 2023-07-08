const logger = require('custom-logger')

class CustomLogger {
	constructor() {
		logger.new({
			info: { color: 'cyan', level: 0, event: 'INFO' },
			warn: { color: 'yellow', level: 2, event: 'WARNING' },
			error: { color: 'red', level: 3, event: 'ERROR' },
			success: { color: 'green', level: 1, event: 'SUCCESS' },
			debug: { color: 'grey', level: 0, event: 'DEBUG' }
		})

		logger.config({
			messageFormatting: false, // default is false. Template string should be used
			level: 0, // default is 0
			format: '%timestamp% [%event%] %message%', // default is '%timestamp% - %event%:%padding%  %message%'
			timestamp: 'h:MM:ss:L' // default is 'HH:MM:ss'
		})

		this.loggerObject = logger
	}

	debug(filename, msg, logId) {
		this.loggerObject.debug(
			`[ID:${logId}] ==> ${msg} from file: ${filename} \n`
		)
	}

	info(filename, msg, logId) {
		this.loggerObject.info(`[ID:${logId}] ==> ${msg} from file: ${filename} \n`)
	}

	success(filename, msg, logId) {
		this.loggerObject.success(
			`[ID:${logId}] ==> ${msg} from file: ${filename} \n`
		)
	}

	warn(filename, msg, logId) {
		this.loggerObject.warn(`[ID:${logId}] ==> ${msg} from file: ${filename} \n`)
	}

	error(filename, errorMessage, logId) {
		this.loggerObject.error(
			`[ID:${logId}] ==> ${errorMessage} from file: ${filename} \n`
		)
	}
}

module.exports = new CustomLogger()
