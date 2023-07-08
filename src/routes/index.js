const versionRouter = require('express').Router()
// router
const v1Router = require('./v1')

versionRouter.use('/v1', v1Router)

versionRouter.get('/health', (req, res) => {
	res.status(200).send({
		uptime: process.uptime(),
		responseTime: process.hrtime(),
		timestamp: Date.now()
	})
})

module.exports = versionRouter
