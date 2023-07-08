const versionRouter = require('express').Router()
// rate-limiters
const rateLimiter = require('express-rate-limit')
// router
const v1Router = require('./v1')

versionRouter.use('/v1', v1Router)

// define limiter
const limitHealth = rateLimiter({
	max: 3,
	windowMs: 5000,
	standardHeaders: true
})
versionRouter.get('/health', limitHealth, (req, res) => {
	res.status(200).send({
		uptime: process.uptime(),
		responseTime: process.hrtime(),
		timestamp: Date.now()
	})
})

module.exports = versionRouter
