require('dotenv').config()
const app = require('./app')

// utils
const logger = require('./utils/logger.utils')

app.listen(process.env.PORT, (err) => {
	if (err) {
		logger.error(
			__filename,
			`Failed to listen at port : ${process.env.PORT}`,
			'server startup'
		)
		return
	}
	logger.info(
		__filename,
		`server started listenig at port: ${process.env.PORT}`,
		'server startup'
	)
})

// backup error handling for missed cases

process.on('uncaughtException', (err) => {
	logger.error(__filename, err, 'uncaught exception')
})

process.on('unhandledRejection', (err) => {
	logger.error(__filename, err, 'unhandled rejection')
})
