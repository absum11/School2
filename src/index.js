require('dotenv').config()
const app = require('./app')

// utils
const logger = require('./utils/logger.utils')

app.listen(process.env.PORT, (err) => {
	if (err) {
		logger.error(
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
